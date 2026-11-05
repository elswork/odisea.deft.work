# `odisea.deft.work` — La Odisea del `.ia`

Sitio web estático preparado para **GitHub Pages** (`odisea.deft.work`) que aloja el relato por entregas de la Iniciativa Ciudadana Europea **`ECI(2026)000012`** (*Creación del Distrito Digital Europeo `.IA` — Denominación de Origen para la Inteligencia Artificial*).

## Estructura del Repositorio

- [`ESCALETA_MAESTRA.md`](file:///home/pirate/docker/odisea.deft.work/ESCALETA_MAESTRA.md): Estructura editorial completa de los 10 capítulos y reglas de conversión.
- `capitulos/`:
  - [`capitulos/es/01-la-isla-que-alquilo-el-futuro.md`](file:///home/pirate/docker/odisea.deft.work/capitulos/es/01-la-isla-que-alquilo-el-futuro.md): Borrador del Capítulo 1 en español.
  - [`capitulos/en/01-the-island-that-rented-the-future.md`](file:///home/pirate/docker/odisea.deft.work/capitulos/en/01-the-island-that-rented-the-future.md): Borrador del Capítulo 1 en inglés.
- [`index.html`](file:///home/pirate/docker/odisea.deft.work/index.html), [`styles.css`](file:///home/pirate/docker/odisea.deft.work/styles.css), [`app.js`](file:///home/pirate/docker/odisea.deft.work/app.js): Lector interactivo tipo libro digital con barra de progreso de lectura, modo claro/oscuro, selector de idiomas y bloque de doble conversión al final de cada capítulo.
- [`CNAME`](file:///home/pirate/docker/odisea.deft.work/CNAME) y [`.nojekyll`](file:///home/pirate/docker/odisea.deft.work/.nojekyll): Configuración lista para GitHub Pages.

---

## Cómo Traducir y Generar los Audiolibros

Para evitar sobrecostes de tiempo y conflictos de concurrencia en GitHub Actions, la traducción y la compilación de audiolibros se ejecutan localmente con el motor **Homero** antes de publicar.

### Opción 1: Con Python (Entorno virtual local)

```bash
# Ejecutar desde cualquier directorio usando el entorno virtual de Homero:

# 1. Solo traducir los capítulos nuevos o modificados en español al resto de idiomas:
/home/pirate/docker/homero.deft.work/.venv/bin/python3 /home/pirate/docker/homero.deft.work/homero.py translate --book-dir /home/pirate/docker/odisea.deft.work

# 2. Compilar el libro (genera audios neuronales MP3, karaoke .sync.json, EPUB, PDF y bundle web):
/home/pirate/docker/homero.deft.work/.venv/bin/python3 /home/pirate/docker/homero.deft.work/homero.py build --book-dir /home/pirate/docker/odisea.deft.work

# 3. Traducir y compilar todo en un único comando:
/home/pirate/docker/homero.deft.work/.venv/bin/python3 /home/pirate/docker/homero.deft.work/homero.py build --book-dir /home/pirate/docker/odisea.deft.work --translate
```

### Opción 2: Con Docker (Cero dependencias locales)

```bash
# Compilar el libro montando este directorio en el contenedor:
docker run --rm -v /home/pirate/docker/odisea.deft.work:/book homero:latest build --translate
```

### Flujo de publicación paso a paso

1. **Escribir o corregir:** Edita o añade capítulos en [`capitulos/es/`](file:///home/pirate/docker/odisea.deft.work/capitulos/es/).
2. **Generar:** Ejecuta el comando de compilación (`build --translate`).
3. **Subir a GitHub:**
   ```bash
   cd /home/pirate/docker/odisea.deft.work
   git add capitulos/ audio/ descargas/ homero-bundle.js libro.yaml
   git commit -m "feat: nuevo capítulo y audiolibro generado"
   git push
   ```
4. **Despliegue automático:** GitHub Pages detecta los cambios y actualiza https://odisea.deft.work en menos de 30 segundos.
