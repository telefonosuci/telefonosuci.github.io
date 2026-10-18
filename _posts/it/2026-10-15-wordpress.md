---
title: "WordPress: cos'è, quando usarlo e come si confronta con le alternative"
date: 2026-10-15 10:00:00 +0200
categories: Stack
reading_time: 5
---

**WordPress** è il CMS (Content Management System) open source più usato al mondo: alimenta una quota enorme dei siti web, dai blog personali ai portali editoriali. È scritto in PHP, usa un database MySQL/MariaDB e si installa su praticamente qualsiasi hosting. Attenzione a non confonderlo con **WordPress.com**, il servizio in hosting gestito da Automattic: qui parliamo di **WordPress.org**, il software che installi tu.

### Come funziona

- **Core**: gestisce utenti, contenuti (articoli, pagine, media), menu e permalink.
- **Editor a blocchi (Gutenberg)**: i contenuti si compongono con blocchi (testo, immagini, colonne, pulsanti). Con i **block theme** e il *Full Site Editing* anche header, footer e template si modificano dall'editor.
- **Temi**: definiscono l'aspetto. Si personalizzano con un *child theme* per non perdere le modifiche agli aggiornamenti.
- **Plugin**: aggiungono funzionalità. Ce ne sono decine di migliaia nel repository ufficiale.
- **Hook**: il sistema di *azioni* e *filtri* con cui temi e plugin si agganciano al core senza modificarlo.
- **API**: i contenuti sono leggibili anche da altri sistemi, quindi WordPress può fare da "magazzino dei contenuti" per un sito o un'app costruiti con altre tecnologie (modalità *headless*).

### Casi d'uso tipici

- **Siti aziendali e di servizi** che il cliente vuole aggiornare in autonomia.
- **Blog e magazine**, anche con molti autori e ruoli editoriali.
- **Ecommerce** con **WooCommerce**, soprattutto quando il negozio è parte di un sito ricco di contenuti.
- **Siti multilingua** con plugin come WPML o Polylang.
- **Membership e corsi online** (con plugin dedicati per abbonamenti e LMS).
- **Backend headless**: i redattori usano l'admin che già conoscono, il frontend è in Next.js o Astro.
- **Reti di siti** con *WordPress Multisite*, ad esempio un sito per ogni sede o brand.

### Vantaggi

- **Gratuito e open source**: nessuna licenza, nessun lock-in. I dati sono tuoi.
- **Ecosistema sterminato**: per quasi ogni esigenza esiste già un plugin o un tema.
- **Facile per i redattori**: tantissime persone lo conoscono già, la formazione è minima.
- **Grande disponibilità di sviluppatori e hosting** a tutte le fasce di prezzo.
- **SEO solida**, con plugin maturi come Yoast o Rank Math.
- **Estremamente flessibile**: con custom post type e campi personalizzati (ACF) diventa un CMS per dati strutturati.

### Svantaggi

- **Sicurezza**: essendo il CMS più diffuso è anche il più attaccato. Core, temi e plugin vanno aggiornati con costanza; la maggior parte delle vulnerabilità arriva da plugin di terze parti.
- **Prestazioni**: temi pesanti e troppi plugin rallentano il sito. Servono cache, un buon hosting e disciplina.
- **Qualità variabile dei plugin**: compatibilità, supporto e codice non sono sempre all'altezza. Un aggiornamento può rompere qualcosa.
- **Debito tecnico**: dopo anni di plugin aggiunti "al volo", i siti diventano difficili da mantenere.
- **Manutenzione a tuo carico**: backup, aggiornamenti e monitoraggio non li fa nessun altro (a meno di un hosting gestito).

### Confronto con le alternative

| | WordPress | Shopify | Strapi / Contentful | Webflow | Jekyll / Astro |
| --- | --- | --- | --- | --- | --- |
| Tipo | CMS tradizionale open source | Piattaforma ecommerce SaaS | CMS headless | Site builder SaaS | Generatori di siti statici |
| Hosting | A carico tuo | Incluso | Self-hosted / SaaS | Incluso | Qualsiasi hosting statico |
| Editor visuale | Sì (blocchi) | Sì (sezioni) | No, solo contenuti | Sì, molto avanzato | No |
| Ecommerce | Con WooCommerce | Nativo, completo | Va integrato | Base | Va integrato |
| Manutenzione | Media-alta | Minima | Media / minima | Minima | Minima |
| Ideale per | Siti di contenuti e PMI | Vendere online | Contenuti multicanale | Siti marketing curati | Siti veloci e sicuri |

- **WordPress vs Shopify**: se il cuore del progetto è vendere, Shopify è più robusto e richiede meno manutenzione. Se il cuore sono i contenuti e il negozio è secondario, WordPress + WooCommerce può bastare.
- **WordPress vs CMS headless**: Strapi e Contentful separano contenuti e presentazione e sono più adatti a più canali (sito, app). WordPress è più rapido da avviare e i redattori lo conoscono già. Una via di mezzo è usare WordPress in modalità headless.
- **WordPress vs Webflow**: Webflow offre più controllo visivo e meno manutenzione, ma è un servizio chiuso con costi ricorrenti e un ecosistema più piccolo.
- **WordPress vs siti statici**: per un sito che cambia poco, un generatore statico è più veloce, più sicuro e quasi gratuito da ospitare, ma chi aggiorna i contenuti deve saper usare Markdown e Git (o un CMS headless).

### Quando sceglierlo (e quando no)

**Sì**, per siti di contenuti, blog e siti aziendali che il cliente vuole gestire da solo, quando serve un ecosistema ampio e un budget contenuto, e quando c'è qualcuno che si occupa degli aggiornamenti.

**No**, se il progetto è principalmente un ecommerce che deve scalare (meglio Shopify), se i contenuti devono alimentare più canali (meglio un CMS headless), o se nessuno si occuperà della manutenzione: un WordPress abbandonato diventa presto un problema di sicurezza.
