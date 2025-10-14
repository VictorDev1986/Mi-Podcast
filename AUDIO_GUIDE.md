# 🎵 Guía de Audio para el Proyecto

## 📁 Ubicación de los archivos de audio

Los archivos de audio deben colocarse en la carpeta:
```
public/audios/
```

## 🔊 Formatos soportados

React Player soporta los siguientes formatos:
- **MP3** (recomendado)
- WAV
- OGG
- M4A

## 📋 Cómo agregar tus propios episodios

### Opción 1: Archivos locales

1. **Coloca tu archivo MP3 en `public/audios/`:**
   ```
   public/audios/episodio1.mp3
   public/audios/episodio2.mp3
   ```

2. **Actualiza `src/data/episodes.json`:**
   ```json
   {
     "id": 1,
     "title": "Mi Episodio",
     "audioUrl": "/audios/episodio1.mp3",
     ...
   }
   ```

### Opción 2: URLs externas

Puedes usar URLs de archivos de audio alojados en:
- Google Drive (con link directo)
- Dropbox
- Servidor propio
- SoundCloud
- Anchor.fm

**Ejemplo:**
```json
{
  "audioUrl": "https://ejemplo.com/audio.mp3"
}
```

## 🎙️ Servicios gratuitos para alojar audios

1. **Anchor.fm** (por Spotify)
   - Gratuito
   - Distribución automática
   - URL: https://anchor.fm

2. **SoundCloud**
   - Plan gratuito disponible
   - URL: https://soundcloud.com

3. **Archive.org**
   - Completamente gratuito
   - URL: https://archive.org

## 🧪 Audio de prueba

Para probar la aplicación sin tener episodios reales, puedes usar estos servicios:

### Servicios de audio libre de derechos:
- **YouTube Audio Library**
- **Free Music Archive**
- **Incompetech** (música de Kevin MacLeod)

### Generadores de audio de prueba:
Puedes usar herramientas de text-to-speech para crear episodios de prueba:
- **Google Text-to-Speech**
- **Natural Readers**
- **TTSReader**

## ⚙️ Configuración actual

El proyecto usa **React Player** que soporta:
- Reproducción/Pausa
- Control de volumen
- Barra de progreso
- Salto adelante/atrás
- Duración total

## 🔧 Solución de problemas

### El audio no se reproduce

1. **Verifica la ruta del archivo:**
   - Los archivos en `public/` se sirven desde la raíz `/`
   - Usa `/audios/archivo.mp3` NO `./audios/archivo.mp3`

2. **Verifica el formato:**
   - Asegúrate que sea MP3, WAV u OGG
   - Convierte el archivo si es necesario

3. **Verifica CORS (para URLs externas):**
   - El servidor externo debe permitir CORS
   - Algunas CDNs bloquean la reproducción directa

4. **Abre la consola del navegador:**
   - Presiona F12
   - Ve a la pestaña Console
   - Busca errores relacionados con el audio

### El reproductor no aparece

- Verifica que hayas seleccionado un episodio
- El reproductor solo aparece cuando `currentEpisode` no es null

## 📝 Ejemplo completo

Estructura de archivos:
```
public/
└── audios/
    ├── episodio1.mp3
    ├── episodio2.mp3
    └── episodio3.mp3

src/
└── data/
    └── episodes.json  (con audioUrl: "/audios/episodio1.mp3")
```

JSON:
```json
[
  {
    "id": 1,
    "title": "Bienvenida al Podcast",
    "description": "Episodio introductorio...",
    "audioUrl": "/audios/episodio1.mp3",
    "image": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400",
    "category": "Introducción",
    "duration": "15:32",
    "date": "2025-10-01"
  }
]
```

## 🚀 Para producción

Cuando despliegues en Vercel o Netlify:

1. Los archivos en `public/` se copian automáticamente
2. Asegúrate que los archivos MP3 no sean muy grandes (< 50MB recomendado)
3. Considera usar un CDN para archivos grandes
4. Comprime los audios si es necesario (128kbps es suficiente para podcasts de voz)

---

**Nota:** Este proyecto usa imágenes de Unsplash como placeholder. Para producción, reemplaza con tus propias imágenes.
