# INTEGRALTECH – Instalación en Netlify + Google Sheets

Archivos clave:
- `html-netlify/` → sitio estático listo para subir (HTML, CSS y JS).
- `google-apps-script/Code.gs` → script que guarda los leads en Google Sheets.

---

## Parte 1 · Google Sheets + Apps Script

1. Entra a https://sheets.new y crea una hoja llamada **INTEGRALTECH Leads**.
2. En el menú: **Extensiones → Apps Script**.
3. Borra el código que aparece y pega todo el contenido de `google-apps-script/Code.gs`.
4. Guarda (💾) y, en el menú de funciones, elige **autorizar** y pulsa ▶ Ejecutar.
   - Acepta los permisos de Google (Opciones avanzadas → Ir al proyecto, si aparece advertencia).
5. Clic en **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier persona**.
   - Clic en **Implementar** y copia la **URL de la aplicación web** (termina en `/exec`).
6. Prueba: pega la URL en el navegador. Debe mostrar `INTEGRALTECH lead endpoint OK`.

> Cada vez que cambies el código, usa **Implementar → Administrar implementaciones → ✏️ → Nueva versión**. La URL no cambia.

---

## Parte 2 · Conectar la URL con el sitio

1. Abre `lib/site.ts` y reemplaza:
   ```ts
   leadEndpoint: "PEGAR_URL_APPS_SCRIPT_AQUI",
   ```
   por tu URL, por ejemplo:
   ```ts
   leadEndpoint: "https://script.google.com/macros/s/AKfy.../exec",
   ```
2. Vuelve a generar el HTML:
   ```bash
   cd "C:\Users\Admin\Downloads\INTEGRALTECH"
   npm install
   npm run build
   ```
3. Copia la carpeta `out` a `html-netlify` (reemplazando la anterior).

---

## Parte 3 · Publicar en Netlify

### Opción A · Arrastrar y soltar (la más rápida)
1. Crea una cuenta gratuita en https://app.netlify.com (usa la cuenta que quieras publicar).
2. Ve a **Sites** → **Add new site** → **Deploy manually** (o entra a https://app.netlify.com/drop).
3. Arrastra la carpeta **`html-netlify`** al recuadro.
4. Netlify te dará una URL tipo `https://nombre-aleatorio.netlify.app`.
5. Para cambiarla: **Site configuration → Change site name** (por ejemplo `integraltech-gye`).

### Opción B · Conexión con GitHub (actualiza sola con cada cambio)
1. Sube la carpeta `INTEGRALTECH` a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project → GitHub**, y elige el repositorio.
3. Configuración de build (ya viene en `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Deploy site**. Cada `git push` vuelve a publicar.

### Opción C · Netlify CLI
```bash
cd "C:\Users\Admin\Downloads\INTEGRALTECH"
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --build --prod
```
Usa la opción 1 de `init` (*Create & configure a new site*) y elige tu equipo.

---

## Parte 4 · Comprobaciones finales

- [ ] El sitio carga en la URL de Netlify.
- [ ] El botón de WhatsApp abre `wa.me/593987730345`.
- [ ] El chat responde y los botones funcionan.
- [ ] Envía una prueba desde el formulario de contacto y revisa la hoja **Leads**.
- [ ] Mensajes escritos en el chat también aparecen en la hoja (origen: chatbot).

## Pendientes antes de publicar
- Reemplazar `[CORREO]`, `[DIRECCIÓN]`, `[REDES SOCIALES]` y `[HORARIO DE ATENCIÓN]` en `lib/site.ts`.
- Reemplazar los testimonios `[EJEMPLO]` y la cifra del 98 % con datos reales.
- Sustituir las imágenes de referencia por fotos propias.
