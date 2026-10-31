---
title: "Shopify Checkout Blocks: personalizzare il checkout senza scrivere codice"
date: 2026-10-31 15:00:00 +0100
categories: Ecommerce
related: [shopify-functions, shopify, shopify-releases]
reading_time: 10
---

Il checkout è la pagina più delicata di un negozio: ogni elemento in più può aumentare lo scontrino o far abbandonare il carrello. Per anni su Shopify personalizzarlo significava modificare `checkout.liquid` (solo Plus) o incollare script nelle "Additional scripts" della pagina di ringraziamento. Entrambe le strade sono state chiuse: il checkout oggi si estende solo con **app**, tramite **checkout UI extension** e **Shopify Functions**.

**Checkout Blocks** è l'app gratuita di Shopify che rende questo modello accessibile senza sviluppatori: si aggiungono contenuti, campi e offerte al checkout, e si creano regole su sconti, pagamenti e spedizioni, tutto dall'admin.[^fnapp] Questa guida spiega cosa fa, su quali piani, come si usa e quando conviene passare a un'estensione su misura.

### Da dove arriva

| Periodo | Tappa |
|---|---|
| **Fino al 2022** | Il checkout si personalizza con `checkout.liquid` (solo Plus) e con gli script nelle pagine post-acquisto. |
| **2022–2023** | Arriva la **Checkout Extensibility**: checkout UI extension, Shopify Functions, pixel nei Customer events, editor visuale del checkout. |
| **2023** | Shopify lancia **Checkout Blocks**: un'app che genera estensioni e function senza codice. |
| **Agosto 2024** | `checkout.liquid` smette di funzionare per le pagine informazioni, spedizione e pagamento (Plus). |
| **Agosto 2025** | Le pagine Thank you e Stato dell'ordine basate su script vengono dismesse per i negozi Plus. |
| **Agosto 2026** | Stessa dismissione per tutti gli altri piani: ciò che era negli "Additional scripts" va spostato su app e pixel. |

### Dove si possono mettere i blocchi

La prima domanda è sempre il piano. I tre passaggi del checkout vero e proprio si personalizzano solo su **Shopify Plus**; le pagine dopo l'acquisto su **tutti i piani**.

{% include diagrams/checkout-pages.html %}

Per un negozio non Plus, quindi, Checkout Blocks serve soprattutto a migliorare la **Thank you** e la pagina **Stato dell'ordine**: messaggi post-acquisto, campi per raccogliere informazioni, offerte per il prossimo ordine. Sono pagine viste da tutti i clienti e spesso lasciate vuote.

### Come funziona

Checkout Blocks è un generatore. Ciò che si configura nell'admin diventa, sotto il cofano, le stesse due cose che scriverebbe uno sviluppatore:

{% include diagrams/checkout-blocks.html %}

- I **blocchi** sono checkout UI extension: componenti visibili, inseriti nelle posizioni consentite dall'editor del checkout.
- Le **Functions** sono logica eseguita da Shopify mentre calcola il carrello: decidono quali sconti applicare, quali metodi mostrare, se l'ordine può procedere.

Entrambi accettano **condizioni**: valore del carrello, prodotti o collezioni presenti, tag del cliente, paese o mercato, lingua, quantità. Un blocco o una regola si attiva solo quando le condizioni sono vere.

### I blocchi

| Blocco | Uso tipico |
|---|---|
| **Contenuto** (testo, immagine, banner) | Tempi di consegna, politica di reso, avvisi stagionali |
| **Icone e badge di fiducia** | Pagamento sicuro, reso gratuito, assistenza |
| **Campi personalizzati** (testo, scelta, casella, data) | Codice fiscale, partita IVA, data di consegna desiderata, messaggio regalo |
| **Offerte di prodotto** (upsell) | Accessorio o prodotto complementare aggiunto con un clic |
| **Contenuto dinamico** | Messaggio diverso per clienti B2B, per paese o sopra una soglia |

I campi personalizzati salvano i dati sull'ordine (attributi o metafield), quindi sono visibili nell'admin e disponibili per Flow, per le email e per le integrazioni con il gestionale.

Le regole di buon senso valgono anche qui: pochi blocchi, testi brevi, nessuna distrazione prima del pulsante di pagamento. L'upsell nel checkout funziona quando il prodotto proposto è economico e chiaramente collegato a ciò che è nel carrello; altrimenti trova più spazio nella pagina Thank you, quando l'acquisto è già concluso.

### Le Functions senza codice

| Regola | Esempi |
|---|---|
| **Sconti** | Sconto a scaglioni sul totale, spedizione gratuita sopra una soglia per certi mercati, omaggio sopra un importo |
| **Personalizzazione pagamenti** | Nascondere il contrassegno sopra una cifra, mostrare il bonifico solo ai clienti B2B, riordinare i metodi |
| **Personalizzazione spedizioni** | Nascondere l'espresso per prodotti voluminosi, rinominare un metodo con i tempi previsti |
| **Validazioni** | Quantità minima o massima per prodotto, blocco delle caselle postali, importo minimo per i grossisti |

Prima di Checkout Blocks ognuna di queste regole richiedeva un'app di terze parti o una function scritta su misura. Ora molte si risolvono con un modulo nell'admin.

### Come si configura

1. Installare **Checkout Blocks** dall'App Store di Shopify.
2. Creare un blocco o una regola dall'app, scegliere il contenuto e le condizioni.
3. Aprire l'**editor del checkout** (Impostazioni → Checkout → Personalizza) e trascinare il blocco nella posizione desiderata.
4. Provare il checkout con un carrello che soddisfa le condizioni e con uno che non le soddisfa.
5. Pubblicare.

Le regole basate su Functions non hanno una posizione: si attivano dall'app e agiscono su tutto il checkout.

### Vantaggi

- **Gratuita** per le funzioni principali e sviluppata da Shopify: segue gli aggiornamenti della piattaforma.
- **Nessun codice e nessuna app da mantenere.** Le modifiche le fa chi gestisce il negozio, senza rilasci.
- **Sicura e veloce.** Blocchi e function girano dentro l'infrastruttura di Shopify, compatibili con Shop Pay e con gli aggiornamenti del checkout.
- **Condizioni integrate.** Lo stesso blocco può mostrare contenuti diversi per mercato, cliente o carrello.
- **Sostituisce molte app piccole**: badge di fiducia, campi aggiuntivi, nascondi-pagamenti, quantità minime.

### Limiti

- **Il checkout vero e proprio è solo Plus.** Sugli altri piani si lavora solo sulle pagine post-acquisto.
- **Posizioni e stile fissi.** I blocchi vanno solo dove l'editor lo consente e seguono il branding del checkout: niente CSS libero, niente layout su misura.
- **Nessun dato esterno.** I blocchi non chiamano API esterne e le condizioni usano solo i dati di Shopify: per mostrare il punteggio fedeltà di un CRM serve un'estensione su misura.
- **Regole con un perimetro chiuso.** Condizioni e azioni sono quelle previste dall'app; logiche più complesse richiedono una function scritta a mano.
- **Alcune funzioni avanzate sono a pagamento** o riservate a Plus; il perimetro cambia nel tempo e va verificato sulla pagina dell'app.
- **Tracciamento a parte.** Pixel e conversioni non passano da Checkout Blocks ma dai **Customer events** di Shopify.

### Checkout Blocks o estensione su misura?

| Esigenza | Strumento |
|---|---|
| Testi, banner, badge, campi, upsell semplici | **Checkout Blocks** |
| Nascondere o rinominare metodi, sconti e validazioni con regole standard | **Checkout Blocks** |
| Dati da un sistema esterno (fedeltà, disponibilità in negozio, preventivi) | **Checkout UI extension** su misura con backend |
| Logica di sconto o di validazione fuori dalle regole dell'app | **Shopify Function** su misura |
| Pixel di tracciamento e conversioni | **Customer events** (web pixel) |

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

#### Quando l'app non basta

Un blocco su misura è una **checkout UI extension** dentro un'app (pubblica o custom). Si crea con la Shopify CLI:

```bash
shopify app generate extension --template checkout_ui
```

La configurazione dichiara il **target**, cioè dove il blocco può comparire:

```toml
api_version = "2025-10"

[[extensions]]
name = "Punti fedeltà"
handle = "punti-fedelta"
type = "ui_extension"

  [[extensions.targeting]]
  module = "./src/Checkout.jsx"
  target = "purchase.checkout.block.render"

  [extensions.capabilities]
  network_access = true
```

`purchase.checkout.block.render` è un target dinamico: il blocco si posiziona dall'editor, come quelli di Checkout Blocks. Per le pagine dopo l'acquisto si usa `purchase.thank-you.block.render` o `customer-account.order-status.block.render`.

Dalla versione `2025-10` le estensioni usano Preact e i componenti web di Polaris:

```jsx
import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [points, setPoints] = useState(null);
  const customer = shopify.buyerIdentity?.customer?.value;

  useEffect(() => {
    if (!customer) return;
    fetch(`https://loyalty.example.com/points/${encodeURIComponent(customer.id)}`)
      .then((r) => r.json())
      .then((d) => setPoints(d.points));
  }, [customer?.id]);

  if (points === null) return null;

  return (
    <s-banner heading="Programma fedeltà" tone="info">
      Con questo ordine il saldo arriva a {points} punti.
    </s-banner>
  );
}
```

Le estensioni girano in un ambiente isolato (web worker): niente accesso al DOM, niente CSS, solo i componenti forniti da Shopify. L'accesso alla rete (`network_access`) va richiesto nella configurazione e approvato da Shopify per le app pubbliche. Il blocco è leggero da scrivere, ma richiede un'app, un backend e un ciclo di rilascio: per contenuti statici o regole standard Checkout Blocks resta la scelta più economica.

La logica (sconti, metodi, validazioni) segue invece il modello delle [Shopify Functions](/blog/shopify-functions/).
</div>

### In sintesi

- **Checkout Blocks** è l'app gratuita di Shopify per personalizzare checkout e pagine post-acquisto **senza codice**.
- Genera due cose: **blocchi** (checkout UI extension) per ciò che il cliente vede, **Functions** per sconti, pagamenti, spedizioni e validazioni.
- Il checkout vero e proprio è personalizzabile solo su **Plus**; **Thank you** e **Stato dell'ordine** su tutti i piani, ed è lì che i negozi non Plus trovano più valore.
- Copre la maggior parte delle esigenze comuni; per **dati esterni** o **logiche fuori standard** servono un'estensione o una function su misura.
- Con la fine di `checkout.liquid` e degli Additional scripts, è il punto di partenza naturale per qualsiasi personalizzazione del checkout.

[^fnapp]: Shopify App Store, [Shopify Checkout Blocks](https://apps.shopify.com/checkout-blocks).
