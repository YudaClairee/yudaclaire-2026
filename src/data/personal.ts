export const PERSONAL = {
  name: "Yuda Clairee",
  nickname: "Yuda",
  title: "Full Stack Developer",
  tagline: "Building digital experiences with modern web technologies",
  about: "I'm a passionate full-stack developer who loves creating beautiful, performant, and user-friendly applications. With expertise in React, TypeScript, and modern web technologies, I transform ideas into reality. I believe in clean code, thoughtful design, and continuous learning.",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yuda",
  cta: {
    label: "Get in Touch",
    href: "mailto:hello@yuda.dev",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@yuda.dev",
  },
};

export interface Experience {
  company: string;
  companyUrl: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Tech Startup Inc",
    companyUrl: "https://example.com",
    title: "Senior Full Stack Developer",
    dates: "2023 - Present",
    location: "Remote",
    description:
      "Leading the development of scalable web applications serving millions of users. Architecting microservices, implementing CI/CD pipelines, and mentoring junior developers. Built real-time collaboration features and optimized performance by 40%.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Digital Agency Co",
    companyUrl: "https://example.com",
    title: "Frontend Developer",
    dates: "2021 - 2023",
    location: "Jakarta, Indonesia",
    description:
      "Developed responsive web applications for various clients across e-commerce, fintech, and healthcare sectors. Implemented design systems and component libraries that reduced development time by 30%.",
    technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Prisma", "Vercel"],
  },
  {
    company: "Software House XYZ",
    companyUrl: "https://example.com",
    title: "Junior Web Developer",
    dates: "2020 - 2021",
    location: "Bandung, Indonesia",
    description:
      "Started my professional journey building websites and web applications. Collaborated with designers to implement pixel-perfect UI. Learned best practices in code quality and testing.",
    technologies: ["JavaScript", "Vue.js", "PHP", "Laravel", "MySQL"],
  },
];

export interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  openSource?: boolean;
  description: string;
  technologies: string[];
  links?: { type: string; href: string }[];
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    dates: "2024",
    active: true,
    openSource: false,
    description:
      "A full-featured e-commerce platform with real-time inventory, payment integration, and admin dashboard. Built with modern architecture for scalability and performance.",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Redis"],
    links: [
      { type: "Website", href: "https://example.com" },
      { type: "Repository", href: "https://github.com" },
    ],
  },
  {
    title: "Task Management App",
    dates: "2023",
    active: true,
    openSource: true,
    description:
      "Collaborative task management application with real-time updates, drag-and-drop interface, and team workspaces. Features include Kanban boards, calendars, and analytics.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Docker"],
    links: [
      { type: "Website", href: "https://example.com" },
      { type: "Repository", href: "https://github.com" },
    ],
  },
  {
    title: "Portfolio Generator",
    dates: "2023",
    active: false,
    openSource: true,
    description:
      "CLI tool for developers to generate beautiful portfolio websites from Markdown files. Supports multiple themes and custom domain configuration.",
    technologies: ["TypeScript", "Node.js", "Markdown", "Vite"],
    links: [{ type: "Repository", href: "https://github.com" }],
  },
  {
    title: "AI Content Assistant",
    dates: "2024",
    active: true,
    openSource: false,
    description:
      "AI-powered content creation tool that helps writers generate ideas, optimize SEO, and improve readability. Integrated with multiple LLM providers.",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Tailwind"],
    links: [{ type: "Website", href: "https://example.com" }],
  },
];
