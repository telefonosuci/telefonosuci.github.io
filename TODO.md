# Riorganizzazione del sito: resoconto

## Cosa è stato fatto

### Struttura e bug
- **Rimosso `jekyll-multiple-languages-plugin`.** Generava URL duplicati e senza senso (`/it/it/index.html`, `/it/en/...`), i post IT ed EN si sovrascrivevano a vicenda sullo stesso URL e il sito pubblicava i **sorgenti** di `_includes/` e `_layouts/` (per via di `include:` in `_config.yml`). Ora usa Jekyll puro: italiano su `/`, inglese su `/en/`, con selettore lingua che porta alla pagina tradotta e `hreflang` per la SEO.
- **Rimosso lo stack webpack/React** (`_client/`, `assets/bundles/`, `package.json`). Serviva solo per il carosello dell'about, il gioco degli sprite nei contatti e LogRocket. Il sito ora non ha più un passaggio di build JS; la CI è più semplice e veloce.
- **Rimosso l'overlay "CLICK/TOUCH"** in home: bloccava lo scroll (`overflow: hidden`) finché l'utente non cliccava. Era dannoso per UX e SEO.
- Eliminate le pagine rotte o abbandonate: `grape.html` (puntava a `path/to/grapes.min.js`), `feedback.html`, `about.html` con immagini stock, il layout `doodle-background` e il layout `tutorial`, duplicato di `post`.
- Il post `react-countdown-hook` in `_posts/en` aveva `lang: it`: corretto.
- Il banner cookie dichiarava "This site does not use cookies", ma il sito usa GTM. Banner rimosso.
- Bootstrap 4 e Font Awesome da CDN rimossi: non servivano più.
- GTM e Sentry si caricano **solo in produzione**, così la navigazione in locale non sporca le statistiche.
- **Lab WebGPU**: individuato e corretto un bug nello shader (`active` è una parola riservata in WGSL). Aggiunto un fallback se la GPU genera errori.
- Aggiunti `robots.txt` e una `sitemap.xml` completa (prima conteneva solo la home e i post). I vecchi URL principali (`/posts.html`, `/contact.html`, `/about.html`, `/it/`) ora fanno redirect.

### Contenuti e design
- **Nuova home (IT/EN)** costruita sui 4 punti richiesti: flussi ecommerce, piattaforma Shopify, integrazioni (ERP, PIM, CRM, social, analytics), grafica WebGL/WebGPU. Contiene anche un diagramma "Il viaggio di un ordine" (dal catalogo alla misurazione, con i sistemi coinvolti in ogni passaggio), il metodo di lavoro, "chi sono", gli ultimi post e la call to action.
- **Hero con shader WebGL scritto a mano** (`assets/js/hero-gl.js`, circa 90 righe, nessuna dipendenza). Reagisce al mouse, si mette in pausa fuori schermo, rispetta `prefers-reduced-motion` e senza WebGL mostra un gradiente CSS.
- **Pagina Lab** (`/lab/`): 65.536 particelle simulate con un compute shader WebGPU e mostrate con rendering istanziato. Le particelle sono interattive (attrazione e repulsione). Senza WebGPU compare un messaggio di fallback.
- **Pagina contatti** riscritta: form Form.io esistente, guida su cosa scrivere, email e link social.
- **Blog** su `/blog/` e `/en/blog/` con filtro per categoria.
- Nuove pagine **Privacy policy** (bozza) e **Policy commenti**.
- **Design unico e coerente**: tema scuro, il giallo `#fca311` già presente come accento, font Space Grotesk e Inter, layout responsive. Tutto lo stile è in `_sass/_site.scss`.
- I testi della home sono in `_data/home.yml`: si modificano senza toccare l'HTML.

Verifica: la build Jekyll va a buon fine e ho controllato le schermate di home (desktop e mobile), contatti, blog, post e lab in Chrome.

### Aggiornamento: animazioni GSAP e componenti
- Home divisa in **sezioni** (`_includes/home/`) e **componenti** riusabili (`_includes/components/`). Anche gli stili sono divisi per componente in `_sass/site/`.
- **GSAP + ScrollTrigger installati da npm** (niente CDN), compilati con esbuild in `assets/js/motion.js`. La CI esegue `npm ci && npm run build` prima di Jekyll.
- Ritmo della pagina: hero (parallasse) → servizi (verticale) → scritta gigante → **viaggio dell'ordine (orizzontale, pinned)** → integrazioni (colonne in parallasse) → scritta gigante → **come lavoro (orizzontale, pinned)** → lab/chi sono (parallasse) → blog → CTA (zoom).
- Accessibilità: con reduced motion non c'è nessuna animazione, su mobile lo scroll orizzontale diventa swipe nativo, senza JS il contenuto è comunque tutto visibile.
- Aggiunta una favicon SVG.

## Cosa rimane da fare (in ordine di priorità)

1. **Partita IVA**: per ora non serve (lavoro occasionale con ritenuta d'acconto), il sito non la mostra. Se la apri, compila `suci.vat` in `_config.yml`: è obbligatoria e comparirà nel footer e nella privacy policy.
2. **Privacy e cookie (GDPR)**: la privacy policy è una **bozza** da far verificare. GTM senza banner di consenso non è conforme: serve una CMP (ad es. Iubenda, Cookiebot) oppure Consent Mode v2 configurato in GTM, in alternativa analytics senza cookie (Plausible, Umami).
3. **Verifica i testi**: ho scritto contenuti plausibili, ma nomi di sistemi (SAP, Dynamics, Odoo, Akeneo, Pimcore, HubSpot, Klaviyo…) e competenze vanno confermati con la tua esperienza reale. Togli quello che non hai mai usato.
4. **"Chi sono"**: aggiungi dettagli concreti (anni di esperienza, settori, una foto). Ho volutamente evitato di inventarli.
5. **Casi studio / portfolio**: è la sezione che manca di più. Bastano 2–3 progetti con problema → soluzione → risultato (anche anonimi, ad es. "brand moda, integrazione SAP"). Da aggiungere come sezione in home o come collection Jekyll `_projects`.
6. **Blog**:
   - il post "Javascript trottle and debounce" contiene il testo del renderer React, non quello su throttle/debounce (e c'è un refuso nel titolo);
   - il post IT sui chatbot è in inglese;
   - i post sono datati e poco legati a Shopify: valuta di nasconderli (`published: false`) e scriverne di nuovi (ad es. "Sincronizzare giacenze ERP → Shopify senza oversell", "Checkout Extensibility: migrare da checkout.liquid", "Tracciamento server-side su Shopify").
7. **Formspree**: fai un invio di prova dal sito e conferma l'email di attivazione che arriva da Formspree.
8. **Immagine social (og:image)**: crea un'immagine 1200×630 e impostala con `image:` in `_config.yml` per avere anteprime curate su LinkedIn e WhatsApp.
9. **Dominio personalizzato** (ad es. `enricosucchielli.dev`): più professionale di `github.io`. Aggiungi un file `CNAME` e aggiorna `url` in `_config.yml`.

## Suggerimenti
- **LogRocket** è stato rimosso insieme al bundle webpack. Registrava le sessioni senza consenso, quindi meglio non reintrodurlo se non dopo il consenso dell'utente.
- **Disqus** carica molti tracker. Valuta [giscus](https://giscus.app) (commenti su GitHub Discussions), più leggero e adatto a un pubblico tecnico, oppure togli i commenti.
- Per la parte "grafica", un **mini configuratore 3D di prodotto** (three.js o WebGPU) nel lab parlerebbe direttamente ai clienti Shopify più di una demo astratta.
- Nel menu manca "Chi sono" perché la sezione è in home. Se aggiungi i casi studio, una voce "Progetti" diventa la più importante.
- **Smooth scroll**: con GSAP puoi aggiungere `ScrollSmoother` (ora gratuito) o Lenis, per una parallasse più morbida. L'ho lasciato fuori perché altera lo scroll nativo e va provato su trackpad e mobile.
- Il bundle GSAP pesa circa 115 KB minificato (circa 45 KB gzip) ed è caricato solo in home.
- Tutto il codice rimosso è recuperabile dalla storia git (commit `db6e73ce`).
