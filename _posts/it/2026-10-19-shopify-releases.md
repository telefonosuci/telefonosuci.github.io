---
title: "Gestire i rilasci su Shopify: temi, app, catalogo e promozioni"
date: 2026-10-19 09:00:00 +0200
categories: Ecommerce
related: [shopify, migrations, pimcore-shopify]
reading_time: 13
audience: dev
---

Su Shopify il codice del tema si gestisce bene: si lavora su temi non pubblicati, si usa Git, si pubblica con un clic. I problemi nascono quando un rilascio non riguarda solo il tema. Una nuova pagina prodotto che legge un metafield nuovo, un'app che deve essere aggiornata nello stesso momento, prezzi e sconti che devono partire a mezzanotte: tutto questo **non vive nel tema**, e Shopify non ha ambienti di staging come una piattaforma tradizionale.

Questa guida mette in ordine il problema: cosa si rilascia, con quali metodi, quali sono quelli consigliati da Shopify e come si coordinano in un go-live reale.
{% raw %}
### Il problema: quattro cose con cicli di vita diversi

Un rilascio Shopify tocca quattro livelli, e ognuno si comporta in modo diverso:

| Livello | Dove vive | Versionabile? | Ha ambienti? | Rollback |
|---|---|---|---|---|
| **Tema** | Libreria temi del negozio (max 20 temi) | Sì, con Git | Sì, ogni tema non pubblicato è un "ambiente" | Facile: si ripubblica il tema precedente |
| **App ed estensioni** | Partner Dashboard / Dev Dashboard, globale per l'app | Sì, con le *app version* | Solo se usi app separate per ambiente | Sì, si rilascia una versione precedente |
| **Dati strutturali** (definizioni di metafield, metaobject, menu, mercati) | Negozio, unico e condiviso | No, nativamente | No | Manuale |
| **Stato commerciale** (prodotti, prezzi, sconti, collezioni) | Negozio, unico e condiviso | No | No | Manuale, o automatico solo con Launchpad |

Il tema si duplica, i dati no. **Un tema non pubblicato legge lo stesso catalogo, gli stessi prezzi e le stesse app del tema live.** Ecco perché "un tema per ambiente" funziona bene per il codice, ma non basta per un rilascio completo: lo staging vede già i dati di produzione, e i dati nuovi, appena creati, li vede anche la produzione.

Tutte le strategie che seguono servono a gestire questa asimmetria.

### Gestire il tema

#### 1. Tema per ambiente (environment themes)

Il metodo più diffuso. Nel negozio si tengono tre temi fissi:

- **Live**: il tema pubblicato.
- **Staging** (o *QA*): non pubblicato, riceve il codice pronto per il rilascio, si condivide con il link di anteprima.
- **Development**: il tema locale di ogni sviluppatore, creato da `shopify theme dev` (è un *development theme* nascosto, non occupa posti nella libreria).

Con la Shopify CLI gli ambienti si dichiarano in `shopify.theme.toml`:

```toml
[environments.staging]
store = "mio-negozio"
theme = "142857142857"   # id del tema di staging

[environments.production]
store = "mio-negozio"
theme = "142857000000"   # id del tema live
```

```bash
shopify theme push -e staging
shopify theme push -e production --allow-live
```

Il token per la CI si genera con l'app **Theme Access** e si passa con la variabile `SHOPIFY_CLI_THEME_TOKEN`, senza scriverlo nel file.

**Quando usarlo**: team piccoli, un rilascio alla volta, pochi sviluppatori.

#### 2. Tema per branch (branch-per-theme)

È il metodo **raccomandato da Shopify** con la **GitHub integration** nativa: dalla libreria temi si collega un branch del repository a un tema. La sincronizzazione è bidirezionale: un push sul branch aggiorna il tema, e le modifiche fatte dal commerciante nell'editor diventano commit sul branch.

Lo schema tipico:

- `main` collegato al tema **live**.
- `staging` collegato al tema di **staging**.
- I branch di feature lavorano in locale con `shopify theme dev` e arrivano su `staging` con una pull request.

Una variante molto usata, nei team più grandi, sono i **temi di anteprima per pull request**: la CI crea un tema non pubblicato per ogni PR e pubblica il link di anteprima nel commento.

```bash
# alla apertura della PR
shopify theme push --unpublished --theme "PR-${PR_NUMBER}" --json
# alla chiusura della PR
shopify theme delete --theme "PR-${PR_NUMBER}" --force
```

Attenzione al limite di **20 temi** per negozio: la pulizia alla chiusura della PR non è opzionale.

**Regola importante**: un tema si aggiorna o dalla GitHub integration o dalla CLI, mai da entrambe. Se la CI fa push su un tema collegato a GitHub, i due flussi si sovrascrivono a vicenda.

#### 3. Tema di rilascio (blue-green)

Per i rilasci grandi (restyling, nuova pagina prodotto, campagne) si prepara un **tema dedicato** al rilascio, ad esempio *"Release 2026-11 Black Friday"*. Si completa, si prova con il link di anteprima e al momento del go-live si **pubblica**. Il tema live precedente resta in libreria: il rollback è ripubblicarlo.

È il *blue-green deployment* applicato a Shopify: due versioni complete, si sposta il traffico dall'una all'altra in un istante.

#### Il vero nemico: le impostazioni del commerciante

Una parte del tema **non è codice**: è contenuto modificato dal commerciante nell'editor.

- `config/settings_data.json` (impostazioni globali del tema)
- `templates/*.json` (sezioni e blocchi di ogni pagina)
- `sections/*.json` (gruppi di sezioni, come header e footer)
- `locales/*.json` (testi modificati in *Contenuto del tema*)

Se pubblichi un tema preparato una settimana fa, perdi tutto quello che il marketing ha cambiato sul live nel frattempo. Le soluzioni, dalla più semplice:

1. **Escludere quei file dai push** del codice, così la CI non sovrascrive il lavoro del marketing:

   ```bash
   shopify theme push -e staging \
     --ignore "config/settings_data.json" --ignore "templates/*.json"
   ```

2. **Riportare i contenuti dal live** prima del go-live:

   ```bash
   shopify theme pull --live --only "templates/*.json" \
     --only "sections/*.json" --only "config/settings_data.json"
   shopify theme push --theme "Release 2026-11" --only "templates/*.json" \
     --only "sections/*.json" --only "config/settings_data.json"
   ```

3. Con la **GitHub integration** il problema si riduce: le modifiche del commerciante sul live diventano commit su `main`, e basta fare merge di `main` nel branch di rilascio.

In ogni caso conviene un **content freeze**: qualche ora prima del go-live il marketing smette di modificare il tema live.

### Gestire le app

Le app non stanno nel tema e non seguono i suoi ambienti. Un'app ha **una sola versione attiva** per tutti i negozi in cui è installata, e le sue estensioni (theme app extension, checkout UI extension, Shopify Functions per sconti e spedizioni) si rilasciano insieme all'app.

#### App separate per ambiente

È il metodo **raccomandato da Shopify**: si creano più app (ad esempio *Brand App Dev*, *Brand App Staging*, *Brand App*) collegate allo stesso codice, ognuna con il suo file di configurazione.

```bash
shopify app config link          # crea shopify.app.staging.toml
shopify app deploy --config staging
shopify app deploy --config production
```

L'app di staging si installa su un **negozio di sviluppo** o sullo store di staging, quella di produzione sul negozio reale.

#### Deploy e release separati

Il comando `shopify app deploy` crea una **app version** e normalmente la rilascia subito. Per coordinare l'app con il resto del go-live si separano i due momenti:

```bash
shopify app deploy --no-release --version "2026-11-bf"
# ...al momento del go-live
shopify app release --version "2026-11-bf"
```

Il rollback è rilasciare la versione precedente dalla dashboard o con `shopify app release`.

#### Il patto tra tema e app

Il tema usa i blocchi delle app (*app blocks*) nei template JSON. Se un rilascio dell'app rinomina o rimuove un blocco, il tema live perde quel blocco. Le regole che evitano problemi:

- **Prima l'app, poi il tema.** L'app nuova deve funzionare anche con il tema vecchio: si aggiungono blocchi e impostazioni, non si tolgono.
- Le rimozioni si fanno in un rilascio successivo, quando nessun tema le usa più.

È lo stesso principio delle API: **compatibilità all'indietro**, sempre.

#### App di terze parti

Le app dell'App Store non si versionano: si aggiornano quando decide lo sviluppatore. Le loro impostazioni (regole, widget, testi) si configurano nel negozio di produzione e valgono subito per tutti i temi. Se una campagna richiede di cambiare la configurazione di un'app di terze parti, va messa nella checklist del go-live, con l'orario e il responsabile.

### Gestire i dati strutturali: le migrazioni

Definizioni di metafield, metaobject, menu, filtri, mercati: sono condivisi tra tutti i temi e non hanno versioni. Il metodo che funziona è trattarli come le **migrazioni di un database**: script che si salvano nel repository e si eseguono in ordine.

- **Script idempotenti** sulla Admin API GraphQL (`metafieldDefinitionCreate`, `metaobjectDefinitionCreate`, `metafieldsSet`): si possono rieseguire senza fare danni.
- **Definizioni dichiarative nell'app**: per i metafield e metaobject di proprietà dell'app, Shopify permette di dichiararli in `shopify.app.toml`, e vengono creati al deploy.

```toml
[product.metafields.app.badge]
type = "single_line_text_field"
name = "Badge promozionale"
```

- **Import ed export del catalogo** con file (strumenti come Matrixify) per i cambiamenti massivi, con un export di backup prima di ogni modifica.

#### Expand and contract

Il pattern più utile per evitare rilasci "tutto insieme" è **expand and contract** (detto anche *parallel change*):

1. **Expand**: si crea il nuovo campo (es. metafield `custom.taglie_v2`) senza toccare il vecchio.
2. Il **tema nuovo legge entrambi**, con un fallback:

```liquid
   {%- assign taglie = product.metafields.custom.taglie_v2.value
       | default: product.metafields.custom.taglie.value -%}
   ```

3. Si **migrano i dati** con calma, anche giorni prima del go-live.
4. **Contract**: quando nessun tema usa più il campo vecchio, lo si elimina.

Così dati e tema non devono più cambiare nello stesso istante: il tema live ignora il campo nuovo, il tema nuovo funziona con entrambi.

### Gestire lo stato commerciale: prezzi, sconti, prodotti

Qui il principio è uno solo: **il tema non deve contenere date né prezzi**. Il tema legge lo stato del negozio (`compare_at_price`, sconti attivi, tag, metafield), e il rilascio commerciale cambia lo stato, non il codice. In questo modo campagne e rilasci di codice si sganciano.

Gli strumenti per programmare lo stato commerciale:

| Cosa | Strumento nativo | Piano |
|---|---|---|
| Sconti (codici e automatici) | Data e ora di inizio e fine nello sconto | Tutti |
| Visibilità prodotti | Pubblicazione programmata sul canale Online Store (o `publishablePublish` con `publishDate` via API) | Tutti |
| Azioni a orario (tag, metafield, stato prodotti) | **Shopify Flow** con il trigger *Scheduled time* | Tutti i piani con Flow |
| Prezzi per paese | Listini di **Shopify Markets** e cataloghi | Tutti (B2B su Plus) |
| Saldi, cambi di prezzo, pubblicazione tema, sconti, prodotti nello stesso evento, con ripristino automatico | **Launchpad** | Shopify Plus |

#### Launchpad (Shopify Plus)

È lo strumento **pensato da Shopify** per questo problema. Un *evento* Launchpad raggruppa, con data di inizio e di fine:

- pubblicazione di un **tema**;
- **saldi** con cambi di prezzo su prodotti o collezioni;
- **sconti** da attivare;
- **prodotti** da pubblicare o nascondere.

Alla fine dell'evento Launchpad **ripristina** prezzi e tema precedenti. Per un Black Friday su Plus è la scelta più semplice e meno rischiosa.

#### Senza Plus

Si combinano gli strumenti nativi:

- **Sconti** con date di inizio e fine: nessun lavoro.
- **Prezzi**: uno script sulla Admin API (`productVariantsBulkUpdate`) che salva il prezzo originale in un metafield, imposta `compare_at_price` e il nuovo prezzo, e uno speculare per il ripristino. Oppure Flow, o un'app per i saldi programmati.
- **Tema**: la pubblicazione programmata non esiste nativamente; si usa un job pianificato in CI:

```yaml
  # .github/workflows/go-live.yml
  on:
    schedule:
      - cron: "0 23 27 11 *"   # 28 novembre, 00:00 ora italiana
  jobs:
    publish:
      runs-on: ubuntu-latest
      steps:
        - run: npm i -g @shopify/cli
        - run: shopify theme publish --theme "$RELEASE_THEME_ID" --force
          env:
            SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.THEME_TOKEN }}
            SHOPIFY_FLAG_STORE: mio-negozio.myshopify.com
  ```

  Il cron di GitHub Actions può partire con qualche minuto di ritardo: per un go-live al minuto, meglio pubblicare il tema prima e usare un flag (vedi sotto).

#### Feature flag (dark launch)

È il metodo più robusto, e funziona su tutti i piani. Il codice nuovo va in produzione **spento**, dentro il tema live, e si accende cambiando un dato:

```liquid
{%- if shop.metafields.release.black_friday.value -%}
  {% render 'bf-hero' %}
{%- else -%}
  {% render 'hero' %}
{%- endif -%}
```

Il flag è un **metafield del negozio** (tipo booleano). Si accende a mano dall'admin, con Flow all'orario scelto o con una chiamata `metafieldsSet`. Vantaggi:

- il tema pubblicato è lo stesso prima e dopo: niente perdita delle impostazioni del commerciante;
- il rollback è spegnere il flag;
- prezzi, sconti e interfaccia possono cambiare nello stesso momento, perché sono tutti dati.

Per flag che il marketing deve controllare dall'editor, va bene anche un'impostazione del tema (`settings.bf_attivo`). Da evitare, invece, le condizioni sulla data in Liquid (`'now' | date`): le pagine sono in cache e il cambio non avviene all'orario esatto.

### Un negozio di staging

Tutti i metodi sopra condividono un limite: si prova su dati di produzione. Per i progetti grandi (migrazioni di catalogo, nuove app, B2B, mercati nuovi) serve un **negozio di staging** separato:

- su **Shopify Plus** si usa uno degli store aggiuntivi dell'organizzazione;
- negli altri casi un **negozio di sviluppo** creato dal Partner Dashboard.

Il catalogo si copia con un export e import (Matrixify o script sull'API), le app si installano nella versione di staging, il tema si carica con la CLI. Il costo è tenere i due negozi allineati: conviene farlo solo se le migrazioni dei dati sono frequenti o rischiose. Per un negozio con un tema e qualche app, i temi non pubblicati e i feature flag bastano.

### Headless: Hydrogen e Oxygen

Chi usa **Hydrogen** con l'hosting **Oxygen** ha ambienti veri per il frontend: ogni branch genera un deployment di anteprima, e si possono definire ambienti *staging* e *production* con variabili diverse. Il problema dei dati però resta identico: lo staging punta allo stesso negozio, salvo collegarlo a uno store di staging.

### Un go-live completo: esempio Black Friday

Un esempio concreto che combina i metodi, senza Plus:

| Quando | Cosa | Livello |
|---|---|---|
| **T-14** | Migrazione: definizioni dei nuovi metafield (expand), dati compilati | Dati |
| **T-10** | App: `shopify app deploy --no-release`, prova su staging | App |
| **T-7** | Tema: il codice della campagna va nel tema live, **dietro flag spento** | Tema |
| **T-7** | QA con il flag acceso solo sul tema di staging (impostazione del tema) | Tema |
| **T-3** | `shopify app release`: l'app nuova è compatibile con il tema attuale | App |
| **T-2** | Sconti creati con data e ora di inizio e fine | Commerciale |
| **T-1** | Export di backup dei prezzi; script dei prezzi pronto e provato su pochi prodotti | Commerciale |
| **T-0, 00:00** | Flow accende il flag e pubblica le collezioni; partono gli sconti; script dei prezzi | Tutto |
| **T+4** | Flag spento, script di ripristino dei prezzi; gli sconti scadono da soli | Tutto |
| **T+7** | Contract: rimozione del codice della campagna e dei campi vecchi | Tema, dati |

Con **Shopify Plus** le righe T-0 e T+4 diventano un unico evento Launchpad.

Il piano di **rollback** si scrive prima, una riga per livello: tema (ripubblicare o spegnere il flag), app (`shopify app release` della versione precedente), prezzi (script di ripristino o import del backup), sconti (disattivare).

### Quale metodo scegliere

| Situazione | Metodo consigliato |
|---|---|
| Piccolo team, un rilascio alla volta | Tema per ambiente (live, staging, dev) |
| Team con più sviluppatori e PR | GitHub integration + temi di anteprima per PR |
| Restyling o rilascio grande | Tema di rilascio (blue-green) + pull dei contenuti dal live |
| Campagne a orario | Feature flag su metafield + sconti programmati + Flow |
| Campagne su Shopify Plus | Launchpad |
| App proprietarie | App separate per ambiente + `deploy --no-release` |
| Nuovi campi o modelli di dati | Migrazioni idempotenti + expand and contract |
| Migrazioni pesanti o B2B | Negozio di staging |

### In sintesi

- Su Shopify **il tema ha ambienti, i dati no**. Ogni strategia di rilascio parte da qui.
- Il tema si gestisce con **temi per ambiente o per branch**, e la GitHub integration è la via indicata da Shopify.
- Le app si rilasciano **prima del tema**, compatibili all'indietro, con app separate per ambiente.
- I dati si cambiano con **migrazioni versionate** e il pattern **expand and contract**, così non devono cambiare insieme al tema.
- Prezzi e promozioni **non stanno nel tema**: si programmano con sconti a data, Flow, feature flag o Launchpad.
- Il go-live diventa così una serie di passi piccoli, ognuno con il suo rollback, invece di un unico momento in cui deve funzionare tutto.
{% endraw %}
