# CyberForge - Servicios de Ciberseguridad

Plataforma profesional para servicios de OSINT, Pentesting y Recuperación de Datos.

## 🚀 Desarrollo Local

### Opción 1: Docker (Recomendado)

**Prerrequisitos:**
- Docker y Docker Compose instalados

```bash
# 1. Clonar el repositorio
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Ejecutar en modo desarrollo
docker-compose up cyberforge-dev

# 3. Abrir http://localhost:8080
```

**Comandos útiles:**
```bash
# Desarrollo con recarga automática
docker-compose up cyberforge-dev

# Producción
docker-compose up cyberforge-prod

# Reconstruir la imagen
docker-compose build

# Ejecutar en segundo plano
docker-compose up -d cyberforge-dev
```

### Opción 2: Desarrollo Nativo

**Prerrequisitos:**
- Node.js 18+ y npm ([instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

```bash
# 1. Clonar el repositorio
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# 4. Abrir http://localhost:8080
```

## 🔧 Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Verificar código
```

## 📋 Editar en Lovable

**URL del Proyecto:** https://lovable.dev/projects/d83516e3-e683-4b01-972e-ff09d69e600b

Visita [Lovable Project](https://lovable.dev/projects/d83516e3-e683-4b01-972e-ff09d69e600b) para editar mediante IA.

Los cambios en Lovable se sincronizan automáticamente con este repositorio.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d83516e3-e683-4b01-972e-ff09d69e600b) and click on Share -> Publish.

## 🌐 Despliegue en GitHub Pages

### Configuración Automática

El proyecto incluye un workflow de GitHub Actions que automáticamente construye y despliega la aplicación cada vez que haces push a la rama `main`.

### Configurar Dominio Personal

1. **Editar archivo CNAME:**
   ```bash
   # Editar public/CNAME con tu dominio
   echo "tudominio.com" > public/CNAME
   ```

2. **Configurar DNS en tu proveedor de dominio:**
   - **Tipo A** para el dominio raíz:
     - Nombre: `@`
     - Valor: `185.199.108.153`
     - Valor: `185.199.109.153`
     - Valor: `185.199.110.153`
     - Valor: `185.199.111.153`
   
   - **CNAME** para www:
     - Nombre: `www`
     - Valor: `tu-usuario.github.io`

3. **Activar GitHub Pages:**
   - Ve a tu repositorio → Settings → Pages
   - Source: "GitHub Actions"
   - Custom domain: ingresa tu dominio

4. **Push a GitHub:**
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

### Verificación SSL

GitHub automáticamente proveerá certificado SSL (HTTPS) para tu dominio. Puede tomar hasta 24 horas.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
