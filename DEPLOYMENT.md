# Configuración de Despliegue FTP a legaldatos.cl/prueba

Este proyecto está configurado para desplegarse automáticamente a `legaldatos.cl/prueba` mediante GitHub Actions.

## Configuración de GitHub Secrets

Para que el workflow funcione, debes configurar los siguientes secrets en tu repositorio de GitHub:

### Pasos para agregar los secrets:

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **New repository secret** para cada uno de los siguientes:

### Secrets requeridos:

| Secret Name | Valor |
|------------|-------|
| `FTP_SERVER` | `ftp.elquicapital.cl` |
| `FTP_USERNAME` | `conexion@legaldatos.cl` |
| `FTP_PASSWORD` | `legalconexion26` |

## Información del Hosting

- **Directorio del servidor:** `/home/legaldat/public_html/prueba/`
- **Protocolo:** FTPS (FTP explícito sobre TLS)
- **Puerto:** 21

## Despliegue

El despliegue se ejecuta automáticamente cuando:
- Se hace push a la rama `main`
- Se ejecuta manualmente desde la pestaña "Actions" en GitHub

### Despliegue manual:

1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona el workflow "Deploy to legaldatos.cl/prueba via FTP"
3. Click en **Run workflow**
4. Selecciona la rama y click en **Run workflow**

## Proceso de Despliegue

El workflow realiza los siguientes pasos:
1. Checkout del código
2. Instalación de Node.js 20
3. Instalación de dependencias (`npm ci`)
4. Build del sitio Astro (`npm run build`)
5. Despliegue de la carpeta `dist/` al servidor FTP

## Notas Importantes

- El sitio se desplegará en: `https://legaldatos.cl/prueba/`
- La carpeta `dist/` (generada por Astro) es la que se sube al servidor
- El despliegue NO elimina archivos existentes en el servidor (modo seguro)
