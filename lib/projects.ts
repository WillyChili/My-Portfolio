export type ProjectTag = "UX Research" | "UI Design" | "Product Strategy" | "Design System" | "Prototyping" | "Usability Testing" | "AI / ML" | "Full-Stack" | "Mobile";

export interface ProjectSection {
  type: "text" | "image" | "two-col" | "metrics" | "highlight" | "mockup-row";
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  left?: { title: string; body: string };
  right?: { title: string; body: string };
  metrics?: { value: string; label: string }[];
  quote?: string;
  mockupId?: string;
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  year: string;
  tags: ProjectTag[];
  summary: string;
  coverImage: string;
  accentColor: string;
  role: string;
  duration: string;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "echo",
    title: "Echo",
    company: "Personal Project",
    year: "2026",
    tags: ["UI Design", "Product Strategy", "AI / ML", "Full-Stack", "Mobile"],
    summary: "A journaling app with an AI companion that learns your voice and mirrors it back to you.",
    coverImage: "/mock/cover-echo.jpg",
    accentColor: "#2CD59C",
    role: "Founder · Design & Development",
    duration: "2 months",
    sections: [
      {
        type: "highlight",
        quote: "What if your journal could talk back — in your own voice?",
      },
      {
        type: "text",
        title: "The starting point",
        body: "I journal almost every day, but I always felt like my notes just sat there. I wanted something that could read everything I've written and reflect it back — not as a therapist, not as a chatbot, but as something that sounds like me. That idea became Echo.",
      },
      {
        type: "text",
        title: "The core concept",
        body: "Echo is a daily journaling app with an AI companion. You write freely every day — text or voice — and when you're ready, you open a conversation with Echo. It reads all your past entries and responds in your style: your sentence length, your tone, your recurring themes. The more you write, the more it sounds like you.",
      },
      {
        type: "mockup-row",
        mockupId: "all-screens",
        title: "App screens",
      },
      {
        type: "two-col",
        left: {
          title: "Design decisions",
          body: "One textarea, not multiple fields. Dark mode only — journaling is personal, intimate. Squircle corners everywhere for warmth. Mint as the sole accent color: calming but alive. The UI stays out of the way so the words are the focus.",
        },
        right: {
          title: "Technical choices",
          body: "React + Vite frontend, Express backend, Supabase for auth and storage. Claude API for the AI layer. Push notifications via FCM for daily reminders. Android app with Google OAuth. I designed and built every layer myself.",
        },
      },
      {
        type: "text",
        title: "What I learned",
        body: "The hardest part wasn't building the AI — it was writing the system prompt. Getting Claude to genuinely mirror someone's voice instead of defaulting to its own required dozens of iterations. I also learned that voice input needs aggressive error handling: browsers drop the mic connection constantly, and the UX has to feel seamless even when the API fails silently.",
      },
    ],
  },
  {
    slug: "tins-derm",
    title: "TINS DERM",
    company: "Personal Project",
    year: "2026",
    tags: ["UX Research", "UI Design", "Design System", "Prototyping"],
    summary: "A dermatology & skin wellness website redesign built to feel as precise and trustworthy as the care it represents.",
    coverImage: "/mock/cover-tinsderm.png",
    accentColor: "#B8965A",
    role: "UX/UI Designer",
    duration: "3 weeks",
    sections: [
      {
        type: "highlight",
        quote: "A dermatology practice's website should feel as trustworthy and precise as the care it provides.",
      },
      {
        type: "text",
        title: "The challenge",
        body: "This one started as a self-directed design challenge, not a client brief: take a fictional luxury dermatology practice from a written brand brief to a fully designed, responsive, production-quality homepage — on my own, end to end. No client to ask, no existing brand to lean on. The constraint was the point: it forced real decisions about tone, hierarchy, and trust with nothing to fall back on.",
      },
      {
        type: "text",
        title: "The brief",
        body: "TINS DERM needed a site that could do two things at once: reassure patients weighing a medical decision, and sell the aesthetic outcomes of cosmetic treatments. Most dermatology sites lean too clinical or too glossy — I set out to design something that held both registers without feeling split in two, working from a strict brand brief: a navy-and-gold palette, an editorial serif paired with a clinical sans, and an explicit 'no generic SaaS gradients, no stock-photo placeholders' rule to keep the craft honest.",
      },
      {
        type: "mockup-row",
        mockupId: "tinsderm-screens",
        title: "The homepage, section by section",
      },
      {
        type: "two-col",
        left: {
          title: "Research & discovery",
          body: "I audited dermatology and medical-spa competitors, mapped the patient journey from first symptom search to booked consultation, and identified where trust breaks down — vague credentials, no visible before/afters, buried contact info.",
        },
        right: {
          title: "Design system first",
          body: "Before any screen, I built the token set: a warm ink/gold palette, a serif for editorial trust paired with a clean sans for clinical clarity, and an 8px spacing scale — so every section stayed consistent as the page grew.",
        },
      },
      {
        type: "metrics",
        metrics: [
          { value: "9", label: "Design phases" },
          { value: "7", label: "Research areas" },
          { value: "3", label: "Responsive breakpoints" },
          { value: "48px", label: "Min. touch target" },
        ],
      },
      {
        type: "two-col",
        left: {
          title: "Key decisions",
          body: "Real before/after photography does the persuading, not copy — so the results section leads with proof. Navy and gold signal medical credibility without feeling cold. A single persistent 'Book a Consultation' CTA removes any ambiguity about the next step.",
        },
        right: {
          title: "Responsive approach",
          body: "Designed desktop-first given the research showing most consultation bookings start on desktop during work hours, then adapted the card grids and navigation down to tablet and mobile without losing the before/after emphasis.",
        },
      },
      {
        type: "text",
        title: "Result",
        body: "The finished site balances clinical trust with cosmetic aspiration — patients can find credentials and treatment details fast, while the gallery and testimonials do the emotional work of showing what's possible. Built end-to-end as a single-file React prototype, then documented into a full case study on its own design process.",
      },
      {
        type: "mockup-row",
        mockupId: "tinsderm-live",
      },
    ],
  },
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
