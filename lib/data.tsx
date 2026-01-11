import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

const profile = process.env.NEXT_PUBLIC_PROFILE;

const commonData = {
  builds: {
    title: "Builds",
    subline1: "Tools that solve real problems.",
    subline2:
      "From automating job applications to crafting custom software solutions.",
    items: [
      {
        id: "naukri",
        title: "Naukri Outreach",
        description:
          "A SaaS tool that simplifies the referral process by automating outreach workflows and generating context-aware referral and follow-up messages tailored to the company, role, and job description using AI.",
        href: "https://outreach-landing.vercel.app/",
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
      },
    ],
  },
  clientProjects: {
    title: "Client Projects.",
    subline1: "Projects I've worked on.",
    subline2:
      "From automating job applications to crafting custom software solutions.",
    items: [
      {
        id: "grief-navigator",
        name: "Grief Navigator",
        category: "Mobile App · Mental Health",
        description:
          "Built an end-to-end mobile application to support people through their grief journey, including journaling, guided activities, and secure sharing of progress and reports with licensed psychologists.",
        technologies: [
          "React Native",
          "TypeScript",
          "Expo",
          "Azure",
          "SpringBoot",
        ],
        year: "2024",
        featured: false,
        image: "/backgrounds/grief-navigator.png",
        logo: "/logos/grief-navigator.png",
        website: "https://play.google.com/",
      },
      {
        id: "afm",
        name: "Asia Forex Mentor",
        category: "AI Automation & Workflows",
        description:
          "Built AI-powered automation workflows to support lead generation, outreach, SEO-driven content updates, and customer support using n8n and LLMs.",
        technologies: ["n8n", "OpenAI", "Python", "Render"],
        year: "2024",
        featured: true,
        image: "/backgrounds/afm.png",
        logo: "/logos/afm.png",
        website: "https://asiaforexmentor.com/",
      },
      {
        id: "valerie-ai",
        name: "Valerie.ai",
        category: "AI Voice Assistant · Business Automation",
        description:
          "Built features for a 24/7 AI voice assistant that answers, qualifies, books, and follows up on inbound calls, helping businesses capture leads and schedule bookings without missed opportunities.",
        technologies: [
          "AI Voice",
          "CRM Integrations",
          "Calendar Sync",
          "Natural Language Processing",
        ],
        year: "2023",
        featured: true,
        image: "/backgrounds/valerie-ai.png",
        logo: "/logos/valerie.svg",
        website: "https://valerie.ai/",
      },
      {
        id: "yash-bikes",
        name: "Yash Bikes",
        category: "E-commerce",
        description:
          "Built a custom commerce platform for a premium bike rental company, enabling online sales, inventory management, and service bookings through a single, streamlined system.",
        technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        year: "2024",
        featured: true,
        image: "/backgrounds/yash-bikes.png",
        logo: "/logos/yash-bikes.png",
        website: "https://yashbikes.vercel.app/",
      },
      {
        id: "remember-publisher",
        name: "Remember Publisher",
        category: "AI-Assisted Writing Platform",
        description:
          "Built a writing platform that helps people turn raw thoughts into structured books by using AI to refine, organize, and enhance personal writing.",
        technologies: [
          "React.js",
          "TypeScript",
          "OpenAI",
          "Express",
          "Langgraph",
          "PostgreSQL",
        ],
        year: "2025",
        featured: false,
        image: "/backgrounds/remember-publisher.png",
        logo: "/logos/remember-press.png",
        website: "https://rememberpublisher.com",
      },
      {
        id: "disability-dynamics",
        name: "Disability Dynamics",
        category: "Web Platform · Accessibility",
        description:
          "Designed and developed an accessibility-first platform providing structured resources and support tools for individuals with disabilities, with a focus on clarity, compliance, and real-world usability.",
        technologies: ["Next.js", "TypeScript", "Prisma"],
        year: "2024",
        featured: false,
        image: "/backgrounds/disability-dynamics.png",
        logo: "/logos/disability-dynamics.png",
        website: "https://www.disabilitydynamics.com.au/",
      },
    ],
  },
  contact: {
    title: "Contact.",
    subline1: "Want to hire me? Let's connect.",
    subline2: "Available for freelance projects and full-time opportunities.",
    primaryCTA: {
      text: "Book a Call",
    },
    secondaryHeading: "Or connect via other channels:",
    items: [
      {
        id: "email",
        label: "Email",
      },
      {
        id: "twitter",
        label: "Twitter / X",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
      },
      {
        id: "github",
        label: "GitHub",
      },
    ],
  },
};

const himanshuData = {
  name: "Himanshu J.",
  fullName: "Himanshu Jaroli",
  title: "Building & shipping\nreal-world products.",
  currentCompany: "RapidStart",
  companyUrl: "https://www.rapidstart.net/",
  calLink: "https://cal.com/himanshu-jaroli-cjbeah/30min",
  resume: "/himanshu-resume.pdf",
  email: "jaroli.himanshu.work@gmail.com",
  image: "/himanshu.png",
  logo: "/himanshu-square.png",
  social: {
    github: "https://github.com/HJ1X/",
    twitter: "https://x.com/himanshu_jaroli/",
    linkedin: "https://www.linkedin.com/in/himanshu-jaroli/",
  },
  navigation: [
    { label: "Builds", href: "/builds" },
    { label: "Client Projects", href: "/client-projects" },
    { label: "Changelog", href: "/changelog" },
    { label: "Contact", href: "/contact" },
  ],
  home: {
    title: (
      <span>
        Building & shipping
        <br />
        <span className="text-gray-600 dark:text-gray-400">
          real-world products.
        </span>
      </span>
    ),
    subline: (
      <span>
        Currently building{" "}
        <Link
          href="https://Naukri-outreach.vercel.app/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">Naukri Outreach</Highlight>
        </Link>{" "}
        and{" "}
        <Link
          href="https://novacraftsai.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">NovaCraftsAI</Highlight>
        </Link>
        , while engineering production systems at{" "}
        <Link
          href="https://www.rapidstart.net/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">RapidStart</Highlight>
        </Link>
        .
      </span>
    ),
    image: "/himanshu.png",
    cta: {
      text: "Let's connect",
    },
  },
  writings: {
    title: null,
    subline1: null,
    subline2: null,
    items: null,
  },
  changelog: {
    title: "Changelog.",
    subline1: "My professional journey.",
    subline2: "Full-time roles and career milestones.",
    items: [
      {
        id: "rapidstart",
        title: "Senior Full Stack Developer",
        company: "Rapidstart",
        logo: "/logos/rapidstart.svg",
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
        logo: "/logos/tcs.png",
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
        logo: "/logos/tcs.png",
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
        logo: "/logos/humaps.png",
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
  },
} as const;

const sahilData = {
  name: "Sahil G.",
  fullName: "Sahil Gupta",
  title: "Building & shipping\nreal-world products.",
  currentCompany: "HSBC",
  companyUrl: "https://www.hsbc.com/",
  calLink: "https://cal.com/sahil-gupta-7/15min?overlayCalendar=true",
  resume: "/sahil-resume.pdf",
  image: "/sahil-1.png",
  navigation: [
    { label: "Builds", href: "/builds" },
    { label: "Projects", href: "/client-projects" },
    { label: "Changelog", href: "/changelog" },
    { label: "Writings", href: "/writings" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com/Sahil2012/",
    twitter: "https://x.com/guptasahil7/",
    linkedin: "https://www.linkedin.com/in/sahil-gupta7/",
  },
  home: {
    title: "Building & shipping\nreal-world products.",
    subline: (
      <span>
        Currently building{" "}
        <Link
          href="https://Naukri-outreach.vercel.app/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">Naukri Outreach</Highlight>
        </Link>{" "}
        and{" "}
        <Link
          href="https://novacraftsai.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">NovaCraftsAI</Highlight>
        </Link>
        , while engineering production systems at{" "}
        <Link
          href="https://www.hsbc.com/"
          className="hover:opacity-80 transition-opacity"
        >
          <Highlight className="text-foreground">HSBC</Highlight>
        </Link>
        .
      </span>
    ),
    cta: {
      text: "Let's connect",
    },
  },
  changelog: {
    title: "Changelog.",
    subline1: "My professional journey.",
    subline2: "Full-time roles and career milestones.",
    items: [
      {
        id: "hsbc",
        title: "Senior Software Engineer",
        company: "HSBC",
        logo: "/logos/hsbc.png",
        duration: "Jun 2025 - Present",
        description:
          "Building core Prime Finance systems that process high-volume trade and position data across global markets, supporting pricing, margining, and financing workflows at scale.",
        technologies: [
          "Java",
          "Reactive Java",
          "Micronaut",
          "GCP",
          "BigQuery",
          "Terraform",
        ],
        achievements: [
          "Built microservices for the Financing Against Securities platform serving global Prime Finance trade and position data",
          "Designed an SOI service aggregating instrument identifiers across multiple trading systems to enable consistent pricing and margin workflows",
          "Reworked OTC trade processing to a streaming model, reducing memory usage by ~40% and improving stability during peak trading hours",
          "Improved data access by partitioning high-volume tables and enhancing ingestion APIs, reducing read latency by ~30%",
          "Migrated Sophis IA, MTM/EOD, and OTC services to a non-blocking, reactive execution model, improving performance and resiliency",
        ],
      },
      {
        id: "tcs",
        title: "Software Engineer",
        company: "Tata Consultancy Services",
        logo: "/logos/tcs.png",
        duration: "Jul 2022 - Jun 2025",
        description:
          "Worked on enterprise SaaS platforms focused on developer productivity, security assessments, and AI-assisted workflows.",
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Cloud",
          "React",
          "Azure",
          "OpenAI",
          "Docker",
        ],
        achievements: [
          "Developed REST APIs for code validation and assessment workflows, improving platform reliability and security",
          "Integrated GPT-3.5 and GPT-4 to power automated code-generation features, reducing job execution time by ~62%",
          "Built AI-driven agents to reduce noise in assessment results while maintaining licensing compliance",
          "Integrated security and functional assessment pipelines using Fortify, SonarQube, JUnit, JaCoCo, and Azure DevOps",
          "Received the TCS Innovation Award for contributions to auto-spec generation in the Glow framework",
        ],
      },
      {
        id: "capgemini-intern",
        title: "Software Engineering Intern",
        company: "Capgemini",
        logo: "/logos/capgemini.png",
        duration: "Feb 2022 - May 2022",
        description:
          "Contributed to internal platforms by building user-facing features that improved discoverability and engagement.",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        achievements: [
          "Built a course management dashboard, improving enrollment visibility and reducing support queries",
          "Improved platform engagement by ~25% through UI and UX enhancements",
        ],
      },
    ],
  },
  writings: {
    title: "Writings.",
    subline1: "Thoughts on engineering, security, and system design.",
    subline2: (
      <span>
        Read more on{" "}
        <Link
          href="https://medium.com/@sahilhsgupta7"
          target="_blank"
          className="text-foreground border-b border-foreground/20 hover:border-foreground transition-colors"
        >
          Medium (@sahilhsgupta7)
        </Link>
      </span>
    ),
    articles: [
      {
        id: "cors-guide",
        title: "What is CORS? Why is it important?",
        excerpt:
          "CORS stands for Cross-Origin Resource Sharing. It is a browser mechanism which enables controlled access to resources located outside of a given domain.",
        date: "Dec 12, 2025",
        readTime: "4 min read",
        tags: ["Web Dev", "Security"],
        url: "https://medium.com/@sahilhsgupta7/what-is-cors-why-is-it-important-9a875b0253cd",
      },
      {
        id: "ssl-works",
        title: "How SSL Works / How Do You Secure Your Web App?",
        excerpt:
          "Let’s assume your server is deployed in a remote location, and a user wants to interact with your application secure ly over the internet.",
        date: "Dec 10, 2025",
        readTime: "6 min read",
        tags: ["System Design", "Security"],
        url: "https://medium.com/@sahilhsgupta7/how-ssl-works-how-do-you-secure-your-web-app-a72441065f02",
      },
      {
        id: "scaling-username",
        title:
          "Scaling Username Availability Checks Like Meta & Google: From Indexes to Bloom Filters",
        excerpt:
          "Ever wondered how big platforms like Meta, Google, or Twitter instantly tell you if your dream username is available, even after billions…",
        date: "Aug 21, 2025",
        readTime: "8 min read",
        tags: ["Bloom Filters", "Scaling"],
        url: "https://medium.com/@sahilhsgupta7/scaling-username-availability-checks-like-meta-google-from-indexes-to-bloom-filters-4d3c9863b005",
      },
      {
        id: "bloom-filters",
        title: "What Are Bloom Filters? How do they work?",
        excerpt:
          "Ever wondered how massive platforms like Meta, Google, or Twitter know instantly if your username is taken, even with billions of users?",
        date: "Aug 21, 2025",
        readTime: "5 min read",
        tags: ["Bloom Filters", "Algorithms"],
        url: "https://medium.com/@sahilhsgupta7/what-are-bloom-filters-how-do-they-work-e21a73704d2f",
      },
    ],
  },
} as const;

export let data: any;
if (profile === "HIMANSHU") {
  data = { ...commonData, ...himanshuData };
} else {
  data = { ...commonData, ...sahilData };
}
export type SiteData = typeof data;
