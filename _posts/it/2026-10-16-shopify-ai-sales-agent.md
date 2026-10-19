---
title: "Un assistente AI di vendita su Shopify, già oggi in Italia"
date: 2026-10-16 11:00:00 +0200
categories: Integrations
related: [agentic-commerce, pim, shopify]
reading_time: 5
---

Gli [Agentic Storefronts di Shopify](/blog/agentic-commerce/) portano i prodotti dentro ChatGPT, Copilot e Gemini, ma per ora gli acquisti funzionano solo con clienti negli Stati Uniti. Chi vende in Italia non deve per forza aspettare. Gli stessi mattoni (catalogo leggibile dalle AI, carrello, checkout) si possono già usare per costruire **un agente di vendita proprio**, sul sito o su WhatsApp, con il checkout Shopify di sempre.

### Come funziona

Il flusso è semplice:

1. Il cliente scrive nel widget chat o su WhatsApp: *"cerco un regalo per mia madre, le piace cucinare, budget 60 euro"*.
2. Un **modello AI** (Claude, GPT) capisce la richiesta e decide quali strumenti usare: cerca nel catalogo, legge le policy, controlla le varianti disponibili.
3. Gli strumenti interrogano **il tuo negozio Shopify** e restituiscono prodotti, prezzi e giacenze reali.
4. L'agente propone 2-3 prodotti, risponde alle domande (taglie, tempi di spedizione, resi) e crea il **carrello**.
5. Il cliente apre il link e paga nel **checkout Shopify standard**.

Il punto chiave è il passo 5: il pagamento resta quello del negozio. Satispay, PayPal, Scalapay, carte, IVA, spedizioni e sconti funzionano già, senza nessuna integrazione nuova. L'agente non tocca mai i dati di pagamento.

### Gli strumenti che servono

| Componente | Strumento | A cosa serve |
|---|---|---|
| Catalogo e carrello | **MCP server del negozio** o **Storefront API** | Ricerca prodotti, dettagli delle varianti, creazione del carrello |
| Checkout | URL di checkout del carrello Shopify | Il pagamento avviene sul negozio, come sempre |
| Modello AI | API di **Claude** o **OpenAI** con *tool use* | Capire la richiesta e decidere quali strumenti chiamare |
| Backend | Un piccolo server (**Cloudflare Worker**, oppure un'app Shopify con *app proxy*) | Custodire le chiavi API, limitare gli abusi, tenere i log |
| Interfaccia | Widget chat come **theme app extension** | Si attiva dall'editor del tema, senza modificare il codice del tema |
| Canale extra | **WhatsApp Business Platform** (Cloud API) | Lo stesso agente, sul canale che i clienti italiani usano di più |
| Dati in tempo reale | Integrazione con **ERP** e gestionale | Giacenze affidabili: l'agente non deve proporre prodotti esauriti |
| Stato ordini | **Customer Account API** | "Dov'è il mio ordine?" con il cliente autenticato |
| Misurazione | Attributo sul carrello (es. `source: agent`) | Riconoscere nell'admin gli ordini nati dall'agente |

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

#### MCP o Storefront API?

Ogni negozio Shopify espone un **MCP server** (Model Context Protocol, lo standard con cui i modelli AI chiamano strumenti esterni) all'indirizzo `https://{negozio}.myshopify.com/api/mcp`, senza autenticazione per la ricerca nel catalogo. È il modo più rapido per partire: il modello trova già pronti strumenti come la ricerca prodotti e la gestione del carrello.

Attenzione però: Shopify sta spostando questi strumenti sul nuovo **Universal Commerce Protocol** (UCP). Nella community degli sviluppatori si segnalano un nuovo endpoint (`/api/ucp/mcp`) e strumenti rinominati. Prima di costruirci sopra conviene verificare gli strumenti disponibili sul proprio negozio con una chiamata `tools/list`. Se serve più stabilità, la **Storefront API GraphQL** fa le stesse cose ed è versionata: si scrivono a mano due o tre strumenti (cerca prodotti, dettaglio prodotto, crea carrello) e il modello li usa allo stesso modo.

</div>

### Cosa si ottiene

- **Un commesso sempre disponibile**, che conosce tutto il catalogo e risponde anche di notte.
- **Domande tolte all'assistenza clienti**: spedizioni, resi, taglie, compatibilità.
- **Ricerca in linguaggio naturale**: *"una giacca per la pioggia leggera da mettere in valigia"* funziona anche se nessun prodotto contiene quelle parole.
- **Dati preziosi**: le conversazioni dicono cosa cercano i clienti e cosa non trovano.

### Il progetto minimo

Non serve partire da tutto. Un primo progetto realistico:

1. Widget chat sul sito (theme app extension).
2. Un Cloudflare Worker che chiama il modello AI e gli strumenti del negozio.
3. Tre strumenti: cerca prodotti, dettaglio prodotto, crea carrello.
4. Un prompt di sistema con il tono del brand e le policy principali.

Sono pochi giorni di lavoro. WhatsApp, ERP, stato degli ordini e metriche si aggiungono dopo, quando i primi dati dicono che ne vale la pena.

### Regole e privacy

In Italia non sono dettagli:

- **Trasparenza (AI Act)**: il cliente deve sapere che sta parlando con un sistema AI, non con una persona.
- **GDPR**: aggiorna la privacy policy, scegli fornitori con accordi sul trattamento dei dati e valuta dove vengono elaborati. Molti fornitori di modelli AI offrono elaborazione in UE o la non conservazione dei dati.
- **Niente dati di pagamento nella chat**: con il checkout Shopify il problema non si pone.
- **Limiti chiari**: l'agente non inventa sconti, non promette tempi di consegna non garantiti e passa la conversazione a una persona quando serve.

### E nel frattempo: farsi trovare dagli assistenti esterni

Mentre il checkout dentro ChatGPT e Gemini non arriva in Italia, gli assistenti AI già **consigliano prodotti** e portano traffico al sito. Per comparire:

- **Google Merchant Center**, collegato con l'app *Google & YouTube* di Shopify: AI Mode e le AI Overviews attingono ai prodotti di Google Shopping, e il feed ha nuovi attributi pensati per le domande in linguaggio naturale.
- **Microsoft Merchant Center**, tramite il canale Microsoft per Shopify, per comparire in Copilot e Bing.
- **Dati strutturati** schema.org (`Product`, `Offer`) completi sulle pagine prodotto.
- Un **`robots.txt`** che non blocchi i crawler degli assistenti (`OAI-SearchBot`, `PerplexityBot`, `Google-Extended`).

È lavoro che serve comunque: quando gli Agentic Storefronts arriveranno anche qui, un catalogo già curato partirà avvantaggiato.

### In sintesi

L'ecommerce agentico "ufficiale" in Italia non è ancora arrivato, ma la tecnologia per costruirlo sì. Un agente di vendita sul proprio negozio è un progetto contenuto, usa il checkout Shopify che hai già e ti dà subito dati su come i clienti cercano i prodotti. La parte difficile non è l'AI: sono i **dati di catalogo** e le **integrazioni** con i sistemi aziendali. Se vuoi valutarlo per il tuo negozio, [scrivimi](/contatti/).

*Informazioni aggiornate a ottobre 2026. Gli strumenti AI di Shopify cambiano spesso: verifica sempre la [documentazione ufficiale](https://shopify.dev/docs/agents).*
