# telefonosuci.github.io

Sito professionale di Enrico Succhielli, Shopify developer freelance.
Jekyll + un piccolo bundle JS (GSAP via npm, compilato con esbuild), pubblicato su GitHub Pages tramite GitHub Actions.

- Avvio locale: vedi [RUNNING_LOCAL.md](RUNNING_LOCAL.md)
- Stato del lavoro e cose da fare: vedi [TODO.md](TODO.md)

## Struttura

| Percorso | Cosa contiene |
| --- | --- |
| `_data/home.yml` | Testi della homepage (IT/EN) |
| `_data/i18n.yml` | Etichette UI (menu, footer…) per lingua |
| `_includes/home.html` | Elenco ordinato delle sezioni della home |
| `_includes/home/*.html` | Una sezione per file (hero, servizi, flusso, integrazioni…) |
| `_includes/components/*.html` | Componenti riusabili (card, chips, section-head, hscroll, marquee…) |
| `_js/motion/*.js` | Animazioni GSAP, un modulo per comportamento |
| `assets/js/hero-gl.js` | Shader WebGL dello sfondo della home |
| `assets/js/lab-webgpu.js` | Demo particelle WebGPU (`/lab/`) |
| `_sass/site/**` | Stili, un partial per componente/sezione |
| `_posts/it`, `_posts/en` | Articoli del blog |

## Nomi dei componenti

Ogni componente ha sull'elemento radice `data-component-name` con un nome parlante
(`home-hero`, `service-card`, `home-order-flow`, `order-flow-step`, `site-header`…),
utile per ritrovarlo nel DOM, nei test e nel tracking (es. trigger GTM sui click).
I componenti generici accettano il parametro `name` per specializzarlo:
`{% include components/card.html name="service-card" … %}`.

## Animazioni

I componenti dichiarano il comportamento con attributi `data-*`; ogni modulo in
`_js/motion/` ne gestisce uno:

| Attributo | Modulo | Effetto |
| --- | --- | --- |
| `data-hero` | `hero.js` | Intro + contenuto che sfuma, sfondo in parallasse |
| `data-reveal`, `data-reveal-stagger` | `reveal.js` | Comparsa dal basso (a cascata) |
| `data-speed="0.1"` | `parallax.js` | Parallasse verticale (negativo = più veloce) |
| `data-marquee="1\|-1"` | `marquee.js` | Scritta gigante che scorre di lato |
| `data-hscroll` | `hscroll.js` | Sezione bloccata con scroll orizzontale (solo desktop) |
| `data-zoom` | `zoom.js` | Blocco che si ingrandisce entrando |

Con `prefers-reduced-motion` non si anima nulla; su mobile le sezioni orizzontali
diventano uno swipe nativo con scroll-snap.

## Lingue

Italiano su `/`, inglese su `/en/`. Ogni pagina ha `lang` nel front matter; le
pagine tradotte condividono lo stesso `ref` così il selettore lingua punta alla
traduzione. I post sono abbinati per nome file.
