---
title: "Vendere su WhatsApp e Instagram con Shopify: l'ecommerce agentico in chat"
date: 2026-10-18 09:00:00 +0200
categories: Ecommerce
related: [agentic-commerce, shopify-ai-sales-agent, shopify]
reading_time: 12
---

Chi ha un negozio online in Italia lo sa: i clienti non scrivono alla mail dell'assistenza, scrivono su **WhatsApp** e nei **messaggi di Instagram**. *"Ce l'avete in M?"*, *"Arriva entro sabato?"*, *"Il blu è più scuro dal vivo?"*. Sono domande di chi vuole comprare, ma spesso restano senza risposta per ore, e il cliente nel frattempo compra altrove.

L'**ecommerce agentico** (*agentic commerce*) porta il negozio dentro la chat. Un **assistente AI** risponde subito, mostra le schede prodotto, aiuta a scegliere taglia e colore e manda il link per pagare. Quando serve una persona, passa la conversazione al **negoziante**, che continua nella stessa chat. Il cliente non deve mai cercare il prodotto sul sito.

In questo articolo vediamo come funziona per un negozio **B2C su Shopify**, cosa serve e quanto costa a grandi linee. Le parti per sviluppatori sono nei riquadri **Parte tecnica**: se non ti interessano, puoi saltarle.

### Cosa vede il cliente

{% include diagrams/whatsapp-journey.html %}

Un esempio concreto, per un negozio di abbigliamento:

1. Il cliente vede un reel con una giacca. Tocca **«Invia messaggio»** e si apre WhatsApp con il messaggio già scritto: *"Ciao, vorrei informazioni sulla giacca Trench Beige"*.
2. L'assistente risponde in pochi secondi con la **scheda prodotto**: foto, nome, prezzo. Chiede la taglia.
3. *"Di solito porto una 44, ma ho le spalle larghe"*. L'assistente legge la guida taglie del negozio e consiglia la 46. Mostra anche il colore verde, disponibile nella stessa taglia.
4. Il cliente aggiunge la giacca al **carrello di WhatsApp** e tocca **«Vai al pagamento»**.
5. Si apre il **checkout Shopify** con il prodotto, la taglia e il colore già inseriti. Paga con carta, PayPal, Satispay o Scalapay, come sul sito.
6. La conferma d'ordine e il tracking della spedizione arrivano nella stessa chat.

Una precisazione importante. Il pagamento **dentro** WhatsApp, senza aprire nessuna pagina, esiste solo in pochi Paesi (India, Brasile, Singapore).[^wapay] In Italia il checkout si apre con un tocco, nel browser interno di WhatsApp, ma è il checkout del tuo negozio. È un vantaggio: valgono i metodi di pagamento, gli sconti, le spese di spedizione e l'antifrode che hai già configurato.

### Il ruolo di Instagram

Instagram è il punto in cui il cliente **scopre** il prodotto. WhatsApp è il punto in cui lo **compra**. Le strade per passare dall'uno all'altro sono diverse:

- **Inserzioni "Clic su WhatsApp"** (*Click-to-WhatsApp*): l'annuncio su Instagram apre direttamente una chat con il negozio. Meta sa quale annuncio ha generato la conversazione, quindi puoi misurarne il ritorno.
- **Pulsante WhatsApp nel profilo** e link nella bio.
- **Tag prodotto** nei post: mostrano prezzo e nome e portano alla pagina prodotto.
- **Messaggi diretti di Instagram**: lo stesso assistente può rispondere anche qui. Per la vendita vera e propria conviene però portare la conversazione su WhatsApp, dove le schede prodotto e il carrello sono più completi.

I prodotti che compaiono su Instagram e su WhatsApp sono gli stessi di Shopify. Li sincronizza l'app gratuita **Facebook & Instagram** di Shopify: aggiorni un prezzo o una giacenza nell'admin e il cambiamento arriva su tutti i canali.

### Quando entra in gioco il negoziante

L'assistente AI è bravo con le domande frequenti: taglie, materiali, spedizioni, resi, disponibilità. Ma ci sono momenti in cui serve una persona. Il passaggio di mano è il cuore del progetto: un buon assistente sa **quando fermarsi**.

{% include diagrams/whatsapp-handoff.html %}

I casi tipici in cui l'assistente passa la conversazione:

- il cliente **chiede di parlare con una persona**;
- c'è un **reclamo** o un problema con un ordine;
- il **carrello è importante** (per esempio sopra i 300 euro) e vale la pena seguirlo personalmente;
- l'assistente **non è sicuro** della risposta: meglio passare la mano che inventare.

Il negoziante riceve un avviso con un **riassunto** della chat: cosa cerca il cliente, quali prodotti ha visto, che taglia porta. Risponde nella stessa conversazione, dal telefono con l'app **WhatsApp Business** oppure dal computer, da una casella condivisa se nel negozio lavorano più persone.

Da lì il negoziante può fare tutto quello che farebbe in negozio:

- inviare **schede prodotto** e liste di prodotti dal catalogo;
- mostrare **varianti e taglie** disponibili in quel momento;
- mandare una **foto o un video** fatto al volo, per far vedere il colore vero o la vestibilità, oppure fare una **videochiamata** (ne parlo più sotto);
- preparare il **carrello** e inviare il link di pagamento, anche con uno sconto dedicato.

Finito il lavoro, può ridare la chat all'assistente, che continua con conferma d'ordine e tracking.

### La videochiamata: il negozio in diretta

A volte una foto non basta. Il cliente vuole vedere come cade un tessuto, il colore vero alla luce del giorno, la differenza tra due modelli. Su WhatsApp la conversazione può diventare una **videochiamata** tra cliente e negoziante, come una visita in negozio ma dal divano di casa.

Funziona così:

1. Il cliente lo chiede (*"posso vederla dal vivo?"*), oppure è l'assistente a proporlo per i prodotti in cui conta molto: abiti da cerimonia, gioielli, arredamento, occhiali.
2. L'assistente **controlla gli orari** del negozio e propone al cliente di chiamare subito o di fissare un appuntamento. Al negoziante arriva l'avviso con il riassunto: chi è il cliente e cosa vuole vedere.
3. Il negoziante chiama **dalla stessa chat**, mostra il prodotto, lo indossa o lo mette accanto ad altri e risponde alle domande.
4. Finita la chiamata, il negoziante manda nella chat le **schede dei prodotti** visti e il **link di pagamento**, magari con uno sconto riservato. Il cliente paga quando vuole, senza perdere il filo.

L'assistente AI **non partecipa** alla chiamata: la prepara prima e chiude la vendita dopo. La videochiamata è il momento più "umano" del percorso, ed è anche quello che converte di più sui prodotti costosi o da toccare con mano.

Due attenzioni pratiche. La chiamata impegna una persona per diversi minuti: conviene riservarla a prodotti e carrelli che lo giustificano, oppure organizzarla su appuntamento in fasce orarie precise. E **non va registrata** senza il consenso esplicito del cliente.

### Lo schema completo

{% include diagrams/whatsapp-overview.html %}

Il punto chiave: **Shopify resta il centro di tutto**. Non c'è un secondo magazzino da tenere allineato, né un secondo listino. Gli ordini nati in chat arrivano nell'admin come quelli del sito, con un'etichetta che ne indica la provenienza: così sai quanto vende WhatsApp.

### Cosa serve al negozio

Prima della tecnologia, servono alcune cose che solo il negozio può preparare:

| Cosa | Perché |
|---|---|
| **Catalogo ordinato** su Shopify | L'assistente consiglia bene solo se titoli, descrizioni, varianti e foto sono chiari |
| **Guida taglie** e tabelle misure scritte | È la domanda più frequente: deve poter rispondere senza inventare |
| **Policy** di spedizione e reso aggiornate | L'assistente le cita testualmente |
| **Account WhatsApp Business** verificato, con un numero dedicato | È il numero che i clienti salvano: meglio quello del negozio che un numero nuovo |
| **App Facebook & Instagram** collegata a Shopify | Porta il catalogo su Instagram e WhatsApp |
| **Una persona di riferimento** e degli orari | Fuori orario l'assistente lo dice e il negoziante riprende il giorno dopo |
| **Il tono del brand** | Dai del tu o del lei? Emoji sì o no? L'assistente parla come il negozio |

### Quanto costa, a grandi linee

I costi si dividono in tre voci:

- **Messaggi WhatsApp.** Meta fa pagare per messaggio, a seconda del tipo. Le **risposte** al cliente entro 24 ore dal suo ultimo messaggio sono **gratuite**[^waprice]: è la maggior parte della conversazione di vendita. Si pagano i messaggi che il negozio invia per primo, come le promozioni e, fuori dalle 24 ore, le notifiche di servizio (conferme e tracking).
- **Modello AI.** Pochi centesimi a conversazione, a seconda della lunghezza e del modello scelto.
- **Sviluppo e manutenzione.** Il lavoro di integrazione, una tantum, più un piccolo costo mensile per il server.

Un primo progetto realistico (assistente su WhatsApp, schede prodotto, carrello e passaggio al negoziante) richiede qualche settimana di lavoro. Il riquadro tecnico qui sotto spiega perché.

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

### Architettura

| Componente | Strumento | Ruolo |
|---|---|---|
| Canale | **WhatsApp Business Platform** (Cloud API di Meta) | Riceve i messaggi via webhook, invia testo, schede prodotto, liste e pulsanti |
| Catalogo Meta | App **Facebook & Instagram** di Shopify → *Commerce Manager* | Lo stesso catalogo alimenta tag Instagram e schede WhatsApp |
| Backend | **Cloudflare Worker** o app Shopify con *app proxy* | Riceve i webhook, custodisce le chiavi, tiene lo stato delle conversazioni |
| Agente | API di **Claude** o **OpenAI** con *tool use* | Capisce la richiesta e decide quali strumenti chiamare |
| Dati negozio | **Storefront API** o MCP server del negozio | Ricerca prodotti, varianti, giacenze, carrello e checkout |
| Ordini | Webhook Shopify `orders/create`, `fulfillments/create` | Conferma e tracking in chat, tramite messaggi *template* |
| Negoziante | App WhatsApp Business in *coexistence*, oppure inbox web | Il negoziante risponde dalla stessa conversazione |

L'agente ha pochi strumenti, ognuno con un compito preciso:

```json
[
  { "name": "cerca_prodotti", "description": "Cerca nel catalogo per testo, categoria o prezzo massimo" },
  { "name": "dettaglio_prodotto", "description": "Varianti, taglie, giacenze e guida taglie di un prodotto" },
  { "name": "invia_schede", "description": "Invia al cliente una o più schede prodotto WhatsApp" },
  { "name": "crea_checkout", "description": "Crea il carrello Shopify e invia il pulsante di pagamento" },
  { "name": "passa_al_negoziante", "description": "Avvisa il negoziante con un riassunto e sospende l'agente" }
]
```

### Schede prodotto e varianti

WhatsApp ha due messaggi interattivi per il catalogo: `product` (una singola scheda) e `product_list` (fino a 30 prodotti divisi in sezioni)[^wampm]. Ogni elemento è identificato dal `product_retailer_id` del catalogo Meta. L'app Facebook & Instagram crea **un elemento per ogni variante** Shopify, raggruppate per prodotto: taglie e colori diventano elementi distinti dello stesso gruppo. Il formato dell'ID va verificato nel Commerce Manager (di solito contiene ID prodotto e ID variante Shopify).

```json
{
  "messaging_product": "whatsapp",
  "to": "39333XXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "product_list",
    "header": { "type": "text", "text": "Trench, taglia 46" },
    "body": { "text": "Ecco i colori disponibili nella tua taglia:" },
    "action": {
      "catalog_id": "CATALOG_ID",
      "sections": [{
        "title": "Disponibili ora",
        "product_items": [
          { "product_retailer_id": "RETAILER_ID_BEIGE_46" },
          { "product_retailer_id": "RETAILER_ID_VERDE_46" }
        ]
      }]
    }
  }
}
```

Le giacenze nel catalogo Meta si aggiornano con un certo ritardo. Prima di mostrare una variante, l'agente controlla la disponibilità in tempo reale con la Storefront API (`availableForSale`, `quantityAvailable`). Per scelte rapide senza catalogo vanno bene anche i messaggi `list` (fino a 10 righe) e `button` (fino a 3 pulsanti).

### Dal carrello WhatsApp al checkout Shopify

Quando il cliente invia il carrello, il webhook riceve un messaggio di tipo `order` con `product_items` (ID, quantità, prezzo). Il backend ricava gli ID variante Shopify e crea il checkout, in due modi:

- **Cart permalink**, il più semplice: `https://negozio.it/cart/45123:1,45124:2?attributes[canale]=whatsapp&utm_source=whatsapp`. Supporta anche `discount=CODICE` per uno sconto dedicato.
- **Storefront API**, `cartCreate` con `attributes` e `buyerIdentity` (telefono, paese per prezzi e valuta corretti). La risposta contiene `checkoutUrl`.

Il link si invia con un messaggio interattivo `cta_url` (pulsante «Vai al pagamento»), più pulito di un URL nel testo. L'attributo `canale: whatsapp` finisce nell'ordine e permette di filtrare e misurare le vendite in chat. Il pagamento avviene sempre sul checkout Shopify: nessun dato di pagamento passa dal backend o dal modello AI.

### Passaggio di mano e stato della conversazione

Ogni conversazione ha uno stato salvato nel backend (Workers KV, D1 o un database): `agente` oppure `negoziante`. Lo strumento `passa_al_negoziante` imposta lo stato, genera il riassunto e invia la notifica. Finché lo stato è `negoziante`, i messaggi in arrivo vengono girati alla inbox e l'agente non risponde. Dopo un timeout, o su comando del negoziante, lo stato torna `agente`.

Con la **coexistence** lo stesso numero è attivo sia sull'app WhatsApp Business sia sulla Cloud API. I messaggi inviati dal negoziante dal telefono arrivano al backend come *echo* (`smb_message_echoes`): se il negoziante scrive, il backend lo rileva e mette in pausa l'agente in automatico. La coexistence ha alcune limitazioni (per esempio su gruppi e alcuni tipi di messaggi): vanno verificate nella documentazione Meta prima di scegliere questa strada.[^wacoex]

### Videochiamate

Le strade sono due, da scegliere in base a come lavora il negozio:

- **App WhatsApp Business sul telefono** (con la coexistence): il negoziante fa chiamate e videochiamate dalla chat come su WhatsApp normale. È la soluzione più semplice e non richiede sviluppo.
- **Calling API** della Cloud API[^wacall]: chiamate gestite da software, utili per una inbox web con più operatori. Il cliente può chiamare il negozio e il negozio può chiamare il cliente dopo avergli chiesto il permesso con un messaggio apposito. Il supporto video, i Paesi abilitati e le tariffe delle chiamate in uscita cambiano spesso: vanno verificati nella documentazione Meta prima di progettare su questa strada.

L'agente ha bisogno di un solo strumento in più, per esempio `proponi_videochiamata`. Controlla gli orari e la disponibilità degli operatori, propone uno slot e, se il cliente accetta, avvisa il negoziante (o crea un evento in calendario) e imposta lo stato della conversazione su `negoziante`. Per gli appuntamenti si può usare anche un'app di prenotazione Shopify già in uso, inviando il link di prenotazione in chat. Dopo la chiamata il negoziante crea il carrello con lo stesso flusso visto sopra, e l'attributo `canale: videochiamata` permette di misurare quanto rendono le chiamate.

### Finestra di 24 ore e template

Entro 24 ore dall'ultimo messaggio del cliente si può rispondere liberamente. Fuori dalla finestra si possono inviare solo **template approvati** da Meta: *utility* per conferme e tracking, *marketing* per promozioni e recupero dei carrelli abbandonati. I template marketing richiedono un consenso esplicito del cliente a ricevere comunicazioni su WhatsApp, da raccogliere e salvare (per esempio come consenso marketing sul cliente Shopify).
</div>

### Regole da rispettare

In Italia e in Europa alcune regole sono obbligatorie, non facoltative:

- **Trasparenza (AI Act).** Il cliente deve sapere che sta parlando con un assistente AI. Basta dirlo nel primo messaggio, con un tono naturale.[^aiact]
- **GDPR.** Aggiorna la privacy policy, scegli fornitori con accordi sul trattamento dei dati e, se possibile, elaborazione in UE.
- **Consenso per il marketing.** Rispondere a chi ti scrive va bene. Inviare promozioni su WhatsApp richiede il consenso esplicito del cliente.
- **Policy di Meta.** Da gennaio 2026 Meta vieta su WhatsApp Business gli assistenti AI *generici*, quelli che rispondono a qualsiasi argomento. Gli assistenti di un'azienda, dedicati ai suoi prodotti e ai suoi clienti, sono consentiti: è proprio il caso di un negozio.[^wapolicy]
- **Niente dati di pagamento in chat.** Con il checkout Shopify il problema non si pone.

### Da dove partire

Non serve fare tutto subito. Un percorso graduale:

1. **Catalogo e app Facebook & Instagram.** Prodotti puliti, varianti coerenti, catalogo collegato a Instagram e WhatsApp. Utile anche da solo.
2. **WhatsApp Business con il negoziante.** Già solo inviare schede prodotto e link di pagamento a mano accorcia molto le vendite in chat.
3. **L'assistente AI** sulle domande frequenti e sulla ricerca prodotti, con passaggio al negoziante.
4. **Carrello e checkout in chat**, notifiche d'ordine, inserzioni "Clic su WhatsApp" e misurazione.

Ogni passo funziona anche senza il successivo, e i dati di quello prima dicono se vale la pena fare quello dopo.

### In sintesi

I clienti italiani vogliono comprare dove già parlano: su WhatsApp, dopo aver visto un prodotto su Instagram. L'ecommerce agentico rende questa chat un negozio vero, con schede prodotto, taglie, carrello e checkout, e con un assistente che risponde subito a qualsiasi ora. Il negoziante non viene sostituito: interviene quando conta, nella stessa conversazione. Shopify resta il centro di prodotti, giacenze e ordini.

Per capire il quadro più ampio, leggi [cos'è l'ecommerce agentico su Shopify](/blog/agentic-commerce/) e [come costruire un assistente AI di vendita](/blog/shopify-ai-sales-agent/). Se vuoi valutarlo per il tuo negozio, [scrivimi](/contatti/).

*Informazioni aggiornate a ottobre 2026. Funzionalità, prezzi e policy di Meta e Shopify cambiano spesso: verifica sempre la documentazione ufficiale di [WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp) e di [Shopify](https://shopify.dev/docs).*

[^wapay]: Meta, Payments API per [India](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/overview) e [Brasile](https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-br/overview); per Singapore, Tech Wire Asia, [WhatsApp now allows in-chat payments in Singapore](https://techwireasia.com/2023/05/as-whatsapp-now-allows-in-chat-payments-in-singapore-should-e-wallet-players-be-concerned/).
[^waprice]: Meta, [WhatsApp Business Platform pricing](https://developers.facebook.com/docs/whatsapp/pricing).
[^wampm]: Meta, [Multi-product messages](https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/multi-product-messages/).
[^wacoex]: Meta, [Onboarding WhatsApp Business app users (coexistence)](https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users).
[^wacall]: Meta, [Calling API](https://developers.facebook.com/docs/whatsapp/cloud-api/calling).
[^aiact]: [Regolamento (UE) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) (AI Act), art. 50: obblighi di trasparenza.
[^wapolicy]: WhatsApp, [Business Solution Terms](https://www.whatsapp.com/legal/business-solution-terms); TechCrunch, [WhatsApp changes its terms to bar general-purpose chatbots from its platform](https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/).
