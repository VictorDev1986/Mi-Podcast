# ⚡ Comandos Rápidos - Cheat Sheet

Esta guía contiene todos los comandos útiles para trabajar con el proyecto.

---

## 🚀 Comandos de Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```
- Inicia Vite en modo desarrollo
- URL: http://localhost:5173
- Hot reload activado (los cambios se ven automáticamente)

### Construir para producción
```bash
npm run build
```
- Genera la carpeta `dist/` optimizada
- Minifica JS y CSS
- Lista para subir a hosting

### Previsualizar build de producción
```bash
npm run preview
```
- Sirve la carpeta `dist/` localmente
- Prueba cómo se verá en producción

### Linter (revisar código)
```bash
npm run lint
```
- Revisa errores de estilo de código
- Basado en ESLint

---

## 📦 Comandos de npm

### Instalar todas las dependencias
```bash
npm install
```
- Instala todo lo que está en `package.json`
- Crea la carpeta `node_modules/`

### Instalar una dependencia nueva
```bash
# Dependencia de producción
npm install nombre-paquete

# Dependencia de desarrollo
npm install -D nombre-paquete
```

### Desinstalar una dependencia
```bash
npm uninstall nombre-paquete
```

### Actualizar dependencias
```bash
# Ver paquetes desactualizados
npm outdated

# Actualizar todos
npm update

# Actualizar uno específico
npm update nombre-paquete
```

### Limpiar caché
```bash
npm cache clean --force
```

---

## 🔧 Comandos de Git

### Inicializar repositorio
```bash
git init
```

### Ver estado de archivos
```bash
git status
```

### Agregar archivos al staging
```bash
# Agregar un archivo
git add archivo.js

# Agregar todos los archivos
git add .
```

### Hacer commit
```bash
git commit -m "Mensaje descriptivo del cambio"
```

### Conectar con GitHub
```bash
git remote add origin https://github.com/usuario/repo.git
```

### Subir cambios
```bash
# Primera vez
git push -u origin main

# Siguientes veces
git push
```

### Ver historial de commits
```bash
git log

# Versión resumida
git log --oneline
```

### Crear rama nueva
```bash
git checkout -b nombre-rama
```

### Cambiar de rama
```bash
git checkout nombre-rama
```

---

## 🎨 Comandos de Tailwind

### Generar configuración
```bash
npx tailwindcss init
```

### Generar con PostCSS
```bash
npx tailwindcss init -p
```

### Compilar CSS (manual)
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

---

## 🧪 Testing (si lo agregas en el futuro)

### Instalar Vitest
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Ejecutar tests
```bash
npm test
```

### Tests en modo watch
```bash
npm test -- --watch
```

---

## 📱 Comandos útiles de Windows PowerShell

### Navegar entre carpetas
```powershell
# Ir a una carpeta
cd "ruta/a/carpeta"

# Ir a carpeta padre
cd ..

# Ver carpeta actual
pwd
```

### Listar archivos
```powershell
# Listar archivos
ls

# Listar con detalles
ls -Force
```

### Crear carpetas
```powershell
mkdir nombre-carpeta
```

### Eliminar archivos/carpetas
```powershell
# Eliminar archivo
rm archivo.txt

# Eliminar carpeta y contenido
rm -r nombre-carpeta
```

### Limpiar terminal
```powershell
clear
# o
cls
```

---

## 🐛 Comandos de Solución de Problemas

### Reinstalar node_modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Limpiar caché de Vite
```bash
rm -rf node_modules/.vite
```

### Verificar versión de Node
```bash
node --version
npm --version
```

### Ejecutar con más información de errores
```bash
npm run dev -- --debug
```

---

## 🔍 Comandos de búsqueda en código

### Buscar texto en archivos (PowerShell)
```powershell
Select-String -Path "*.jsx" -Pattern "texto"
```

### Contar líneas de código
```powershell
(Get-Content -Path "*.jsx" | Measure-Object -Line).Lines
```

---

## 📊 Comandos de análisis

### Ver tamaño del bundle
```bash
npm run build
```
Luego revisa la salida en consola

### Analizar dependencias
```bash
npm list

# Solo primer nivel
npm list --depth=0
```

---

## 🚢 Comandos de Deployment

### Deploy a Vercel
```bash
# Instalar CLI de Vercel
npm i -g vercel

# Deploy
vercel
```

### Deploy a Netlify
```bash
# Instalar CLI de Netlify
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Deploy a GitHub Pages
```bash
npm run deploy
```

---

## 💡 Tips Útiles

### Ejecutar múltiples comandos
```bash
# En secuencia (uno después del otro)
npm install && npm run dev

# En paralelo (ambos al mismo tiempo) - requiere concurrently
npm install -D concurrently
# En package.json: "dev:all": "concurrently \"npm:dev\" \"npm:backend\""
```

### Abrir proyecto en VS Code desde terminal
```bash
code .
```

### Ver puerto en uso
```powershell
netstat -ano | findstr :5173
```

### Matar proceso en puerto
```powershell
# Buscar PID
netstat -ano | findstr :5173

# Matar proceso (reemplaza PID)
taskkill /PID numero_pid /F
```

---

## 📝 Aliases útiles para package.json

Agrega estos scripts en tu `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "clean": "rm -rf node_modules dist",
    "reinstall": "npm run clean && npm install",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "netlify deploy --prod"
  }
}
```

---

## 🎯 Workflow Típico

### Día a día de desarrollo:
```bash
# 1. Abrir proyecto
cd my-podcast-site

# 2. Actualizar dependencias (si hay cambios)
git pull
npm install

# 3. Iniciar desarrollo
npm run dev

# 4. Hacer cambios en el código...

# 5. Guardar cambios
git add .
git commit -m "Descripción de cambios"
git push

# 6. (Opcional) Deploy automático si usas Vercel/Netlify
```

### Agregar un nuevo episodio:
```bash
# 1. Agregar audio a public/audios/
# 2. Editar src/data/episodes.json
# 3. Guardar y commitear
git add .
git commit -m "Agregar episodio X"
git push
```

---

**💡 Tip:** Guarda este archivo para consulta rápida. ¡Marca tus comandos más usados!

**🔖 Atajos de teclado en terminal:**
- `Ctrl + C` - Detener proceso
- `Ctrl + L` - Limpiar terminal
- `↑` / `↓` - Navegar historial de comandos
- `Tab` - Autocompletar
