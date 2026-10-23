---
title: "Shopify Functions: cosa sono, come si usano, vantaggi e limiti"
date: 2026-10-19 15:00:00 +0200
categories: Ecommerce
related: [shopify, shopify-releases, migrations]
reading_time: 11
audience: dev
---

Per anni, se volevi cambiare la logica del carrello o del checkout su Shopify, avevi due strade: un'app che lavorava "da fuori" con webhook e API, oppure gli **Shopify Scripts**, piccoli programmi Ruby riservati ai negozi Plus. Le **Shopify Functions** hanno sostituito entrambe le soluzioni per tutto ciò che riguarda sconti, spedizioni, pagamenti e validazioni: codice tuo che gira **dentro l'infrastruttura di Shopify**, nel momento esatto in cui il carrello viene calcolato.

Questa guida spiega cosa sono, da dove arrivano, come si scrive una function, in quali casi usarle e dove si fermano.
{% raw %}
### Da dove arrivano

| Periodo | Tappa |
|---|---|
| **2016–2017** | Nascono gli **Shopify Scripts** (Script Editor): Ruby, solo Plus, solo checkout tradizionale. |
| **Giugno 2021** (Unite / Editions) | Shopify annuncia le **Functions** insieme alla *Checkout Extensibility*: logica di backend scritta dagli sviluppatori, compilata in WebAssembly. |
| **2022** | Developer preview e prime API in disponibilità generale: gli **sconti** (prodotto, ordine, spedizione). |
| **2023** | Arrivano **delivery customization**, **payment customization**, **cart and checkout validation** e **cart transform** (bundle). |
| **2024** | Si aggiungono **fulfillment constraints**, **order routing** e generatori di opzioni di ritiro. |
| **2025** | **Discount API unificata**: una sola function può applicare sconti su prodotti, ordine e spedizione. |
| **15 aprile 2026** | Gli Scripts non si possono più modificare né pubblicare. |
| **30 giugno 2026** | Gli **Scripts smettono di funzionare**.[^fnscripts] Le Functions sono l'unico modo per personalizzare questa logica. |

Il passaggio non è solo un cambio di linguaggio. Gli Scripts erano codice interpretato, legato al vecchio `checkout.liquid`. Le Functions sono moduli **WebAssembly** distribuiti dentro un'app, versionati con l'app, e funzionano con il checkout a estensioni, con lo Shop Pay, con le API del carrello e con i canali headless.

### Come funzionano

Una function è una funzione pura: **riceve un input, restituisce un output**, e non fa altro.

1. Shopify deve prendere una decisione (quali sconti applicare, quali metodi di pagamento mostrare, se il carrello è valido…).
2. Esegue la **query GraphQL di input** che hai scritto tu, e prepara un JSON con i soli dati richiesti: righe del carrello, cliente, indirizzo, metafield.
3. Passa quel JSON al tuo modulo WebAssembly.
4. Il modulo restituisce un JSON di **operazioni** ("applica il 10% a queste righe", "nascondi questo metodo di pagamento", "blocca il checkout con questo messaggio").
5. Shopify applica le operazioni.

Niente server tuo, niente chiamate di rete, niente stato. Il tutto in pochi millisecondi, su ogni ricalcolo del carrello.

Le function si scrivono in **Rust** (consigliato da Shopify per le prestazioni) o in **JavaScript/TypeScript** (compilati in Wasm con Javy). In teoria va bene qualsiasi linguaggio che compili in WebAssembly con WASI.

### Le API disponibili

Ogni function implementa una specifica **Function API**, che definisce quale input può leggere e quali operazioni può restituire:

| Function API | Cosa fa |
|---|---|
| **Discount** | Sconti su righe, subtotale e spedizione, anche combinati in una sola function |
| **Delivery customization** | Rinomina, riordina o nasconde le opzioni di spedizione |
| **Payment customization** | Rinomina, riordina o nasconde i metodi di pagamento; su Plus anche termini di pagamento B2B |
| **Cart and checkout validation** | Blocca il carrello o il checkout con un messaggio di errore |
| **Cart transform** | Espande, unisce o aggiorna le righe: la base dei bundle |
| **Fulfillment constraints** | Decide quali articoli devono partire insieme o da una certa sede |
| **Order routing location rule** | Ordina le sedi da cui evadere un ordine |
| **Pickup point / local pickup generator** | Genera opzioni di ritiro, anche da servizi esterni |

### Come si crea una function

Le Functions vivono **dentro un'app**: pubblica (App Store) o custom. Il flusso con la Shopify CLI è questo.

**1. Crea l'app e l'estensione**

```bash
shopify app init
cd mia-app
shopify app generate extension --template discount --flavor typescript
```

La CLI crea una cartella in `extensions/` con tre file principali: la configurazione, la query di input e il codice.

**2. La configurazione** (`shopify.extension.toml`)

```toml
api_version = "2025-10"

[[extensions]]
name = "Sconto VIP"
handle = "sconto-vip"
type = "function"

  [[extensions.targeting]]
  target = "cart.lines.discounts.generate.run"
  input_query = "src/cart_lines_discounts_generate_run.graphql"
  export = "cart-lines-discounts-generate-run"
```

**3. La query di input** (`.graphql`)

Si chiede solo ciò che serve: meno dati vuol dire esecuzione più veloce e meno rischio di superare i limiti.

```graphql
query Input {
  cart {
    buyerIdentity {
      customer {
        hasTags(tags: ["VIP"]) { hasTag }
      }
    }
    lines {
      id
      merchandise {
        ... on ProductVariant {
          product { inAnyCollection(ids: ["gid://shopify/Collection/123"]) }
        }
      }
    }
  }
  discount {
    discountClasses
    metafield(namespace: "$app", key: "config") { jsonValue }
  }
}
```

**4. Il codice** (`.ts`)

```ts
import {
  DiscountClass,
  ProductDiscountSelectionStrategy,
  type CartInput,
  type CartLinesDiscountsGenerateRunResult,
} from "../generated/api";

export function cartLinesDiscountsGenerateRun(
  input: CartInput,
): CartLinesDiscountsGenerateRunResult {
  const isVip = input.cart.buyerIdentity?.customer?.hasTags
    .some((t) => t.hasTag);

  if (!isVip || !input.discount.discountClasses.includes(DiscountClass.Product)) {
    return { operations: [] };
  }

  const percentage = input.discount.metafield?.jsonValue?.percentage ?? 10;

  const targets = input.cart.lines
    .filter((l) => l.merchandise.__typename === "ProductVariant"
      && l.merchandise.product.inAnyCollection)
    .map((l) => ({ cartLine: { id: l.id } }));

  if (!targets.length) return { operations: [] };

  return {
    operations: [{
      productDiscountsAdd: {
        candidates: [{
          message: `VIP -${percentage}%`,
          targets,
          value: { percentage: { value: percentage } },
        }],
        selectionStrategy: ProductDiscountSelectionStrategy.First,
      },
    }],
  };
}
```

I nomi dei target e dei tipi cambiano tra una versione dell'API e l'altra: `shopify app function typegen` rigenera i tipi da schema e query, e il compilatore ti dice subito se qualcosa non torna.

**5. Prova in locale e rilascia**

```bash
shopify app function run      # esegue la function su un input JSON
shopify app dev               # la installa sul negozio di sviluppo
shopify app deploy            # crea una nuova versione dell'app
```

**6. Attiva la function sul negozio**

Una function deployata non fa nulla finché non viene **collegata a un oggetto del negozio**: uno sconto, una payment customization, una validazione. Si fa dall'admin (se l'app ha un'interfaccia) o via Admin API:

```graphql
mutation {
  discountAutomaticAppCreate(automaticAppDiscount: {
    title: "Sconto VIP"
    functionHandle: "sconto-vip"
    discountClasses: [PRODUCT]
    startsAt: "2026-11-01T00:00:00Z"
    metafields: [{
      namespace: "$app", key: "config", type: "json",
      value: "{\"percentage\": 15}"
    }]
  }) {
    userErrors { field message }
  }
}
```

I **metafield** sull'oggetto sono il modo standard per configurare la function senza ridistribuire il codice: lo stesso modulo può alimentare dieci sconti diversi, ognuno con i suoi parametri.

### Casi d'uso tipici

**Sconti**
- Sconti a scaglioni (3 pezzi -10%, 5 pezzi -15%) su una collezione.
- Prezzi riservati a clienti con un tag, a un segmento o a una company B2B.
- "Compra X, ricevi Y" con regole che gli sconti nativi non coprono.
- Spedizione gratuita sopra una soglia, ma solo per certi paesi o prodotti.

**Spedizioni**
- Nascondere il corriere espresso per prodotti voluminosi o pericolosi.
- Nascondere la consegna standard verso isole o zone remote.
- Rinominare le opzioni per mostrare i tempi di consegna previsti.

**Pagamenti**
- Nascondere il contrassegno sopra una certa cifra o per i clienti nuovi.
- Mostrare il bonifico solo ai clienti B2B.
- Riordinare i metodi per spingere quello con commissioni più basse.

**Validazioni**
- Quantità minime o massime per prodotto (limiti anti-bagarini nei lanci).
- Bloccare combinazioni non ammesse (prodotti refrigerati con spedizione standard).
- Obbligare un importo minimo d'ordine per i clienti all'ingrosso.

**Bundle e carrello**
- Bundle "scatola regalo" che nel carrello appare come un articolo e in magazzino scarica i singoli componenti.
- Accessori aggiunti come riga collegata al prodotto principale.

**Logistica**
- Spedire insieme gli articoli che non possono essere separati.
- Evadere dal magazzino più vicino o da quello con più stock.

### Vantaggi

- **Girano dentro Shopify.** Nessun server da mantenere, nessun costo di hosting, nessun problema di scalabilità durante il Black Friday.
- **Sono veloci e prevedibili.** WebAssembly con limiti rigidi: Shopify garantisce tempi di esecuzione bassi anche sotto carico.
- **Funzionano ovunque.** Checkout online, Shop Pay, carrello via Storefront API, headless, in molti casi anche POS.
- **Sono versionate.** Vivono nell'app, si rilasciano con `shopify app deploy`, si torna indietro rilasciando una versione precedente.
- **Sono configurabili.** Con i metafield il merchant cambia i parametri senza toccare il codice.
- **Non sono più solo Plus.** Le function dentro un'app pubblica funzionano su tutti i piani. (Le **custom app** con function restano invece riservate a Plus.)[^fnplans]
- **Si testano bene.** Sono funzioni pure: input JSON, output JSON. Un test unitario è un file di fixture e un `expect`.

### Limiti

- **Niente rete, niente stato.** La function non può chiamare un'API esterna né ricordare nulla tra un'esecuzione e l'altra. I dati devono arrivare dalla query di input: metafield su prodotti, clienti, negozio o sull'oggetto della function. (Per alcune API esiste un accesso di rete in sola lettura, riservato ai piani Enterprise.)
- **Limiti di risorse stretti.** Circa **11 milioni di istruzioni** per esecuzione[^fnlimits] (scalati sui carrelli molto grandi), modulo compilato di pochi **centinaia di KB**, input e output con dimensione massima e query di input con un costo massimo. Una logica in JavaScript con molte dipendenze li raggiunge in fretta: è uno dei motivi per cui Shopify consiglia Rust.
- **Solo ciò che l'API prevede.** Ogni Function API ha un insieme chiuso di operazioni. Non puoi, per esempio, cambiare il prezzo di una spedizione con una delivery customization: puoi solo nasconderla, rinominarla o spostarla.
- **Numero di function attive limitato.** Ci sono tetti per tipo (per esempio un massimo di function di payment o delivery customization attive per negozio): una strategia "una function per regola" non scala, meglio una function configurabile.
- **Serve un'app.** Anche per una regola semplice bisogna creare, distribuire e mantenere un'app, con il suo ciclo di versioni.
- **Debug a distanza.** In produzione non puoi aggiungere un `console.log` al volo: si lavora con i log di esecuzione nel Partner/Dev Dashboard e con `shopify app function replay`, che riproduce in locale un'esecuzione reale.
- **API in evoluzione.** Target e nomi delle operazioni cambiano tra versioni (la Discount API unificata del 2025 ne è un esempio): aggiornare l'`api_version` richiede di rileggere il changelog.

### Functions, Flow o app tradizionale?

| Esigenza | Strumento |
|---|---|
| Decidere **durante** il carrello o il checkout (prezzo, opzioni, blocco) | **Shopify Functions** |
| Reagire **dopo** un evento (ordine creato, cliente taggato) | **Shopify Flow** o webhook |
| Mostrare UI nel checkout (campi, banner, upsell) | **Checkout UI extensions** |
| Logica che richiede dati esterni in tempo reale | App con backend che sincronizza i dati in **metafield**, letti poi dalla function |
| Sconti semplici (percentuale, codice, BXGY base) | **Sconti nativi**, nessun codice |

Il pattern più comune nei progetti reali è proprio l'ultimo misto: un backend (o un ERP, o un PIM) aggiorna i metafield con listini, soglie e regole; la function li legge e decide in tempo reale, senza mai uscire da Shopify.

### In sintesi

- Le Shopify Functions sono **moduli WebAssembly** che personalizzano la logica di sconti, spedizioni, pagamenti, validazioni, bundle e logistica.
- Annunciate nel **2021**, mature dal **2023**, dal **30 giugno 2026** sono l'unica alternativa agli **Shopify Scripts**, ormai dismessi.
- Si scrivono in **Rust o JavaScript**, vivono dentro un'**app**, leggono i dati con una **query GraphQL** e restituiscono **operazioni**.
- Sono veloci, scalabili, versionate e funzionano su tutti i canali, ma **non hanno rete né stato** e hanno limiti di risorse stretti.
- La regola pratica: **la function decide, i metafield la configurano, un backend li tiene aggiornati.**
{% endraw %}

[^fnscripts]: Shopify Changelog, [Shopify Scripts can no longer be edited or published](https://changelog.shopify.com/posts/shopify-scripts-can-no-longer-be-edited-or-published); [Shopify Scripts will be deprecated on June 30, 2026](https://shopify.dev/changelog/shopify-scripts-will-be-deprecated-on-june-30-2026).
[^fnlimits]: Shopify.dev, [Shopify Functions](https://shopify.dev/docs/api/functions): limiti di risorse.
[^fnplans]: Shopify.dev, [Shopify Functions](https://shopify.dev/docs/api/functions): le custom app con function richiedono Shopify Plus, le app pubbliche funzionano su tutti i piani.
