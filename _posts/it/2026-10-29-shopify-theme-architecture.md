---
title: "Temi Shopify e architettura del codice: un punto di vista"
date: 2026-10-29 11:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify-themes-merchant, shopify-popular-themes]
reading_time: 9
audience: dev
---

Lavorando su temi Shopify scritti da altri, c'è una cosa che noto spesso. Sul markup la piattaforma offre un modello chiaro, fatto di sezioni, blocchi e snippet con il loro schema. Su **CSS e JavaScript** lascia molta più libertà, e ogni tema la usa a modo suo. Quando devo aggiungere una funzionalità, più che uno standard da rispettare trovo le abitudini di chi ha scritto il tema.

Nei temi su cui mi è capitato di lavorare raramente ho trovato il pattern **7-1** per gli stili o un uso sistematico di **BEM**, e l'organizzazione dei moduli JavaScript cambia parecchio da un tema all'altro. Ammetto che a volte la cosa mi frustra. Questo articolo è un punto di vista personale: provo a capire perché le cose stanno così, cosa c'è di buono in questa scelta, cosa mi piacerebbe vedere e come lavoro nel frattempo.

{% raw %}
### Cosa è standardizzato (e cosa no)

Shopify ha standardizzato molto bene **la parte che vede il commerciante**:

- **sezioni** e **blocchi** con uno `{% schema %}` JSON che l'editor sa leggere;
- **theme block** riutilizzabili e annidabili (da Horizon in poi);
- **snippet** per riusare pezzi di Liquid con `{% render %}`;
- **impostazioni globali** in `config/settings_schema.json`, **traduzioni** in `locales/`.

È un vero modello a componenti, e funziona bene. Riguarda però **markup e configurazione**. Per stili e script la piattaforma dà pochi strumenti e nessuna convenzione:

- una cartella `assets/` **piatta**, senza sottocartelle;[^architecture]
- i tag `{% stylesheet %}` e `{% javascript %}` dentro sezioni e blocchi, che Shopify concatena in un unico file. Non accettano Liquid e, nella mia esperienza, si vedono usati poco;[^tags]
- nessuna pipeline di build: Shopify serve i file così come sono. Il supporto a Sass nei temi è stato deprecato anni fa.

Come nominare le classi, come dividere i file, come far parlare i componenti JavaScript tra loro: sono decisioni lasciate a chi scrive il tema.

### Come lo risolvono i temi più diffusi

**Dawn** ha convenzioni sensate e coerenti al suo interno:

- CSS diviso per prefisso di file: `base.css`, `component-*.css`, `section-*.css`, `template-*.css`. Ogni sezione carica i fogli che le servono con `stylesheet_tag`;
- classi in parte in stile BEM (`.card__heading`, `.card--media`), affiancate a classi di utilità (`.full-unstyled-link`, `.gradient`) e a schemi colore globali (`.color-scheme-1`);
- JavaScript a **custom element** (`class CartDrawer extends HTMLElement`), senza moduli: file come `global.js` e `constants.js` e un piccolo pub/sub condiviso. Semplice da leggere, anche se tutto vive nello scope globale.

**Horizon** fa un passo avanti: **moduli ES** caricati tramite import map, una classe base comune per i web component e riferimenti agli elementi dichiarati nel markup.[^horizon] È l'esempio più ordinato che Shopify abbia pubblicato e, secondo me, un segnale della direzione in cui si sta andando. Resta però l'architettura di Horizon, non una convenzione della piattaforma.

**I temi a pagamento** sono il caso più vario. Ogni autore ha il suo sistema, spesso con una build privata, e a volte il tema arriva con un `theme.js` o un `vendor.js` già compilati. È una scelta comprensibile per chi vende un prodotto, ma per chi deve estenderlo complica le cose.

In pratica, passando da un tema all'altro, quello che ho imparato su come è organizzato il codice di uno mi aiuta solo in parte con il successivo.

### Il rovescio della medaglia

Prima di criticare, è giusto dire che questa libertà ha anche dei vantaggi:

- **la soglia di ingresso è bassa.** Bastano HTML, CSS, JavaScript e Liquid: niente build obbligatoria, niente framework da imparare. Molti sviluppatori di temi hanno iniziato proprio così;
- **Shopify non impone mode.** Una convenzione ufficiale per CSS o JS rischierebbe di invecchiare in fretta, come è successo con Sass. Basarsi sugli standard del browser (custom element, moduli ES) è una scelta che dura;
- **gli autori possono ottimizzare.** Ogni tema può scegliere la strategia di caricamento più adatta alle sue prestazioni, che per il commerciante contano più dell'ordine nel codice;
- **Horizon mostra che l'ecosistema si sta muovendo** verso strutture più modulari, anche senza una regola scritta.

### Perché, secondo me, succede

Detto questo, credo che la mancanza di uno standard abbia ragioni strutturali più che colpe di qualcuno.

**1. Il cliente del tema è il commerciante.** I requisiti del Theme Store riguardano prestazioni, accessibilità, funzionalità dell'editor, compatibilità con le app. Sono le priorità giuste per chi compra il tema; l'organizzazione interna del codice resta in secondo piano, perché il commerciante non la vede.

**2. Manca un vero punto di estensione.** Su WordPress esistono i **child theme**: il codice personalizzato vive separato e sopravvive agli aggiornamenti del tema padre. Su Shopify per personalizzare si modificano i file del tema, e le personalizzazioni vanno riportate a ogni nuova versione. Senza un meccanismo di estensione, progettare il codice per essere esteso dà meno vantaggi.

**3. Struttura piatta e nessuna build ufficiale.** Senza sottocartelle in `assets/` e senza un passaggio di compilazione, il 7-1 o una gerarchia di moduli si possono avere solo **fuori** dal tema, con una build propria. È fattibile, ma è un costo in più che non tutti scelgono di pagare.

**4. Codice e contenuto convivono.** `config/settings_data.json` e i template JSON vengono modificati dal commerciante dall'editor. Il tema è un oggetto condiviso, e questo rende meno naturale trattarlo come un progetto software classico.

### Cosa mi piacerebbe vedere

Non serve che Shopify imponga 7-1 o BEM. Mi basterebbero alcune cose più piccole:

- **sottocartelle in `assets/`**, o almeno una convenzione raccomandata per dare un ordine ai file;
- **una guida ufficiale** su naming e organizzazione di CSS e JS, anche solo come suggerimento, sul modello di quella che esiste per l'accessibilità;
- **un modo per estendere un tema senza modificarlo**, qualcosa di simile ai child theme, che renderebbe gli aggiornamenti molto meno dolorosi;
- **sorgenti disponibili** nei temi a pagamento, almeno per chi ha acquistato una licenza.

### Come ci lavoro nel frattempo

Non potendo cambiare il tema, mi do delle regole per **il mio** codice. Sono quelle che funzionano per me, non le uniche possibili.

**Seguo le convenzioni del tema, non le mie.** Se il tema usa custom element e file `component-*.css`, il mio componente fa lo stesso. Due stili diversi nello stesso tema mi sembrano peggio di uno stile che non avrei scelto.

**Uso un prefisso come namespace.** Le cartelle sono piatte, quindi il prefisso è il modo più semplice per distinguere i miei file da quelli del tema:

```text
snippets/acme-size-guide.liquid
blocks/acme-size-guide.liquid
assets/acme-size-guide.css
assets/acme-size-guide.js
```

Stesso prefisso per le classi CSS (`.acme-size-guide`, `.acme-size-guide__table`) e per i custom element (`<acme-size-guide>`). Quando arriva un aggiornamento del tema, si vede subito cosa è stato aggiunto e cosa va riportato.

**Ogni componente porta con sé i suoi file.** Il blocco o la sezione carica il proprio CSS e JS, invece di aggiungere righe a `base.css` o `global.js`:

```liquid
{{ 'acme-size-guide.css' | asset_url | stylesheet_tag }}
<script src="{{ 'acme-size-guide.js' | asset_url }}" type="module" defer></script>

<acme-size-guide class="acme-size-guide">
  …
</acme-size-guide>
```

Meno file del tema toccati, meno conflitti al prossimo aggiornamento.

**Tocco i file globali del tema solo se serve.** Quando è inevitabile (un hook nel `theme.liquid`, un evento da emettere nel carrello), segno la modifica con un commento riconoscibile, per esempio `{% comment %} acme: … {% endcomment %}`, così si ritrova con una ricerca.

**Comunico tramite eventi.** Se il tema espone eventi (il pub/sub di Dawn, gli eventi di Horizon), ascolto quelli. Per i miei componenti uso `CustomEvent` sul `document` con nomi prefissati (`acme:size-guide:open`), invece di leggere o modificare oggetti globali del tema.

**Se voglio 7-1 e moduli, li tengo fuori dal tema.** I sorgenti stanno in una cartella separata (`src/styles/` con la struttura 7-1, `src/scripts/` con i moduli ES) e li compilo verso `assets/` con esbuild o Vite, con output piatto e prefissato. Due accorgimenti:

- la cartella dei sorgenti va in `.shopifyignore`, così Shopify CLI non prova a caricarla;
- con l'integrazione GitHub, Shopify non esegue build: i file compilati vanno committati, o generati da una CI che li pubblica.

**Scrivo le regole da qualche parte.** Un `README` nel repository del tema con prefisso, convenzioni di naming, elenco dei file del tema modificati e comando di build. È la cosa più semplice, e aiuta chiunque metta le mani sul tema dopo di me.
{% endraw %}

### In sintesi

- Shopify ha un modello a componenti chiaro per **markup e configurazione**, mentre per **CSS e JavaScript** lascia libertà quasi totale.
- Ogni tema usa questa libertà a modo suo: convenzioni proprie in Dawn, moduli ES e web component in Horizon, build private in molti temi a pagamento.
- La libertà ha vantaggi reali (soglia bassa, nessun framework imposto, spazio per ottimizzare), ma rende più faticoso estendere temi altrui.
- Secondo me le cause sono strutturali: priorità sul commerciante, nessun child theme, `assets/` piatta, nessuna build ufficiale.
- Nell'attesa di qualche convenzione in più dalla piattaforma, il mio approccio è: **convenzioni del tema, prefisso come namespace, componenti autosufficienti, eventi invece di globali, sorgenti e build fuori dal tema, regole scritte**.

Se lavori su temi Shopify e hai trovato un modo migliore per organizzare il codice, mi piacerebbe saperlo.

[^architecture]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture).
[^tags]: Shopify.dev, [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet) e [javascript](https://shopify.dev/docs/api/liquid/tags/javascript).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) e [Shopify/dawn](https://github.com/Shopify/dawn) su GitHub.
