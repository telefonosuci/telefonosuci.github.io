---
title: "PHP2Shell: Shopify è più sicuro di WooCommerce e degli e-commerce in PHP?"
date: 2026-10-22 09:00:00 +0200
categories: Ecommerce
related: [shopify, wordpress, migrations]
reading_time: 9
audience: dev
---

Ogni volta che esce una vulnerabilità critica in PHP torna la stessa domanda: **un e-commerce su Shopify è più sicuro di uno su WooCommerce, Magento o PrestaShop?** La risposta breve è sì, per molti negozi. La risposta lunga è che Shopify non è più sicuro perché scritto meglio, ma perché **sposta su qualcun altro la responsabilità di tenerlo aggiornato**.

Per ragionarci su un caso concreto prendiamo **PHP2Shell**, la coppia di vulnerabilità nel core di PHP pubblicata in questi giorni.

### Cos'è PHP2Shell

PHP2Shell identifica una coppia di vulnerabilità critiche nel motore Zend di PHP (**CVE-2026-109618** e **CVE-2026-109619**, CVSS 9.2) che consentono l'**esecuzione di codice arbitrario da remoto (RCE)** prima che il codice applicativo (come WordPress, WooCommerce o Magento) venga effettivamente eseguito.

La debolezza risiede nel modo in cui l'interprete PHP gestisce le interruzioni anomale (in particolare gli errori fatali e l'esaurimento della memoria) durante il parsing della richiesta HTTP.

#### La causa: `zend_bailout()` e `longjmp()`

Quando PHP gestisce una richiesta HTTP, l'allocatore interno (**Zend Memory Manager**) alloca strutture dati temporanee valide per il singolo ciclo di vita della richiesta.

Se durante l'elaborazione si verifica un errore fatale, come il superamento di `memory_limit` (Out-of-Memory), il core invoca `zend_bailout()`. Questa funzione esegue una `longjmp()` in C, saltando bruscamente fuori dallo stack di chiamate per avviare il cleanup d'emergenza:

- le normali procedure di pulizia a cascata non vengono eseguite;
- strutture dati parzialmente inizializzate rimangono orfane o con puntatori non azzerati;
- nelle architetture con processi persistenti riutilizzati per più richieste (**PHP-FPM** o **Apache mod_php**), variabili globali o slot di memoria possono continuare a puntare a regioni dell'heap della richiesta precedente, appena liberate (**Use-After-Free**) o non ancora allocate.

#### Come funziona l'attacco

L'exploit concatena i due difetti in una sequenza a più richieste:

1. **Innesco prima del codice utente.** L'attaccante invia una richiesta `multipart/form-data` costruita ad arte. PHP avvia il parsing del payload e di funzionalità native (come `session.upload_progress` o il popolamento di `$_POST`) prima che lo script del sito riceva il controllo.
2. **OOM controllato (memory grooming).** Calibrando dimensioni, annidamenti e lunghezze dei campi, l'attaccante forza l'allocatore a superare `memory_limit` esattamente in un punto critico: una struttura interna risulta già esistente prima che il suo buffer sia stato allocato, e la `longjmp()` lascia puntatori pendenti nello stato del worker.
3. **Info disclosure (CVE-2026-109618).** Riutilizzando lo stesso worker, l'attaccante estrae informazioni sulla memoria: il gestore di upload progress, con puntatori invalidi, può restituire byte dell'heap direttamente nelle intestazioni HTTP (ad esempio nel cookie `PHPSESSID`), rivelando layout e indirizzi utili ad aggirare l'ASLR.
4. **Heap spraying e RCE (CVE-2026-109619).** Una richiesta successiva allo stesso worker ricopre la memoria liberata con strutture Zend falsificate. Quando il worker dereferenzia il vecchio puntatore, richiama una funzione controllata dall'attaccante e il flusso finisce su `system()` o su shellcode, con i permessi dell'utente del web server (es. `www-data`).

#### Quanto è grave davvero

È **pre-autenticata** e **indipendente dall'applicazione**: colpisce il core PHP dalla 5.4 fino alle ultime build prima del fix. Non serve un plugin vulnerabile, non serve un login. Basta che il server accetti una richiesta POST.

Non è però banale come Log4Shell:

- **affinità del worker**: le richieste devono colpire lo stesso processo (o thread in mod_php) per sfruttare lo stato alterato;
- **dipendenza dal target**: gli offset di memoria cambiano con la versione di PHP, le flag di compilazione e la libc, quindi serve un profiling preciso del bersaglio.

Tradotto: non tutti i server cadranno nelle prime ore, ma un attaccante motivato su un target preciso ha tutto quello che gli serve.

#### Fix e mitigazioni

- **Patch**: aggiornare subito a **PHP 8.2.35, 8.3.36, 8.4.27 o 8.5.12**.
- **Se non si può aggiornare subito**: filtrare a livello di WAF o reverse proxy le richieste `multipart/form-data` non attese, disabilitare `session.upload_progress.enabled` e `opcache.enable`.

### Il punto che conta: chi deve applicare la patch?

Rileggete l'elenco delle versioni corrette. **Non c'è PHP 8.1, né 8.0, né 7.x.** Sono versioni fuori supporto: nessuna patch ufficiale arriverà. E un numero enorme di negozi WooCommerce, Magento e PrestaShop gira ancora su quelle versioni, spesso su hosting condivisi dove il commerciante non sa nemmeno quale PHP sta usando.

Questo è il vero problema degli e-commerce self-hosted. Su WooCommerce, quando esce PHP2Shell, qualcuno deve:

1. accorgersene;
2. capire se il proprio server è esposto;
3. aggiornare PHP (o chiedere all'hosting di farlo);
4. verificare che WordPress, WooCommerce e tutti i plugin funzionino ancora sulla nuova versione;
5. se l'aggiornamento rompe qualcosa, scegliere tra un sito rotto e un sito vulnerabile.

Il punto 4 è quello che tiene i negozi fermi su PHP vecchi per anni: un plugin di spedizioni abbandonato, un tema custom scritto nel 2018, un gateway di pagamento che non supporta la 8.x. E PHP2Shell non è un caso isolato: nel 2024 **CVE-2024-4577** (PHP-CGI su Windows, CVSS 9.8) e **CosmicSting** (CVE-2024-34102, Magento, CVSS 9.8) sono stati sfruttati in massa per settimane dopo la patch, proprio perché migliaia di negozi non l'avevano applicata.

### Perché Shopify non ha questo problema

Un negozio Shopify non ha un server PHP da aggiornare. Nemmeno un server, se è per questo.

- **Nessun runtime esposto.** La piattaforma è scritta in Ruby on Rails, non in PHP, quindi PHP2Shell non la riguarda. Ma il punto non è il linguaggio: anche Ruby ha avuto le sue CVE. Il punto è che il commerciante **non gestisce nessun runtime**.
- **Patch centralizzate.** Quando esce una vulnerabilità nell'infrastruttura, Shopify la corregge una volta per tutti i negozi. Nessuno deve accorgersene, nessuno deve aprire un ticket all'hosting.
- **Niente codice di terze parti sul server.** Le app Shopify non girano dentro il negozio: girano sui server dello sviluppatore e parlano con Shopify via API, con permessi (scope) espliciti approvati in installazione. Un'app vulnerabile può esporre i dati che ha ricevuto, ma non può prendere il controllo della piattaforma. Su WordPress un plugin vulnerabile esegue codice con gli stessi permessi di tutto il resto: **la maggior parte delle compromissioni WordPress nasce dai plugin**, non dal core.
- **Liquid è un sandbox.** Il tema è scritto in Liquid, un linguaggio di template che non può accedere al filesystem, eseguire comandi o fare query arbitrarie al database. Un tema scritto male può essere lento o brutto, ma non apre una shell.
- **Checkout e pagamenti certificati.** Shopify è certificato **PCI DSS Level 1**, e il checkout è gestito dalla piattaforma. Con WooCommerce la conformità PCI è (almeno in parte) responsabilità del commerciante.
- **Bug bounty pubblico.** Shopify ha un programma su HackerOne tra i più remunerati del settore, con ricercatori che cercano vulnerabilità a tempo pieno.

### Cosa resta a carico vostro anche su Shopify

Shopify non rende un negozio invulnerabile. Sposta il confine della responsabilità:

- **Account e accessi**: account staff con password deboli o senza autenticazione a due fattori restano il primo vettore di attacco. Il 2FA va reso obbligatorio per tutti.
- **App**: ogni app installata riceve accesso a una parte dei dati (ordini, clienti). Installare app abbandonate o poco affidabili significa consegnare quei dati a terzi. Vanno riviste e disinstallate quando non servono.
- **Script nel tema**: pixel, chat, widget di terze parti caricati nel tema girano nel browser dei clienti. Un fornitore compromesso può iniettare codice malevolo (attacchi in stile Magecart). Il checkout è protetto, ma il resto del sito no.
- **Integrazioni custom**: middleware, ERP connector, app private hanno token API che vanno custoditi come password.
- **Lock-in e trasparenza**: non potete verificare il codice di Shopify né scegliere quando applicare una patch. State delegando la fiducia, non eliminandola.

### E WooCommerce, allora, è da evitare?

No. Un WooCommerce ben gestito può essere sicuro. Ma "ben gestito" ha un costo preciso:

- **hosting gestito** serio, che aggiorna PHP, isola i siti e ha un WAF davanti;
- **pochi plugin**, scelti tra quelli mantenuti attivamente;
- qualcuno (interno o un'agenzia) con il compito esplicito di **monitorare le vulnerabilità e applicare gli aggiornamenti**, con un ambiente di staging per testarli;
- backup verificati e un piano di ripristino.

Se questi elementi ci sono, WooCommerce o Magento restano scelte valide, soprattutto quando serve un controllo totale sul codice o sui dati. Se non ci sono, il negozio è sicuro solo finché nessuno lo prende di mira.

| Aspetto | Shopify | WooCommerce / Magento / PrestaShop |
|---|---|---|
| Aggiornamento runtime (PHP, server) | Gestito dalla piattaforma | A carico vostro o dell'hosting |
| Vulnerabilità tipo PHP2Shell | Non vi riguarda | Patch, test e deploy da fare voi |
| Codice di terze parti | App esterne via API con scope | Plugin con pieno accesso al server |
| Conformità PCI del checkout | PCI DSS Level 1 incluso | Responsabilità condivisa |
| Controllo e verificabilità del codice | Nessuno | Totale |
| Sicurezza account, app, script | A carico vostro | A carico vostro |

### In sintesi

- **PHP2Shell** è una RCE pre-autenticata nel core di PHP: colpisce qualsiasi applicazione PHP, indipendentemente da quanto sia scritta bene.
- Il fix esiste solo per le versioni supportate (8.2+). **Chi è su PHP 8.1 o precedenti non riceverà una patch.**
- Il vantaggio di Shopify non è un codice migliore, ma un **modello di responsabilità diverso**: l'infrastruttura la aggiorna Shopify, per tutti, senza che il commerciante debba fare nulla.
- Su Shopify restano a carico vostro **account, app e script di terze parti**.
- WooCommerce e Magento possono essere sicuri, ma solo se qualcuno ha davvero il compito di tenerli aggiornati. Se quel qualcuno non esiste, Shopify è la scelta più prudente.
