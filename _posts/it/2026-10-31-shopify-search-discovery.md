---
title: "Shopify Search & Discovery: filtri, ricerca e raccomandazioni senza app esterne"
date: 2026-10-31 10:00:00 +0100
categories: Ecommerce
related: [shopify, shopify-themes-merchant, shopify-theme-architecture]
reading_time: 10
---

In un negozio con poche decine di prodotti la navigazione si risolve con il menu. Quando il catalogo cresce, il cliente smette di sfogliare e inizia a **cercare e filtrare**: se la ricerca non trova "sneakers" perché il prodotto si chiama "scarpe da ginnastica", o se non esiste un filtro per taglia, la vendita si perde prima ancora di arrivare alla scheda prodotto.

**Search & Discovery** è l'app gratuita di Shopify che gestisce proprio questo strato: **filtri**, **sinonimi e boost** nella ricerca, **raccomandazioni di prodotto** e **analytics** su cosa cercano i clienti.[^fnhelp] Questa guida spiega cosa fa, come si configura, dove conviene affiancarle un'app di terze parti e cosa serve sapere lato tema.

### Cosa fa, in una riga

L'app non contiene prodotti e non disegna pagine. Legge i dati già presenti nel catalogo, aggiunge regole, e lascia al **tema** il compito di mostrarle.

{% include diagrams/search-discovery.html %}

Questa separazione spiega quasi tutti i problemi che si incontrano in pratica: un filtro che "non funziona" spesso dipende da dati prodotto incompleti (primo livello) o da un tema che non supporta i filtri nativi (terzo livello), non dall'app.

### Le quattro aree

| Area | Cosa si configura | Dove si vede |
|---|---|---|
| **Filtri** | Quali filtri mostrare, in che ordine, con quali etichette e raggruppamenti | Pagine collezione e risultati di ricerca |
| **Ricerca** | Sinonimi e prodotti spinti in alto per certe parole | Ricerca e ricerca predittiva |
| **Raccomandazioni** | Prodotti correlati e complementari | Scheda prodotto, carrello (se il tema lo prevede) |
| **Analytics** | Ricerche frequenti, ricerche senza risultati, clic, conversioni | Solo nell'admin |

### Filtri

I filtri si costruiscono a partire da dati che il prodotto ha già:

- **Disponibilità** e **prezzo**, presenti di default.
- **Tipo di prodotto**, **fornitore** (vendor) e **tag**.
- **Opzioni delle varianti**: taglia, colore, materiale.
- **Metafield** di prodotto e di variante: per esempio "vestibilità", "stagione", "compatibile con".
- **Metafield di categoria**, quelli che Shopify propone in base alla tassonomia standard (colore, tessuto, tipo di colletto…).

Per ogni filtro si sceglie l'etichetta mostrata al cliente e la posizione nell'elenco. Due funzioni risolvono problemi molto comuni:

- **Raggruppamento dei valori.** Se il catalogo contiene "Blu", "Navy" e "Blu notte", si possono unire sotto un unico valore "Blu" senza toccare i prodotti.
- **Campioni colore (swatch).** Con i metafield di categoria o i metaobject, il filtro colore mostra un pallino colorato o un'immagine invece del solo testo.

La qualità dei filtri dipende interamente dalla qualità dei dati. Un filtro "Materiale" basato su un metafield compilato solo sul 40% dei prodotti nasconde il restante 60% appena il cliente lo usa. Prima di attivare un filtro conviene verificare che il campo sia compilato in modo completo e coerente; se il catalogo arriva da un PIM o da un ERP, la regola va fissata lì.

### Ricerca: sinonimi e boost

La ricerca di Shopify confronta la parola cercata con titolo, tipo, fornitore, tag, varianti e altri campi del prodotto. Search & Discovery aggiunge due leve.

**Sinonimi.** Un gruppo di sinonimi dice al motore che più parole sono equivalenti: cercando una qualsiasi, si ottengono i risultati di tutte.

| Gruppo | Perché |
|---|---|
| sneakers, scarpe da ginnastica, scarpe sportive | Lessico del cliente diverso da quello del catalogo |
| felpa, hoodie, maglia con cappuccio | Termini inglesi e italiani mescolati |
| tshirt, t-shirt, maglietta | Varianti ortografiche |

Alcune avvertenze pratiche: i sinonimi non si applicano alle corrispondenze esatte su SKU e codice a barre, e un sinonimo di più parole si comporta come una ricerca per frase, quindi l'ordine delle parole conta. Alcuni temi con funzioni di ricerca proprie possono entrare in conflitto con i sinonimi che contengono spazi.

**Boost.** Un boost lega un prodotto a una parola: cercando "regalo", il cofanetto natalizio compare per primo. Va usato con misura: un boost dimenticato dopo una campagna continua a spingere un prodotto magari esaurito o fuori stagione.

### Raccomandazioni di prodotto

Le raccomandazioni sono di due tipi, con logiche diverse:

| Tipo | Come nasce | Esempio |
|---|---|---|
| **Correlati** (*related*) | Calcolati automaticamente da Shopify (acquisti, descrizioni, collezioni), con la possibilità di sovrascriverli a mano | Altre giacche simili a quella che si sta guardando |
| **Complementari** (*complementary*) | Scelti a mano nell'app | La giacca suggerisce cintura e impermeabilizzante |

I correlati funzionano bene su cataloghi ampi e con storico di vendite. I complementari richiedono lavoro manuale, ma sono quelli che aumentano lo scontrino medio, perché propongono ciò che si compra **insieme**, non ciò che si compra **invece**. Su un catalogo grande conviene partire dai prodotti più venduti.

Le raccomandazioni compaiono solo se il tema ha un blocco o una sezione che le mostra (di solito "Prodotti correlati" e "Prodotti complementari" nella scheda prodotto).

### Analytics

La sezione analytics è la parte più sottovalutata dell'app. I report più utili:

- **Ricerche senza risultati.** Ogni voce è una richiesta di un cliente rimasta senza risposta: un sinonimo mancante, un prodotto che non si vende, o un'idea per l'assortimento.
- **Ricerche con pochi clic.** Il motore trova qualcosa, ma non quello che il cliente voleva: segnale per un boost o per rivedere titoli e descrizioni.
- **Ricerche più frequenti.** Dicono cosa mettere in homepage e nel menu.

Una revisione mensile di questi tre report, trasformata in nuovi sinonimi e boost, è spesso il miglioramento con il miglior rapporto tra sforzo e risultato.

### Vantaggi

- **Gratuita e nativa.** Nessun costo, nessuno script esterno, nessun impatto sulle prestazioni del negozio.
- **Funziona con i temi Online Store 2.0** senza modifiche: i temi recenti (Dawn, Horizon e i temi a pagamento aggiornati) supportano già filtri e raccomandazioni.
- **Dati unici.** Filtri, ricerca e raccomandazioni usano gli stessi prodotti, metafield e mercati del resto del negozio, senza sincronizzazioni.
- **Disponibile anche headless.** Filtri e raccomandazioni sono esposti dalla Storefront API.

### Limiti

- **Nessuna personalizzazione per cliente.** I risultati sono uguali per tutti: niente ordinamento in base alla navigazione o agli acquisti precedenti.
- **Merchandising limitato.** Nelle collezioni l'ordine si controlla con gli ordinamenti standard o a mano; mancano regole come "prima i prodotti con più margine" o "nascondi gli esauriti in fondo per collezione".
- **Ricerca poco configurabile.** Non si possono pesare i campi (per esempio dare più importanza al titolo che ai tag) né gestire la tolleranza agli errori di battitura in modo fine.
- **Nessun A/B test** su filtri, boost o raccomandazioni.
- **Dipendenza dai dati.** L'app non pulisce né normalizza il catalogo: se i dati sono disordinati, lo sono anche i filtri.

### Quando serve un'app di terze parti

| Situazione | Search & Discovery basta? |
|---|---|
| Catalogo fino a qualche migliaio di prodotti, dati puliti | **Sì** |
| Serve correggere sinonimi e trovare le ricerche senza risultati | **Sì** |
| Ricerca tollerante agli errori, pesi sui campi, ricerca per immagini | No: app dedicate (Algolia, Klevu, Boost, Searchanise…) |
| Risultati personalizzati per cliente o segmento | No |
| Merchandising a regole per collezione, A/B test | No |
| B2B con cataloghi e prezzi diversi per azienda | Da verificare caso per caso |

Le app di terze parti sostituiscono di solito l'intero strato di ricerca e filtri, con un proprio indice da sincronizzare e spesso un proprio JavaScript sul negozio. Il guadagno in funzioni va pesato rispetto al costo mensile e all'impatto sulle prestazioni.

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

#### I filtri nel tema

Nei temi Online Store 2.0 i filtri arrivano già calcolati nell'oggetto Liquid `collection.filters` (o `search.filters`). Ogni filtro ha un tipo (`list`, `price_range`, `boolean`) e una lista di valori con conteggi e URL:

{% raw %}
```liquid
<form data-filter-form>
  {%- for filter in collection.filters -%}
    <details>
      <summary>{{ filter.label }}</summary>
      {%- case filter.type -%}
        {%- when 'list', 'boolean' -%}
          {%- for value in filter.values -%}
            <label>
              <input type="checkbox"
                     name="{{ value.param_name }}"
                     value="{{ value.value }}"
                     {% if value.active %}checked{% endif %}
                     {% if value.count == 0 and value.active == false %}disabled{% endif %}>
              {{ value.label }} ({{ value.count }})
            </label>
          {%- endfor -%}
        {%- when 'price_range' -%}
          <input type="number" name="{{ filter.min_value.param_name }}"
                 value="{{ filter.min_value.value | money_without_currency }}">
          <input type="number" name="{{ filter.max_value.param_name }}"
                 value="{{ filter.max_value.value | money_without_currency }}">
      {%- endcase -%}
    </details>
  {%- endfor -%}
  <button>Filtra</button>
</form>
```
{% endraw %}

Il form funziona anche senza JavaScript: i filtri sono semplici parametri nell'URL, e questo rende le pagine filtrate anche condivisibili.

```text
/collections/scarpe?filter.v.availability=1
  &filter.v.option.taglia=42
  &filter.p.vendor=Acme
  &filter.p.m.custom.materiale=Pelle
  &filter.v.price.gte=50&filter.v.price.lte=120
```

`filter.p.*` filtra sul prodotto, `filter.v.*` sulla variante, `m.<namespace>.<key>` su un metafield. Il JavaScript del tema serve solo a evitare il ricaricamento della pagina, di solito con la Section Rendering API.

#### Le raccomandazioni

Le raccomandazioni si caricano dopo la pagina, dall'endpoint `/recommendations/products`, che restituisce direttamente l'HTML di una sezione:

```text
/recommendations/products?product_id=123456789
  &limit=4
  &intent=complementary
  &section_id=product-recommendations
```

`intent` vale `related` (default) o `complementary`. Nella sezione, l'oggetto `recommendations.products` contiene i prodotti.

#### Headless: Storefront API

```graphql
query {
  collection(handle: "scarpe") {
    products(first: 24, filters: [
      { available: true }
      { variantOption: { name: "Taglia", value: "42" } }
      { productMetafield: { namespace: "custom", key: "materiale", value: "Pelle" } }
    ]) {
      filters { id label type values { id label count input } }
      nodes { title handle }
    }
  }
  productRecommendations(productHandle: "giacca-trail", intent: COMPLEMENTARY) {
    title
    handle
  }
}
```

Il campo `filters.values.input` restituisce il JSON già pronto da rimandare nella query successiva: non serve ricostruire i filtri a mano.
</div>

### In sintesi

- **Search & Discovery** è l'app gratuita di Shopify per **filtri**, **sinonimi e boost**, **raccomandazioni** e **analytics di ricerca**.
- Non contiene dati né pagine: legge il catalogo e lascia al **tema** la visualizzazione. Filtri buoni richiedono **dati prodotto completi**.
- I report su **ricerche senza risultati** e **ricerche con pochi clic** sono la fonte più semplice di miglioramenti continui.
- Basta per la maggior parte dei negozi piccoli e medi; servono app dedicate per **personalizzazione**, **ricerca avanzata** e **merchandising a regole**.
- Lato tema, i filtri sono **parametri nell'URL** e funzionano anche senza JavaScript.

[^fnhelp]: Shopify Help Center, [Shopify Search & Discovery](https://help.shopify.com/en/manual/online-store/search-and-discovery).
