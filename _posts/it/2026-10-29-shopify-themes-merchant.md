---
title: "Temi Shopify: guida per chi gestisce un negozio"
date: 2026-10-29 09:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify, shopify-releases]
reading_time: 13
---

Il tema decide l'aspetto del negozio, ma anche quanto in fretta si carica, quanto puoi cambiare da solo e quanto ti costerà ogni modifica nei prossimi anni. Eppure molti commercianti lo scelgono guardando solo la demo.

Questo articolo è per chi gestisce un negozio Shopify senza essere uno sviluppatore. Spiega com'è fatto un tema, cosa sono **sezioni** e **blocchi**, come funzionano font e colori, quando ha senso comprare un tema, quando farlo modificare e cosa conviene lasciare a uno sviluppatore.

### Cos'è un tema

Un tema è l'insieme di file che Shopify usa per costruire le pagine del negozio: home, prodotto, collezione, carrello, blog, pagine informative. Prodotti, ordini, clienti e prezzi **non** stanno nel tema: stanno nell'admin. Puoi cambiare tema senza perdere il catalogo.

Due cose importanti che il tema **non** controlla:

- **il checkout**: si personalizza dalle impostazioni del checkout (logo, colori, font) e, per le modifiche più profonde, con app ed estensioni. Non dipende dal tema;
- **le email** di conferma ordine e spedizione: si modificano in *Impostazioni → Notifiche*.

Un negozio può avere fino a **20 temi** nella libreria, ma **uno solo è pubblicato**. Gli altri sono copie su cui lavorare e da visualizzare in anteprima senza che i clienti le vedano.

### Com'è fatto: la struttura di un tema

Non serve aprire il codice, ma sapere cosa c'è dentro aiuta a capire cosa si può chiedere e quanto costa. Un tema moderno (Online Store 2.0) ha queste cartelle:

| Cartella | Cosa contiene | Chi la tocca |
|---|---|---|
| `layout/` | La cornice comune a tutte le pagine (testata HTML, caricamento di stili e script) | Sviluppatore |
| `templates/` | Un file per tipo di pagina (prodotto, collezione, pagina…): l'elenco delle sezioni e le loro impostazioni | **Tu, dall'editor** (in pratica senza saperlo) |
| `sections/` | I "mattoni" grandi della pagina: banner, griglia prodotti, testimonianze | Sviluppatore li crea, tu li usi |
| `blocks/` | I mattoni piccoli: testo, pulsante, immagine, prezzo | Sviluppatore li crea, tu li usi |
| `snippets/` | Pezzi di codice riutilizzati (per esempio la card prodotto) | Sviluppatore |
| `assets/` | CSS, JavaScript, icone, font caricati | Sviluppatore |
| `config/` | Le **impostazioni del tema** (colori, font, pulsanti) e i valori che hai scelto | Tu dall'editor; lo sviluppatore ne definisce l'elenco |
| `locales/` | I testi dell'interfaccia in ogni lingua ("Aggiungi al carrello", "Esaurito") | Tu con *Modifica contenuti tema* o l'app Translate & Adapt |

Il linguaggio dei temi si chiama **Liquid**: HTML con dei segnaposto che Shopify riempie con i dati del negozio (nome del prodotto, prezzo, immagini).

La regola da ricordare: **tutto ciò che fai dall'editor viene salvato come impostazione**, non come codice. Per questo è sicuro e reversibile. Le modifiche al codice invece sono un'altra cosa, e lo vedremo parlando di aggiornamenti.

### Sezioni

Una **sezione** è un blocco orizzontale della pagina: un banner con immagine, una griglia di prodotti in evidenza, una fascia di loghi, una FAQ. Nell'editor (*Negozio online → Temi → Personalizza*) le vedi elencate nella colonna di sinistra e puoi:

- aggiungerle, toglierle, riordinarle, nasconderle temporaneamente;
- modificarne le impostazioni: testi, immagini, colori, spaziature, numero di prodotti;
- usare la stessa sezione più volte nella stessa pagina con contenuti diversi.

Ogni pagina può contenere fino a **25 sezioni**. Testata e piè di pagina sono **gruppi di sezioni**: compaiono su tutte le pagine e si modificano una volta sola (barra degli annunci, menu, newsletter nel footer).

Cosa **non** puoi fare con una sezione: cambiarne la struttura oltre a quello che lo sviluppatore ha previsto. Se la sezione "immagine con testo" non ha l'opzione "video al posto dell'immagine", dall'editor non la puoi aggiungere.

### Blocchi

I **blocchi** sono gli elementi dentro una sezione: in un banner, il titolo, il sottotitolo e i due pulsanti sono tre blocchi. Puoi aggiungerli, toglierli e riordinarli. Una sezione ne può contenere fino a **50**.

Esistono diversi tipi di blocchi, ed è utile riconoscerli:

- **blocchi di sezione**: esistono solo dentro quella sezione. È il modello dei temi più vecchi, come Dawn;
- **theme block**: definiti una volta e usabili in tutte le sezioni che li accettano, anche uno dentro l'altro (un gruppo, che contiene due colonne, che contengono immagine e testo). È il modello di **Horizon** e dei temi più recenti, e dà molta più libertà di composizione;[^horizon]
- **blocchi statici**: fissati dallo sviluppatore. Puoi configurarli ma non spostarli né eliminarli. Servono a proteggere le parti critiche, per esempio il pulsante "aggiungi al carrello";
- **app block**: blocchi aggiunti dalle app (recensioni, badge di pagamento, calcolo spedizione). Si inseriscono dall'editor come qualsiasi altro blocco, senza toccare codice. Esistono anche gli **app embed**, che non compaiono in un punto preciso ma su tutto il sito (una chat, un banner cookie) e si attivano da *Impostazioni tema → Incorporamenti app*.

Se compri un tema oggi, chiedi (o verifica nella demo) se supporta i theme block e i gruppi annidati: è la differenza tra "riordino quello che c'è" e "compongo la pagina che mi serve".

### Template: pagine diverse per prodotti diversi

Ogni tipo di pagina ha un **template**. Puoi crearne più di uno: per esempio un template prodotto "standard" e uno "bundle", con sezioni diverse. Poi assegni il template al prodotto dalla sua scheda nell'admin.

È uno strumento potente e spesso ignorato: prima di chiedere una pagina su misura, verifica se basta un template alternativo.

### Contenuti dinamici: i metafield

Se ogni prodotto ha informazioni proprie (composizione, istruzioni di lavaggio, una guida taglie, un video), non scriverle a mano nell'editor. Crea dei **metafield** (*Impostazioni → Dati personalizzati*), compilali nella scheda prodotto e collegali alle impostazioni dei blocchi con il pulsante **Collega origine dinamica**. Così un solo template mostra i dati giusti per ogni prodotto.

Per contenuti strutturati e riutilizzabili (autori, ingredienti, punti vendita) esistono i **metaobject**. Sono il modo corretto di gestire contenuti senza duplicarli.

### Impostazioni del tema: colori e font

Nell'editor, l'icona dell'ingranaggio apre le **impostazioni del tema**: valgono per tutto il sito. Le più importanti sono colori e tipografia.

#### Schemi di colore

I temi recenti usano gli **schemi di colore**: insiemi di colori (sfondo, testo, pulsanti, bordi) con un nome, per esempio "Chiaro", "Scuro", "Accento". Ogni sezione sceglie uno schema. Cambi un colore nello schema e cambia ovunque quello schema è usato.

Consiglio pratico: definisci 3-4 schemi coerenti con il brand e usa solo quelli. Scegliere colori a mano sezione per sezione porta a un sito incoerente e difficile da mantenere.

#### Font

Le impostazioni di tipografia di solito prevedono due o tre ruoli: **titoli**, **testo**, a volte **pulsanti** o **menu**. Per ciascuno scegli un font dal **selettore di font** di Shopify, che attinge a una libreria fornita da Shopify:

- font **di sistema** (quelli già presenti sul dispositivo del cliente): i più veloci, zero caricamento;
- font **open source** (molti di quelli noti da Google Fonts) e alcune famiglie con **licenza commerciale** già inclusa, ospitati da Shopify.

Cosa sapere:

- **Il tuo font di brand probabilmente non c'è.** Se usi un font acquistato (o disegnato per te), il selettore non lo mostra. Va caricato nel tema da uno sviluppatore, e serve una **licenza web** valida: la licenza desktop per la grafica non basta.
- **Ogni peso è un file in più.** Regular, medium, bold, corsivo: ognuno si scarica. Due famiglie con due pesi ciascuna sono un buon limite.
- **Le dimensioni** si regolano di solito con una scala percentuale (per esempio titoli al 120%). Controlla sempre il risultato su mobile.
- **Alfabeti e accenti**: se vendi in lingue con caratteri particolari (polacco, ceco, greco), verifica che il font li supporti tutti.

### Comprare un tema: quando e come

Nel **Theme Store** di Shopify trovi temi gratuiti (fatti da Shopify, come Horizon e i suoi derivati) e temi a pagamento di sviluppatori indipendenti. Il prezzo è **una tantum**, la licenza vale per un negozio, e gli aggiornamenti sono inclusi.

Un tema a pagamento ha senso quando:

- ti serve una funzione che i temi gratuiti non hanno o fanno male (mega menu complessi, filtri avanzati, lookbook, pagine prodotto con molte varianti, B2B, preordini);
- vuoi partire in fretta con un design curato senza pagare un designer;
- ti serve **assistenza**: lo sviluppatore del tema risponde ai problemi del suo codice.

Come sceglierlo:

1. **Parti dal catalogo, non dalla demo.** Le demo hanno foto professionali e 12 prodotti. Pensa ai tuoi: quante varianti, quante foto, quanto testo, quante collezioni.
2. **Prova il tema in anteprima** sul tuo negozio con i tuoi prodotti. È gratis e senza limiti di tempo, paghi solo quando lo pubblichi.
3. **Controlla le prestazioni** della demo con [PageSpeed Insights](https://pagespeed.web.dev/), soprattutto su mobile.
4. **Leggi le recensioni recenti** e guarda la data dell'ultimo aggiornamento: un tema fermo da un anno è un segnale.
5. **Verifica le app che usi** (recensioni, abbonamenti, filtri): funzionano con il tema? Hanno app block?
6. **Diffida dei temi venduti fuori dal Theme Store.** Quelli del Theme Store passano una revisione di Shopify su qualità, accessibilità e prestazioni; quelli scaricati altrove no, e a volte contengono codice di bassa qualità o peggio.

### Cosa puoi fare da solo

Con l'editor e l'admin, senza toccare codice, puoi fare molto più di quanto si pensi:

- comporre e riordinare sezioni e blocchi su tutte le pagine;
- creare template alternativi per prodotti, collezioni e pagine;
- impostare colori, font, stile dei pulsanti, favicon, logo;
- modificare menu, testata, piè di pagina, barra degli annunci;
- cambiare i testi dell'interfaccia (*Modifica contenuti tema* o Translate & Adapt) e tradurre il negozio;
- collegare metafield e metaobject ai blocchi;
- aggiungere e configurare gli app block delle app installate;
- preparare un redesign su una **copia non pubblicata** e guardarlo in anteprima prima di pubblicarlo.

Tre abitudini che evitano quasi tutti i problemi:

- **Duplica il tema prima di modifiche importanti** (*Azioni → Duplica*). È il tuo backup.
- **Lavora su una copia** e pubblica quando hai finito, non modificare il tema live durante una campagna.
- **Controlla su mobile**: la maggior parte dei clienti compra dal telefono. L'editor ha l'anteprima mobile in alto.

#### Attenzione a "Liquid personalizzato" e a "Modifica codice"

Molti temi hanno una sezione **Liquid personalizzato** dove incollare codice. È comoda per un pixel di tracciamento o un piccolo widget, ma è codice vero: se copi uno snippet da un forum puoi rompere la pagina o rallentarla. Lo stesso vale per **Modifica codice** nel menu del tema. Se non sai cosa fa una riga, non incollarla sul tema pubblicato.

### Aggiornamenti: il motivo per cui il codice va toccato con giudizio

Quando lo sviluppatore del tema rilascia una nuova versione, nella libreria temi compare l'avviso di aggiornamento. Shopify crea una **nuova copia** del tema aggiornato e ci porta le tue **impostazioni** dell'editor.

Le **modifiche al codice no**. Se qualcuno ha cambiato file del tema, quelle modifiche non passano nella nuova versione: vanno rifatte a mano. Più il codice è stato modificato, più ogni aggiornamento costa, finché si smette di aggiornare e si resta con un tema vecchio, senza correzioni e senza le novità di Shopify.

Per questo uno sviluppatore serio, quando può, aggiunge **sezioni e blocchi nuovi** invece di modificare quelli esistenti, e tiene una lista delle modifiche. Chiedilo esplicitamente.

### Cosa vale la pena far fare a uno sviluppatore

| Esigenza | Da solo | Sviluppatore |
|---|---|---|
| Cambiare testi, immagini, ordine delle sezioni | ✓ | |
| Nuove pagine con le sezioni esistenti | ✓ | |
| Colori, font della libreria, logo | ✓ | |
| Font di brand con licenza propria | | ✓ |
| Una sezione o un blocco che il tema non ha | | ✓ |
| Collegare dati personalizzati (metafield) in punti non previsti dal tema | | ✓ |
| Logiche di prodotto: bundle, personalizzazioni, regole sulle varianti | | ✓ |
| Problemi di velocità, script di app rimaste dopo la disinstallazione | | ✓ |
| Integrazioni con sistemi esterni (gestionale, PIM, CRM) | | ✓ |
| Accessibilità e SEO tecnica (dati strutturati, struttura dei titoli) | | ✓ |
| Tema completamente su misura | | ✓ |

Regola pratica: **se l'editor ti offre l'opzione, è tua; se devi aprire il codice, è dello sviluppatore.** Un buon sviluppatore Shopify non si limita a "far funzionare" la modifica: la costruisce come sezione o blocco configurabile, così poi la gestisci tu dall'editor.

### Tema acquistato, modificato o su misura?

| Situazione | Scelta |
|---|---|
| Negozio nuovo, budget contenuto, catalogo semplice | **Tema gratuito** (Horizon o derivati) |
| Serve una funzione specifica o un design curato subito | **Tema a pagamento** dal Theme Store |
| Il tema va bene all'80%, mancano due o tre cose | **Tema a pagamento + sezioni su misura** di uno sviluppatore |
| Brand con un'identità forte, design da agenzia, esigenze particolari | **Tema su misura**, partendo da una base pulita |
| Il tema attuale è pieno di modifiche, lento e non si aggiorna più | **Rifare**, non rattoppare: nuovo tema e migrazione |

Un tema su misura costa molto di più all'inizio, ma è la scelta giusta quando le modifiche a un tema comprato diventerebbero così tante da renderlo impossibile da aggiornare. In quel caso si paga due volte: prima il tema, poi chi lo smonta.

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

#### Lo schema di una sezione

Ogni sezione o blocco dichiara le sue impostazioni in un tag `{% raw %}{% schema %}{% endraw %}`, in JSON. È questo schema che genera i controlli nella colonna dell'editor:

```json
{
  "name": "Banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Immagine" },
    { "type": "color_scheme", "id": "color_scheme", "label": "Schema colori", "default": "scheme-1" }
  ],
  "blocks": [{ "type": "@theme" }, { "type": "@app" }],
  "presets": [{ "name": "Banner" }]
}
```

Le impostazioni globali stanno in `config/settings_schema.json` (definizione) e `config/settings_data.json` (valori scelti dal commerciante). I font usano il tipo `font_picker`, che restituisce un oggetto font della libreria Shopify. In Liquid lo si carica con il filtro `font_face`:

```liquid
{% raw %}{{ settings.type_body_font | font_face: font_display: 'swap' }}{% endraw %}
```

Un font di brand non è nella libreria: si carica in `assets/` con un `@font-face` proprio, e conviene sostituire il `font_picker` con un'impostazione `select` per non mostrare al commerciante un selettore che non ha effetto.

Per non bloccare gli aggiornamenti: nuove funzionalità in file nuovi (`sections/`, `blocks/`, `snippets/`), modifiche ai file del tema ridotte al minimo e documentate, e il tema sotto controllo di versione con l'integrazione GitHub o la Shopify CLI.[^cli]
</div>

### In sintesi

- Il tema controlla l'aspetto e l'esperienza del negozio, **non** il catalogo, il checkout o le email.
- Le **sezioni** sono i mattoni grandi della pagina, i **blocchi** quelli piccoli dentro le sezioni. I temi basati sui **theme block** (come Horizon) ti lasciano comporre molto di più.
- **Colori e font** si gestiscono una volta nelle impostazioni del tema. I font della libreria Shopify sono pronti; un font di brand richiede uno sviluppatore e una licenza web.
- **Prova i temi in anteprima con i tuoi prodotti** prima di comprarli, e preferisci il Theme Store.
- Tutto ciò che fai dall'editor è sicuro e sopravvive agli aggiornamenti. **Le modifiche al codice no**: falle fare a uno sviluppatore che costruisca sezioni e blocchi configurabili.

[^horizon]: Per le differenze tra i due temi di riferimento vedi [Dawn e Horizon](/blog/dawn-horizon/).
[^cli]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture) e [Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli).
