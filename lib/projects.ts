export type ProjectTag = "UX Research" | "UI Design" | "Product Strategy" | "Design System" | "Prototyping" | "Usability Testing";

export interface ProjectSection {
  type: "text" | "image" | "two-col" | "metrics";
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  left?: { title: string; body: string };
  right?: { title: string; body: string };
  metrics?: { value: string; label: string }[];
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  year: string;
  tags: ProjectTag[];
  summary: string;          // 1-2 lines shown on the card
  coverImage: string;       // preview image on landing
  accentColor: string;      // card accent / highlight color
  role: string;
  duration: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "onboarding-redesign",
    title: "Onboarding Redesign",
    company: "Traditum",
    year: "2024",
    tags: ["UX Research", "UI Design", "Usability Testing"],
    summary: "Reduced drop-off by 40 % by rethinking the first-time user experience from the ground up.",
    coverImage: "/mock/cover-onboarding.jpg",
    accentColor: "#5B8BF5",
    role: "Lead Product Designer",
    duration: "3 months",
    sections: [
      {
        type: "text",
        title: "The problem",
        body: "New users were abandoning the product within the first session. Analytics showed a 68 % drop-off rate during the initial setup flow. The experience asked for too much information upfront with no clear value proposition.",
      },
      {
        type: "metrics",
        metrics: [
          { value: "68 %", label: "Drop-off before" },
          { value: "28 %", label: "Drop-off after" },
          { value: "3 wks", label: "Research phase" },
          { value: "12", label: "Usability tests" },
        ],
      },
      {
        type: "two-col",
        left: {
          title: "Research",
          body: "Conducted 12 moderated usability sessions and synthesised findings into a Jobs-to-be-Done framework. The core insight: users needed to see value before they were willing to share personal data.",
        },
        right: {
          title: "Solution",
          body: "Introduced a progressive disclosure pattern — surface the core feature immediately, collect data lazily as context becomes relevant. Added micro-copy that explains why each field is needed.",
        },
      },
      {
        type: "image",
        image: "/mock/cover-onboarding.jpg",
        imageAlt: "Final onboarding screens",
        title: "Final designs",
      },
      {
        type: "text",
        title: "Outcome",
        body: "The redesigned flow reduced drop-off from 68 % to 28 % in the first month post-launch. Average time-to-value decreased by 55 %, and support tickets related to setup dropped by a third.",
      },
    ],
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    company: "ConCntric",
    year: "2024",
    tags: ["Product Strategy", "UI Design", "Design System"],
    summary: "A data-dense yet scannable dashboard that surfaces insights without overwhelming the user.",
    coverImage: "/mock/cover-dashboard.jpg",
    accentColor: "#C084FC",
    role: "Senior Product Designer",
    duration: "5 months",
    sections: [
      {
        type: "text",
        title: "Context",
        body: "ConCntric's power users were spending hours in spreadsheets because the existing dashboard lacked the granularity they needed. The challenge was adding depth without sacrificing clarity.",
      },
      {
        type: "metrics",
        metrics: [
          { value: "4 h", label: "Avg. saved / week" },
          { value: "94 %", label: "Task success rate" },
          { value: "8", label: "Beta teams" },
          { value: "2×", label: "Daily active use" },
        ],
      },
      {
        type: "two-col",
        left: {
          title: "Design principles",
          body: "Progressive detail: high-level KPIs at a glance, drill-down on demand. Consistent component library so engineers could ship faster and designers iterate with confidence.",
        },
        right: {
          title: "Process",
          body: "Co-design sessions with 3 power-user teams, rapid prototyping in Figma, and weekly reviews. Built a shared design system to align 4 engineers across 2 squads.",
        },
      },
      {
        type: "image",
        image: "/mock/cover-dashboard.jpg",
        imageAlt: "Analytics dashboard final design",
        title: "Dashboard overview",
      },
    ],
  },
  {
    slug: "design-system",
    title: "Design System",
    company: "Coderhouse",
    year: "2023",
    tags: ["Design System", "UI Design", "Prototyping"],
    summary: "Built a scalable component library that cut design-to-dev handoff time in half across 6 product teams.",
    coverImage: "/mock/cover-design-system.jpg",
    accentColor: "#34D399",
    role: "Design Systems Lead",
    duration: "6 months",
    sections: [
      {
        type: "text",
        title: "The challenge",
        body: "Six product teams were maintaining their own component libraries, leading to visual inconsistencies and duplicated effort. A unified system was needed without disrupting live products.",
      },
      {
        type: "metrics",
        metrics: [
          { value: "6", label: "Teams aligned" },
          { value: "120+", label: "Components" },
          { value: "50 %", label: "Faster handoff" },
          { value: "1", label: "Source of truth" },
        ],
      },
      {
        type: "two-col",
        left: {
          title: "Token architecture",
          body: "Built a three-tier token system (primitive → semantic → component) that allowed theming across products while maintaining a single Figma library.",
        },
        right: {
          title: "Adoption strategy",
          body: "Ran bi-weekly office hours, wrote thorough documentation, and embedded a 'design system champion' in each squad. Adoption reached 80 % within 3 months.",
        },
      },
      {
        type: "image",
        image: "/mock/cover-design-system.jpg",
        imageAlt: "Design system component library",
        title: "Component library",
      },
    ],
  },
];
