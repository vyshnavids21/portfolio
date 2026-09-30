import ReactIcon from "../assets/images/react-icon.png";
import HtmlIcon from "../assets/images/html-icon.png";
import BootstrapIcon from "../assets/images/bootstrap-icon.png";
import AngularIcon from "../assets/images/angular-icon.png";
import JSIcon from "../assets/images/javascript-icon.png";
import TSIcon from "../assets/images/typescript-icon.png";
import NodeIcon from "../assets/images/nodejs-icon.svg";
import MongoIcon from "../assets/images/MongoDB-icon.png";
import CassandraIcon from "../assets/images/cassandra-icon.png";
import RedisIcon from "../assets/images/redis-icon.png";
import GitIcon from "../assets/images/git-icon.png";
import PostmanIcon from "../assets/images/postman-icon.svg";
import NpmIcon from "../assets/images/npm-icon.svg";
import GithubIcon from "../assets/images/github-icon.png";
import DockerIcon from "../assets/images/docker-icon.png";
import AwsIcon from "../assets/images/aws-icon.png";
import ClaudeIcon from "../assets/images/claude-icon.png";
import CopilotIcon from "../assets/images/githubcopilot-icon.png";
import { SiCss3, SiNextdotjs, SiPostgresql, SiSnowflake, SiTailwindcss } from "react-icons/si";
import type { IconType } from "react-icons";

export const profile = {
  name: "Vyshnavi D S",
  role: "Software Developer",
  company: "ZeroNorth",
  email: "vyshnavids75@gmail.com",
  linkedin: "https://www.linkedin.com/in/vyshnavids",
  github: "https://github.com/vyshnavids21",
  location: "Working in Chennai · Based in Kerala",
};

export const heroStats: { label: string; value: string | string[] }[] = [
  { label: "Experience", value: "3+ years" },
  { label: "Products", value: ["SMARTShip", "Operator – Vessel Optimisation"] },
  { label: "Core stack", value: "Angular · React · Next.js · Node.js" },
];

export type Product = { name: string; description: string; stack: string[] };

export type ExperienceItem = {
  role: string;
  company: string;
  companyNote?: string;
  location: string;
  period: string;
  status: string;
  current: boolean;
  products?: Product[];
  highlights: string[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "ZeroNorth",
    companyNote: "formerly Alpha Ori Technologies",
    location: "Chennai",
    period: "Nov 2023 – Present",
    status: "Current",
    current: true,
    products: [
      {
        name: "SMARTShip",
        description: "Real-time fleet monitoring and analytics platform for global vessel operators.",
        stack: ["Angular", "Node.js", "DataStax"],
      },
      {
        name: "Operator – Vessel Optimisation",
        description:
          "React + TypeScript modules with Redux and Recharts, served by a Node.js/Express BFF for real-time vessel insights.",
        stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Snowflake"],
      },
    ],
    highlights: [
      "Build and ship full-stack features in Angular, React and Node.js for hundreds of global vessel operators",
      "Cut API response time by 20% and sped up data rendering by 30% through refactoring and lazy-loading",
      "Integrated Node.js services with DataStax (Cassandra) for real-time, large-scale IoT sensor data",
      "Implemented OAuth 2.0 and JWT authentication across microservices",
      "CI/CD with Docker, AWS S3 and SQS, monitoring in CloudWatch and Datadog, tests in Jest and Playwright",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Alpha Ori Technologies",
    location: "Chennai",
    period: "Apr 2023 – Oct 2023",
    status: "6 months",
    current: false,
    highlights: [
      "Built Angular UI components for real-time fleet dashboards backed by large-scale IoT data",
      "Developed full-stack features with Angular and NestJS, from REST APIs to performance tuning",
      "Designed and consumed RESTful endpoints with backend engineers and contributed to unit tests",
    ],
    stack: ["Angular", "NestJS", "REST APIs"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science",
  school: "College Of Engineering, Perumon",
  project: "Final-year project: PCOS detection using machine learning",
};

export const goals = [
  "Collaborate with cross-functional teams",
  "Build impactful software and meaningful user experiences",
  "Keep growing as a developer while making a positive impact",
];

// A skill shows either an image file or a react-icons glyph in its brand color.
export type Skill = { name: string; icon?: string; glyph?: IconType; color?: string; core?: boolean };
export type SkillGroup = { key: "frontend" | "backend" | "tools"; title: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      { name: "Angular", icon: AngularIcon, core: true },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", glyph: SiNextdotjs, color: "#f9fafb" },
      { name: "TypeScript", icon: TSIcon, core: true },
      { name: "JavaScript", icon: JSIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", glyph: SiCss3, color: "#1572B6" },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "Tailwind CSS", glyph: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    key: "backend",
    title: "Backend & Databases",
    items: [
      { name: "Node.js", icon: NodeIcon, core: true },
      { name: "Cassandra", icon: CassandraIcon, core: true },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Redis", icon: RedisIcon },
      { name: "PostgreSQL", glyph: SiPostgresql, color: "#4169E1" },
      { name: "Snowflake", glyph: SiSnowflake, color: "#29B5E8" },
    ],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "AWS", icon: AwsIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "npm", icon: NpmIcon },
      { name: "Claude", icon: ClaudeIcon },
      { name: "Copilot", icon: CopilotIcon },
    ],
  },
];

export type ProfessionalProject = {
  name: string;
  company: string;
  kind: string;
  description: string;
  specs: { label: string; value: string }[];
  contributions: string[];
  stack: string[];
};

export const professionalProjects: ProfessionalProject[] = [
  {
    name: "SMARTShip",
    company: "ZeroNorth",
    kind: "Flagship product",
    description:
      "Real-time analytics platform improving efficiency across global fleets.",
    specs: [
      { label: "Domain", value: "Fleet analytics" },
      { label: "Used by", value: "Global fleets" },
      { label: "Data", value: "Real-time IoT" },
      { label: "My role", value: "Frontend & backend" },
    ],
    contributions: [
      "Angular UI for fleet analytics",
      "Node.js + DataStax IoT integrations",
      "Real-time, configurable dashboards",
      "Performance & clean architecture",
      "OAuth 2.0 & JWT secured access",
      "20% faster APIs, 30% faster rendering",
    ],
    stack: ["Angular", "Node.js", "DataStax", "IoT Data Platforms"],
  },
  {
    name: "Operator – Vessel Optimisation",
    company: "ZeroNorth",
    kind: "Enterprise application",
    description:
      "Internal enterprise app giving fleet operators real-time vessel insights.",
    specs: [
      { label: "Domain", value: "Vessel performance" },
      { label: "Used by", value: "Fleet operators" },
      { label: "Data", value: "PostgreSQL, Snowflake" },
      { label: "My role", value: "React & BFF layer" },
    ],
    contributions: [
      "Reusable React + TS components",
      "Redux & Context API state",
      "Recharts data visualisations",
      "Node.js/Express BFF over REST",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Snowflake"],
  },
];

export type Project = {
  mark: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  highlights?: string[];
  features: string[];
  stack: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    mark: "J",
    name: "JournHive",
    tagline: "Travel journal app",
    category: "Personal",
    description:
      "Turns scattered travel memories into a structured, shareable journal: trips, captioned entries and photos, exported as a clean PDF keepsake.",
    highlights: [
      "Angular SPA + stateless REST API on Vercel, Render and Atlas",
    ],
    features: ["JWT auth & bcrypt", "Route guards", "Cloudinary uploads", "jsPDF export"],
    stack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    url: "https://journhive-33.vercel.app",
  },
  {
    mark: "ML",
    name: "PCOS Detection",
    tagline: "Machine learning for early diagnosis",
    category: "Academic",
    description:
      "An ML system that helps detect Polycystic Ovary Syndrome from clinical and physiological parameters, supporting early diagnosis.",
    features: ["SVM classifier on clinical data", "Evaluated with standard ML metrics"],
    stack: ["Python", "Machine Learning", "SVM"],
  },
];
