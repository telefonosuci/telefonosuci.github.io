---
title: "Migrazioni ecommerce: cosa sono, quando servono e quanto durano"
date: 2026-10-15 19:00:00 +0200
categories: Ecommerce
reading_time: 7
---

Una **migrazione** è il passaggio di un negozio online da una piattaforma, una tecnologia o un sistema a un altro, portando con sé prodotti, clienti, ordini, contenuti e posizionamento su Google. È uno dei progetti più delicati per un ecommerce: fatta bene, apre anni di crescita; fatta male, costa vendite e traffico per mesi.

In questo articolo vediamo quali tipi di migrazione esistono, come capire se ti serve davvero e come stimare i tempi.

### I tipi di migrazione più comuni

- **Cambio di piattaforma (replatforming)**: ad esempio da Magento, WooCommerce o PrestaShop a Shopify. È la migrazione più completa: tema, dati, integrazioni e SEO.
- **Passaggio a Shopify Plus**: dallo stesso Shopify al piano enterprise, per sbloccare B2B, più negozi, personalizzazione del checkout e automazioni.
- **Migrazione del tema**: da un tema vecchio (o molto modificato e ormai fragile) a un tema moderno, con sezioni e blocchi che il marketing gestisce in autonomia.
- **Migrazioni imposte dalla piattaforma**: Shopify ha dismesso `checkout.liquid` a favore della *Checkout Extensibility*[^checkoutliquid], e gli Scripts a favore delle *Shopify Functions*.[^scriptsend] Chi usava le vecchie tecnologie ha dovuto rifare quelle personalizzazioni.
- **Passaggio a headless**: il negozio resta su Shopify, ma il sito viene ricostruito con un frontend separato (Hydrogen, Next.js).
- **Migrazione dei sistemi collegati**: cambio di ERP, introduzione di un PIM, sostituzione di un gestionale di magazzino. Il negozio non cambia, ma tutte le integrazioni sì.

### Come capire se ti serve una migrazione

Rispondi sì o no a queste domande. Più sì ci sono, più la migrazione è probabilmente un investimento e non un costo.

**Costi e manutenzione**

- La maggior parte del budget tecnico va in aggiornamenti, correzioni e hosting, invece che in nuove funzionalità?
- La tua piattaforma o la sua versione è a fine vita, o non riceve più aggiornamenti di sicurezza?
- Ogni aggiornamento di un plugin rischia di rompere qualcosa?

**Prestazioni e vendite**

- Il sito è lento, soprattutto da mobile, e i Core Web Vitals sono insufficienti?
- Il sito ha avuto problemi o rallentamenti nei picchi di traffico (saldi, Black Friday, campagne)?
- Il tasso di conversione del checkout è sotto la media del tuo settore?

**Autonomia del team**

- Il marketing deve chiedere a uno sviluppatore anche per cambiare un banner o creare una landing?
- Lanciare una promozione, un nuovo mercato o una nuova lingua richiede settimane?

**Crescita**

- Ti servono funzioni che la piattaforma attuale non offre, o offre solo con molto sviluppo (vendita internazionale, B2B, abbonamenti, multi-negozio)?
- Le integrazioni con ERP, magazzino o marketplace sono fragili, manuali o non documentate?
- Lo sviluppatore o l'agenzia che conosceva il sistema non c'è più?

#### Quando **non** migrare

- Se il problema sono i **contenuti** (foto, testi, offerta) o il **marketing**, cambiare piattaforma non lo risolve.
- Se il problema è un **singolo punto** (un plugin lento, un tema pesante), spesso basta intervenire lì: un'ottimizzazione costa molto meno di una migrazione.
- Se è il **periodo sbagliato**: mai pianificare il lancio nelle settimane prima dei saldi, del Black Friday o di Natale.
- Se nessuno in azienda può dedicare **tempo al progetto**: una migrazione richiede decisioni, contenuti e test anche da parte del cliente.

### Le fasi di una migrazione

{% include diagrams/migration-timeline.html %}

1. **Analisi**: inventario di tutto quello che esiste (prodotti, dati, pagine, URL, integrazioni, app, personalizzazioni) e decisione su cosa portare, cosa rifare e cosa abbandonare. È la fase che più di tutte evita sorprese.
2. **Design**: struttura del nuovo sito, esperienza d'acquisto, grafica. Può essere un restyling o un adattamento del design esistente.
3. **Sviluppo del tema**: costruzione del nuovo negozio, delle sezioni modificabili e delle funzionalità particolari.
4. **Integrazioni**: collegamento con ERP, magazzino, PIM, CRM, marketplace, strumenti di marketing.
5. **Migrazione dei dati**: si fanno più prove di importazione, non una sola. L'ultima avviene poco prima del lancio, con i dati aggiornati.
6. **Test**: ordini di prova, pagamenti, spedizioni, email, tasse, traduzioni, prestazioni, e controllo di tutti i redirect.
7. **Go-live**: il passaggio vero e proprio, idealmente in un giorno e un orario di traffico basso.
8. **Assistenza post lancio**: due–quattro settimane di monitoraggio intensivo su vendite, errori e posizionamento su Google.

### Cosa si porta e cosa no

| Dato | Si migra? | Note |
| --- | --- | --- |
| Prodotti, varianti, immagini | Sì | Occasione ideale per ripulire il catalogo e completare i dati |
| Clienti | Sì | Le **password non si possono trasferire**[^passwords] per sicurezza: i clienti ricevono un invito ad attivare il nuovo account |
| Storico ordini | Sì, di solito | Utile per l'assistenza e per l'area cliente; si importa con strumenti dedicati |
| Recensioni | Sì | Dipende dall'app di recensioni scelta |
| Pagine, blog, contenuti | Sì | Spesso conviene riscriverli, non solo copiarli |
| URL e posizionamento SEO | Sì, con i **redirect** | Ogni vecchio indirizzo deve portare alla nuova pagina corrispondente |
| Carte regalo e saldi punti | Dipende | Vanno verificati caso per caso |
| Plugin e personalizzazioni | No, si rifanno | Sono l'occasione per eliminare ciò che non serve più |

**La SEO è il punto più delicato.** Senza una mappatura completa dei redirect, Google trova pagine inesistenti e il traffico organico può crollare. Con una mappatura fatta bene, il calo è minimo e temporaneo.

### Quanto dura una migrazione: uno strumento per stimarla

Ogni progetto è diverso, ma la durata dipende quasi sempre dagli stessi fattori. Assegna un punteggio al tuo progetto per ciascuna riga e somma i punti.

| Fattore | 0 punti | 1 punto | 2 punti |
| --- | --- | --- | --- |
| Prodotti e varianti | Meno di 500 | 500 – 5.000 | Oltre 5.000 |
| Tema e design | Tema pronto, personalizzato | Tema su misura su un design esistente | Nuovo design e tema su misura |
| Integrazioni | Nessuna, o solo app pronte | 1–2 integrazioni su misura | ERP, PIM o 3+ integrazioni |
| Lingue e mercati | Uno | 2–3 | 4 o più |
| Funzionalità particolari (B2B, abbonamenti, configuratori, bundle) | Nessuna | Una | Più di una |
| Dati e URL da preservare | Solo prodotti | Anche clienti, ordini, recensioni | Grande storico e molte pagine indicizzate |
| Contenuti e decisioni lato azienda | Pronti | In parte da preparare | Da creare da zero |

| Punteggio | Complessità | Durata indicativa |
| --- | --- | --- |
| 0–3 | Semplice | 4–8 settimane |
| 4–7 | Media | 2–4 mesi |
| 8–10 | Alta | 4–6 mesi |
| 11–14 | Enterprise | 6–12 mesi |

Alcune regole pratiche per leggere il risultato:

- **Aggiungi un margine del 15–20%**: in ogni migrazione emerge qualcosa che non era nell'inventario.
- **Il fattore più sottovalutato è l'ultimo**: testi, foto e decisioni che tardano dal lato dell'azienda allungano i tempi più di qualsiasi problema tecnico.
- **Le integrazioni pesano più del tema**: un tema si vede e si corregge in fretta, un'integrazione con l'ERP va provata con dati reali e casi limite.
- **Le date di lancio non sono tutte uguali**: se la stima cade a ridosso del periodo di picco, conviene anticipare o rimandare il lancio.

### Come ridurre tempi e rischi

- **Lancio a fasi**: prima il negozio con le funzioni essenziali, poi le integrazioni secondarie e le funzioni avanzate. Si inizia prima a beneficiare della nuova piattaforma.
- **Congelare i contenuti** sul vecchio sito nelle ultime settimane, per non dover migrare due volte.
- **Meno personalizzazioni, più standard**: ogni funzione "come la facevamo prima" va messa in discussione. Spesso la nuova piattaforma la offre già in modo diverso.
- **Una persona di riferimento** dal lato dell'azienda, con il potere di decidere.
- **Piano di ritorno**: sapere in anticipo cosa fare se il giorno del lancio qualcosa va storto.

### In sintesi

Una migrazione serve quando la piattaforma attuale costa più di quanto rende: in manutenzione, in vendite perse o in opportunità che non puoi cogliere. Si decide guardando i segnali, si stima guardando i fattori di complessità, e si porta a termine con un inventario accurato, prove ripetute dei dati e una cura particolare per la SEO.

[^checkoutliquid]: Shopify Changelog, [The checkout.liquid theme file is being deprecated](https://changelog.shopify.com/posts/the-checkout-liquid-theme-file-is-being-deprecated).
[^scriptsend]: Shopify.dev Changelog, [Shopify Scripts will be deprecated on June 30, 2026](https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026).
[^passwords]: Shopify Help Center, [Importing and exporting customers](https://help.shopify.com/en/manual/customers/import-export-customers): le password dei clienti non si possono importare da un altro negozio.
