import fashionQ from "../assets/portfolio/fashionQ.png";
import ors from "../assets/portfolio/ors.png";
import vidco from "../assets/portfolio/vidco.png";
import playCanvas from "../assets/portfolio/play-canvas.png";

export const profile = {
  name: "Harsh Thakur",
  role: "Senior Software Engineer",
  location: "Bengaluru, India",
  email: "harshthakur066@gmail.com",
  phone: "+91 97172 09558",
  resume:
    "https://drive.google.com/file/d/1aFOJIEgpQoE7YZ5bLmRctXIPXQJPQgVn/view?usp=sharing",
  github: "https://github.com/harsh-dev-066",
  linkedin: "https://www.linkedin.com/in/harsh-thakur-066/",
  tagline: "I build products that scale.",
  summary:
    "Senior Software Engineer with ~5 years of experience building scalable SaaS and logistics platforms. Deep frontend expertise, backed by hands-on work across backend APIs, databases, cloud services, PWAs, warehouse systems, analytics and AI-assisted engineering.",
  intro:
    "I own features end to end — architecture, implementation, production deployment, optimisation and everything after. Most recently I built LOCAD's Warehouse Management System from an empty repo to a production platform running real warehouse operations.",
};

export const experiences = [
  {
    id: "locad",
    company: "LOCAD",
    role: "Senior Software Engineer",
    period: "Sep 2024 — Present",
    current: true,
    blurb:
      "Owning warehouse and logistics platform engineering end to end, from greenfield systems to platform-wide UX.",
    highlights: [
      "Built LOCAD's Warehouse Management System from scratch to production, including a PWA for handheld warehouse operations with offline capability and resilient data sync.",
      "Shipped an in-house Returns Management solution that replaced Logiwa workflows and doubled return-processing efficiency.",
      "Built a full-scale OMS & WMS analytics dashboard with Recharts and Reactflow — KPIs and workflow visualisations across orders, inventory, fulfilment, warehouses and carriers.",
      "Implemented dynamic localization using Google Translate APIs with AWS Lambda and DynamoDB caching for multi-regional support.",
      "Led a platform-wide UI/UX revamp, improving information hierarchy, usability and operational visibility.",
      "Integrated AI capabilities including an AI chatbot and analytics experiences; built Cursor + Slack automations for codebase Q&A, bug investigation and PR reviews.",
      "Raised automated test coverage by 80% and cut CI/CD deploy time from ~10 to ~3 minutes (npm → PNPM, dependency caching).",
    ],
    stack: ["React", "TypeScript", "PWA", "AWS Lambda", "DynamoDB", "Recharts", "Reactflow", "Datadog"],
  },
  {
    id: "msd",
    company: "MAD Street Den",
    role: "Frontend Engineer",
    period: "Jan 2022 — Aug 2024",
    blurb:
      "Built scalable B2B SaaS products with a focus on performance, maintainability and responsive UX.",
    highlights: [
      "Developed B2B SaaS applications with React, Next.js and TypeScript using modern frontend architecture.",
      "Built complex features: OAuth authentication, table/bulk view, workflow builder, ER diagrams, annotation operations and data visualisations.",
      "Designed reusable component systems and frontend patterns with Redux Toolkit, React Query and REST APIs.",
      "Improved engineering quality through unit testing, code reviews, coding standards and mentoring junior engineers in Agile/Scrum teams.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "SCSS"],
  }
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    accent: "accent",
    items: [
      "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux Toolkit",
      "Zustand", "React Query", "PWA", "HTML5", "CSS3", "SCSS", "Tailwind CSS",
      "Material UI", "Shadcn UI", "Recharts", "Reactflow", "Dexie.js",
      "WebSockets", "Design Systems",
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    accent: "accent2",
    items: [
      "Python", "Django REST Framework", "REST APIs", "PostgreSQL", "DynamoDB",
      "AWS Lambda", "API Integrations", "OAuth (Cognito & Google)",
      "System Design", "Microservices",
    ],
  },
  {
    id: "ai",
    title: "AI & AI-Assisted Development",
    accent: "accent3",
    items: [
      "Cursor", "Cursor Automations", "Claude Code", "Claude Design", "GPT",
      "Prompt Engineering", "AI Chatbots", "AI-assisted Architecture",
    ],
  },
  {
    id: "cloud",
    title: "Cloud, CI/CD & Engineering",
    accent: "accent2",
    items: [
      "AWS", "AWS Amplify", "Docker", "Git", "GitHub Actions", "CI/CD Pipelines",
      "PNPM", "Vite", "Webpack", "Babel", "Datadog", "Google Analytics",
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    accent: "accent",
    items: [
      "Jest", "React Testing Library", "Playwright", "Storybook", "Pytest",
      "Unit Testing", "Integration Testing", "BDD Testing", "Code Reviews",
    ],
  },
];

// Rendered in the hero marquee — devicon classes keep it dependency-free.
export const marqueeStack = [
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original" },
  { name: "Redux", icon: "devicon-redux-original" },
  { name: "Jest", icon: "devicon-jest-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Sass", icon: "devicon-sass-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
];

export const projects = [
  {
    id: "fashionq",
    title: "fashionQ",
    image: fashionQ,
    year: "2023",
    desc: "An e-commerce experience for fashion trends — catalogue, cart, checkout and order flows built on a MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://fashionq.onrender.com/",
    code: "https://github.com/harsh-dev-066/fashionQ",
  },
  {
    id: "vidco",
    title: "Vidco",
    image: vidco,
    year: "2021",
    desc: "End-to-end video and chat application for healthcare professionals, built during a hackathon and shipped on Devfolio.",
    tags: ["React", "WebRTC", "WebSockets"],
    demo: "https://devfolio.co/projects/vidco",
    code: "https://github.com/harsh-dev-066/knownsense",
  },
  {
    id: "ors",
    title: "ORS Portal",
    image: ors,
    year: "2022",
    desc: "A platform connecting service seekers with providers, covering listings, requests and provider management.",
    tags: ["React", "Node.js", "REST APIs"],
    demo: "https://ors-portal.onrender.com/",
    code: "https://github.com/harsh-dev-066/ORS-Portal",
  },
  {
    id: "playcanvas",
    title: "Play Canvas",
    image: playCanvas,
    year: "2023",
    desc: "An interactive canvas playground for shapes and visualisations, built with React-Konva.",
    tags: ["React", "React-Konva", "Canvas"],
    demo: "https://play-canvas.onrender.com/",
    code: "https://github.com/harsh-dev-066/play-canvas",
  },
];

export const education = {
  school: "SRM Institute of Science and Technology",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2018 — 2022",
  details: ["GPA 9.2 / 10", "President, WHHC Club (College Tech Club)"],
};

export const achievements = [
  {
    id: "hacked",
    title: "HackEd Hackathon",
    result: "Top 10",
    org: "Devfolio",
    date: "Feb 2021",
  },
  {
    id: "hac",
    title: "Hack Against Covid",
    result: "Top 15",
    org: "Devfolio & Codezoned — MLH",
    date: "Aug 2020",
  },
  {
    id: "sih",
    title: "Smart India Hackathon 2020",
    result: "6th Rank",
    org: "SIH & SRM University",
    date: "Feb 2020",
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 15, suffix: "+", label: "Features owned end to end" },
  { value: 50, suffix: "+", label: "Technologies & tools" },
  { value: achievements.length, suffix: "", label: "Hackathon top finishes" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
