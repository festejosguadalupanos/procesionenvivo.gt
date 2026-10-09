// ===================================================================
// ⚙️ CONFIGURACIÓN GENERAL DEL SISTEMA Y FIREBASE
// ===================================================================
// Pega aquí las credenciales de tu NUEVO proyecto de Firebase.
// Ambos archivos (index.html y tracker.html) usarán esta configuración.
// ===================================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA0PjAVC6pSLqYOI6YliMh3bDnEdTIpEio",
  authDomain: "procesionenvivo.firebaseapp.com",
  databaseURL: "https://procesionenvivo-default-rtdb.firebaseio.com",
  projectId: "procesionenvivo",
  storageBucket: "procesionenvivo.firebasestorage.app",
  messagingSenderId: "395957009030",
  appId: "1:395957009030:web:4f723560dbf68bd5e5af07",
  measurementId: "G-RTC4ZWE51Z"
};

// ===================================================================
// 📌 INFORMACIÓN DE LA PROCESIÓN (Texto visible en la web)
// ===================================================================
const PROCESION_INFO = {
  titulo: "SOLEMNE PROCESIÓN DE REPARACIÓN A LA SANTÍSIMA TRINIDAD",
  subtitulo: "Asociación de Festejos Guadalupanos, Sector \"El Bosque\" El Gallito z.3",
  horario: "VIERNES 22 DE MAYO DEL 2026 | SALIDA: 18:00 hrs | ENTRADA: 21:00 hrs",
  
  // Coordenadas iniciales por defecto (Ciudad de Guatemala)
  centroInicial: [14.640627, -90.524901],
  zoomInicial: 16,

  // Rutas de imágenes (pueden ser locales o URLs web)
  logoPrincipal: "logo.png",
  logoPanel: "logo_panel.png",
  iconoProcesion: "logo_trini.png",

  // Clave PIN para el Tracker (opcional: cámbiala para proteger la transmisión)
  trackerPin: "2026"
};
