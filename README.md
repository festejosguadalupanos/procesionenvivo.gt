# 🕊️ Sistema Web de Procesión en Vivo (GitHub Pages + Firebase)

Este proyecto permite seguir en tiempo real el recorrido de la procesión mediante un mapa interactivo (Leaflet) sincronizado con **Firebase Realtime Database**, listo para publicarse de forma gratuita en **GitHub Pages**.

---

## 📁 Estructura del Proyecto

```
procesion-en-vivo/
├── index.html          # Vista pública para los devotos (mapa, estados, leyenda e información)
├── tracker.html        # Panel del transmisor GPS (para quien camina con la procesión)
├── js/
│   ├── config.js       # ⚙️ AQUÍ SE CONFIGURA FIREBASE Y DATOS DE LA PROCESIÓN
│   └── ruta.js         # Coordenadas oficiales de ida y vuelta
├── css/
│   ├── styles.css      # Estilos responsivos del visor público
│   └── tracker.css     # Estilos táctiles para el móvil del transmisor
├── logo.png            # (Opcional) Logo superior derecho
├── logo_panel.png      # (Opcional) Insignia del panel inferior
└── logo_trini.png      # (Opcional) Icono del anda procesional en el mapa
```

---

## 🚀 PASO 1: Configurar el Nuevo Proyecto en Firebase

1. Entra a tu nueva cuenta en [Firebase Console](https://console.firebase.google.com/).
2. Haz clic en **Agregar proyecto** (o selecciona el nuevo proyecto si ya lo creaste).

### A. Crear la Base de Datos Realtime Database
1. En el menú izquierdo de Firebase, ve a **Compilación (Build)** > **Realtime Database**.
2. Haz clic en **Crear base de datos**.
   * Ubicación: Deja la predeterminada (`us-central1` o la más cercana).
   * Modo de seguridad: Selecciona **Modo de prueba (Test mode)**.
3. Ve a la pestaña **Reglas (Rules)** y asegúrate de que contenga:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
4. Haz clic en **Publicar**.
5. En la pestaña **Datos (Data)**, copia la URL que aparece arriba (ejemplo: `https://tu-proyecto-default-rtdb.firebaseio.com/`).

### B. Obtener las Credenciales Web
1. Haz clic en el engranaje ⚙️ (arriba a la izquierda) > **Configuración del proyecto**.
2. En la sección **Tus apps**, haz clic en el ícono **`</>` (Web)**.
3. Ponle un nombre (ej. `procesion-web`) y haz clic en **Registrar app**.
4. Copia las claves que aparecen en el objeto `firebaseConfig`.

---

## ⚙️ PASO 2: Pegar tus Credenciales en `js/config.js`

Abre el archivo `js/config.js` y reemplaza los valores por los de tu nuevo proyecto:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY_DE_FIREBASE",
  authDomain: "tu-proyecto.firebaseapp.com",
  databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com", // <-- ¡IMPORTANTE!
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef..."
};
```

> 💡 **Nota:** En este mismo archivo `js/config.js` también puedes cambiar el título de la procesión, fechas, horarios y el PIN de acceso al Tracker (por defecto es `2026`).

---

## 🌐 PASO 3: Publicar Gratis en GitHub Pages

Dado que no tienes dominio propio, GitHub Pages te ofrece alojamiento web gratuito con certificado **HTTPS** (indispensable para que los teléfonos permitan el acceso al GPS).

### Opción A: Desde la página web de GitHub (Sin comandos)
1. Inicia sesión en [GitHub](https://github.com/) y haz clic en **New repository** (Nuevo repositorio).
2. Nómbralo (por ejemplo: `procesion-2026`).
3. Elige **Public** y haz clic en **Create repository**.
4. En la pantalla que aparece, haz clic en **"uploading an existing file"** (subir archivos existentes).
5. Arrastra y suelta todos los archivos de esta carpeta (`index.html`, `tracker.html`, las carpetas `js`, `css` y las imágenes).
6. Haz clic en **Commit changes** (Guardar cambios).
7. Ve a la pestaña **Settings** (Configuración) de tu repositorio.
8. En el menú lateral izquierdo, haz clic en **Pages**.
9. En **Build and deployment > Branch**, selecciona la rama **`main`** (o `master`), carpeta `/ (root)` y haz clic en **Save** (Guardar).
10. ¡Listo! En 1-2 minutos GitHub te dará tu enlace oficial:
    * **Visor para los devotos:** `https://tu-usuario.github.io/procesion-2026/`
    * **Panel del transmisor (quien lleva el teléfono):** `https://tu-usuario.github.io/procesion-2026/tracker.html`

---

## 📱 ¿Cómo usar el Tracker el día de la procesión?

1. La persona designada abre desde su teléfono móvil la dirección:
   `https://tu-usuario.github.io/procesion-2026/tracker.html`
2. Si se solicita, introduce el PIN de seguridad (por defecto: `2026`).
3. Presiona el botón verde **▶️ Iniciar** para poner la procesión en estado activo.
4. Presiona **🚶 Iniciar Auto GPS**: el teléfono transmitirá la ubicación automáticamente en tiempo real.
5. **Si se pierde la señal GPS entre iglesias o techos:** puedes activar **🗺️ Modo Toque Manual** y simplemente pulsar en la pantalla sobre la calle donde va el anda para actualizar la posición al instante.
6. Al terminar el recorrido, presiona **⛔ Finalizar**.
