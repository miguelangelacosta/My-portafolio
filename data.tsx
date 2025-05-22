import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
 
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/miguelangelacosta",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/miguel-acosta-ortiz-384944272/",
  },
];



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "full stack Developer",
        subtitle: "GO IT LATAM",
        description: "Colaboro con equipos dinámicos para desarrollar interfaces de usuario atractivas y funcionales que contribuyen al éxito de nuestros clientes en el mundo digital. Me enfoco en crear experiencias intuitivas y visualmente impactantes, combinando diseño y tecnología para ofrecer soluciones que realmente marquen la diferencia.",
        date: "dic 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "Neetwork school",
        description: "Además de programar ideas, también me apasiona el diseño y la animación. Esta pasión me ha llevado a adquirir conocimientos en herramientas altamente valoradas en la industria, ideales para realizar trabajos profesionales y de altos estándares. Disfruto dar vida a los conceptos a través del movimiento y la estética, combinando la lógica del desarrollo con la creatividad del diseño visual. ",
        date: "May 2022",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo full stack",
        subtitle: "GO IT LATAM",
        description: "Como desarrollador full stack, he tenido la oportunidad de participar en proyectos diversos y desafiantes que me han permitido expandir mis habilidades técnicas y creativas. Disfruto transformar ideas en experiencias digitales funcionales y atractivas, y me motiva saber que mi trabajo contribuye a crear soluciones que impactan positivamente en los usuarios. Cada proyecto representa para mí una nueva oportunidad para aprender, crecer y dejar mi huella en el mundo digital.",
        date: "MAYO 2025",
    },
    {
        id: 4,
        title: "Prácticas Grado ",
        subtitle: "GO IT LATAM",
        description: "Durante mi período de prácticas, trabajé en un entorno multicultural junto a profesionales talentosos de distintas partes del mundo. Participé activamente en el desarrollo de proyectos reales, aplicando los conocimientos adquiridos para transformar ideas en soluciones concretas. Esta experiencia no solo contribuyó a la satisfacción de los clientes, sino que también me permitió crecer profesionalmente al ver materializados los resultados de nuestro trabajo en equipo. ",
        date: "Mar 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
   
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "opusindustri",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/",
    },
    {
        id: 2,
        name: "o.k karen osorio nails clud",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "auto paint perdomo",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
]