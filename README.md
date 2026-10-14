# telefonosuci.github.io

Sito professionale di Enrico Succhielli, Shopify developer freelance.
Jekyll puro (nessun build step JS), pubblicato su GitHub Pages tramite GitHub Actions.

- Avvio locale: vedi [RUNNING_LOCAL.md](RUNNING_LOCAL.md)
- Stato del lavoro e cose da fare: vedi [TODO.md](TODO.md)

## Struttura

| Percorso | Cosa contiene |
| --- | --- |
| `_data/home.yml` | Testi della homepage (IT/EN) |
| `_data/i18n.yml` | Etichette UI (menu, footer…) per lingua |
| `_includes/home.html` | Struttura della homepage |
| `_posts/it`, `_posts/en` | Articoli del blog (`/blog/…` e `/en/blog/…`) |
| `assets/js/hero-gl.js` | Shader WebGL dello sfondo della home |
| `assets/js/lab-webgpu.js` | Demo particelle WebGPU (`/lab/`) |
| `_sass/_site.scss` | Tutti gli stili |

## Lingue

Italiano su `/`, inglese su `/en/`. Ogni pagina ha `lang` nel front matter; le
pagine tradotte condividono lo stesso `ref` così il selettore lingua punta alla
traduzione. I post sono abbinati per nome file.
