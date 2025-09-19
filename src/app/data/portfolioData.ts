import { Experience, Project, Skill } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer & Consultant",
    company: "Independent Contractor",
    period: "Aug 2025 - Present",
    description: [
      {
        short: "Custom Solutions",
        long: "Providing contract-based full-stack development services, focusing on building tailored solutions to address specific client workflow challenges.",
      },
      {
        short: "Agile Point Poker App",
        long: "Architected and developed a custom real-time collaborative application to solve inefficiencies in a team's Agile sprint planning.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    role: "Senior Full Stack Software Engineer",
    company: "RedCAT Systems",
    period: "Mar 2024 – Jul 2025",
    description: [
      {
        short: "Technical Leadership",
        long: "Spearheaded R&D for a company-wide core package using Vue/Laravel/MySQL; designed a UI library with 20+ components, achieved high test coverage, and wrote comprehensive documentation.",
      },
      {
        short: "Automated Solutions",
        long: "Eliminated manual code changes by architecting a templated PDF generator for compensation letters, reducing turnaround time for clients to ~6 hours.",
      },
      {
        short: "Compliance & Security",
        long: "Ensured legal compliance by developing a full-stack audit trail for sensitive HR data.",
      },
      {
        short: "Legacy System Improvements",
        long: "Resolved 30+ critical legacy system bugs under tight deadlines, stabilizing operations for an enterprise client representing ~15% of annual revenue.",
      },
      {
        short: "Cross-Functional Leadership",
        long: "Championed engineering process adherence and stakeholder alignment for a core package soft launch, ensuring on-time delivery for demos to 3+ major prospects.",
      },
    ],
    technologies: [
      "Vue",
      "TypeScript",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Tanstack Query",
      "Inertia.js",
    ],
  },
  {
    id: 3,
    role: "Senior Software Engineer / Software Engineer",
    company: "GRIN",
    period: "Sep 2021 – Feb 2024",
    description: [
      {
        short: "System Modernization",
        long: "Drove codebase health via 80%+ test coverage (PHPUnit), created documentation, and refactored legacy code (Vue/Laravel/MySQL) to accelerate future feature development.",
      },
      {
        short: "Integration Development",
        long: "Expanded platform reach by building high-traffic integrations (TikTok, Shopify, Magento), driving partner acquisition.",
      },
      {
        short: "AI Innovation",
        long: "Pioneered GRIN’s first ChatGPT integration on a cross-functional team, streamlining workflows for Customer Success Engineers.",
      },
      {
        short: "Critical Fixes",
        long: "Diagnosed and resolved a domain routing system bug affecting 100% of white-label customers, enhancing custom URL functionality and preventing client churn.",
      },
      {
        short: "Team Leadership",
        long: "Improved team performance by consistently delivering >90% of sprint commitments, mentoring junior engineers, facilitating Agile ceremonies, and breaking down complex epics into actionable tickets.",
      },
      {
        short: "Accelerated Promotion",
        long: "Advanced to Senior Engineer within 1 year based on technical ownership, cross-functional collaboration (Product, Design, QA), and high-velocity execution.",
      },
    ],
    technologies: [
      "Vue",
      "TypeScript",
      "Laravel",
      "MySQL",
      "MongoDB",
      "PHPUnit",
      "Jest",
      "Redis",
    ],
  },
  {
    id: 4,
    role: "Software Engineer II",
    company: "Generation Tux",
    period: "Oct 2020 – Sep 2021",
    description: [
      {
        short: "Fullstack Development",
        long: "Enhanced React/Next.js frontends and Laravel/Django backends using TDD.",
      },
      {
        short: "Microservices Experience",
        long: "Debugged and optimized features in a distributed GraphQL-based architecture.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Laravel",
      "Django",
      "GraphQL",
      "MySQL",
      "PHPUnit",
    ],
  },
  {
    id: 5,
    role: "Junior Web Developer",
    company: "VOMO",
    period: "Oct 2018 – Oct 2020",
    description: [
      {
        short: "Fullstack Migration",
        long: "Led complete frontend migration from React to Vue while rebuilding backend services with Laravel, improving maintainability and reducing new developer onboarding time by ~20%.",
      },
      {
        short: "Feature Development & Integrations",
        long: "Expanded client base by building a school-specific feature and implementing a secure OAuth 2.0 integration with a legacy background check API.",
      },
    ],
    technologies: ["Vue", "React", "Laravel", "MySQL", "AWS", "Wordpress"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Japanese Word Explainer",
    description:
      "Helps you practice Japanese by inputting a vocabulary word and getting an explanation and example sentences based on your current level.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Tailwind CSS",
    ],
    videoUrl: "https://www.youtube.com/watch?v=JPzNudz9zQA",
    githubUrl: "https://github.com/LaurenCoker512/japanese-explainer",
  },
  {
    id: 2,
    title: "Story Prompt Generator",
    description:
      "Takes a genre, theme and weirdness level to generate a story prompt using OpenAI.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "OpenAI API",
      "Tailwind CSS",
    ],
    videoUrl: "https://www.youtube.com/watch?v=6Cr3yEqxz5s",
    githubUrl: "https://github.com/LaurenCoker512/writing-assistant",
  },
  {
    id: 3,
    title: "Just Pick 3",
    description:
      "Helps Agile teams plan for sprints with a minimalistic, real-time point poker board.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "Websockets",
      "Tailwind CSS",
    ],
    liveUrl: "https://just-pick-3.vercel.app/",
    githubUrl: "https://github.com/LaurenCoker512/point-poker",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "Vue", level: 95, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "JavaScript", level: 93, category: "frontend" },
  { name: "HTML/CSS", level: 91, category: "frontend" },
  { name: "Tailwind CSS", level: 87, category: "frontend" },
  { name: "Tanstack Query", level: 87, category: "frontend" },

  // Backend
  { name: "Laravel", level: 85, category: "backend" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Nest.js", level: 80, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "REST APIs", level: 88, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "MySQL", level: 90, category: "tools" },
  { name: "PostgreSQL", level: 90, category: "tools" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
  { name: "PHPUnit", level: 80, category: "tools" },
  { name: "Copilot", level: 80, category: "tools" },

  // Other
  { name: "Agile/Scrum", level: 85, category: "other" },
  { name: "JIRA", level: 85, category: "other" },
  { name: "SaaS", level: 85, category: "other" },
  { name: "API Integrations", level: 85, category: "other" },
  { name: "Technical Leadership", level: 85, category: "other" },
  { name: "Mentoring", level: 85, category: "other" },
];
