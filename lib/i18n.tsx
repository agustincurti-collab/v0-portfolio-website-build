"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Lang = "es" | "en"

// ─────────────────────────────────────────────
//  DATOS DE CONTACTO (editar acá si cambian)
// ─────────────────────────────────────────────
export const CONTACT = {
  email: "agustin.curti@gmail.com",
  whatsapp: "543364326644", // sin + ni espacios
  instagram: "https://instagram.com/agustinncurti",
  linkedin: "https://linkedin.com", // TODO: actualizar cuando tengas la URL final
}

// Mensaje pre-cargado del WhatsApp (se codifica en la URL)
const WA_MSG = {
  es: "Hola Agustín! Vi tu portfolio y quiero contarte sobre un proyecto.",
  en: "Hi Agustín! I saw your portfolio and I'd like to tell you about a project.",
}

export const waLink = (lang: Lang) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(WA_MSG[lang])}`

// ─────────────────────────────────────────────
//  TRADUCCIONES
// ─────────────────────────────────────────────
export const translations = {
  es: {
    nav: {
      work: "Proyectos",
      services: "Servicios",
      process: "Proceso",
      startProject: "Empezar un proyecto",
    },
    hero: {
      badge: "DISPONIBLE PARA NUEVOS PROYECTOS",
      titleA: "Sitios web y experiencias e-commerce premium",
      titleB: "para marcas",
      titleC: "en crecimiento.",
      subtitle:
        "Diseño y desarrollo productos digitales modernos que combinan estrategia, diseño y tecnología para ayudar a los negocios a crecer online.",
      ctaWork: "Ver proyectos destacados",
      ctaProject: "Empezar un proyecto",
    },
    tech: {
      title: "TECNOLOGÍAS QUE USO",
    },
    work: {
      title: "Proyectos destacados",
      subtitle:
        "Una selección de sitios web y experiencias e-commerce diseñados para combinar estética moderna, alto rendimiento e impacto real en el negocio.",
      viewAll: "Ver todos los proyectos",
      soon: "Próximamente",
    },
    services: {
      tag: "SERVICIOS",
      title: "Especialización & Expertise",
      subtitle:
        "Servicios de diseño y desarrollo enfocados en construir sitios web y productos digitales de alto rendimiento que ayudan a los negocios a crecer online.",
      items: [
        {
          title: "Diseño Web & de Producto",
          description:
            "Diseño moderno y centrado en el usuario para sitios web y productos digitales. Creo interfaces intuitivas que combinan claridad, usabilidad e identidad visual sólida.",
          features: ["Diseño UX/UI", "Wireframing & Prototipado", "Design Systems", "Diseño responsive"],
        },
        {
          title: "Desarrollo Web & E-commerce",
          description:
            "Sitios web rápidos y escalables construidos con tecnologías modernas. Enfocados en rendimiento, flexibilidad y mantenibilidad a largo plazo.",
          features: [
            "Desarrollo React / Next.js",
            "Shopify y WooCommerce",
            "Integración Headless CMS",
            "Optimización de rendimiento",
          ],
        },
        {
          title: "Optimización & Crecimiento",
          description:
            "Mejoro rendimiento, usabilidad y conversiones para convertir tu sitio web en una herramienta poderosa para tu negocio.",
          features: [
            "Optimización de rendimiento web",
            "Buenas prácticas SEO",
            "Optimización de conversión",
            "Analytics & Seguimiento",
          ],
        },
      ],
    },
    process: {
      tag: "CÓMO TRABAJO",
      title: "Un proceso simple y transparente para entregar productos digitales de alta calidad.",
      subtitle:
        "Cada proyecto sigue un flujo de trabajo estructurado que asegura claridad, colaboración y resultados de alta calidad desde el concepto hasta el lanzamiento.",
      circleLabel: "PROYECTOS ENTREGADOS",
      steps: [
        {
          title: "Descubrimiento & Estrategia",
          description:
            "Entiendo tus objetivos de negocio, tu público objetivo y los requisitos del proyecto para definir la estrategia digital correcta.",
        },
        {
          title: "Diseño & Prototipado",
          description:
            "Diseño interfaces modernas y prototipos interactivos para visualizar la experiencia antes de comenzar el desarrollo.",
        },
        {
          title: "Desarrollo & Lanzamiento",
          description:
            "Construyo el producto con tecnologías modernas, optimizado en rendimiento, y lo lanzo listo para producción.",
        },
      ],
    },
    stats: {
      items: [
        { value: "5+", label: "AÑOS DE EXPERIENCIA" },
        { value: "50+", label: "PROYECTOS COMPLETADOS" },
        { value: "40+", label: "CLIENTES SATISFECHOS" },
        { value: "10+", label: "TECNOLOGÍAS WEB" },
      ],
    },
    faq: {
      titleA: "Preguntas",
      titleB: "Frecuentes",
      subtitle: "Respuestas claras a las dudas más comunes sobre sitios web, e-commerce y proyectos digitales.",
      items: [
        {
          question: "¿Qué es el hosting y por qué afecta el precio?",
          answer:
            "El hosting es el servicio que almacena tu sitio web y lo mantiene disponible online. Un buen hosting asegura que tu sitio cargue rápido, se mantenga seguro y accesible en todo momento.",
        },
        {
          question: "¿De quién es el sitio web una vez terminado?",
          answer:
            "Tuyo. El dominio, la cuenta de hosting y los archivos del sitio te pertenecen. Trabajo de forma transparente para que mantengas la propiedad total de tus activos digitales.",
        },
        {
          question: "¿Cuánto tarda un proyecto web?",
          answer:
            "Depende del alcance y la complejidad. Una landing page puede tomar solo unos días, mientras que un sitio web de negocio o e-commerce suele requerir entre 2 y 6 semanas.",
        },
        {
          question: "¿Por qué es importante el mantenimiento?",
          answer:
            "Los sitios web necesitan actualizaciones, mejoras de seguridad, backups y cambios ocasionales de contenido. El mantenimiento continuo mantiene tu sitio seguro, rápido y funcionando al máximo.",
        },
        {
          question: "¿Trabajás con proyectos a medida o usás plantillas?",
          answer:
            "Depende de lo que necesites. Para proyectos que requieren funcionalidad específica o una identidad propia, desarrollo a medida con React y Next.js. Cuando el objetivo es salir rápido y con presupuesto acotado, puedo trabajar sobre WordPress o Tienda Nube. Siempre elijo la opción que mejor se ajusta a tu caso, no una fórmula única.",
        },
        {
          question: "¿Podés integrar pagos, reservas o sistemas a medida?",
          answer:
            "Sí. Integro pasarelas de pago, sistemas de turnos y reservas, paneles de administración, bases de datos y automatizaciones. Trabajo con Node.js, PostgreSQL y Supabase para la parte de backend, así que el sitio puede ir mucho más allá de lo visual.",
        },
        {
          question: "¿Qué pasa si ya tengo una web y quiero mejorarla o migrarla?",
          answer:
            "Se puede. Puedo tomar un sitio existente para optimizar su rendimiento, rediseñarlo o migrarlo a una tecnología más moderna. Primero reviso cómo está armado y te digo con franqueza si conviene mejorarlo o rehacerlo de cero.",
        },
        {
          question: "¿Cómo elegís la tecnología para cada proyecto?",
          answer:
            "En base a los objetivos del proyecto, no a mis preferencias. Un e-commerce, una landing y una app web piden herramientas distintas. Trabajo con Next.js, React, Node.js, WordPress, WooCommerce, Tienda Nube y Shopify, entre otras, y elijo según rendimiento, presupuesto y qué tan a medida tiene que ser.",
        },
      ],
    },
    cta: {
      titleA: "¿Tenés un proyecto en mente?",
      titleB: "Construyamos algo grande juntos.",
      subtitle: "Contame sobre tu proyecto y te respondo para conversar cómo podemos hacerlo realidad.",
      start: "Empezar un proyecto",
      whatsapp: "Escribir por WhatsApp",
    },
    footer: {
      brandDesc:
        "Diseño y desarrollo experiencias digitales modernas. Desde San Nicolás, Buenos Aires — trabajando con clientes de todo el mundo.",
      navTitle: "Navegación",
      connectTitle: "Conectemos",
      rights: "Todos los derechos reservados.",
      nav: [
        { label: "Proyectos", href: "#work" },
        { label: "Servicios", href: "#services" },
        { label: "Proceso", href: "#process" },
      ],
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      startProject: "Start a Project",
    },
    hero: {
      badge: "AVAILABLE FOR NEW PROJECTS",
      titleA: "Premium websites and e-commerce experiences",
      titleB: "for",
      titleC: "growing brands.",
      subtitle:
        "I design and develop modern digital products that combine strategy, design and technology to help businesses grow online.",
      ctaWork: "View Selected Work",
      ctaProject: "Start a Project",
    },
    tech: {
      title: "TECHNOLOGIES I USE",
    },
    work: {
      title: "Selected Work",
      subtitle:
        "A selection of websites and e-commerce experiences designed to combine modern aesthetics, high performance and real business impact.",
      viewAll: "View all projects",
      soon: "Coming soon",
    },
    services: {
      tag: "SERVICES",
      title: "Expertise & Specialization",
      subtitle:
        "Design and development services focused on building high-performance websites and digital products that help businesses grow online.",
      items: [
        {
          title: "Web & Product Design",
          description:
            "Modern, user-focused design for websites and digital products. I create intuitive interfaces that combine clarity, usability and strong visual identity.",
          features: ["UX/UI Design", "Wireframing & Prototyping", "Design Systems", "Responsive design"],
        },
        {
          title: "Web & E-commerce Development",
          description:
            "Fast, scalable websites built with modern technologies. Focused on performance, flexibility and long-term maintainability.",
          features: [
            "React / Next.js Development",
            "Shopify and WooCommerce",
            "Headless CMS Integration",
            "Performance Optimization",
          ],
        },
        {
          title: "Optimization and Growth",
          description:
            "Improving performance, usability and conversions to turn your website into a powerful business tool.",
          features: [
            "Website Performance Optimization",
            "SEO Best Practices",
            "Conversion Optimization",
            "Analytics & Tracking",
          ],
        },
      ],
    },
    process: {
      tag: "HOW I WORK",
      title: "A simple and transparent process to deliver high-quality digital products.",
      subtitle:
        "Every project follows a structured workflow that ensures clarity, collaboration and high-quality results from concept to launch.",
      circleLabel: "PROJECTS DELIVERED",
      steps: [
        {
          title: "Discovery & Strategy",
          description:
            "Understanding your business goals, target audience and project requirements to define the right digital strategy.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Designing modern interfaces and interactive prototypes to visualize the experience before development begins.",
        },
        {
          title: "Development & Launch",
          description:
            "Building the product with modern technologies, optimized for performance, and launching it production-ready.",
        },
      ],
    },
    stats: {
      items: [
        { value: "5+", label: "YEARS EXPERIENCE" },
        { value: "50+", label: "PROJECTS COMPLETED" },
        { value: "40+", label: "HAPPY CLIENTS" },
        { value: "10+", label: "WEB TECHNOLOGIES" },
      ],
    },
    faq: {
      titleA: "Frequently Asked",
      titleB: "Questions",
      subtitle: "Clear answers to common questions about websites, e-commerce and digital projects.",
      items: [
        {
          question: "What is hosting and why does it affect pricing?",
          answer:
            "Hosting is the service that stores your website and makes it available online. Quality hosting ensures your site loads quickly, remains secure, and stays accessible to visitors at all times.",
        },
        {
          question: "Who owns the website once it's completed?",
          answer:
            "You do. The domain, hosting account, and website files belong to you. I work transparently so you keep full ownership of your digital assets.",
        },
        {
          question: "How long does a website project take?",
          answer:
            "Timelines vary depending on the project's scope and complexity. A landing page may take only a few days, while a business website or e-commerce project typically requires between 2 and 6 weeks.",
        },
        {
          question: "Why is ongoing maintenance important?",
          answer:
            "Websites require regular updates, security improvements, backups, and occasional content changes. Ongoing maintenance helps keep your site secure, fast, and performing at its best.",
        },
        {
          question: "Do you build custom projects or use templates?",
          answer:
            "It depends on what you need. For projects that require specific functionality or a unique identity, I build custom with React and Next.js. When the goal is to launch fast on a tight budget, I can work on WordPress or Tienda Nube. I always pick the option that fits your case best, not a one-size-fits-all formula.",
        },
        {
          question: "Can you integrate payments, bookings or custom systems?",
          answer:
            "Yes. I integrate payment gateways, scheduling and booking systems, admin dashboards, databases and automations. I work with Node.js, PostgreSQL and Supabase on the backend, so the site can go well beyond the visual layer.",
        },
        {
          question: "What if I already have a site and want to improve or migrate it?",
          answer:
            "That works. I can take an existing site to optimize its performance, redesign it, or migrate it to a more modern stack. I first review how it's built and tell you honestly whether it's better to improve it or rebuild from scratch.",
        },
        {
          question: "How do you choose the technology for each project?",
          answer:
            "Based on the project's goals, not my preferences. An e-commerce, a landing page and a web app call for different tools. I work with Next.js, React, Node.js, WordPress, WooCommerce, Tienda Nube and Shopify, among others, choosing based on performance, budget and how custom it needs to be.",
        },
      ],
    },
    cta: {
      titleA: "Have a project in mind?",
      titleB: "Let's build something great together.",
      subtitle: "Tell me about your project and I'll get back to you to discuss how we can bring it to life.",
      start: "Start a Project",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      brandDesc:
        "I design and develop modern digital experiences. Based in San Nicolás, Buenos Aires — working with clients worldwide.",
      navTitle: "Navigation",
      connectTitle: "Connect",
      rights: "All rights reserved.",
      nav: [
        { label: "Work", href: "#work" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
      ],
    },
  },
} as const

// ─────────────────────────────────────────────
//  CONTEXT / PROVIDER / HOOK
// ─────────────────────────────────────────────
type I18nContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  t: (typeof translations)["es"]
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null
    if (saved === "es" || saved === "en") setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l)
      document.documentElement.lang = l
    }
  }

  const toggleLang = () => setLang(lang === "es" ? "en" : "es")

  return (
    <I18nContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n debe usarse dentro de I18nProvider")
  return ctx
}
