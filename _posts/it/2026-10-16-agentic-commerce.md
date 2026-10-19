---
title: "Ecommerce agentico su Shopify: cos'è e come prepararsi"
date: 2026-10-16 09:00:00 +0200
categories: Ecommerce
related: [shopify-ai-sales-agent, shopify, pim]
reading_time: 6
---

Fino a ieri il percorso di acquisto partiva da Google o dai social e finiva sul sito del negozio. Oggi una parte crescente delle ricerche avviene dentro un assistente AI: *"trovami delle scarpe da trail impermeabili sotto i 150 euro"*. È l'assistente a confrontare i prodotti e, sempre più spesso, a portare il cliente fino al pagamento. Si chiama **ecommerce agentico** (*agentic commerce*): il cliente delega a un agente AI una parte del lavoro di ricerca e acquisto.

Shopify ha costruito un'infrastruttura apposita, ma in Italia se ne parla ancora poco. Vediamo cosa offre, come funziona e cosa conviene fare già da ora.

### Agentic Storefronts: il canale di vendita per gli assistenti AI

Con la **Winter '26 Edition** (dicembre 2025) Shopify ha introdotto gli **Agentic Storefronts**: un canale di vendita, come Facebook o Google, che rende i prodotti del negozio disponibili agli assistenti AI. Si gestisce dall'admin in *Impostazioni → Canali di vendita* e, per i negozi idonei, è **attivo di default**.

I canali supportati, secondo la [documentazione ufficiale di Shopify](https://www.shopify.com/blog/how-agentic-commerce-works) (aggiornata a giugno 2026):

- **ChatGPT**: i prodotti compaiono nelle conversazioni e l'acquisto si completa sul sito del negozio, aperto in un browser dentro l'app.
- **Microsoft Copilot**: prodotti visibili tramite lo Shopify Catalog. Per i negozi idonei il pagamento può avvenire direttamente in Copilot (*Copilot Checkout*).
- **AI Mode di Google Search e app Gemini**: checkout nativo dentro l'interfaccia AI, per ora per una selezione di negozi statunitensi.

Non servono app né integrazioni custom. Shopify non applica **commissioni aggiuntive** oltre a quelle standard di pagamento. Il negozio resta *merchant of record*: ordini, pagamenti, tasse, antifrode e spedizioni passano dall'infrastruttura Shopify e gli ordini arrivano nell'admin come quelli di qualsiasi altro canale.

### Come funziona dietro le quinte

**Shopify Catalog** è l'indice globale dei prodotti di tutti i negozi Shopify. Prende i dati dall'admin (titoli, descrizioni, varianti, prezzi, disponibilità) e li normalizza. Con modelli di machine learning e i segnali delle transazioni ricava anche attributi che mancano. Ogni modifica a prezzi e giacenze arriva a tutti i canali AI.

Il secondo pezzo è lo **Universal Commerce Protocol (UCP)**, uno standard aperto sviluppato da Shopify e Google e presentato a gennaio 2026 alla NRF di New York. Definisce come un agente gestisce carrello, checkout, pagamento e post-vendita con qualsiasi negozio, senza un'integrazione diversa per ogni piattaforma. Se l'agente non riesce a completare l'acquisto da solo, per esempio perché serve un metodo di pagamento nuovo, il protocollo passa la mano al cliente con un checkout incorporato. Tra chi lo supporta ci sono Microsoft, Amazon, Stripe, Visa e Mastercard.

### Il punto dolente: per ora solo clienti negli Stati Uniti

Ad oggi gli acquisti tramite Agentic Storefronts sono disponibili **solo per clienti negli Stati Uniti**, ovunque si trovi il negozio. Per ChatGPT e Copilot basta vendere negli USA. Google AI Mode e Gemini sono limitati a una selezione di negozi con sede negli USA. Shopify dice che i negozi saranno pronti *by default* quando i partner AI si espanderanno in altre regioni, ma una data per l'Europa non c'è.

In pratica:

- se vendi **anche negli Stati Uniti** (moda, design, food, artigianato italiano: categorie che lì funzionano bene), il canale ti riguarda già;
- se vendi **solo in Italia o in Europa**, hai un vantaggio di tempo per prepararti prima che il canale arrivi anche qui.

Non serve nemmeno aspettare: un agente di vendita si può già costruire sul proprio negozio, con il checkout Shopify standard. Ne parlo in [un assistente AI di vendita su Shopify, già oggi in Italia](/blog/shopify-ai-sales-agent/).

### Cosa fare già da ora

Gli assistenti AI non guardano il tema né le foto d'atmosfera: leggono **dati**. Un prodotto descritto male è un prodotto che l'agente non consiglia. La preparazione è soprattutto lavoro sul catalogo:

1. **Dati prodotto completi e strutturati.** Titoli chiari, descrizioni che rispondono alle domande vere (materiali, misure, compatibilità, uso), varianti coerenti e la **categoria prodotto** standard di Shopify compilata.
2. **Metafield per gli attributi.** Taglia, colore, materiale, certificazioni: meglio in campi strutturati che nascosti dentro un paragrafo di testo.
3. **Prezzi e giacenze affidabili in tempo reale.** Se il catalogo dice "disponibile" e il magazzino no, l'agente propone un prodotto che non puoi spedire. Qui contano le integrazioni con ERP e gestionale.
4. **Policy compilate.** Resi, spedizioni, privacy e termini di servizio devono essere presenti: sono tra i requisiti per l'idoneità.
5. **Il sito leggibile dalle macchine.** Dati strutturati (schema.org) sulle pagine prodotto e un `robots.txt` che non blocchi i crawler degli assistenti. Shopify offre uno strumento gratuito di *agentic readiness audit* che controlla proprio questi punti.
6. **Misurare.** Il traffico dai canali AI ha una sua attribuzione nell'admin. Tienilo d'occhio per capire quali prodotti vengono scelti dagli agenti.

Tutto questo migliora già da ora anche la SEO classica e Google Shopping. Non è lavoro sprecato, anche se il canale agentico arriverà in Italia più tardi del previsto.

### Per chi non usa Shopify: l'Agentic Plan

Shopify ha lanciato anche lo **Shopify Agentic Plan**, pensato per i brand che vendono su altre piattaforme (WooCommerce, Magento, sistemi custom o basati su SAP) e vogliono essere presenti nei canali AI senza migrare. Permette di caricare i prodotti nello Shopify Catalog e vendere tramite gli Agentic Storefronts. Non c'è un abbonamento mensile: si pagano le commissioni di pagamento sulle vendite e il piano si integra con PIM, gestione fiscale e sistemi di gestione ordini già in uso. Anche qui valgono gli stessi limiti geografici.

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

### Costruire agenti sul commercio Shopify

Il protocollo è aperto anche dall'altra parte: chi costruisce un agente o un assistente può usare gli **MCP server** di Shopify (Model Context Protocol, lo standard con cui i modelli AI chiamano strumenti esterni). Dalla [documentazione per sviluppatori](https://shopify.dev/docs/agents):

- **Catalog**: ricerca prodotti su tutti i negozi Shopify oppure su un singolo negozio;
- **Cart MCP** e **Checkout MCP**: creano e modificano il carrello nel corso della conversazione e lo trasformano in checkout. Il pagamento avviene sul sito del negozio, oppure direttamente se l'agente ha un livello di fiducia sufficiente;
- **Order MCP** e webhook: stato dell'ordine, spedizioni, resi e rimborsi;
- **UCP CLI** e uno *skill* `ucp` per Claude Code, Cursor e VS Code, per sviluppare più in fretta.

</div>

Per un brand questo significa poter costruire un **assistente di vendita proprio**, sul sito o in un'app, che usa gli stessi mattoni degli assistenti generalisti.

### In sintesi

L'ecommerce agentico non sostituisce il sito: ne diventa un'estensione. Il cliente scopre e sceglie nell'assistente, ma l'ordine, il pagamento e la relazione restano del negozio. Shopify ha reso l'accesso quasi automatico e la vera differenza la fa la **qualità dei dati di catalogo**. In Italia il canale non è ancora aperto: è il momento giusto per mettere in ordine prodotti, attributi e integrazioni, così da non partire in ritardo quando arriverà.

*Informazioni aggiornate a ottobre 2026, basate sulle fonti ufficiali Shopify. Canali e disponibilità cambiano spesso: verifica nell'admin del tuo negozio.*
