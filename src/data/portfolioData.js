/**
 * Centralized Portfolio Data
 * Clean, structured and recruiter-focused data source.
 */

export const personalInfo = {
  name: "Alberlis Méndez",
  role: "Desarrolladora Frontend & Full Stack",
  headline: "Desarrolladora Frontend & Full Stack",
  tagline: "Ingeneria de Sistemas. Especializada en la construcción de aplicaciones web funcionales con React, Python y arquitecturas basadas en APIs. Enfocada en escribir código limpio, interfaces intuitivas y soluciones estables listas para producción.",
  availability: "Disponible para nuevas oportunidades laborales",
  location: "Remoto / Venezuela",
  email: "alberlismendez0@gmail.com",
  phone: "+58 4124253607",
  github: "https://github.com/alberlismendez0-hue",
  linkedin: "https://linkedin.com/in/alberlis-mendez",
  cvUrl: "/public/CV_Alberlis_Mendez_Sistemas.pdf",
  about: `Ingeniera de sistemas con experiencia en el desarrollo de software frontend y full stack, especializada en React, JavaScript/TypeScript, Python y bases de datos relacionales. Apasionada por resolver problemas de negocio mediante soluciones web modernas, arquitecturas escalables y código bien documentado.`,
};

export const skillsData = {
  frontend: {
    title: "Frontend & UI Engineering",
    subtitle: "Desarrollo de interfaces reactivas, accesibles y modulares.",
    icon: "Code2",
    technologies: [
      { name: "React 19 / 18", color: "#38bdf8" },
      { name: "Next.js", color: "#f472b6" },
      { name: "TypeScript", color: "#60a5fa" },
      { name: "JavaScript (ES6+)", color: "#facc15" },
      { name: "Tailwind CSS", color: "#38bdf8" },
      { name: "Bootstrap 5", color: "#c084fc" },
      { name: "Redux / Zustand", color: "#ec4899" },
      { name: "HTML5 & CSS3 Semántico", color: "#f472b6" },
    ],
  },
  backend: {
    title: "Backend & Arquitectura de APIs",
    subtitle: "Lógica de servidor, integración de microservicios y persistencia.",
    icon: "Terminal",
    technologies: [
      { name: "Python / FastAPI / Django", color: "#38bdf8" },
      { name: "Node.js / Express", color: "#4ade80" },
      { name: "PostgreSQL", color: "#60a5fa" },
      { name: "REST APIs & Webhooks", color: "#ec4899" },
      { name: "Odoo 17 ERP", color: "#a855f7" },
      { name: "Supabase / Firebase", color: "#f59e0b" },
      { name: "MongoDB", color: "#4ade80" },
      { name: "SQL & Modelado ER", color: "#38bdf8" },
    ],
  },
  tools: {
    title: "Herramientas, DevOps & Cloud",
    subtitle: "Flujos de integración continua, contenedorización y despliegue.",
    icon: "Cpu",
    technologies: [
      { name: "Git & GitHub", color: "#f97316" },
      { name: "Docker", color: "#38bdf8" },
      { name: "Vite / Webpack", color: "#c084fc" },
      { name: "AWS (EC2, S3, RDS)", color: "#f59e0b" },
      { name: "Vercel / Netlify", color: "#ffffff" },
      { name: "Linux & Bash", color: "#4ade80" },
      { name: "Postman & API Testing", color: "#f43f5e" },
      { name: "Figma a Código Pixel-Perfect", color: "#f472b6" },
    ],
  },
};

export const projects = [
  {
    id: 1,
    title: "Sistema B2B de Gestión Integral de Pedidos al Mayor",
    company: "Empresa de Lubricantes",
    duration: "6 meses de desarrollo",
    image:"/projects/sistemab2b.png",
    gallery:[
      "/projects/sistemab2bmoni.png",

    ],
    description: "Plataforma empresarial desarrollada desde cero para automatizar el ciclo de pedidos comerciales entre la empresa y su red de distribuidores. Integra catálogo con listas de precios dinámicas, cálculo de márgenes en tiempo real, gestión de inventario y generación automática de órdenes.",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "Bootstrap 5", "HTML5", "CSS3"],
    githubUrl: "https://github.com/alberlismendez0-hue/Sistemab2balberlis#readme",
    demoUrl: "",
  },
  {
    id: 2,
    title: "Plataforma Web de Delivery Automatizada",
    company: "Cumbre Food",
    duration: "En producción (Vercel)",
    image:"/projects/cumbre1.png",
    gallery:[
      '/projects/cumbre2.png',
      '/projects/cumbre3.png',
      '/projects/cumbre4.png',

    ],
    description: "Aplicación web de pedidos gastronómicos con flujo autónomo de punta a punta. Permite la selección dinámica de menú, personalización de ingredientes, cálculo inmediato de costos y despacho directo de órdenes optimizado para dispositivos móviles.",
    technologies: ["React", "Vite", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    githubUrl: "https://github.com/alberlismendez0-hue/Cumbre-Food-New-#readme",
    demoUrl: "https://cumbre-food-mda.vercel.app/",
  },
  {
    id: 3,
    title: "PWA y Módulos Empresariales para Control de Flotas y Servicios",
    company: "Multiempresa Automotriz",
    duration: "Despliegue Cloud (AWS)",
    image: '/projects/servidriver1.png',
    gallery:[
      '/projects/servidriver2.png',
      '/projects/servidriver3.png',
      '/projects/servidriver4.png',
      '/projects/servidriver5.png',
      '/projects/servidriver6.png',
    ],
    description: "Aplicación Web Progresiva conectada a Odoo 17 Community con módulos personalizados desarrollados desde cero. Automatiza el seguimiento preventivo de mantenimiento, cambios de aceite y fidelización de clientes mediante recordatorios programados con API de mensajería SMS (Tedexis). Arquitectura contenida en Docker y desplegada en AWS.",
    technologies: ["Odoo 17", "Python", "XML", "JavaScript", "Tailwind CSS", "Docker", "AWS", "API Tedexis", "Linux"],
    demoUrl: "https://erp.networkconsultores.com.ve/pwa/login",
  },
  {
    id: 4,
    title: "Plataforma de Delivery para Restaurante Tradicional",
    company: "Restaurante de Comida Llanera",
    duration: "Producción Web",
    image:'/projects/montana1.png',
    gallery:[
      '/projects/montana2.png',
      '/projects/montana3.png',
      '/projects/montana4.png',
      '/projects/montana5.png',

    ],
    description: "Portal web responsivo enfocado en la experiencia móvil, navegación ágil por categorías de platos típicos, gestión ágil del carrito de compras y procesamiento rápido de comandas para agilizar la operación diaria.",
    technologies: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/alberlismendez/delivery-comida-llanera",
    demoUrl: "",
  },
];
