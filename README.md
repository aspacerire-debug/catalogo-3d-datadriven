# 📚 Catálogo 3D — Plantilla *no-code* (datos desde Google Sheets)

Edita TODO (productos, textos, categorías, enlaces, orden de páginas) **sin tocar código**, solo con una **Hoja de cálculo**.

## 🧩 Cómo editar
1. Haz una copia de `public/data/catalog.csv` en **Google Sheets**.
2. En Google Sheets: **Archivo → Compartir → Publicar en la web → CSV** y copia el enlace público.
3. En **Vercel → Settings → Environment Variables**, crea `VITE_DATA_URL` con el enlace CSV.
4. **Redeploy** el proyecto. ¡Listo! Cualquier cambio en la hoja se verá en la web.

### Columnas del CSV
- `id` (opcional), `order` (número), `type` = `cover` | `product` | `info` | `back`
- `title`, `subtitle`, `category`, `price`, `features` (separa con `;`)
- `media_type` = `model3d` | `image` | `video`
- `media_url` = URL del GLB/GLTF, imagen o video
- `rotation` = `x|y|z` (por ejemplo `0|0.5|0`) — solo para `model3d`
- `zoom` = número (1 por defecto)
- `link` = URL botón comprar / más info
- `body` = texto libre (para `info`)

## 🧱 Tecnologías
Vite + React + Tailwind + Three Fiber + Drei + Framer Motion.
