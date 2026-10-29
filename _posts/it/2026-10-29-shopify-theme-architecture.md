---
title: "Temi Shopify: oltre sezioni e blocchi, nessuna architettura"
date: 2026-10-29 11:00:00 +0100
categories: Ecommerce
related: [dawn-horizon, shopify-themes-merchant, shopify-popular-themes]
reading_time: 8
audience: dev
---

Chi lavora su temi Shopify scritti da altri prima o poi si accorge di una cosa: sul markup c'è un modello chiaro, fatto di sezioni, blocchi e snippet con il loro schema. Su **CSS e JavaScript** invece c'è il vuoto. Ogni tema organizza stili e script a modo suo, e quando devi aggiungere una funzionalità non hai uno standard da rispettare. Al massimo trovi le abitudini dell'autore.

Non ho mai visto un tema Shopify che segua davvero il pattern **7-1** per gli stili o **BEM** in modo sistematico. Non ne ho visto nemmeno uno con un'organizzazione dei moduli JavaScript che si possa riconoscere da un tema all'altro. Questo articolo prova a spiegare perché succede e come lavorarci senza aggiungere altro disordine.

{% raw %}
### Cosa è standardizzato (e cosa no)

Shopify ha standardizzato molto bene **la parte che vede il commerciante**:

- **sezioni** e **blocchi** con uno `{% schema %}` JSON che l'editor sa leggere;
- **theme block** riutilizzabili e annidabili (da Horizon in poi);
- **snippet** per riusare pezzi di Liquid con `{% render %}`;
- **impostazioni globali** in `config/settings_schema.json`, **traduzioni** in `locales/`.

È un vero modello a componenti, ma riguarda solo **markup e configurazione**. Per stili e script la piattaforma offre poco:

- una cartella `assets/` **piatta**, senza sottocartelle;[^architecture]
- i tag `{% stylesheet %}` e `{% javascript %}` dentro sezioni e blocchi, che Shopify concatena in un unico file. Non accettano Liquid e quasi nessun tema li usa;[^tags]
- nessuna pipeline di build: Shopify serve i file così come sono. Il supporto a Sass nei temi è stato deprecato anni fa.

Tutto il resto (come nominare le classi, come dividere i file, come far parlare i componenti JavaScript tra loro) è lasciato a chi scrive il tema.

### Come lo risolvono i temi più diffusi

**Dawn** ha delle convenzioni, ma sono sue:

- CSS diviso per prefisso di file: `base.css`, `component-*.css`, `section-*.css`, `template-*.css`. Ogni sezione carica i fogli che le servono con `stylesheet_tag`;
- classi in parte in stile BEM (`.card__heading`, `.card--media`), mescolate a classi di utilità (`.full-unstyled-link`, `.gradient`) e a schemi colore globali (`.color-scheme-1`);
- JavaScript a **custom element** (`class CartDrawer extends HTMLElement`), ma senza moduli: tutto è globale, con file come `global.js`, `constants.js` e un piccolo pub/sub condiviso.

**Horizon** fa un passo avanti: **moduli ES** caricati tramite import map, una classe base comune per i web component e riferimenti agli elementi dichiarati nel markup.[^horizon] È l'esempio più ordinato che Shopify abbia pubblicato, ma resta **l'architettura di Horizon**, non uno standard della piattaforma. I temi che ne derivano possono seguirla; gli altri no.

**I temi a pagamento** sono il caso più vario. Ogni autore ha il suo sistema, spesso con una build privata. Il tema arriva con un `theme.js` o un `vendor.js` già compilati e minificati, senza sorgenti. Lì dentro aggiungere codice significa scrivere "di fianco" a un blocco opaco.

Il risultato pratico: se domani passi da un negozio su Dawn a uno su un tema premium, quello che sai su come è organizzato il codice non ti serve quasi a niente.

### Perché succede

Non è pigrizia degli sviluppatori di temi. Ci sono ragioni strutturali.

**1. Il cliente del tema è il commerciante, non lo sviluppatore.** I requisiti del Theme Store riguardano prestazioni, accessibilità, funzionalità dell'editor, compatibilità con le app. Nessuno controlla come sono organizzati il CSS o il JavaScript, perché il commerciante non lo vede.

**2. La piattaforma non ha un punto di estensione.** Su WordPress esistono i **child theme**: il tuo codice vive separato e sopravvive agli aggiornamenti del tema padre. Su Shopify no: per personalizzare modifichi i file del tema, e quando l'autore rilascia una nuova versione le personalizzazioni vanno riportate a mano. Se nessuno estende il codice in modo pulito, chi scrive il tema non ha motivo di progettarlo per essere esteso.

**3. Struttura piatta e nessuna build.** Senza sottocartelle in `assets/` e senza un passaggio di compilazione ufficiale, il 7-1 o una gerarchia di moduli si possono avere solo **fuori** dal tema, con una build tua. Molti non lo fanno, e chi lo fa non distribuisce i sorgenti.

**4. L'editor scrive nello stesso repository.** `config/settings_data.json` e i template JSON vengono modificati dal commerciante dall'editor. Il tema è un oggetto condiviso tra codice e contenuto, e questo scoraggia un'organizzazione "da progetto software" vero e proprio.

### Come lavorarci senza aggiungere caos

Non potendo cambiare il tema, conviene darsi delle regole per **il proprio** codice. Queste sono quelle che uso.

**Segui le convenzioni del tema, non le tue.** Se il tema usa custom element e file `component-*.css`, il tuo componente fa lo stesso. Un secondo stile dentro lo stesso tema è peggio di uno stile che non ti piace.

**Usa un prefisso come namespace.** Le cartelle sono piatte, quindi il prefisso è l'unico modo per distinguere i tuoi file da quelli del tema:

```text
snippets/acme-size-guide.liquid
blocks/acme-size-guide.liquid
assets/acme-size-guide.css
assets/acme-size-guide.js
```

Stesso prefisso per le classi CSS (`.acme-size-guide`, `.acme-size-guide__table`) e per i custom element (`<acme-size-guide>`). Così, quando arriva un aggiornamento del tema, sai subito cosa è tuo e cosa va riportato.

**Un componente porta con sé i suoi file.** Il blocco o la sezione carica il proprio CSS e JS, invece di aggiungere righe a `base.css` o `global.js`:

```liquid
{{ 'acme-size-guide.css' | asset_url | stylesheet_tag }}
<script src="{{ 'acme-size-guide.js' | asset_url }}" type="module" defer></script>

<acme-size-guide class="acme-size-guide">
  …
</acme-size-guide>
```

Meno file del tema toccati significa meno conflitti al prossimo aggiornamento.

**Non toccare i file globali del tema, se puoi evitarlo.** Quando è inevitabile (un hook nel `theme.liquid`, un evento da emettere nel carrello), segna la modifica con un commento riconoscibile, per esempio `{% comment %} acme: … {% endcomment %}`, così si ritrova con una ricerca.

**Comunica tramite eventi, non tramite variabili globali.** Se il tema espone eventi (il pub/sub di Dawn, gli eventi di Horizon), ascolta quelli. Per i tuoi componenti usa `CustomEvent` sul `document` con nomi prefissati (`acme:size-guide:open`), invece di leggere o modificare oggetti globali del tema.

**Se vuoi 7-1 e moduli, mettili fuori dal tema.** Tieni i sorgenti in una cartella separata (`src/styles/` con la struttura 7-1, `src/scripts/` con i moduli ES) e compila verso `assets/` con esbuild o Vite, con output piatto e prefissato. Due accorgimenti:

- aggiungi la cartella dei sorgenti a `.shopifyignore`, così Shopify CLI non prova a caricarla;
- se usi l'integrazione con GitHub, ricorda che Shopify non esegue build: i file compilati vanno committati, o generati da una CI che li pubblica.

**Scrivi le regole da qualche parte.** Un `README` nel repository del tema con prefisso, convenzioni di naming, elenco dei file del tema modificati e comando di build. È la cosa più semplice e quella che manca più spesso.
{% endraw %}

### In sintesi

- Shopify ha un modello a componenti chiaro per **markup e configurazione** (sezioni, blocchi, snippet, schema), ma **nessuno standard per CSS e JavaScript**.
- Ogni tema ha la sua architettura: convenzioni proprie in Dawn, moduli ES e web component in Horizon, build private e codice minificato in molti temi a pagamento.
- Le cause sono strutturali: il cliente è il commerciante, non esistono child theme, `assets/` è piatta, non c'è una build ufficiale.
- Finché la piattaforma non cambia, lo standard te lo dai tu: **convenzioni del tema, prefisso come namespace, componenti autosufficienti, eventi invece di globali, sorgenti e build fuori dal tema, regole scritte**.

[^architecture]: Shopify.dev, [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture).
[^tags]: Shopify.dev, [stylesheet](https://shopify.dev/docs/api/liquid/tags/stylesheet) e [javascript](https://shopify.dev/docs/api/liquid/tags/javascript).
[^horizon]: [Shopify/horizon](https://github.com/Shopify/horizon) e [Shopify/dawn](https://github.com/Shopify/dawn) su GitHub.
