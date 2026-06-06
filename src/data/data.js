// ============================================================
//  HNEXUS — DATOS DE PRODUCTOS
//  Edita este archivo para agregar, quitar o modificar productos
// ============================================================

export const PRODUCTS = [
  {
    id: 1,
    title: "SaaS Dashboard Pro",
    category: "web",           // "web" | "desktop" | "tool"
    status: "available",       // "available" | "coming" | "free"
    price: 149,                // número en USD, o 0 para gratis
    emoji: "◈",
    accentColor: "#00ffe1",
    description:
      "Panel de analíticas en tiempo real con 15+ widgets configurables, multi-usuario, exportación PDF/Excel y API REST completa.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    features: [
      "Dashboard con 15+ widgets configurables",
      "Autenticación con roles y permisos",
      "Exportación a PDF y Excel",
      "API REST documentada (Swagger)",
      "Dark / Light mode incluido",
      "Deploy con un clic en Vercel",
    ],
    downloadUrl: "",           // URL del ZIP en MEGA/Drive o Gumroad
    demoUrl: "",               // URL de la demo en vivo
  },
  {
    id: 2,
    title: "Facturación Electrónica CO",
    category: "desktop",
    status: "available",
    price: 299,
    emoji: "⬡",
    accentColor: "#7c5cfc",
    description:
      "Sistema de escritorio para facturación electrónica Colombia, integrado con la DIAN. Genera XML firmado, notas crédito y reportes contables.",
    tags: ["Python", "Electron", "DIAN API", "SQLite"],
    features: [
      "Integración oficial con la DIAN Colombia",
      "Generación de XML con firma digital",
      "Envío automático al correo del cliente",
      "Soporte multi-empresa",
      "Reportes contables mensuales",
      "Actualizaciones incluidas 1 año",
    ],
    downloadUrl: "",
    demoUrl: "",
  },
  {
    id: 3,
    title: "E-commerce Starter Kit",
    category: "web",
    status: "available",
    price: 89,
    emoji: "◇",
    accentColor: "#ff6b6b",
    description:
      "Plantilla completa de tienda online con carrito, checkout optimizado, pasarela Wompi/Stripe y panel admin en React + Node.",
    tags: ["React", "Node.js", "Stripe", "Wompi"],
    features: [
      "Catálogo con filtros y búsqueda avanzada",
      "Carrito y checkout optimizado",
      "Integración Wompi (Colombia) y Stripe",
      "Panel admin con gestión de inventario",
      "SEO optimizado + Open Graph",
      "Código 100% personalizable",
    ],
    downloadUrl: "",
    demoUrl: "",
  },
  {
    id: 4,
    title: "Bot WhatsApp Business",
    category: "tool",
    status: "available",
    price: 199,
    emoji: "◉",
    accentColor: "#00ffe1",
    description:
      "Automatización para WhatsApp Business con flujos de conversación, integración a CRM y respuestas inteligentes con IA (GPT).",
    tags: ["Node.js", "WhatsApp API", "OpenAI", "MongoDB"],
    features: [
      "Flujos de conversación visuales",
      "Integración con HubSpot y Odoo",
      "Respuestas con IA (GPT-4o)",
      "Reportes de conversaciones",
      "Soporte multi-agente humano",
      "Panel de control web incluido",
    ],
    downloadUrl: "",
    demoUrl: "",
  },
  {
    id: 5,
    title: "Gestor de Inventario",
    category: "desktop",
    status: "coming",
    price: 0,
    emoji: "▣",
    accentColor: "#fbbf24",
    description:
      "Software de escritorio para control de inventarios, ventas y reportes. Funciona offline, sincroniza con la nube opcionalmente.",
    tags: ["Electron", "React", "SQLite", "Node.js"],
    features: [
      "Funciona 100% sin internet",
      "Código de barras y QR",
      "Reportes en PDF",
      "Sincronización opcional en la nube",
      "Multi-sucursal",
      "Alertas de stock mínimo",
    ],
    downloadUrl: "",
    demoUrl: "",
  },
  {
    id: 6,
    title: "Portfolio Starter",
    category: "web",
    status: "free",
    price: 0,
    emoji: "◎",
    accentColor: "#7c5cfc",
    description:
      "Plantilla de portafolio profesional como este sitio. React + CSS moderno, completamente personalizable y lista para Netlify.",
    tags: ["React", "CSS", "Netlify"],
    features: [
      "Diseño moderno dark mode",
      "Sección de proyectos con filtros",
      "Modal de detalle por producto",
      "Formulario de contacto",
      "100% personalizable",
      "Lista para deploy en Netlify",
    ],
    downloadUrl: "",
    demoUrl: "",
  },
];

// ============================================================
//  INFORMACIÓN DEL NEGOCIO
//  Edita aquí todos tus datos de contacto y perfil
// ============================================================

export const BUSINESS = {
  name: "Hnexux",
  tagline: "Desarrollo Web & Software Profesional",
  description:
    "Construyo productos digitales potentes y elegantes — desde webs corporativas hasta sistemas de escritorio robustos para empresas colombianas y clientes globales.",
  location: "sincelejo -sucre , Colombia",
  email: "hnexux6@gmail.com",
  whatsapp: "3215946315",   // sin + ni espacios
  github: "https://github.com/serskynet",
  linkedin: "www.linkedin.com/in/sergio-alvarez-zapata",
  stats: {
    projects: 12,
    technologies: 15,
    clients: 20,
  },
};

// ============================================================
//  SERVICIOS
//  Agrega o quita servicios según lo que ofreces
// ============================================================

export const SERVICES = [
  {
    id: 1,
    icon: "◈",
    title: "Desarrollo Web",
    color: "#00ffe1",
    description:
      "Sitios web y aplicaciones web modernas con React, Next.js y tecnologías de vanguardia. Rápidas, responsivas y optimizadas para SEO.",
  },
  {
    id: 2,
    icon: "⬡",
    title: "Software de Escritorio",
    color: "#7c5cfc",
    description:
      "Aplicaciones de escritorio para Windows y macOS con Electron. Una experiencia nativa, potente y conectada a la nube.",
  },
  {
    id: 3,
    icon: "◉",
    title: "Backend & APIs",
    color: "#ff6b6b",
    description:
      "APIs robustas con Node.js o Python, bases de datos optimizadas, autenticación segura y toda la lógica de negocio que necesitas.",
  },
  {
    id: 4,
    icon: "▣",
    title: "Automatización & IA",
    color: "#fbbf24",
    description:
      "Bots, automatizaciones de procesos, integración con GPT y flujos inteligentes que ahorran tiempo y reducen errores.",
  },
  {
    id: 5,
    icon: "◇",
    title: "E-commerce",
    color: "#00ffe1",
    description:
      "Tiendas online completas con Wompi, PSE o Stripe — con gestión de inventario, pedidos y panel de administración.",
  },
  {
    id: 6,
    icon: "◎",
    title: "Consultoría Técnica",
    color: "#7c5cfc",
    description:
      "Auditoría de arquitectura, code review, optimización de rendimiento y mentoría para llevar tu proyecto al siguiente nivel.",
  },
];

export const SKILLS = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "Python / Django",
  "Electron (Desktop)",
  "PostgreSQL / MySQL",
  "SQLite (Offline apps)",
  "Docker / DevOps",
  "APIs REST / GraphQL",
  "AWS / Cloudflare",
  "Git / CI/CD",
  "Stripe / Wompi / PSE",
];
