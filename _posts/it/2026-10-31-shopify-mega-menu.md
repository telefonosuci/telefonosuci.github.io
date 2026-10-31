---
title: "Un mega menu solido su Shopify: oggetti, non confronti tra stringhe"
date: 2026-10-31 18:00:00 +0100
categories: Ecommerce
related: [shopify-theme-architecture, dawn-horizon, shopify-popular-themes]
reading_time: 12
audience: dev
---

Il mega menu è uno dei componenti più richiesti in un tema Shopify e uno dei più fragili. Molte implementazioni, anche in temi a pagamento, decidono quale pannello mostrare **confrontando il titolo di una voce di menu con un testo** scritto nelle impostazioni del tema. Funziona il giorno della consegna, poi qualcuno rinomina "Donna" in "Donna & Accessori", o attiva una seconda lingua, e il pannello sparisce senza un errore.

Questo articolo descrive un'architettura diversa: ogni voce del mega menu è un **blocco del tema** che possiede i suoi dati come **oggetti veri**, cioè un menu di navigazione (`link_list`) per le colonne e blocchi annidati per i banner. Nessuna voce viene cercata per nome, quindi non c'è nulla da far combaciare.

### Il pattern da evitare

La versione più diffusa ha questa forma: il menu principale arriva da Navigazione, i pannelli sono blocchi della sezione header con un campo di testo "Titolo della voce", e il codice li accoppia a runtime.

{% raw %}
```liquid
{%- for link in linklists['main-menu'].links -%}
  {%- assign title = link.title | downcase | strip -%}
  <li>
    <a href="{{ link.url }}">{{ link.title }}</a>
    {%- for block in section.blocks -%}
      {%- assign target = block.settings.menu_item | downcase | strip -%}
      {%- if target == title -%}
        {% render 'mega-panel', block: block, link: link %}
      {%- endif -%}
    {%- endfor -%}
  </li>
{%- endfor -%}
```
{% endraw %}

I problemi non stanno nella sintassi, ma nel modello:

- **Il legame è un testo copiato in due posti.** Il titolo vive in Navigazione, la sua copia nell'editor del tema. Chi modifica uno dei due non ha modo di sapere che esiste l'altro.
- **Le traduzioni lo rompono.** Con Translate & Adapt il titolo del link e il testo del blocco si traducono separatamente. Basta una differenza in una lingua (un accento, una maiuscola, un sinonimo) e il pannello sparisce solo in quel mercato.
- **Fallisce in silenzio.** Nessun errore, nessun avviso nell'editor: la voce resta un link semplice. Ci si accorge del problema quando lo segnala un cliente.
- **`link.handle` non risolve.** È il titolo trasformato in handle, quindi cambia con il titolo e ha gli stessi limiti.
- **Anche `linklists['main-menu']` è una stringa.** Se il menu viene duplicato o rinominato, l'header resta vuoto.
- **Costo quadratico.** Per ogni voce si scorrono tutti i blocchi. Con dieci voci è trascurabile, ma è il sintomo di dati che non stanno dove dovrebbero.

Normalizzare le stringhe con `downcase` e `strip` attenua alcuni casi, ma non cambia il fatto che due dati indipendenti devono restare identici a mano.

### Il modello a oggetti

L'idea è rovesciare la dipendenza: invece di partire dal menu e cercare il pannello giusto, si parte dal **blocco**, che contiene già tutto ciò che serve.

{% include diagrams/mega-menu-model.html %}

Ogni voce di primo livello è un blocco con:

- **etichetta e link** della voce;
- un'impostazione di tipo **`link_list`**, cioè un riferimento a un menu creato in Navigazione. Il primo livello del menu diventa l'intestazione delle colonne, il secondo livello i link;
- zero o più **blocchi banner annidati**, ognuno con immagine, testo e link.

Il commerciante gestisce i link dove li gestisce sempre, in Navigazione, con le traduzioni di Translate & Adapt. Nell'editor del tema sceglie il menu da un selettore e carica le immagini: niente testo da riscrivere identico. Se rinomina il menu o una voce, il riferimento resta valido, perché punta all'oggetto e non al nome.

Il prezzo è un menu in Navigazione per ogni pannello ("Mega · Donna", "Mega · Uomo", …). In cambio ogni pannello è indipendente, si può riordinare trascinando il blocco e si può costruire, provare e pubblicare senza toccare gli altri.

{% raw %}
### Struttura dei file

Con i **theme block** (la cartella `blocks/`, introdotta con Horizon) ogni pezzo ha il suo file e il suo schema:[^blocks]

```text
sections/header.liquid
blocks/_mega-menu-item.liquid
blocks/_mega-menu-banner.liquid
assets/mega-menu.css
assets/mega-menu.js
```

Il trattino basso rende i blocchi **privati**: compaiono solo dove una sezione o un blocco li dichiara esplicitamente, non nel selettore generale dell'editor. È quello che serve: un banner del mega menu non ha senso fuori dal mega menu.

### La sezione header

La sezione si limita a dichiarare quali blocchi accetta e a caricare CSS e JavaScript del componente:

```liquid
{{ 'mega-menu.css' | asset_url | stylesheet_tag }}
<script src="{{ 'mega-menu.js' | asset_url }}" type="module" defer></script>

<nav class="mega-menu" aria-label="{{ 'general.navigation' | t }}">
  <mega-menu>
    <ul class="mega-menu__list">
      {% content_for 'blocks' %}
    </ul>
  </mega-menu>
</nav>

{% schema %}
{
  "name": "Header",
  "blocks": [{ "type": "_mega-menu-item" }]
}
{% endschema %}
```

Non c'è nessun ciclo sul menu e nessun confronto: `content_for 'blocks'` rende i blocchi nell'ordine scelto nell'editor.

### Il blocco voce

È il cuore del componente. Lo schema dichiara i dati come tipi di Shopify, non come testo libero:

```liquid
{% schema %}
{
  "name": "Voce mega menu",
  "settings": [
    { "type": "text", "id": "label", "label": "Etichetta" },
    { "type": "url", "id": "link", "label": "Link della voce" },
    { "type": "link_list", "id": "menu", "label": "Menu delle colonne",
      "info": "Primo livello = colonne, secondo livello = link" },
    { "type": "range", "id": "columns", "label": "Colonne per riga",
      "min": 2, "max": 6, "step": 1, "default": 4 }
  ],
  "blocks": [{ "type": "_mega-menu-banner" }],
  "presets": [{ "name": "Voce mega menu" }]
}
{% endschema %}
```

Il markup segue il pattern **disclosure navigation**: il link della voce porta alla pagina di categoria, un pulsante separato apre il pannello.[^apg] Così la voce resta navigabile anche senza JavaScript e il pulsante ha un compito solo.

```liquid
{%- liquid
  assign menu = block.settings.menu
  assign panel_id = 'MegaPanel-' | append: block.id
  assign has_panel = false
  if menu.links.size > 0 or block.blocks.size > 0
    assign has_panel = true
  endif

  assign active = false
  for column in menu.links
    if column.active or column.child_active
      assign active = true
      break
    endif
  endfor
-%}

<li class="mega-menu__item" data-mega-item {{ block.shopify_attributes }}>
  <a class="mega-menu__link"
     href="{{ block.settings.link | default: '#' }}"
     {% if active %}aria-current="true"{% endif %}>
    {{- block.settings.label | escape -}}
  </a>

  {%- if has_panel -%}
    <button class="mega-menu__toggle" type="button"
            aria-expanded="false" aria-controls="{{ panel_id }}"
            data-mega-toggle hidden>
      <span class="visually-hidden">{{ block.settings.label | escape }}</span>
      {{- 'icon-caret.svg' | inline_asset_content -}}
    </button>

    <div class="mega-menu__panel" id="{{ panel_id }}"
         style="--mega-columns: {{ block.settings.columns }}">
      <div class="mega-menu__columns">
        {%- for column in menu.links -%}
          <div class="mega-menu__column">
            <a class="mega-menu__heading" href="{{ column.url }}"
               {% if column.current %}aria-current="page"{% endif %}>
              {{- column.title | escape -}}
            </a>
            {%- if column.links.size > 0 -%}
              <ul class="mega-menu__links">
                {%- for child in column.links -%}
                  <li>
                    <a class="mega-menu__sublink" href="{{ child.url }}"
                       {% if child.current %}aria-current="page"{% endif %}>
                      {{- child.title | escape -}}
                    </a>
                  </li>
                {%- endfor -%}
              </ul>
            {%- endif -%}
          </div>
        {%- endfor -%}
      </div>

      {%- if block.blocks.size > 0 -%}
        <div class="mega-menu__banners">{% content_for 'blocks' %}</div>
      {%- endif -%}
    </div>
  {%- endif -%}
</li>
```

Alcuni dettagli che fanno la differenza:

- **Lo stato attivo arriva da Shopify.** `link.active`, `link.child_active` e `link.current` sono calcolati dalla piattaforma sulla pagina corrente.[^link] Non serve confrontare `request.path` con gli URL a mano.
- **Il pannello esiste solo se ha contenuto.** Un blocco senza menu e senza banner diventa un link semplice, senza pulsante che apre il vuoto.
- **Gli id derivano da `block.id`**, che è stabile e unico: niente id costruiti con `handleize` sull'etichetta.
- **Il numero di colonne è un'impostazione** passata come custom property, non una classe da scegliere tra `cols-3`, `cols-4`, ….
- **`block.shopify_attributes`** sull'elemento radice permette all'editor di selezionare il blocco cliccandolo nell'anteprima.

### Il blocco banner

Ogni banner è un blocco annidato con i suoi dati. L'immagine è un oggetto `image`, quindi Shopify genera da sola le varianti di dimensione:

```liquid
{%- assign image = block.settings.image -%}
{%- assign alt = image.alt | default: block.settings.heading -%}
<a class="mega-banner" href="{{ block.settings.link | default: '#' }}" {{ block.shopify_attributes }}>
  {%- if image -%}
    {{ image | image_url: width: 800 | image_tag:
       widths: '300, 400, 600, 800',
       sizes: '(min-width: 990px) 25vw, 100vw',
       loading: 'lazy',
       class: 'mega-banner__image',
       alt: alt }}
  {%- elsif request.design_mode -%}
    {{ 'image' | placeholder_svg_tag: 'mega-banner__image' }}
  {%- endif -%}
  {%- if block.settings.heading != blank -%}
    <span class="mega-banner__heading">{{ block.settings.heading | escape }}</span>
  {%- endif -%}
</a>

{% schema %}
{
  "name": "Banner",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Immagine" },
    { "type": "text", "id": "heading", "label": "Titolo" },
    { "type": "url", "id": "link", "label": "Link" }
  ],
  "presets": [{ "name": "Banner" }]
}
{% endschema %}
```

`loading: 'lazy'` qui conta più del solito: senza, ogni pagina del negozio scaricherebbe le immagini di tutti i pannelli. Funziona però solo se il pannello chiuso è nascosto con `display: none`: il browser non scarica un'immagine lazy finché il suo contenitore non viene mostrato. Con `visibility: hidden` o `opacity: 0` l'immagine occupa comunque spazio sotto l'header, risulta nel viewport e viene scaricata subito.

Il segnaposto compare solo in `request.design_mode`: nell'editor il commerciante vede dove andrà l'immagine, in negozio un banner senza immagine mostra solo il titolo.

### Il comportamento

Il JavaScript non decide **cosa** mostrare, perché quello è già nel markup. Gestisce solo **quando**: apertura al clic e al passaggio del mouse, chiusura con Esc o uscendo dal menu, sincronizzazione di `aria-expanded`. Un custom element è sufficiente:

```js
class MegaMenu extends HTMLElement {
  connectedCallback() {
    this.toggles = [...this.querySelectorAll('[data-mega-toggle]')];

    for (const toggle of this.toggles) {
      const item = toggle.closest('[data-mega-item]');
      toggle.hidden = false;
      toggle.addEventListener('click', () => this.toggle(toggle));
      // Short delay so panels don't flash while the pointer crosses the bar.
      item.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') this.timer = setTimeout(() => this.open(toggle), 100);
      });
      item.addEventListener('pointerleave', (e) => {
        if (e.pointerType !== 'mouse') return;
        clearTimeout(this.timer);
        this.close(toggle);
      });
    }

    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      const open = this.querySelector('[data-mega-toggle][aria-expanded="true"]');
      if (open) { this.close(open); open.focus(); }
    });

    // Moving focus to another item, or out of the menu, closes the open panel.
    this.addEventListener('focusin', (e) => this.closeAll(this.toggleOf(e.target)));
    this.addEventListener('focusout', (e) => !this.contains(e.relatedTarget) && this.closeAll());

    // Theme editor: selecting a block (or a banner inside it) opens its panel.
    document.addEventListener('shopify:block:select', (e) => {
      const toggle = this.toggleOf(e.target);
      if (toggle) this.open(toggle);
    });
    document.addEventListener('shopify:block:deselect', () => this.closeAll());
  }

  toggleOf(el) {
    return el.closest?.('[data-mega-item]')?.querySelector('[data-mega-toggle]') ?? null;
  }

  open(toggle) {
    this.closeAll(toggle);
    toggle.setAttribute('aria-expanded', 'true');
  }

  close(toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle(toggle) {
    toggle.getAttribute('aria-expanded') === 'true' ? this.close(toggle) : this.open(toggle);
  }

  closeAll(except = null) {
    for (const t of this.toggles) if (t !== except) this.close(t);
  }
}

customElements.define('mega-menu', MegaMenu);
```

Due scelte da notare:

- **Lo stato vive in `aria-expanded`.** Nessuna classe `is-open` da tenere allineata: il CSS legge lo stesso attributo che legge lo screen reader, quindi non possono divergere.
- **Gli eventi dell'editor** (`shopify:block:select`) aprono il pannello quando il commerciante seleziona un blocco o un banner nella barra laterale.[^editor] Senza, modificare un pannello significherebbe tenere il mouse sopra la voce mentre si cambiano le impostazioni.

### Il CSS essenziale

Il pannello si apre quando il pulsante che lo precede ha `aria-expanded="true"`. Prima che il custom element sia registrato, cioè senza JavaScript o mentre si carica, `:not(:defined)` attiva un fallback con `:hover` e `:focus-within`:

```css
.mega-menu__list { display: flex; gap: 1.5rem; position: relative; }

.mega-menu__panel {
  display: none;
  position: absolute;
  inset-inline: 0;
  top: 100%;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  padding: 2rem;
  background: rgb(var(--color-background));
}

.mega-menu__toggle[aria-expanded="true"] + .mega-menu__panel,
mega-menu:not(:defined) .mega-menu__item:is(:hover, :focus-within) > .mega-menu__panel {
  display: grid;
}

.mega-menu__columns {
  display: grid;
  grid-template-columns: repeat(var(--mega-columns, 4), minmax(0, 1fr));
  gap: 1.5rem;
}

.mega-menu__banners { display: grid; grid-auto-flow: column; gap: 1rem; }

@media (max-width: 989px) {
  .mega-menu__list { flex-direction: column; }
  .mega-menu__panel { position: static; grid-template-columns: 1fr; }
  .mega-menu__columns { grid-template-columns: 1fr; }
}
```

Il pannello chiuso usa `display: none` e non `visibility: hidden`, per il motivo visto sopra: è ciò che tiene ferme le immagini lazy dei banner. Il ritardo di 100 ms all'ingresso del mouse, nel JavaScript, evita che i pannelli lampeggino quando il puntatore attraversa la barra per raggiungere altro. Sotto i 990px lo stesso markup diventa una fisarmonica dentro il drawer: un solo HTML, nessuna seconda copia del menu per il mobile.

### Accessibilità, in breve

- Il link della voce **naviga**, il pulsante **apre**: niente link che a volte navigano e a volte no.
- Il pulsante ha `aria-expanded` e `aria-controls`, e un nome accessibile (l'etichetta della voce).
- **Esc** chiude il pannello e riporta il focus sul pulsante; uscire con Tab lo chiude.
- Niente `role="menu"` e `role="menuitem"`: sono pensati per i menu delle applicazioni e impongono una navigazione con le frecce che gli utenti di un sito non si aspettano.[^apg]
- `aria-current` sulle voci attive, calcolato da Shopify.

### Quando usare i metaobject

I metaobject sono l'altra strada per modellare un mega menu come oggetti: una definizione `mega_menu_panel` con campi per il link, le colonne e i banner, scelta nella sezione con un'impostazione di tipo `metaobject_list`.[^metaobject] Non esiste però un tipo di metafield che punti a un menu di Navigazione, quindi le colonne vanno modellate a loro volta come metaobject con liste di link.

| Esigenza | Soluzione |
|---|---|
| Un solo tema, menu gestito da chi gestisce il negozio | **Theme block + `link_list`** |
| Lo stesso menu su più temi, su un sito headless o in un'app | **Metaobject** |
| Menu che cambia per mercato o per segmento di clienti | **Metaobject**, con un riferimento per mercato |
| Banner che devono comparire anche fuori dal menu (home, collezioni) | **Metaobject** riusato in più sezioni |

In entrambi i casi il principio è lo stesso: il pannello è un dato con un'identità, non un testo da far coincidere con un altro testo.
{% endraw %}

### In sintesi

- Decidere quale pannello mostrare **confrontando titoli** lega due dati indipendenti con una copia a mano: si rompe con un cambio di nome o una traduzione, e senza errori.
- Il modello a oggetti parte dal **blocco**: ogni voce del mega menu contiene un riferimento `link_list` per le colonne e **blocchi banner annidati** per le immagini.
- **Theme block privati** (`_mega-menu-item`, `_mega-menu-banner`) tengono schema, markup e dati di ogni pezzo nel suo file.
- Lo **stato attivo** viene da `link.active`, `link.child_active` e `link.current`; gli **id** da `block.id`; le **immagini** da `image_tag` con `loading: 'lazy'`.
- Il **JavaScript** gestisce solo apertura e chiusura, con lo stato in `aria-expanded`; senza JavaScript il menu resta navigabile.
- Per menu condivisi tra temi, canali o mercati conviene modellare i pannelli come **metaobject**.

[^blocks]: Shopify.dev, [Theme blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks).
[^apg]: W3C WAI-ARIA Authoring Practices, [Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).
[^link]: Shopify.dev, [link](https://shopify.dev/docs/api/liquid/objects/link) e [linklist](https://shopify.dev/docs/api/liquid/objects/linklist).
[^editor]: Shopify.dev, [Integrate sections and blocks with the theme editor](https://shopify.dev/docs/storefronts/themes/best-practices/editor/integrate-sections-and-blocks).
[^metaobject]: Shopify.dev, [Input settings: metaobject](https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#metaobject).
