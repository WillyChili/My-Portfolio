export type ProjectTag = "UX Research" | "UI Design" | "Product Strategy" | "Design System" | "Prototyping" | "Usability Testing" | "AI / ML" | "Full-Stack" | "Mobile" | "Product Design" | "AI Integration" | "Ed-Tech";

export interface ProjectSection {
  type: "text" | "image" | "two-col" | "metrics" | "highlight" | "mockup-row" | "timeline" | "process" | "tech-stack";
  title?: string;
  subtitle?: string;
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
    slug: "coderhouse",
    title: "Coderhouse Redesign",
    company: "Coderhouse",
    year: "2025–2026",
    tags: ["Product Design", "Design System", "AI Integration", "Ed-Tech"],
    summary: "A full education platform redesign as the only designer: 2 core surfaces, 2 study modalities, AI integration, and a design system built on Shadcn/UI.",
    coverImage: "/coderhouse/cover.png",
    accentColor: "#E8734A",
    role: "Product Designer · Sole Designer",
    duration: "16+ months",
    sections: [
      {
        type: "highlight",
        quote: "The interesting work wasn't designing the new platform. It was understanding the old one.",
      },
      {
        type: "text",
        chapter: "01",
        chapterLabel: "Context",
        title: "The project",
        body: "Coderhouse rebuilt its education platform from scratch. I was the only designer on the project: student campus and staff portal, two surfaces and two study modalities, on top of a design system built on Shadcn/UI rather than from zero.\n\nThe work split into two threads that ran in parallel for 16 months: separating what was actually working in the old platform from what was failing by design, and integrating AI into the core of the experience while what it could do kept shifting every three months.",
      },
      {
        type: "text",
        chapter: "02",
        chapterLabel: "Discovery",
        title: "Reading the old platform",
        body: "Years of use, active cohorts, support tickets, ratings, NPS data: not a blank page. The diagnosis split cleanly into what to protect and what to fix.",
      },
      {
        type: "process",
        subtitle: "What we chose to keep",
        body: "This is the part of a diagnosis that almost never gets told, and it's the one that matters most: in a full redesign, the temptation is to change everything. What you keep with intention is a design decision as much as what you change.",
        steps: [
          {
            label: "",
            title: "A step-by-step syllabus",
            body: "Content unlocks in a fixed order, one topic at a time. Removing that structure for the sake of flexibility would have removed the thing that told students what to do next.",
          },
          {
            label: "",
            title: "A cohort chat between students and teacher",
            body: "A single thread per cohort where students and the teacher talk directly, not just office hours. Questions get answered in public, and future students can find them.",
          },
          {
            label: "",
            title: "Tutors as human support",
            body: "When there's a person, there's someone to ask. That doesn't get replaced, it gets complemented.",
          },
          {
            label: "",
            title: "The ranking as a status space",
            body: "The need to showcase achievements is real. The problem wasn't the ranking itself: it was its rules.",
          },
        ],
      },
      {
        type: "process",
        subtitle: "What we decided to change",
        body: "Five decisions, not a full teardown. Some were structural, some were about how the product looked and felt, and both mattered.",
        steps: [
          {
            label: "",
            title: "Attendance over learning",
            body: "Attendance requirements punish async learners and reward leaving Zoom open. Removed attendance. You certify by content consumed + project approved.",
          },
          {
            label: "",
            title: "No one to ask when you got stuck",
            body: "Corrections read as a closed verdict, with nowhere to ask 'but why?' In a moment where AI could actually help with that, we introduced Ticher: an AI tutor that answers doubts as they come up, deep-linked from every correction.",
          },
          {
            label: "",
            title: "Confusing navigation",
            body: "A hierarchy and typographic rhythm problem, not a content problem. Redesigned the syllabus and reading experience.",
          },
          {
            label: "",
            title: "Support tickets from friction",
            body: "No structured way to report, no separation between 'this is broken' and 'I don't like this'. Built a dual-stream feedback system.",
          },
          {
            label: "",
            title: "A dated, inconsistent look",
            body: "Every surface felt like a slightly different product, and the brand hadn't been refreshed in years. Paisanos led the brand refresh; I redesigned the interface on top of it, one visual language and one component system, applied consistently across the platform.",
          },
        ],
      },
      {
        type: "mockup-row",
        chapter: "03",
        chapterLabel: "Product",
        mockupId: "coderhouse-screens",
        title: "The platform",
      },
      {
        type: "metrics",
        metrics: [
          { value: "16+", label: "Months as sole designer" },
          { value: "2", label: "Core surfaces redesigned" },
          { value: "3", label: "Feedback entry points, one shared state" },
          { value: "Weekly", label: "Ship cadence, up from quarterly" },
        ],
      },
      {
        type: "text",
        chapter: "04",
        chapterLabel: "Craft",
        title: "Designing AI on shifting ground",
        body: "This is the part of the project that taught me the most, and the hardest to have done well. I started designing AI in June 2025. What a model could reliably do in June 2025 wasn't what it could do in January 2026, or June 2026. I was designing on a material whose properties changed every three months.",
      },
      {
        type: "text",
        subtitle: "The rule that ordered everything",
        body: "AI sped up process and iteration. It never replaced the judgment. I decided not to design screens that depended on how good the model was: I designed surfaces of entry (where and when the student encounters the AI) and let the quality of the output be a variable that could improve without forcing me to redesign. That call came from years of design practice, the perception and intuition a model doesn't have, and every output was still measured against it and against direct human feedback.",
      },
      {
        type: "process",
        subtitle: "How AI decisions actually got made",
        body: "Using AI to generate a first draft didn't mean shipping the first draft. Every AI touchpoint in the product went through the same three checks before it reached a student.",
        steps: [
          {
            label: "01",
            title: "AI proposed, the team argued",
            body: "Course programs, correction structures, and copy started as AI output. Nothing shipped without the team pulling it apart first.",
          },
          {
            label: "02",
            title: "Human feedback, every time",
            body: "Every generated draft went through a person before publishing: an admin reviewing a course program, a reviewer checking a correction structure, a lead reading the copy.",
          },
          {
            label: "03",
            title: "Anchored to industry standards",
            body: "When the team disagreed on a call, the tie-breaker wasn't personal taste, it was how established ed-tech and SaaS products handled the same problem. Mobbin benchmarking and existing UX conventions set the bar AI output had to clear.",
          },
        ],
      },
      {
        type: "text",
        chapter: "05",
        chapterLabel: "Decisions",
        title: "The feedback system",
        body: "The platform launched and migrated at the end of 2025. I designed a listening system built on NPS surveys, direct in-app feedback, and Intercom, with every signal routed through PostHog and organized by category. That let the team spot a recurring issue fast and turn it into a fix, every week.",
      },
      {
        type: "process",
        steps: [
          {
            label: "",
            title: "Two streams, not a catch-all",
            body: "The feedback sidebar splits into 'report a bug' (comment only) and 'rate the platform' (1-5 stars + comment). Bugs and experience complaints are different things: they go to different teams, and mixed together, neither can be analyzed.",
          },
          {
            label: "",
            title: "Low ratings that produce backlog",
            body: "If the student rates ≤3 stars, actionable improvement categories appear. A 2-star rating without a category is noise. With a category, it's a task.",
          },
          {
            label: "",
            title: "Respect for user attention",
            body: "Three entry points (sidebar, proactive pop-up, end-of-course survey) share one state: rating or skipping in any one resets the counter for all. The pop-up appears every 30 days or every 10 logins, whichever comes first, and is skippable.",
          },
          {
            label: "",
            title: "One system, all signals",
            body: "NPS scores, in-app ratings, and direct conversations through Intercom all feed into PostHog, tagged and organized by category. That's what made recurring issues visible fast, and turned the platform into something that shipped improvements weekly instead of quarterly.",
          },
        ],
      },
      {
        type: "two-col",
        chapter: "06",
        chapterLabel: "Reflection",
        left: {
          title: "What I'd do the same",
          body: "Start with a pre-built design system instead of from zero, then iterate it until it matched the company's branding. That gave the project a running start and a shared language with development from day one. Document every step along the way, and keep a living roadmap of ideas to build and improve.",
        },
        right: {
          title: "What I'd do differently",
          body: "Prototype in code first. Build the flows in HTML with Claude Code before touching Figma, then bring the validated version in to document the design system changes. It makes iteration faster and hands off something already proven, not a static mock.",
        },
      },
      {
        type: "text",
        subtitle: "What I learned about designing with AI",
        body: "AI is excellent for rapid iteration: testing several versions of a flow in the time it used to take to test one, and optimizing the time between an idea and a working prototype. But it doesn't replace the human side of the job: reading a user's frustration in an interview, sensing when a flow feels cold even if it tests fine, building empathy with the people who use what you design. That part stays with the designer.",
        pullQuote: "AI can generate screens. It can't replace the empathy a Product Designer brings to the people who use them.",
      },
      {
        type: "tech-stack",
        chapter: "07",
        chapterLabel: "Tools",
        title: "The stack",
        stack: [
          { name: "Claude Code", role: "Prototyping in HTML, CSS, and JS to ship working designs straight to developers", category: "AI" },
          { name: "Figma + FigJam", role: "Design system, tokens, product surfaces, workshops", category: "Design" },
          { name: "Mobbin", role: "Pattern benchmarking across ed-tech and SaaS", category: "Design" },
          { name: "Shadcn/UI", role: "Component base the design system was built on, not from scratch", category: "Components" },
          { name: "Notion", role: "Specs, decisions, and living documentation", category: "Documentation" },
          { name: "Linear", role: "Task tracking and sprint management", category: "Project" },
          { name: "PostHog", role: "Event instrumentation and analytics", category: "Analytics" },
        ],
      },
      {
        type: "mockup-row",
        mockupId: "coderhouse-prototype",
      },
    ],
  },
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
      {
        type: "mockup-row",
        mockupId: "echo-live",
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
    duration: "2 days",
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
];
