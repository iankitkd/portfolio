import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaGitAlt, FaFigma, FaCode, FaCubes, FaTools, FaCloud, FaPython, FaJava, FaVial, } from 'react-icons/fa';
import { FiBriefcase, FiCode, FiGrid, FiSend, FiUser } from 'react-icons/fi';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiRedux, SiMysql, SiRedis, SiPrisma, SiVercel, SiGithubactions, SiPostman, SiKubernetes, SiRadixui, SiCplusplus, SiTestinglibrary, SiPrometheus, SiVitest, SiGrafana, } from 'react-icons/si';
import { FaEnvelope, FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';

export const fullName = "Ankit Kumar";

export const heroData = {
  title: "Full-Stack Web Developer",
  description: "I build fast, responsive web apps with seamless user experiences and reliable, scalable backends.",
  // description: "I build fast, responsive web applications using modern technologies. Focused on delivering seamless user experiences and building reliable, scalable backend systems.",
  // description: "I build responsive, performant web applications with modern technologies. Passionate about creating seamless user experiences and robust backend systems.",
};

export const navLinks = [
  { name: "About", href: "#", Icon: FiUser },
  { name: "Skills", href: "#skills", Icon: FiCode },
  { name: "Experience", href: "#experience", Icon: FiBriefcase },
  { name: "Projects", href: "#projects", Icon: FiGrid },
  { name: "Contact", href: "#contact", Icon: FiSend },
];

export const resumeUrlId = "1TdymfAvzVaAPo9Aix01NOprshTqTW0gl";
export const resumeUrl = "https://drive.google.com/file/d/1TdymfAvzVaAPo9Aix01NOprshTqTW0gl/view?usp=sharing";
export const contactEmail = "iankitkd@gmail.com";

export const contactLinks = [
  {name: "GitHub", href: "https://github.com/iankitkd", Icon: FaGithub},
  {name: "LinkedIn", href: "https://linkedin.com/in/iankitkd", Icon: FaLinkedin},
  {name: "X", href: "https://x.com/iankitkd", Icon: FaSquareXTwitter},
  {name: "Email", href: "mailto:iankitkd@gmail.com", Icon: FaEnvelope},
];


export const skillCategories = [
  {
    category: "Languages",
    Icon: FaCode,
    color: "#6366F1",
    skills: [
      { name: "Java", Icon: FaJava, color: "#007396" },
      { name: "Python", Icon: FaPython, color: "#3776AB" },
      { name: "C / C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: FaJsSquare, color: "#F7DF1E" },
      { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "SQL", Icon: FaDatabase, color: "#336791" },
    ],
  },

  {
    category: "Frameworks & Libraries",
    Icon: FaCubes,
    color: "#22C55E",
    skills: [
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "" },
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "shadcn/ui", Icon: SiRadixui, color: "" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      // { name: "Socket.IO", Icon: SiSocketdotio, color: "" },  // #010101
      // { name: "Zustand", Icon: SiReact, color: "#61DAFB" },
      // { name: "Tanstack Query", Icon: SiReactquery, color: "#FF4154" },
    ],
  },

  {
    category: "Databases",
    Icon: FaDatabase,
    color: "#F59E0B",
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Prisma", Icon: SiPrisma, color: "" },  //#2D3748
      { name: "Mongoose", Icon: SiMongodb, color: "#880000" },
    ],
  },


  {
    category: "Cloud & DevOps",
    Icon: FaCloud,
    color: "#38BDF8",
    skills: [
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Docker", Icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Vercel", Icon: SiVercel, color: "#000000" },
      // { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
      { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" },
    ],
  },

  {
    category: "Tools",
    Icon: FaTools,
    color: "#A855F7",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "" },  // #181717
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
      // { name: "ESLint", Icon: SiEslint, color: "#4B32C3" },
      // { name: "Prettier", Icon: SiPrettier, color: "#F7B93E" },
    ],
  },

  {
    category: "Testing & Monitoring",
    Icon: FaVial,
    color: "#EF4444",
    skills: [
      // { name: "Jest", Icon: SiJest, color: "#C21325" },
      { name: "Vitest", Icon: SiVitest, color: "#6E9F18" },
      { name: "React Testing Library", Icon: SiTestinglibrary, color: "#E33332" },
      { name: "Playwright", Icon: FaVial, color: "#2EAD33" },
      { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
      // { name: "Cypress", Icon: SiCypress, color: "" },  // #17202C
      // { name: "Datadog", Icon: SiDatadog, color: "#632CA6" },
      // { name: "New Relic", Icon: SiNewrelic, color: "#1CE783" },
      // { name: "Sentry", Icon: SiSentry, color: "#362D59" },
    ],
  },
];


export const experienceData = [
  {
    role: "SDE Intern",
    company: "Qobo",
    period: "Apr 2026 - Jun 2026",
    location: "Remote",
    description: [
      "Developed and maintained scalable React-based web applications for production use.",
      "Integrated 15+ REST APIs supporting authentication, dashboards and product management.",
      "Built reusable UI components to improve consistency and development speed.",
      "Optimized frontend performance through lazy loading and efficient API handling, reducing page load time by 25%.",
    ],
    highlights: [
      "React",
      "REST APIs",
      "Performance Optimization",
      "Responsive UI",
    ],
  },
];

export const projects = [
  {
    title: 'Assetly',
    description: 'A full-stack digital asset marketplace with secure authentication, creator payouts via Stripe, and role-based access.',
    // description: 'A digital asset marketplace enabling creators to sell and users to purchase digital assets securely.',
    technologies: ['Next.js', 'TypeScript', 'Material UI', 'PostgreSQL', 'Prisma', 'Supabase', 'Auth.js', 'Stripe'],
    github: 'https://github.com/iankitkd/assetly',
    live: 'https://assetlyapp.vercel.app/',
    image: '/images/assetly.png'
  },
  {
    title: 'Feed Social',
    description: 'A social media platform with secure authentication, post creation, likes, replies, and real-time messaging.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'MongoDB', 'Express', 'Socket.IO'],
    github: 'https://github.com/iankitkd/SocialMediaApp',
    live: 'https://feed-social.vercel.app/',
    image: '/images/feed-social.png'
  },
  {
    title: 'CoderPort',
    description: 'A unified dashboard that brings all coding profiles together to track programming progress and growth in one place.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Auth.js', 'Recharts'],
    github: 'https://github.com/iankitkd/coderport',
    live: 'https://coderport.vercel.app/',
    image: '/images/coderport.png'
  },
  {
    title: 'RF Check',
    description: 'A fact-checking web app that verifies text authenticity (real or fake) using AI models and OCR and give result with detail explanation.',
    technologies: ['Next.js', 'Tailwind CSS', 'Gemini API', 'OpenRouter'],
    github: 'https://github.com/iankitkd/rf-check',
    live: 'https://rfcheck.vercel.app/',
    image: '/images/rfcheck.png'
  },
  {
    title: 'CinePick',
    description: 'A movie and TV show discovery app with category-based browsing, detailed pages with trailers and cast info, and a persistent watchlist.',
    technologies: ['React', 'Tailwind CSS', 'TMDB API', 'Redux', 'TanStack Query', 'Axios',],
    github: 'https://github.com/iankitkd/MovieSearchApp',
    live: 'https://cine-pick.vercel.app/',
    image: '/images/cine-pick.png'
  },
  {
    title: 'Connect up',
    description: 'A real-time chat application with user authentication, media messaging and AI assistant integration.',
    technologies: ['React', 'Tailwind CSS', 'Firebase Authentication', 'Firestore', 'Gemini API', 'Redux'],
    github: 'https://github.com/iankitkd/ChatApp',
    live: 'https://connectup.vercel.app/',
    image: '/images/connectup.png'
  },
]