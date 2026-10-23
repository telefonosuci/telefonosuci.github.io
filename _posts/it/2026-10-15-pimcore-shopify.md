---
title: "Pimcore e Shopify: come integrarli e quando conviene"
date: 2026-10-15 18:00:00 +0200
categories: Integrations
reading_time: 7
---

**Pimcore** e **Shopify** sono una coppia sempre più comune nelle aziende che hanno molti prodotti, molti dati e più canali di vendita. Pimcore è il luogo in cui i dati di prodotto nascono, si arricchiscono e vengono approvati; Shopify è il luogo in cui si vendono. Questo articolo spiega cosa fa ciascuno, come si collegano e cosa aspettarsi da un progetto di integrazione.

Se non hai familiarità con i PIM, parti da [PIM: cos'è, a cosa serve e come si integra con Shopify]({% post_url it/2026-10-15-pim %}).

### Cos'è Pimcore

Pimcore è una piattaforma open source per la gestione dei dati aziendali, nata in Austria e costruita in PHP (Symfony). Riunisce in un unico sistema:

- **PIM**: gestione delle informazioni di prodotto, con un modello dati completamente personalizzabile;
- **DAM**: gestione di immagini, video e documenti, con generazione automatica di formati e dimensioni diverse;
- **MDM**: gestione di altri dati "anagrafici" oltre ai prodotti (fornitori, negozi, materiali, designer);
- **CMS**: pagine e contenuti web, se servono;
- **Datahub**: le API e gli strumenti di importazione ed esportazione con cui Pimcore dialoga con gli altri sistemi.

A differenza dei PIM "pronti all'uso", Pimcore si **modella** sull'azienda: le schede prodotto, le relazioni, le regole di validazione e i flussi di approvazione si progettano su misura. È la sua forza e anche il motivo per cui richiede un progetto di sviluppo.

Una nota sulla licenza: negli ultimi anni Pimcore ha cambiato le condizioni della versione gratuita (Community Edition).[^pocl] Prima di scegliere, conviene verificare quale edizione è adatta alla dimensione e all'uso della tua azienda.

### Perché unirli

Shopify è eccellente nel vendere: checkout, pagamenti, mercati internazionali, app, prestazioni. Ma non è nato per gestire dati di prodotto molto complessi, approvazioni tra reparti o migliaia di documenti tecnici. Pimcore è l'opposto: eccellente sui dati, non è una piattaforma di vendita.

Insieme si ottiene:

- **Un solo posto dove si modificano i dati**, che arrivano su Shopify già completi, tradotti e approvati.
- **Più negozi Shopify alimentati da una sola fonte**: un negozio per paese, uno per marchio, uno per il B2B.
- **Gli stessi dati anche fuori da Shopify**: cataloghi PDF, portali dei rivenditori, marketplace, schermi in negozio.
- **Il marketing libero di lavorare su Shopify** (pagine, promozioni, tema) senza toccare i dati di prodotto.

### Come funziona l'integrazione

{% include diagrams/pimcore-shopify.html %}

1. **In Pimcore** il prodotto viene creato (spesso importato dall'ERP), arricchito da più reparti e approvato.
2. **Il Datahub** espone i dati del prodotto tramite API, oppure segnala che qualcosa è cambiato.
3. **Il servizio di integrazione** è il cuore del progetto. Riceve le modifiche, le mette in coda, le traduce nel formato di Shopify e le invia a ogni negozio. Se qualcosa va storto (un limite delle API, un dato mancante) riprova e lo registra, così nessun aggiornamento si perde.
4. **Shopify** riceve prodotti, varianti, immagini, traduzioni e dati personalizzati.
5. **I webhook** di Shopify avvisano il servizio di integrazione di ciò che succede sul negozio, ad esempio che un prodotto è stato pubblicato o che un aggiornamento non è andato a buon fine, così Pimcore può mostrare lo stato reale di ogni prodotto su ogni canale.

#### Due strategie di sincronizzazione, insieme

- **In tempo reale, a ogni modifica**: quando un prodotto viene salvato o approvato in Pimcore, parte subito l'aggiornamento verso Shopify. Le modifiche sono online in pochi secondi o minuti.
- **Controllo periodico completo**: una volta al giorno (o alla settimana) il sistema confronta Pimcore e Shopify e corregge le differenze. È la rete di sicurezza che ripara ciò che il tempo reale ha perso.

#### Cosa diventa cosa

| In Pimcore | In Shopify |
| --- | --- |
| Classe di prodotto (es. "Scarpa", "Divano") | Tipo di prodotto, con il suo insieme di metafield |
| Campi del prodotto | Campi standard (titolo, descrizione, prezzo) e **metafield** |
| Varianti (oggetti figli del prodotto) | **Varianti**, con massimo tre opzioni per prodotto[^options] |
| Gruppi di attributi dinamici (classification store, object brick) | **Metafield** con un namespace per gruppo |
| Oggetti collegati (materiali, designer, certificazioni) | **Metaobject**, mostrati nel tema come schede riutilizzabili |
| Immagini del DAM | **Media** del prodotto, nel formato e nella dimensione giusti |
| Campi tradotti | Traduzioni per lingua in **Shopify Markets** |
| Categorie | **Collezioni** |
| Stato di approvazione | Prodotto in bozza o pubblicato |

### Esempi di progetti

**Produttore di illuminazione tecnica.** 25.000 articoli con schede tecniche, file fotometrici e certificazioni per paese. Pimcore gestisce i dati e genera i cataloghi PDF; un negozio Shopify vende ai privati una selezione di 2.000 prodotti, e un secondo negozio Shopify B2B mostra a installatori e rivenditori tutto il catalogo con listini dedicati. Lo stesso dato tecnico, modificato una volta sola, finisce su catalogo, sito privati e sito B2B.

**Gruppo moda con tre marchi.** Un unico Pimcore, tre negozi Shopify (uno per marchio) e cinque lingue. Il team prodotto lavora in Pimcore, ogni brand ha il suo flusso di approvazione, e il servizio di integrazione decide quali prodotti vanno su quale negozio. I team ecommerce dei tre marchi lavorano su Shopify in autonomia su pagine e campagne.

**Azienda alimentare.** Ingredienti, valori nutrizionali e allergeni sono dati regolamentati, con regole diverse per paese. Pimcore li gestisce con validazioni rigorose e flussi di approvazione con l'ufficio qualità; su Shopify arrivano solo i prodotti approvati, con le tabelle nutrizionali corrette per ogni mercato, mostrate nel tema tramite metaobject.

**Arredamento configurabile.** Divani con decine di tessuti e finiture: le combinazioni superano di molto le varianti che Shopify gestisce in modo comodo. Pimcore conserva l'intera logica di configurazione; su Shopify arrivano i modelli principali, e la scelta di tessuto e finitura avviene tramite un configuratore nel tema che legge i dati da Pimcore.

### Quanto richiede un progetto

Indicativamente, per un'integrazione Pimcore → Shopify con un modello dati già definito:

| Scenario | Durata indicativa |
| --- | --- |
| Un negozio, una lingua, catalogo semplice | 4–8 settimane |
| Più lingue o mercati, metafield e metaobject, immagini dal DAM | 2–4 mesi |
| Più negozi, B2B, regole di pubblicazione per canale, configuratori | 4–6 mesi e oltre |

Se Pimcore va ancora implementato da zero (modello dati, importazioni dall'ERP, flussi di approvazione), i tempi vanno sommati: la progettazione del modello dati è spesso la parte più lunga, e anche la più importante.

### Errori da evitare

- **Progettare il modello di Pimcore senza pensare a Shopify**: tre opzioni per prodotto, la struttura delle varianti e i limiti dei metafield vanno considerati da subito.
- **Un'integrazione "punto a punto" senza coda né log**: funziona finché va tutto bene. Il primo errore non registrato diventa un prodotto sbagliato online senza che nessuno se ne accorga.
- **Sincronizzare tutto a ogni modifica**: con migliaia di prodotti si superano i limiti delle API di Shopify. Vanno inviate solo le differenze.
- **Lasciare modificabili su Shopify i dati che arrivano da Pimcore**: verranno sovrascritti. Il team va formato su dove si modifica cosa.
- **Far passare le giacenze da Pimcore**: devono andare dall'ERP o dal magazzino direttamente a Shopify.
- **Immagini troppo pesanti**: il DAM conserva gli originali, ma a Shopify vanno inviati formati già ottimizzati per il web.

### Quando conviene (e quando no)

**Conviene** se hai cataloghi grandi o tecnici, dati regolamentati, più marchi o più negozi Shopify, più canali oltre all'ecommerce, o processi di approvazione tra reparti. In questi casi Pimcore ripaga l'investimento in ordine, velocità di lancio e meno errori.

**Non conviene** se hai un catalogo semplice e un solo negozio: un PIM SaaS più leggero (come Plytix o Akeneo) o l'admin di Shopify ben organizzato sono più rapidi ed economici. Pimcore è uno strumento potente, ma va scelto quando la complessità c'è davvero.

[^pocl]: Pimcore, [Pimcore says goodbye to GPL and enters a new era with POCL](https://pimcore.com/en/resources/blog/breaking-free-pimcore-says-goodbye-to-gpl-and-enters-a-new-era-with-pocl): dalla versione 2025.1 la Community Edition passa da GPLv3 alla Pimcore Open Core License.
[^options]: Shopify Help Center, [Adding variants](https://help.shopify.com/en/manual/products/variants/add-variants): massimo 3 opzioni per prodotto.
