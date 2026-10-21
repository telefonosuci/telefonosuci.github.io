---
title: "Dawn e Horizon: i due temi di riferimento di Shopify a confronto"
date: 2026-10-21 09:00:00 +0200
categories: Ecommerce
related: [shopify, shopify-releases, migrations]
reading_time: 8
audience: dev
---

Per quattro anni **Dawn** è stato il tema di partenza di quasi ogni negozio Shopify: gratuito, veloce, open source, base di tutti i temi gratuiti ufficiali. Nel 2025 Shopify ha presentato **Horizon**, che lo ha sostituito come tema predefinito per i nuovi negozi. Non è un Dawn rinnovato: è un'architettura diversa, costruita su un'idea diversa di chi deve poter modificare il negozio e come.

Questo articolo racconta da dove vengono i due temi, in cosa si differenziano, i punti di forza di ciascuno e perché Shopify ha sentito il bisogno di ricominciare da capo.
{% raw %}
### La storia di Dawn

Dawn esce il **29 giugno 2021**, insieme a **Online Store 2.0**, la più grande revisione dei temi Shopify fino a quel momento. Online Store 2.0 introduce:

- i **template JSON**, che portano le *sezioni* su tutte le pagine (prima erano limitate alla home);
- le **app block**, che permettono alle app di inserirsi nel tema come blocchi trascinabili, senza toccare il codice;
- i **metafield dinamici** collegabili direttamente dall'editor.

Dawn nasce come **tema di riferimento**: il modello di come Shopify pensa debba essere scritto un tema 2.0. I principi dichiarati sono chiari: **HTML first**, JavaScript solo quando serve, componenti piccoli, mobile first, un insieme di funzionalità volutamente ridotto. Il codice è pubblico su GitHub e diventa in fretta il punto di partenza di agenzie e freelance per i temi personalizzati, oltre che la base di tutti i temi gratuiti ufficiali (Refresh, Sense, Craft, Studio, Crave e gli altri sono varianti di Dawn).

### La storia di Horizon

Horizon viene presentato con la **Summer '25 Edition** (maggio 2025). Più che un singolo tema è una **famiglia**: un unico codice da cui nascono dieci temi gratuiti con stili diversi (Horizon, Atelier, Dwell, Fabric, Heritage, Pitch, Ritual, Savor, Tinker e Vessel). Da quel momento è il tema predefinito per i nuovi negozi.

Il README del repository riassume i principi in quattro punti:

- **Web-native**: usa a fondo le funzioni dei browser moderni, con *progressive enhancement* invece dei polyfill.
- **Lean and fast**: le funzionalità sono escluse per default, un tema non deve supportare tutto ciò che Shopify offre.
- **Server-rendered**: l'HTML lo genera Shopify con Liquid; il JavaScript lato client serve solo per il rendering asincrono o su richiesta.
- **Functional, not pixel-perfect**: markup semantico e un risultato che funziona ovunque, anche se non identico al pixel su ogni browser.

Fin qui sembra Dawn. La differenza vera sta nel modo in cui il tema è costruito: Horizon è il primo tema ufficiale progettato **interamente sui theme block**.

### La differenza chiave: sezioni contro blocchi

In **Dawn** l'unità di composizione è la **sezione**. Ogni sezione definisce nel suo schema i blocchi che accetta, e quei blocchi esistono solo lì dentro. Il risultato:

- un blocco "testo" o "pulsante" va riscritto (o copiato) in ogni sezione che lo vuole;
- la nidificazione è molto limitata: sezione → blocco, e poco altro;
- il layout interno di una sezione è deciso dallo sviluppatore. Il commerciante può riordinare i blocchi, ma non può, per esempio, mettere due colonne dentro una sezione che non le prevede.

In **Horizon** l'unità di composizione è il **theme block**: un file Liquid nella cartella `blocks/`, definito una volta a livello di tema e riutilizzabile in qualunque sezione che lo accetti.

```json
{
  "name": "Sezione libera",
  "blocks": [{ "type": "@theme" }, { "type": "@app" }]
}
```

```liquid
{% content_for 'blocks' %}
```

I theme block possono contenere altri blocchi, quindi si costruiscono strutture annidate: un **gruppo** che contiene una colonna, che contiene un'immagine e un testo con un pulsante. Le sezioni diventano contenitori quasi vuoti, e il layout lo compone il commerciante dall'editor. Per le parti che invece devono restare fisse (per esempio il blocco prezzo nella pagina prodotto) esistono i **blocchi statici**, che lo sviluppatore posiziona nel codice e il commerciante può solo configurare.

### Le altre differenze

| | **Dawn** | **Horizon** |
|---|---|---|
| Anno | 2021 (Online Store 2.0) | 2025 (Summer '25 Edition) |
| Unità di composizione | Sezioni con blocchi propri | Theme block riutilizzabili e annidabili |
| Libertà di layout per il commerciante | Riordino di sezioni e blocchi | Composizione libera, gruppi, colonne, impostazioni per blocco |
| JavaScript | Custom element leggeri, molto contenuto | Web component più strutturati, più logica lato client |
| Funzionalità incluse | Essenziali | Più ricche (mega menu, quick add, filtri e card prodotto più configurabili) |
| AI nell'editor | No | Generazione di blocchi da descrizione testuale |
| Temi derivati ufficiali | Refresh, Sense, Craft, Studio, Crave… | Atelier, Dwell, Fabric, Heritage, Pitch… |
| Ritmo di aggiornamento | Lento, ormai in manutenzione | Frequente |
| Contributi esterni | Aperto a issue e pull request | Repository pubblico, contributi non accettati |

Un dettaglio importante per chi sviluppa: il README di Horizon dice esplicitamente che **i temi derivati da Horizon non possono essere inviati al Theme Store**. Per chi costruisce un tema commerciale Shopify indica come base lo **Skeleton theme**; Horizon resta un ottimo modello da studiare, e una base legittima per un tema personalizzato su un singolo negozio.

### Punti di forza di Dawn

- **Prestazioni**: pochissimo JavaScript, ottimi punteggi Core Web Vitals anche su mobile senza interventi.
- **Leggibilità**: il codice è semplice, lineare, facile da capire e modificare. È ancora uno dei modi migliori per imparare Liquid.
- **Maturità**: anni di utilizzo, bug noti risolti, migliaia di personalizzazioni documentate nella community.
- **Compatibilità con le app**: molte app si agganciano al DOM di Dawn (per esempio al selettore delle varianti) e lo danno per scontato.
- **Prevedibilità**: il commerciante ha meno libertà, quindi è più difficile "rompere" il design.

### Punti di forza di Horizon

- **Libertà di layout senza codice**: il commerciante compone pagine complesse dall'editor, senza chiedere una sezione nuova allo sviluppatore per ogni variante.
- **Riuso**: un blocco si scrive una volta e vale ovunque. Meno codice duplicato, meno incoerenze tra sezioni.
- **Meno page builder**: molte esigenze che prima richiedevano un'app esterna di page building (con il suo peso sul frontend) ora sono coperte dal tema.
- **AI integrata**: blocchi generati da una descrizione ("un banner per i saldi stagionali") direttamente nell'editor.
- **Funzionalità moderne incluse**: più componenti pronti, senza dover acquistare un tema premium.
- **Allineato al futuro della piattaforma**: le novità dei temi Shopify vengono pensate e dimostrate prima su Horizon.

### Perché è stato necessario creare Horizon

Dawn ha fatto bene quello per cui era nato, ma nel tempo sono emersi limiti strutturali che non si potevano risolvere con un aggiornamento.

**1. I commercianti volevano comporre, non solo riordinare.** Con Dawn, ogni richiesta del tipo "voglio un'immagine accanto al testo, ma con due pulsanti" diventava una nuova sezione o una modifica al codice. Molti negozi hanno risposto installando **page builder** esterni, che aggiungono script, rallentano il sito e legano il contenuto a un'app di terze parti. Horizon porta quella flessibilità dentro il tema, in modo nativo.

**2. Il modello a sezioni non scalava.** Ogni sezione che definisce i propri blocchi significa lo stesso "pulsante" scritto dieci volte, con dieci schemi leggermente diversi. I theme block (introdotti nel 2024) risolvono il problema, ma un tema scritto attorno alle sezioni non può adottarli senza essere riscritto. Serviva un tema di riferimento nato con i nuovi strumenti.

**3. Il divario con i temi premium.** Dawn era volutamente minimale: mega menu, quick add, layout di prodotto avanzati richiedevano un tema a pagamento o sviluppo su misura. Horizon alza il livello di partenza del tema gratuito.

**4. L'AI ha bisogno di una struttura componibile.** Per generare un pezzo di pagina da un prompt, il sistema deve poter produrre un'unità autonoma e inserirla ovunque. Un blocco a livello di tema è esattamente questo; un blocco legato a una singola sezione no. Horizon è anche la base tecnica dell'AI nell'editor e dello store builder.

**5. Un riferimento aggiornato per gli sviluppatori.** Dal 2021 i browser sono cambiati (container query, `:has()`, popover, view transitions) e così le API dei temi. Horizon mostra come Shopify oggi pensa debba essere scritto un tema.

### I limiti di Horizon

Non è tutto guadagno:

- **Prestazioni**: più JavaScript e più nidificazione significano DOM più pesante. Diverse misurazioni indipendenti lo danno sotto Dawn su mobile, almeno senza ottimizzazioni.
- **Compatibilità con le app**: le app che si appoggiavano alla struttura di Dawn (selettori, eventi, markup del modulo prodotto) possono non funzionare o richiedere un aggiornamento.
- **Troppa libertà**: un commerciante può costruire pagine incoerenti con il brand. Serve disciplina, o un uso accorto dei blocchi statici per bloccare le parti critiche.
- **Codice più complesso**: per una personalizzazione profonda bisogna capire la gerarchia dei blocchi, i preset e i web component. La curva di apprendimento è più ripida.
- **Giovinezza**: i primi rilasci hanno avuto bug nell'editor e comportamenti strani su mobile; gli aggiornamenti sono frequenti, il che è positivo ma richiede di seguirli.

### Quale scegliere

| Situazione | Scelta |
|---|---|
| Nuovo negozio, il team marketing vuole autonomia sulle pagine | **Horizon** |
| Nuovo negozio con design su misura e sviluppatore dedicato | **Horizon** come riferimento, o Skeleton theme come base pulita |
| Negozio su Dawn che funziona e converte bene | **Restare su Dawn**, finché non c'è un redesign |
| Negozio su Dawn con un page builder esterno pesante | Valutare **Horizon**: spesso il page builder si può eliminare |
| Priorità assoluta alle prestazioni mobile, catalogo semplice | **Dawn** resta molto competitivo |
| Tema da vendere sul Theme Store | **Skeleton theme**, non Horizon |

Passare da Dawn a Horizon **non è un aggiornamento: è una migrazione**. Le impostazioni e i contenuti delle sezioni non si trasferiscono automaticamente, le personalizzazioni vanno riscritte come blocchi e le app vanno verificate una per una. Conviene farlo insieme a un redesign, non come operazione a sé.

### In sintesi

- **Dawn** (2021) è il tema di riferimento di Online Store 2.0: leggero, semplice, basato sulle **sezioni**. È ancora una base solida e performante.
- **Horizon** (2025) è il nuovo tema predefinito: una famiglia di dieci temi basata sui **theme block** riutilizzabili e annidabili, con AI integrata nell'editor.
- Horizon risponde a una richiesta precisa: **dare al commerciante la libertà di comporre le pagine senza codice e senza page builder esterni**, e dare agli sviluppatori un modello basato sul riuso dei blocchi.
- In cambio porta più complessità, più JavaScript e qualche problema di compatibilità con le app.
- Regola pratica: **nuovi progetti su Horizon, negozi Dawn stabili su Dawn fino al prossimo redesign.**
{% endraw %}
