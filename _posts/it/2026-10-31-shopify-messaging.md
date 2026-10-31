---
title: "Shopify Messaging: email, SMS e WhatsApp marketing dall'admin di Shopify"
date: 2026-10-31 12:00:00 +0100
categories: Ecommerce
related: [whatsapp-instagram-shopify, shopify-search-discovery, shopify]
reading_time: 10
---

Per anni l'app nativa di Shopify per il marketing diretto è stata **Shopify Email**: newsletter e qualche automazione, gratis fino a una certa soglia. Oggi la stessa app si chiama **Shopify Messaging** e invia, dallo stesso pannello, campagne e automazioni su **email**, **SMS** e **WhatsApp**.[^fnmain]

Per molti negozi è l'alternativa più semplice a piattaforme come Klaviyo o Omnisend: niente sincronizzazione dei contatti, niente account separato, fattura unica con Shopify. Questa guida spiega cosa fa, quanto costa per canale, come gestisce il consenso e dove si ferma.

### Cosa fa, in una riga

L'app non ha una propria rubrica. Usa i **clienti** e i **segmenti** già presenti nell'admin, invia messaggi sui tre canali e registra cosa succede dopo.

{% include diagrams/messaging-overview.html %}

Il vantaggio principale sta nel primo livello: i dati su ordini, iscrizioni e comportamento sono già in Shopify, quindi un segmento come "ha comprato almeno una volta negli ultimi sei mesi e ha cliccato l'ultima email" non richiede integrazioni.

### I tre canali a confronto

| Canale | Uso tipico | Costo | Disponibilità |
|---|---|---|---|
| **Email** | Newsletter, lanci, automazioni | 10.000 email al mese gratis, poi da $1 ogni 1.000 | Tutti i piani a pagamento |
| **SMS** | Promozioni brevi e urgenti | A messaggio, per paese (Italia: $0,075) | 10 paesi, tra cui l'Italia |
| **WhatsApp** | Campagne con immagini e pulsanti | A messaggio, tariffe per paese (Italia: $0,126 marketing) | Molti paesi, non gli Stati Uniti |

L'app richiede un piano a pagamento (Basic, Grow, Advanced o Plus), il canale Online Store e un metodo di pagamento configurato. I negozi in prova gratuita possono preparare le campagne e inviarle a se stessi come test, ma non agli iscritti.[^fnreq]

### Email

L'email resta il canale principale, ed è quello con il modello di costo più favorevole:[^fnemail]

- **10.000 email gratis** ogni mese di calendario, condivise tra tutte le campagne; quelle non usate non si accumulano.
- Oltre la soglia: **$1 ogni 1.000** fino a 300.000, poi $0,65 fino a 750.000, poi $0,55.
- Le email di **checkout abbandonato** sono sempre gratuite e non contano nelle 10.000. Le altre automazioni sì.
- Il conteggio è per destinatario: una campagna a 8.000 iscritti consuma 8.000 email.

L'editor lavora a blocchi, con modelli pronti e la possibilità di scrivere un modello in codice. **Sidekick**, l'assistente AI dell'admin, genera oggetti e testi, propone l'orario di invio e modifica il layout a partire da una descrizione. **Campaign Autopilot** suggerisce campagne e automazioni, che partono solo dopo l'approvazione del negoziante.

### SMS

Gli SMS si possono inviare a clienti in **Canada, Danimarca, Finlandia, Italia, Lussemburgo, Polonia, Portogallo, Regno Unito, Stati Uniti e Svezia**. Spagna e Austria sono in pausa dall'autunno 2026: non si possono aggiungere nuovi destinatari in questi due paesi.[^fnsmsreq]

| Paese | Prezzo per SMS |
|---|---|
| Stati Uniti | $0,012 |
| Polonia | $0,041 |
| Portogallo | $0,045 |
| Regno Unito | $0,06 |
| Svezia | $0,072 |
| **Italia** | **$0,075** |
| Danimarca | $0,08 |

Tre dettagli incidono sul costo reale:[^fnsmsprice]

- Un messaggio oltre il limite di caratteri viene **diviso e fatturato come più SMS**.
- Anche i messaggi automatici si pagano: conferma dell'iscrizione, doppio opt-in, risposte a parole chiave come INFO o HELP.
- Sono gratuiti fino a **25 SMS di prova** a settimana.

Shopify vieta via SMS intere categorie di prodotto, tra cui alcolici, CBD, armi, gioco d'azzardo e criptovalute. Un negozio di vini, per esempio, deve usare altri canali.

### WhatsApp

Le campagne WhatsApp seguono le tariffe di Meta, che distinguono due tipi di messaggio:[^fnwa]

| Tipo | Quando si applica | Italia |
|---|---|---|
| **Marketing** | Campagne, conferme di iscrizione, risposte a parole chiave | $0,126 |
| **Servizio** | Risposte alle domande dei clienti | $0,03, con 1.000 messaggi gratis al mese per account |

Un messaggio WhatsApp marketing in Italia costa quasi il doppio di un SMS, ma permette immagini, pulsanti e link al prodotto, e viene letto nella stessa app in cui il cliente scrive al negozio. Non si possono inviare campagne WhatsApp a clienti negli Stati Uniti.

Messaging copre la parte **in uscita**, cioè le campagne. La vendita conversazionale, con un assistente che risponde e porta al checkout, è un tema diverso, trattato nell'articolo su [WhatsApp e Instagram con Shopify]({% post_url it/2026-10-18-whatsapp-instagram-shopify %}).

### Il consenso, canale per canale

Ogni canale ha il proprio stato di iscrizione. Un cliente iscritto alla newsletter non è automaticamente iscritto agli SMS, e nessun messaggio marketing parte verso chi non ha dato il consenso per quel canale.

{% include diagrams/messaging-consent.html %}

Le impostazioni da controllare sono poche:[^fncontact]

- **Casella email al checkout.** La preselezione può seguire le regioni consigliate da Shopify o quelle scelte a mano. Per i clienti nell'Unione Europea conviene lasciarla **non spuntata**: per il GDPR una casella già selezionata non vale come consenso.
- **Doppio opt-in.** Il cliente conferma l'iscrizione cliccando un link nell'email. È disattivato di default e si applica solo alle nuove iscrizioni; in Germania Shopify aggiunge una conferma obbligatoria.
- **Casella SMS o WhatsApp.** Una sola casella al checkout, con il canale (SMS o WhatsApp) scelto per regione. Il checkout deve chiedere il numero di telefono.
- **Testi legali.** Per gli SMS i termini di servizio devono indicare frequenza dei messaggi, costi, modalità di disiscrizione e contatti; l'informativa privacy deve nominare i fornitori del servizio.

Un caso a parte: l'automazione di **checkout abbandonato** via email può essere estesa a tutti i clienti, anche non iscritti. In Europa questa scelta va valutata con chi si occupa di privacy, perché un carrello abbandonato non equivale sempre a un consenso al marketing.

### Automazioni

Le automazioni partono da un'azione del cliente e inviano un messaggio sul canale scelto. Quelle disponibili coprono i casi più comuni:[^fnauto]

| Automazione | Scatta quando |
|---|---|
| Benvenuto | Il cliente si iscrive |
| Carrello abbandonato | Aggiunge prodotti ma non avvia il checkout |
| Checkout abbandonato | Avvia il checkout ma non completa l'ordine |
| Navigazione abbandonata | Guarda prodotti senza aggiungerli al carrello |
| Upsell e follow-up | Dopo un acquisto |
| Riattivazione (*win-back*) | Un cliente non compra da tempo |

Per un'automazione su misura, o che coinvolge un'app di terze parti, la strada è **Shopify Flow**, che collega eventi del negozio, condizioni e azioni anche tra app diverse.

### Quanto costa davvero

Un esempio con 10.000 destinatari in Italia, una campagna al mese:

| Canale | Costo mensile |
|---|---|
| Email | $0 (dentro le 10.000 gratuite) |
| SMS | $750 |
| WhatsApp marketing | $1.260 |

Per l'email il costo resta trascurabile anche con liste grandi: 50.000 invii al mese costano $40. Per SMS e WhatsApp il costo cresce in modo lineare con la lista, quindi conviene inviare solo a segmenti mirati (clienti recenti, chi ha cliccato, chi ha un carrello aperto) e lasciare all'email le comunicazioni di massa.

### Quando basta e quando no

| Situazione | Shopify Messaging basta? |
|---|---|
| Newsletter, lanci, automazioni standard | **Sì** |
| Liste fino a qualche decina di migliaia di contatti | **Sì**, con costi molto bassi |
| SMS e WhatsApp in Italia, gestiti nello stesso pannello | **Sì** |
| Flussi complessi con molti rami e condizioni | Parzialmente: con Shopify Flow |
| Analisi predittive (probabilità di acquisto, valore atteso del cliente) | No: piattaforme dedicate |
| Dati da più negozi, app mobile o CRM esterni | No |
| Rapporti dettagliati per singolo contatto | Limitati |

Le piattaforme dedicate costano di più e richiedono una sincronizzazione dei dati, ma offrono segmentazione più fine e strumenti di analisi più completi. Il passaggio ha senso quando il marketing diretto diventa una parte importante del fatturato e c'è qualcuno che lo gestisce in modo continuativo.

<div class="tech" markdown="1">
<p class="eyebrow">Parte tecnica · per sviluppatori</p>

#### Dominio di invio

Senza configurazione, Shopify invia da un sottodominio di `shopifyemail.com`, già autenticato. Per inviare dal proprio dominio (`news@negozio.it`) si collega il dominio nell'admin e si aggiungono i record DNS indicati:[^fndeliv]

```text
; valori esatti forniti dall'admin di Shopify
<selettore>._domainkey.negozio.it   CNAME   <fornito da Shopify>   ; DKIM
<sottodominio>.negozio.it           CNAME   <fornito da Shopify>   ; SPF / return path
_dmarc.negozio.it                   TXT     "v=DMARC1; p=none; rua=mailto:dmarc@negozio.it"
```

Una policy DMARC `p=none` serve a raccogliere i report senza bloccare nulla; dopo qualche settimana di report puliti si può passare a `quarantine`. Gmail e Yahoo richiedono che le segnalazioni di spam restino sotto lo 0,3%; Shopify indica come obiettivo lo 0,1%.

Con segmenti oltre i 1.000 iscritti è attivo di default lo **smart delivery**, che esclude chi non interagisce da tempo. La pulizia della lista (indirizzi non validi, disiscritti, segnalazioni di spam) è sempre attiva.

#### Segmenti

I segmenti usano il linguaggio di query dei clienti di Shopify, lo stesso della pagina Clienti:

```sql
email_subscription_status = 'SUBSCRIBED'
AND customer_added_date > -6m
AND number_of_orders > 0
AND shopify_email.clicked() = true
```

#### Raccolta dei consensi nel tema

Il form newsletter standard dei temi Online Store 2.0 crea già un cliente iscritto all'email:

{% raw %}
```liquid
{%- form 'customer', class: 'newsletter' -%}
  <input type="hidden" name="contact[tags]" value="newsletter">
  <input type="email" name="contact[email]" required
         autocomplete="email" placeholder="{{ 'newsletter.label' | t }}">
  <button>{{ 'newsletter.button_label' | t }}</button>
{%- endform -%}
```
{% endraw %}

Per SMS e WhatsApp il consenso si raccoglie al checkout, oppure con un modulo che registri esplicitamente il consenso SMS.
</div>

### In sintesi

- **Shopify Messaging**, ex Shopify Email, invia campagne e automazioni su **email**, **SMS** e **WhatsApp** dall'admin, usando clienti e segmenti già presenti.
- **Email**: 10.000 invii gratis al mese, poi da $1 ogni 1.000; checkout abbandonato sempre gratis.
- **SMS** in 10 paesi tra cui l'Italia ($0,075 a messaggio); **WhatsApp** con tariffe Meta ($0,126 marketing in Italia).
- Il **consenso è separato per canale**; in Europa le caselle vanno lasciate non spuntate e conviene valutare il doppio opt-in.
- Basta per la maggior parte dei negozi piccoli e medi; per analisi predittive e flussi molto articolati servono piattaforme dedicate.

*Prezzi in dollari, verificati sull'Help Center di Shopify a ottobre 2026.*

[^fnmain]: Shopify Help Center, [Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging).
[^fnreq]: Shopify Help Center, [Requirements for Shopify Messaging](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/requirements).
[^fnemail]: Shopify Help Center, [Email pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/pricing).
[^fnsmsreq]: Shopify Help Center, [SMS requirements](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/sms/requirements).
[^fnsmsprice]: Shopify Help Center, [SMS pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/sms/pricing).
[^fnwa]: Shopify Help Center, [WhatsApp pricing](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/whatsapp/pricing).
[^fncontact]: Shopify Help Center, [Customer contact information](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/customer-contact-information).
[^fnauto]: Shopify Help Center, [Marketing automations](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations); Shopify App Store, [Shopify Messaging](https://apps.shopify.com/shopify-messaging).
[^fndeliv]: Shopify Help Center, [Email deliverability](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/email/deliverability).
