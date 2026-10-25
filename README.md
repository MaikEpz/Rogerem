# Génesis · Destinos

Experiencia musical basada en las referencias: una portada con cuatro figuras y una ventana retro diferente por destino. Implementada con **Astro y TypeScript**, con generación estática y JavaScript nativo para los diálogos y los mensajes.

## Desarrollo

Requiere Node.js compatible con la versión de Astro instalada (recomendado Node 24 LTS).

```sh
npm install
npm run dev
```

Abre `http://127.0.0.1:4321/Rogerem/`. Para comprobar y compilar:

```sh
npm test
npm run build
npm run check:dist
npm run preview
```

La compilación genera `dist/`, lista para alojamiento estático. No necesita servidor de aplicación, base de datos ni variables secretas.

## GitHub Pages

La configuración está preparada para el repositorio `MaikEpz/Rogerem`, con `site: 'https://maikepz.github.io'` y `base: '/Rogerem'`. La URL prevista tras activar Pages y completar el primer despliegue es `https://maikepz.github.io/Rogerem/`.

El workflow `.github/workflows/deploy.yml` comprueba los tests, compila Astro, verifica que las referencias a páginas y recursos incluyan el prefijo del proyecto, y despliega en GitHub Pages en cada push a `main`. En el repositorio, selecciona **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Los enlaces internos se construyen con `src/presentation/navigation/paths.ts`. Vite adapta las rutas de imágenes en el CSS al prefijo configurado al compilar.

## Decisión técnica

El flujo tiene cuatro destinos conocidos, navegación entre páginas y dos interacciones locales: cambiar un mensaje y abrir un selector de plataformas. Astro genera las páginas en la compilación; los enlaces funcionan sin JavaScript. Los diálogos usan `<dialog>` nativo, con foco modal, cierre con Escape y restauración del foco. React no aporta una ventaja para este alcance.

## Clean Architecture

Las dependencias apuntan hacia el dominio:

```text
src/
  domain/           Entidad Destination y contrato DestinationRepository
  application/      Casos de uso: listar, consultar y obtener opciones de escucha
  infrastructure/   Repositorio estático y contenido editable
  composition/      Conexión entre casos de uso y repositorio
  presentation/     Componentes Astro, layout y estilos
  pages/            Entradas de Astro y generación de las rutas
public/images/      Cuatro fondos SVG originales
tests/              Contratos de contenido y opciones de escucha
```

El dominio y los casos de uso no importan Astro ni APIs del navegador. Para conectar un CMS, se puede sustituir el repositorio a través del contrato y ajustar la composición. El repositorio actual es síncrono porque el contenido está disponible en memoria; una fuente remota requerirá adaptar el contrato y sus consumidores a promesas.

## Sustituir el contenido de ejemplo

Edita **`src/infrastructure/content/destinations.ts`**:

- `title`, `introduction`, `revelation`, `catharsis`: mensajes de cada figura.
- `tracks`: títulos, artistas y duraciones reales. La lista actual es ilustrativa y no reproduce audio.
- `links`: URL HTTPS real de cada playlist en Bandcamp, Apple Music, YouTube Music y Spotify. `null` mantiene la opción desactivada con «Próximamente».
- `scene`: fondo usado por el destino. Los fondos actuales son ilustraciones originales SVG, no recortes de las imágenes de referencia.

Para usar fotografías propias, guárdalas en `public/images/` y cambia la ruta de fondo de la clase `.destination--…` en `src/presentation/styles/global.css`.

La identidad «Génesis» se tomó de las referencias. El logotipo es una interpretación tipográfica provisional, no el archivo oficial de la marca. Los textos, canciones y nombres de artistas son ejemplos identificados como demo.

## Rutas

| Figura | Ruta | Estado |
| --- | --- | --- |
| Flor | `/destino/florecer/` | Volver a empezar |
| Estrella | `/destino/brillar/` | Perder el miedo |
| Ojo | `/destino/sentir/` | Mirar hacia dentro |
| Luna | `/destino/soltar/` | Abrazar la noche |

La portada incluye un aviso ficticio acorde con el concepto. Los botones «¿Qué?» y «Llorar :(» muestran mensajes alternativos, sin solicitar datos personales. No hay analítica, cookies ni reproducción automática.

Las tipografías Barlow Condensed y DM Sans se sirven localmente mediante Fontsource. El sitio no depende de Google Fonts ni de imágenes remotas para mostrarse.
