# Práctica Ionic + Angular + Sass (2.º DAM)

Cumple los requisitos del ejercicio:
- Página `home` con título, botón Ionic e imagen local.
- Título rojo, en mayúsculas y centrado.
- Botón azul y alineado a la derecha.
- Imagen centrada con borde verde de `3px`.
- Estilos creados con Sass (sintaxis SCSS): variables `$...` y anidamiento `&__...`.

## Ejecutar (Node.js e Ionic CLI instalados)

```bash
npm install
ionic serve
```

Si no tienes instalada la CLI de Ionic, ejecútalo una vez:

```bash
npm install -g @ionic/cli
```

`ionic serve` ejecuta el servidor de desarrollo de Angular y recompila los `.scss` automáticamente. **NO** necesitas `npm run watch:sass`.

## Archivos más importantes

- `src/app/home/home.page.html`: estructura HTML/Ionic.
- `src/app/home/home.page.scss`: estilos Sass de la página.
- `src/app/home/home.page.ts`: componente Angular standalone y sus imports.
- `src/assets/imagen-ejemplo.svg`: imagen incluida localmente.

## Publicación en GitHub (después de probarlo)

```bash
git init
git checkout -b desarrollo
git add .
git commit -m "Crear pagina home y aplicar estilos con SCSS"
# Crea un repositorio VACÍO en tu propia cuenta de GitHub y copia su URL:
git remote add origin https://github.com/TU-USUARIO/practica-sass-ionic.git
git push -u origin desarrollo
```

**Importante:** el enlace anterior es solo un ejemplo y no es tu URL real. No entregues ese enlace de muestra.

## Comprobación

1. Revisar que `http://localhost:8100` muestra la página (el puerto puede variar).
2. Modificar temporalmente el `$color-titulo` en `home.page.scss` y guardar.
3. Comprobar que el navegador actualiza el estilo por sí solo.
4. Hacer una captura de la pantalla y ponerla en tu PDF si tu profesor la pide.
5. Sustituir en el PDF la marca "enlace pendiente" por la URL real del repositorio.

Este ZIP contiene el código fuente preparado; **no incluye `node_modules`**. No se ha verificado la instalación de dependencias ni ejecutado la aplicación en este entorno.
