# 🎵 Carpeta de Audios

Esta carpeta debe contener los archivos MP3 de tus episodios.

## 📝 Instrucciones:

1. Coloca aquí tus archivos de audio en formato MP3
2. Nómbralos de forma descriptiva: `episodio1.mp3`, `episodio2.mp3`, etc.
3. Actualiza las rutas en `src/data/episodes.json`

## 🌐 Alternativa: Usar URLs externas

Si prefieres no almacenar los audios localmente, puedes usar URLs de servicios como:
- SoundCloud
- Anchor.fm
- Archive.org

Simplemente actualiza el `audioUrl` en el JSON con la URL completa.

## ⚠️ Nota importante:

- Los archivos de esta carpeta se servirán desde la ruta `/audios/`
- Ejemplo: Si tienes `episodio1.mp3` aquí, la URL será `/audios/episodio1.mp3`
- Los archivos grandes pueden afectar el tiempo de carga. Se recomienda < 50MB

Para más información, consulta `AUDIO_GUIDE.md` en la raíz del proyecto.
