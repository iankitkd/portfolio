import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, } from 'react-icons/fa';
import { FiCode, FiGrid, FiSend, FiUser } from 'react-icons/fi';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiExpress, } from 'react-icons/si';
import { FaEnvelope, FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

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
  { name: "Projects", href: "#projects", Icon: FiGrid },
  { name: "Contact", href: "#contact", Icon: FiSend },
];

export const resumeLink = "https://drive.google.com/file/d/1TdymfAvzVaAPo9Aix01NOprshTqTW0gl/view?usp=sharing"
export const contactEmail = "iankitkd@gmail.com";

export const contactLinks = [
  {name: "github", href: "https://github.com/iankitkd", Icon: FaGithub},
  {name: "linkedin", href: "https://linkedin.com/in/iankitkd", Icon: FaLinkedin},
  {name: "x", href: "https://x.com/iankitkd", Icon: FaSquareXTwitter},
  {name: "email", href: "mailto:iankitkd@gmail.com", Icon: FaEnvelope},
];

export const skills = [
  { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'Express', Icon: SiExpress, color: '' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  // { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
  // { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
  // { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  // { name: 'SQL', Icon: FaDatabase, color: '#336791' },
];

export const projects = [
  {
    title: 'Feed',
    description: 'A social media platform with secure authentication, post creation, likes, replies, and real-time messaging.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'MongoDB', 'Express', 'Socket.IO'],
    github: 'https://github.com/iankitkd/SocialMediaApp',
    live: 'https://feed-social.vercel.app/',
    image: '/images/feed-social.png'
  },
  {
    title: 'RF Check',
    description: 'A fact-checking web app that verifies text authenticity (real or fake) using AI models and OCR and give result with detail explanation.',
    technologies: ['Next.js', 'Tailwind CSS', 'Gemini API', 'DeepSeek API'],
    github: 'https://github.com/iankitkd/rf-check',
    live: 'https://rfcheck.vercel.app/',
    image: '/images/rfcheck.png'
  },
  {
    title: 'CinePick',
    description: 'A movie and TV show discovery app with category-based browsing, detailed pages with trailers and cast info, and a persistent watchlist.',
    technologies: ['React', 'Tailwind CSS', 'TMDB API', 'Redux', 'Axios'],
    github: 'https://github.com/iankitkd/MovieSearchApp',
    live: 'https://cine-pick.vercel.app/',
    image: '/images/cine-pick.png'
  },
  {
    title: 'Connect up',
    description: 'A real-time chat application with user authentication, media messaging, AI assistant integration, and theme customization.',
    technologies: ['React', 'Tailwind CSS', 'Firebase Authentication', 'Firestore', 'Gemini API', 'Redux'],
    github: 'https://github.com/iankitkd/ChatApp',
    live: 'https://connectup.vercel.app/',
    image: '/images/connectup.png'
  },
]