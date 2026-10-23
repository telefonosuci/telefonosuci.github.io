---
title: "Contentful: cos'è, quando usarlo e come si confronta con le alternative"
date: 2026-10-15 12:00:00 +0200
categories: Stack
reading_time: 4
---

**Contentful** è un CMS *headless* in cloud (SaaS), tra i più diffusi nelle aziende. Come Strapi gestisce i contenuti e li distribuisce tramite API, ma non c'è niente da installare: infrastruttura, CDN globale, sicurezza e scalabilità sono gestite da Contentful. Si presenta come una *composable content platform*: un punto unico in cui vivono i contenuti, da cui attingono sito, app, ecommerce e altri canali.

### Come funziona

- **Space**: il contenitore di un progetto, con il suo modello dati, i contenuti e i media.
- **Environment**: copie isolate di uno space (ad esempio produzione e test) per provare modifiche al modello senza toccare la produzione.
- **Content model**: i tipi di contenuto (*Blog Post*, *Landing Page*, *Hero Banner*) e i loro campi, con validazioni e riferimenti tra contenuti.
- **Entry e Asset**: i contenuti veri e propri e i file multimediali. Le immagini vengono ridimensionate e convertite al volo dalla **Images API**.
- **API**:
  - *Content Delivery API* per leggere i contenuti pubblicati (servita da CDN);
  - *Content Preview API* per leggere le bozze;
  - *Content Management API* per creare e modificare contenuti da codice (migrazioni, importazioni);
  - *GraphQL Content API*.[^cfapi]
- **App Framework**: estensioni del pannello, ad esempio per scegliere un prodotto Shopify direttamente dentro un contenuto.

### Casi d'uso tipici

- **Siti aziendali multi-brand e multi-paese**: tanti siti, tante lingue, un unico punto di gestione dei contenuti.
- **Ecommerce composable**: Shopify (o commercetools) per catalogo e checkout, Contentful per landing, editoriale e campagne, Next.js come frontend.
- **Contenuti per app mobile**: testi, banner e configurazioni aggiornabili senza pubblicare una nuova versione dell'app.
- **Team editoriali strutturati**: ruoli, permessi granulari, flussi di approvazione e programmazione delle pubblicazioni.
- **Contenuti riusabili**: lo stesso blocco (ad esempio un banner promozionale) usato in decine di pagine e aggiornato una volta sola.

### Vantaggi

- **Nessuna infrastruttura**: affidabilità e prestazioni sono garantite dalla piattaforma, con una CDN globale.
- **Modello dati strutturato**: i contenuti sono dati puliti e riusabili, non HTML legato a una pagina.
- **Environment e migrazioni**: il modello si evolve come il codice, con script di migrazione e ambienti di prova.
- **Pensato per le aziende**: SSO, ruoli, audit, SLA, conformità.
- **Ecosistema di integrazioni** con commerce, DAM, traduzione, analytics.
- **SDK** per molti linguaggi e documentazione molto curata.

### Svantaggi

- **Costi**: il piano gratuito è limitato, e i piani a pagamento sono costosi e crescono con utenti, record, lingue ed environment.[^cfprice]
- **Limiti di piattaforma**: numero di tipi di contenuto, campi, record e chiamate API sono legati al piano.
- **Lock-in**: il modello dati e i contenuti vivono sulla piattaforma; si esportano, ma migrare richiede lavoro.
- **Esperienza dei redattori meno visuale**: senza configurare un'anteprima, i redattori compilano campi senza vedere la pagina finale. Contentful ha introdotto strumenti visuali, ma serve integrarli nel frontend.
- **Modellazione impegnativa**: un content model progettato male (troppo legato al layout, o troppo frammentato) è difficile da correggere dopo.

### Confronto con le alternative

| | Contentful | Strapi | Sanity | Storyblok | Hygraph |
| --- | --- | --- | --- | --- | --- |
| Modello | SaaS | Open source, self-hosted o cloud | SaaS (studio open source) | SaaS | SaaS |
| Punto di forza | Enterprise, governance | Controllo e costi | Flessibilità e personalizzazione dell'editor | Editor visuale | GraphQL e federazione di contenuti |
| Editor visuale | Con configurazione | Limitato | Con configurazione | Nativo | Limitato |
| API | REST, GraphQL | REST, GraphQL | GROQ, GraphQL | REST, GraphQL | GraphQL |
| Costi | Alti | Gratis + hosting | Medi, a utilizzo | Medi | Medi |

- **Contentful vs Strapi**: Contentful toglie tutta la gestione tecnica e offre governance aziendale; Strapi è gratuito, modificabile e i dati restano a casa tua. La scelta dipende spesso da budget e competenze interne.
- **Contentful vs Sanity**: Sanity ha un editor (Sanity Studio) completamente personalizzabile in React e un linguaggio di query molto potente (GROQ); Contentful è più rigido ma più "chiavi in mano".
- **Contentful vs Storyblok**: Storyblok nasce con l'editor visuale al centro, apprezzato dal marketing; Contentful è più forte su governance e contenuti strutturati per più canali.

### Quando sceglierlo (e quando no)

**Sì**, quando i contenuti sono tanti, distribuiti su più canali, mercati e lingue, gestiti da un team con ruoli diversi, e l'azienda preferisce pagare un servizio piuttosto che gestire server.

**No**, per un piccolo sito o un blog (costi e complessità non si giustificano), se il budget è limitato (meglio Strapi o un sito statico), o se il marketing vuole soprattutto costruire pagine in modo visuale (valuta Storyblok o il tema di Shopify).

[^cfapi]: Contentful, [API reference](https://www.contentful.com/developers/docs/references/).
[^cfprice]: Contentful, [Pricing](https://www.contentful.com/pricing/).
