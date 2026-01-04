export const siteData = {
  profile: {
    name: "Sahil G.",
    fullName: "Sahil Gupta",
    title: "Building & shipping\nreal-world products.",
    currentCompany: "HSBC",
    companyUrl: "https://www.hsbc.com/",
    calLink: "https://cal.com/sahil-gupta-7/15min?overlayCalendar=true"
  },
  navigation: [
    { label: "Creations", href: "/creations" },
    { label: "Work", href: "/work" },
    { label: "Writings", href: "/writings" },
    { label: "Hire Me", href: "/contact" },
  ],
  contact: {
    email: "sahilhsgupta7@gmail.com",
  },
  social: {
    github: "https://github.com/Sahil2012/",
    twitter: "https://x.com/guptasahil7/",
    linkedin: "https://www.linkedin.com/in/sahil-gupta7/",
  },
  creations: [
    {
      id: "naukri",
      title: "Naukri Outreach",
      description:
        "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
      href: "https://Naukri-outreach.vercel.app/",
      actionText: "See the Tool",
      gradient: "from-emerald-500/10 via-teal-500/10 to-blue-500/10",
      image: "/naukri-outreach.png",
    },
    {
      id: "novacrafts",
      title: "NovaCraftsAI",
      description:
        "A software studio focused on turning ideas into real systems — spanning web and mobile applications, AI agents and workflow automation.",
      href: "https://novacraftsai.com/",
      actionText: "Visit Studio",
      gradient: "from-orange-500/10 via-amber-500/10 to-red-500/10",
      image: "/nova-crafts-ai.png",
    }
  ],
  work: {
    fullTime: [
      {
        id: "rapidstart",
        title: "Senior Full Stack Developer",
        company: "Rapidstart",
        duration: "Jan 2023 - Present",
        description:
          "Leading development of enterprise SaaS applications, architecting scalable solutions, and mentoring junior developers.",
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
        achievements: [
          "Reduced API response time by 60% through optimization",
          "Led migration to microservices architecture",
          "Implemented CI/CD pipeline reducing deployment time by 80%",
        ],
      },
      {
        id: "tcs",
        title: "Full Stack Developer",
        company: "Tata Consultancy Services",
        duration: "Jul 2021 - Dec 2022",
        description:
          "Developed and maintained enterprise applications for Fortune 500 clients, focusing on scalability and performance.",
        technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Docker"],
        achievements: [
          "Delivered 5+ client projects on time and within budget",
          "Improved application performance by 40%",
          "Mentored 3 junior developers",
        ],
      },
      {
        id: "tcs-intern",
        title: "Software Engineering Intern",
        company: "Tata Consultancy Services",
        duration: "Jan 2021 - Jun 2021",
        description:
          "Contributed to full-stack development projects, learned industry best practices, and collaborated with cross-functional teams.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        achievements: [
          "Built internal tool used by 50+ team members",
          "Received pre-placement offer",
          "Completed training in Agile methodologies",
        ],
      },
      {
        id: "humaps-intern",
        title: "Frontend Development Intern",
        company: "Humaps",
        duration: "Jun 2020 - Dec 2020",
        description:
          "Developed responsive web interfaces and collaborated with designers to create intuitive user experiences.",
        technologies: ["React", "JavaScript", "CSS3", "Figma"],
        achievements: [
          "Redesigned company website increasing user engagement by 35%",
          "Implemented responsive design across all pages",
          "Created reusable component library",
        ],
      },
    ],
    clientProjects: [
      {
        id: "yash-bikes",
        name: "Yash Bikes",
        category: "E-commerce",
        description:
          "Custom e-commerce platform for premium bicycle retailer with inventory management and online booking system.",
        technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        year: "2024",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/yash-bikes.svg",
      },
      {
        id: "afm",
        name: "Asia Forex Mentor",
        category: "Education Platform",
        description:
          "Comprehensive forex trading education platform with course management, student dashboard, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/afm.svg",
      },
      {
        id: "grief-navigator",
        name: "Grief Navigator",
        category: "Mental Health",
        description:
          "Compassionate platform connecting individuals with grief counselors and support resources.",
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/grief-navigator.svg",
      },
      {
        id: "valerie-ai",
        name: "Valerie.ai",
        category: "AI/ML",
        description:
          "AI-powered virtual assistant for healthcare professionals with natural language processing capabilities.",
        technologies: ["Python", "React", "OpenAI", "FastAPI"],
        year: "2023",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/valerie-ai.svg",
      },
      {
        id: "disability-dynamics",
        name: "Disability Dynamics",
        category: "Accessibility",
        description:
          "Accessibility-first platform providing resources and tools for individuals with disabilities.",
        technologies: ["Next.js", "TypeScript", "Prisma", "WCAG 2.1"],
        year: "2024",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/disability-dynamics.svg",
      },
      {
        id: "remember-publisher",
        name: "Remember Publisher",
        category: "Content Management",
        description:
          "Modern CMS for memorial and obituary publishing with multi-site support and custom templates.",
        technologies: ["Next.js", "Sanity.io", "Vercel", "TypeScript"],
        year: "2023",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        logo: "/logos/remember-publisher.svg",
      },
    ],
  },
} as const;

export type SiteData = typeof siteData;
