# 🚀 Guía de Despliegue

Esta guía te ayudará a publicar tu sitio de podcast en internet de forma gratuita.

---

## 🌐 Opciones de Hosting Gratuito

### 1. Vercel (⭐ Recomendado)

**¿Por qué Vercel?**
- ✅ Detecta automáticamente proyectos Vite
- ✅ Deploy en segundos
- ✅ SSL gratis (HTTPS)
- ✅ Dominio personalizado gratis
- ✅ Preview automático de cada commit

**Pasos:**

1. **Crear cuenta en Vercel:**
   - Ve a https://vercel.com
   - Regístrate con GitHub, GitLab o email

2. **Conectar tu repositorio:**
   ```bash
   # Primero, sube tu proyecto a GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/mi-podcast.git
   git push -u origin main
   ```

3. **Importar en Vercel:**
   - Click en "New Project"
   - Selecciona tu repositorio
   - Vercel detecta automáticamente Vite
   - Click en "Deploy"
   - ¡Listo! Tu sitio está en línea

4. **Configurar dominio (opcional):**
   - Settings → Domains
   - Agrega tu dominio personalizado

---

### 2. Netlify

**Pasos:**

1. **Crear cuenta en Netlify:**
   - Ve a https://netlify.com
   - Regístrate con GitHub o email

2. **Construir el proyecto:**
   ```bash
   npm run build
   ```

3. **Deploy manual:**
   - Arrastra la carpeta `dist` a Netlify
   - O conecta tu repositorio de GitHub

4. **Configuración automática:**
   - Build command: `npm run build`
   - Publish directory: `dist`

---

### 3. GitHub Pages

**Pasos:**

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualizar `package.json`:**
   ```json
   {
     "homepage": "https://tu-usuario.github.io/mi-podcast",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Actualizar `vite.config.js`:**
   ```js
   export default defineConfig({
     base: '/mi-podcast/',
     plugins: [react()],
   })
   ```

4. **Desplegar:**
   ```bash
   npm run deploy
   ```

---

## ⚙️ Configuración para Producción

### Variables de entorno

Si necesitas configurar URLs o claves API:

1. **Crear archivo `.env`:**
   ```env
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX
   ```

2. **Usar en el código:**
   ```js
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Configurar en Vercel/Netlify:**
   - Settings → Environment Variables
   - Agrega las mismas variables

---

## 🎯 Checklist antes de desplegar

- [ ] Todos los episodios tienen imágenes válidas
- [ ] Las rutas de audio funcionan correctamente
- [ ] El `favicon.ico` está personalizado
- [ ] Las metaetiquetas SEO están actualizadas en `index.html`
- [ ] Los enlaces de redes sociales funcionan
- [ ] El formulario de contacto está configurado
- [ ] No hay errores en la consola del navegador
- [ ] El sitio es responsive (prueba en móvil)
- [ ] El sitio funciona sin JavaScript (SSR/SSG opcional)

---

## 🔍 SEO y Metaetiquetas

### Actualizar metaetiquetas en `index.html`:

```html
<!-- Título y descripción -->
<title>Tu Podcast - Descripción corta</title>
<meta name="description" content="Descripción de tu podcast (150-160 caracteres)">

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Tu Podcast">
<meta property="og:description" content="Descripción">
<meta property="og:image" content="URL de imagen 1200x630px">
<meta property="og:url" content="https://tu-sitio.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tu Podcast">
<meta name="twitter:description" content="Descripción">
<meta name="twitter:image" content="URL de imagen">
```

### Crear `robots.txt` en `public/`:

```txt
User-agent: *
Allow: /
Sitemap: https://tu-sitio.com/sitemap.xml
```

### Crear `sitemap.xml` en `public/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-sitio.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-sitio.com/episodes</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 📊 Analytics (Opcional)

### Google Analytics 4:

1. **Crear cuenta en analytics.google.com**

2. **Agregar script en `index.html`:**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🔒 Seguridad

### Headers de seguridad (Vercel):

Crear `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 🎨 Dominio Personalizado

### Opción 1: Dominio gratuito

- **Freenom:** .tk, .ml, .ga, .cf, .gq (gratis por 1 año)
- **Netlify:** subdominio gratis `.netlify.app`
- **Vercel:** subdominio gratis `.vercel.app`

### Opción 2: Dominio de pago

Registradores recomendados:
- **Namecheap:** ~$10/año
- **Google Domains:** ~$12/año
- **Cloudflare:** Precio al costo (~$8-10/año)

**Configurar DNS:**
1. En tu registrador, configura los registros DNS
2. Apunta a los servidores de Vercel/Netlify
3. Espera 24-48 horas para propagación

---

## 🐛 Solución de problemas

### Error: "404 Not Found" en rutas

**Problema:** React Router no funciona en producción

**Solución para Vercel:**
Crear `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Solución para Netlify:**
Crear `public/_redirects`:
```
/*    /index.html   200
```

### Error: Assets no cargan

**Problema:** Las rutas no son correctas

**Solución:**
- Verifica `vite.config.js` → `base: '/'`
- Verifica rutas en `episodes.json` → usar `/audios/` no `./audios/`

---

## 📈 Monitoreo

### Servicios gratuitos de uptime:

- **UptimeRobot:** Monitorea si tu sitio está caído
- **Better Uptime:** Notificaciones por email/SMS

---

## 🎉 ¡Listo!

Tu sitio de podcast está en línea. Ahora puedes:

1. Compartir la URL con amigos
2. Promocionar en redes sociales
3. Agregar nuevos episodios actualizando el JSON
4. Conectar con servicios de podcast (Spotify, Apple Podcasts)

---

**¿Necesitas ayuda?** Consulta la documentación de:
- [Vite Deploy](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
