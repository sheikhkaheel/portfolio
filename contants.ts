import { Transition } from "framer-motion";

// constants.ts
export const C = {
  bg: "#0a0a0c",
  surface: "#121215",
  card: "#18181c",
  faint: "#26262b",
  border: "#27272a",
  muted: "#a1a1aa",
  white: "#fafafa",
  emerald: "#10b981",
  emeraldDim: "#059669",
  emeraldGlow: "#10b98133",
  cyan: "#06b6d4",
  blue: "#3b82f6",
};

export const SP = {
  default: { type: "spring", stiffness: 100, damping: 15 },
  snappy: { type: "spring", stiffness: 300, damping: 20 },
  soft: { type: "spring", stiffness: 80, damping: 20 },
  fluid: { type: "spring", stiffness: 70, damping: 14 },
} satisfies Record<string, Transition>;

export const ALL_TAGS = [
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "Hono",
  "Express",
  "PostgreSQL",
  "Drizzle",
  "TypeScript",
];

export const TECH_GROUPS = [
  {
    label: "Frontend",
    color: "#10b981",
    icon: "⚛️",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    label: "Mobile",
    color: "#06b6d4",
    icon: "📱",
    items: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 90 },
    ],
  },
  {
    label: "Backend",
    color: "#f97316",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Hono", level: 82 },
      { name: "Express", level: 85 },
    ],
  },
  {
    label: "Database",
    color: "#3b82f6",
    icon: "🛢️",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "Drizzle ORM", level: 86 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "SaaS Boilerplate",
    subtitle: "Production-ready starter",
    desc: "A comprehensive full-stack starter kit featuring Next.js, PostgreSQL, Drizzle, and Tailwind.",
    color: "#10b981",
    accent: "#059669",
    icon: "🚀",
    tags: ["Next.js", "PostgreSQL", "Drizzle"],
    links: { github: "#", live: "#" },
  },
  {
    title: "Finance App",
    subtitle: "Mobile cross-platform app",
    desc: "Cross-platform mobile budget tracker built with React Native and Expo.",
    color: "#06b6d4",
    accent: "#0891b2",
    icon: "💳",
    tags: ["React Native", "Expo", "Hono"],
    links: { github: "#", live: "#" },
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    desc: "Led the architectural redesign of the core web platform using Next.js and implemented high-performance APIs.",
    tags: ["Next.js", "PostgreSQL", "Node.js"],
  },
  {
    role: "Web & Mobile Developer",
    company: "Agency Digital",
    period: "2020 - 2023",
    desc: "Developed and shipped over 15 mobile and web applications using React, React Native, and Express.",
    tags: ["React Native", "TypeScript", "Express"],
  },
];
