# 🏛️ La Odisea de la `.IA` — `odisea.deft.work`

> **Un informático en el laberinto de Bruselas.**  
> Relato vivo, interactivo y multilingüe de la Iniciativa Ciudadana Europea **`ECI(2026)000012`** (*Creación del Distrito Digital Europeo `.IA` — Denominación de Origen para la Inteligencia Artificial*).

- 🌐 **Leer y escuchar online:** [https://odisea.deft.work](https://odisea.deft.work)
- 🏛️ **Iniciativa Ciudadana Europea (`ECI(2026)000012`):** [https://anticitera.deft.work](https://anticitera.deft.work)
- ⚙️ **Motor de publicación open-source:** [Homero (`homero.deft.work`)](https://github.com/elswork/homero.deft.work)

---

## ✏️ Cómo colaborar o corregir cualquier capítulo (en 3 clics, sin saber programar)

Este libro es una obra viva y colaborativa. Cualquier lector puede corregir una errata, mejorar una traducción o proponer una nota directamente desde el navegador:

1. **Desde la web ([odisea.deft.work](https://odisea.deft.work)):**
   - En cada capítulo verás el botón **`✏️ Editar en GitHub`** (en la cabecera del capítulo, en el índice lateral junto a cada título y al final de la lectura).
2. **Haz tus cambios en el navegador:**
   - Al pulsar **`✏️ Editar en GitHub`**, se abrirá directamente el archivo de texto (`.md`) de ese capítulo e idioma en GitHub.
   - Corrige el texto como en cualquier bloc de notas.
3. **Envía tu propuesta (*Pull Request*):**
   - Pulsa el botón verde **`Commit changes...` -> `Propose changes`** al final de la página. ¡Listo!

---

## 📚 Índice de capítulos (Ver y Editar en GitHub)

Los capítulos maestros se escriben en español dentro de [`capitulos/es/`](capitulos/es/) y el motor **Homero** los traduce y convierte automáticamente en audiolibro neuronal (`.mp3` + Karaoke Read-Along), `.epub` (Kindle) y `.pdf` en **9 idiomas** (`es`, `en`, `fr`, `de`, `it`, `pt`, `el`, `hu`, `hr`, `zh`).

| Cap. | Título | Leer archivo (`.md`) | Editar en GitHub | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **Cap. 0** | **Prólogo y Agradecimientos** | [`00-prologo-y-agradecimientos.md`](capitulos/es/00-prologo-y-agradecimientos.md) | [✏️ Editar Cap. 0](https://github.com/elswork/odisea.deft.work/edit/main/capitulos/es/00-prologo-y-agradecimientos.md) | ✅ Publicado |
| **Cap. 1** | **La idea más importante de mi vida** | [`01-la-idea-mas-importante-de-mi-vida.md`](capitulos/es/01-la-idea-mas-importante-de-mi-vida.md) | [✏️ Editar Cap. 1](https://github.com/elswork/odisea.deft.work/edit/main/capitulos/es/01-la-idea-mas-importante-de-mi-vida.md) | ✅ Publicado |
| **Cap. 2** | **El Proyecto Anticitera** | [`02-el-proyecto-anticitera.md`](capitulos/es/02-el-proyecto-anticitera.md) | [✏️ Editar Cap. 2](https://github.com/elswork/odisea.deft.work/edit/main/capitulos/es/02-el-proyecto-anticitera.md) | ✅ Publicado |
| **Cap. 3** | **La Iniciativa Ciudadana Europea** | [`03-la-iniciativa-ciudadana-europea.md`](capitulos/es/03-la-iniciativa-ciudadana-europea.md) | [✏️ Editar Cap. 3](https://github.com/elswork/odisea.deft.work/edit/main/capitulos/es/03-la-iniciativa-ciudadana-europea.md) | ✅ Publicado |
| **Cap. 4** | **La resolución de la UE** | [`04-la-resolucion-de-la-ue.md`](capitulos/es/04-la-resolucion-de-la-ue.md) | [✏️ Editar Cap. 4](https://github.com/elswork/odisea.deft.work/edit/main/capitulos/es/04-la-resolucion-de-la-ue.md) | ✅ Publicado |
| **Cap. 5–10** | **Próximos capítulos en preparación** | Ver [`ESCALETA_MAESTRA.md`](ESCALETA_MAESTRA.md) | [✏️ Editar Escaleta](https://github.com/elswork/odisea.deft.work/edit/main/ESCALETA_MAESTRA.md) | ⏳ En curso |

---

## 🚀 Guía rápida: Cómo añadir o actualizar un capítulo

### Paso 1: Escribir o editar en español (`capitulos/es/`)
Cada capítulo es un sencillo archivo Markdown en `capitulos/es/` con una pequeña cabecera informativa al principio:

```markdown
---
capitulo: 5
titulo: "La fiebre del oro de tres mil millones"
subtitulo: "Mientras un dominio .ai bate récords, Europa debate si merece su propia dirección"
fecha: "2026"
tiempo_lectura: "8 min"
---

# Capítulo 5: La fiebre del oro de tres mil millones

Aquí comienza el texto del capítulo...
```

### Paso 2: Traducir y generar audiolibros, EPUB y PDF (con 1 solo comando)
Una vez guardado tu cambio en `capitulos/es/`, ejecuta el motor **Homero** para que traduzca automáticamente las novedades y regenere los audiolibros, el karaoke sincronizado, los `.epub` (con ilustraciones listas para Kindle) y los `.pdf`:

```bash
/home/pirate/docker/homero.deft.work/.venv/bin/python3 /home/pirate/docker/homero.deft.work/homero.py build --book-dir /home/pirate/docker/odisea.deft.work --translate
```

*(Alternativa con Docker si no usas entorno Python local)*:
```bash
docker run --rm -v /home/pirate/docker/odisea.deft.work:/book homero:latest build --translate
```

### Paso 3: Publicar en la web (`git push`)
Sube los cambios a GitHub y la web `https://odisea.deft.work` se actualizará sola en menos de 30 segundos:

```bash
cd /home/pirate/docker/odisea.deft.work
git add .
git commit -m "feat: actualizar capítulo y regenerar audiolibros y ebooks"
git push
```

---

## 🗂️ Estructura del repositorio

```text
odisea.deft.work/
├── libro.yaml                  # Configuración del libro, idiomas, voces neuronales y enlaces GitHub
├── ESCALETA_MAESTRA.md         # Plan editorial completo (Capítulos 0 al 10)
├── capitulos/
│   ├── es/                     # ✍️ Capítulos originales en español (edita aquí)
│   └── en, fr, de, it, pt...   # 🌍 Traducciones generadas y sincronizadas por Homero
├── img/                        # Portada, ilustraciones de capítulos y código QR
├── audio/                      # 🎧 Audiolibros (.mp3) y sincronización Karaoke (.sync.json)
├── descargas/                  # 📥 Libros completos en .epub (Kindle) y .pdf en cada idioma
├── index.html, styles.css, app.js  # Lector web interactivo con modo claro/oscuro y Karaoke
└── homero-bundle.js            # Paquete de datos autocompilado por Homero para la web
```
