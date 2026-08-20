export type ProjectTag = "UX Research" | "UI Design" | "Product Strategy" | "Design System" | "Prototyping" | "Usability Testing" | "AI / ML" | "Full-Stack" | "Mobile";

export interface ProjectSection {
  type: "text" | "image" | "two-col" | "metrics" | "highlight" | "mockup-row" | "timeline" | "process" | "tech-stack";
  title?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  left?: { title: string; body: string };
  right?: { title: string; body: string };
  metrics?: { value: string; label: string }[];
  quote?: string;
  mockupId?: string;
  phases?: { number: string; title: string; body: string }[];
  steps?: { label: string; title: string; body: string }[];
  stack?: { name: string; role: string; category: string }[];
  chapter?: string;
  chapterLabel?: string;
  pullQuote?: string;
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
        quote: "What if your journal could talk back, in your own voice?",
      },
      {
        type: "text",
        chapter: "01",
        chapterLabel: "Context",
        title: "The spark",
        body: "I journal almost every day. Voice notes on my phone, scribbles in Notion, half-finished thoughts in Apple Notes. All those words just sat there, never re-read, never resurfaced. I started wondering: what if my journal could actually reflect something back to me, in my own voice?",
        pullQuote: "The words were there. What was missing was the mirror.",
      },
      {
        type: "process",
        chapter: "02",
        chapterLabel: "Discovery",
        title: "How I got here",
        steps: [
          {
            label: "01",
            title: "Personal insight",
            body: "The habit was already mine. I noticed my notes were piling up but never coming back to me. That gap became the question worth exploring.",
          },
          {
            label: "02",
            title: "User conversations",
            body: "I ran 5 informal interviews with people who journal regularly on their phones. I asked what they wrote, where, and whether they ever returned to it.",
          },
          {
            label: "03",
            title: "The pattern",
            body: "Everyone writes. Almost nobody re-reads. Notes were scattered across five apps that don't talk to each other, and writing felt like an obligation instead of a conversation.",
          },
          {
            label: "04",
            title: "The direction",
            body: "Echo shouldn't be another notes app fighting for space. It should be a mirror: something that makes writing feel worth it because the words come back.",
          },
        ],
      },
      {
        type: "text",
        chapter: "03",
        chapterLabel: "Concept",
        title: "The concept",
        body: "You write freely every day, in text or voice. When you're ready, you open a conversation with Echo. It reads all your past entries and responds in your style: your sentence length, your tone, your recurring themes. The more you write, the more it sounds like you.",
      },
      {
        type: "mockup-row",
        chapter: "04",
        chapterLabel: "Product",
        mockupId: "all-screens",
        title: "App screens",
      },
      {
        type: "two-col",
        chapter: "05",
        chapterLabel: "Craft",
        left: {
          title: "Design decisions",
          body: "One textarea, not multiple fields. Dark mode only, because journaling is personal, intimate. Squircle corners everywhere for warmth. Mint as the sole accent color: calming but alive. The UI stays out of the way so the words are the focus.",
        },
        right: {
          title: "The prompt as design",
          body: "The hardest interface wasn't visual. It was the system prompt. Getting Claude to genuinely mirror someone's voice instead of defaulting to its own required dozens of iterations. That prompt is where the product actually lives.",
        },
      },
      {
        type: "text",
        chapter: "06",
        chapterLabel: "Building",
        title: "From designer to builder",
        body: "I've spent years designing products that other engineers build. With Echo I wanted to own the whole thing: figure out where the design idea breaks against real infrastructure, and where the code shapes the design back. I paired with Claude Code as a co-pilot, but every architectural decision, every API call, every deployment was mine to make. That changed how I designed. Loading times aren't abstract anymore. Rate limits stop being someone else's problem. The auth flow gets scoped down because I'm the one wiring it up.",
        pullQuote: "The scope stayed small because I felt the cost of every decision.",
      },
      {
        type: "tech-stack",
        chapter: "07",
        chapterLabel: "Infrastructure",
        title: "The stack",
        stack: [
          { name: "Claude API", role: "AI reflection engine that reads your notes and responds in your voice", category: "AI" },
          { name: "Supabase", role: "Authentication and Postgres storage for every note", category: "Backend" },
          { name: "Railway", role: "Express server hosting for the API layer", category: "Infrastructure" },
          { name: "Vercel", role: "Landing page and marketing site delivery", category: "Infrastructure" },
          { name: "GitHub", role: "Source control and release pipeline", category: "Tooling" },
          { name: "Claude Code", role: "AI pair-programming through the entire build", category: "Tooling" },
        ],
      },
      {
        type: "text",
        chapter: "08",
        chapterLabel: "Reflection",
        title: "What I learned",
        body: "Owning both sides, design and engineering, changes what you ship. The scope stayed small because I felt the cost of every decision. The interactions stayed simple because I had to build them. The AI stayed honest because I could see when the prompt was doing too much work. Next time I design a product, I'll design it knowing what the wiring underneath actually costs.",
      },
    ],
  },
  {
    slug: "tins-derm",
    title: "TINS DERM",
    company: "UX UI Challenge",
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
        chapter: "01",
        chapterLabel: "Context",
        title: "The challenge",
        body: "This one started as a self-directed design challenge, not a client brief: take a fictional luxury dermatology practice from a written brand brief to a fully designed, responsive, production-quality homepage, on my own, end to end. No client to ask, no existing brand to lean on. The constraint was the point: it forced real decisions about tone, hierarchy, and trust with nothing to fall back on.",
      },
      {
        type: "text",
        chapter: "02",
        chapterLabel: "Brief",
        title: "The brief",
        body: "TINS DERM needed a site that could do two things at once: reassure patients weighing a medical decision, and sell the aesthetic outcomes of cosmetic treatments. Most dermatology sites lean too clinical or too glossy. I set out to design something that held both registers without feeling split in two, working from a strict brand brief: a navy-and-gold palette, an editorial serif paired with a clinical sans, and an explicit 'no generic SaaS gradients, no stock-photo placeholders' rule to keep the craft honest.",
        pullQuote: "Reassure the patient, sell the outcome, never let it feel split in two.",
      },
      {
        type: "mockup-row",
        chapter: "03",
        chapterLabel: "Product",
        mockupId: "tinsderm-screens",
        title: "The homepage, section by section",
      },
      {
        type: "timeline",
        chapter: "04",
        chapterLabel: "Process",
        title: "The 9 build phases",
        body: "I structured the build as a sequence of phases, each one reviewed and refined before moving to the next: design system first, then layout by layout, ending with a full responsiveness and motion pass.",
        phases: [
          {
            number: "00",
            title: "Design system foundation",
            body: "Color tokens, typography scale (Playfair Display + Inter), spacing system, and shadow levels, all defined before a single screen was built.",
          },
          {
            number: "01",
            title: "Navigation + hero",
            body: "Editorial, asymmetric hero layout with a real photograph, not a centered SaaS-style headline. Set the tone for the rest of the site.",
          },
          {
            number: "02",
            title: "Trust bar + about",
            body: "Credibility stats and a magazine-style brand story to establish authority before asking for anything.",
          },
          {
            number: "03",
            title: "Services",
            body: "A 5-card grid with restrained line-icons, built to scan fast without feeling like a generic pricing table.",
          },
          {
            number: "04",
            title: "Featured treatment",
            body: "A full-bleed editorial break in the page rhythm: the one section designed to feel different from everything around it.",
          },
          {
            number: "05",
            title: "Why choose us + before/after gallery",
            body: "Proof over claims: real before/after pairs do more persuading than another paragraph of copy ever could.",
          },
          {
            number: "06",
            title: "Testimonials + booking CTA",
            body: "Patient voices, then a single unambiguous next step: book a consultation.",
          },
          {
            number: "07",
            title: "Footer",
            body: "Full site map, contact details, and hours: the practical information patients look for last.",
          },
          {
            number: "08",
            title: "Polish, responsiveness & motion",
            body: "IntersectionObserver-driven reveal animations, a full tablet/mobile pass, and a final accessibility and contrast check.",
          },
        ],
      },
      {
        type: "two-col",
        chapter: "05",
        chapterLabel: "Craft",
        left: {
          title: "Research & discovery",
          body: "I audited dermatology and medical-spa competitors, mapped the patient journey from first symptom search to booked consultation, and identified where trust breaks down: vague credentials, no visible before/afters, buried contact info.",
        },
        right: {
          title: "Design system first",
          body: "Before any screen, I built the token set: a warm ink/gold palette, a serif for editorial trust paired with a clean sans for clinical clarity, and an 8px spacing scale, so every section stayed consistent as the page grew.",
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
        chapter: "06",
        chapterLabel: "Decisions",
        left: {
          title: "Key decisions",
          body: "Real before/after photography does the persuading, not copy, so the results section leads with proof. Navy and gold signal medical credibility without feeling cold. A single persistent 'Book a Consultation' CTA removes any ambiguity about the next step.",
        },
        right: {
          title: "Responsive approach",
          body: "Designed desktop-first given the research showing most consultation bookings start on desktop during work hours, then adapted the card grids and navigation down to tablet and mobile without losing the before/after emphasis.",
        },
      },
      {
        type: "text",
        chapter: "07",
        chapterLabel: "Reflection",
        title: "Result",
        body: "The finished site balances clinical trust with cosmetic aspiration: patients can find credentials and treatment details fast, while the gallery and testimonials show what's possible. Built end-to-end as a single-file React prototype, then documented into a full case study on its own design process.",
        pullQuote: "Patients find the credentials fast. The gallery does the rest of the convincing.",
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
          body: "Introduced a progressive disclosure pattern: surface the core feature immediately, collect data lazily as context becomes relevant. Added micro-copy that explains why each field is needed.",
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
