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
  {
    slug: "coderhouse",
    title: "Coderhouse 4.0",
    company: "Coderhouse",
    year: "2025–2026",
    tags: ["Product Design", "Design System", "AI Integration", "Ed-Tech"],
    summary: "A full education platform redesign as the only designer: 2 core surfaces, 2 study modalities, AI integration, and a design system built on Shadcn/UI.",
    coverImage: "/coderhouse/cover.png",
    accentColor: "#E8734A",
    role: "Product Designer · Único diseñador",
    duration: "16+ months",
    sections: [
      {
        type: "highlight",
        quote: "The interesting work wasn't drawing the new platform. It was reading the old one.",
      },
      {
        type: "text",
        chapter: "01",
        chapterLabel: "Context",
        title: "The project",
        body: "Coderhouse rebuilt its education platform from scratch. I was the only designer on the project: student campus and staff portal, two surfaces and two study modalities, on top of a design system built on Shadcn/UI rather than from zero.\n\nBut the interesting work wasn't drawing the new platform. It was reading the old one: separating what was actually working and worth protecting, from what was failing by design rather than by implementation. And then integrating AI into the core of the experience during a year and a half in which what AI could do shifted every three months.",
      },
      {
        type: "text",
        chapter: "02",
        chapterLabel: "Discovery",
        title: "Reading the old platform",
        body: "I didn't start from a blank page. I started from a product with years of use, active cohorts, support tickets, student ratings, and NPS data. The first design work was diagnostic: distinguishing surface-level friction from structural problems.",
      },
      {
        type: "process",
        subtitle: "What I chose to keep",
        body: "This is the part of a diagnosis that almost never gets told, and it's the one that matters most: in a full redesign, the temptation is to change everything. What you keep with intention is a design decision as much as what you change.",
        steps: [
          {
            label: "01",
            title: "Live cohorts with scheduled classes",
            body: "This is what generates real commitment. A shared date and people waiting for you is the strongest scaffolding online education has.",
          },
          {
            label: "02",
            title: "The final project as evidence",
            body: "It's the only thing that proves you learned something. Quizzes measure retention; a deliverable project is your portfolio.",
          },
          {
            label: "03",
            title: "Tutors as human support",
            body: "When there's a person, there's someone to ask. That doesn't get replaced, it gets complemented.",
          },
          {
            label: "04",
            title: "The ranking as a status space",
            body: "The need to showcase achievements is real. The problem wasn't the ranking itself: it was its rules.",
          },
        ],
      },
      {
        type: "process",
        subtitle: "What was broken by design",
        body: "Seven symptoms, seven diagnoses. Each one pointed at a structural problem, not a cosmetic one.",
        steps: [
          {
            label: "01",
            title: "Motivation worked for few",
            body: "Top 10% ranking is zero-sum by design: 90% lose. Replaced it with a mastery threshold of about 80% of possible points.",
          },
          {
            label: "02",
            title: "Certificates contradicted progress",
            body: "Progress showed 94% with the certificate already issued. Two signals saying different things about the same fact. Fixed: certification = 100%.",
          },
          {
            label: "03",
            title: "Attendance over learning",
            body: "Attendance requirements punish async learners and reward leaving Zoom open. Removed attendance. You certify by content consumed + project approved.",
          },
          {
            label: "04",
            title: "Feedback without learning",
            body: "Corrections read as a closed verdict. The student couldn't ask 'but why?' Added deep-link from each correction to the AI tutor.",
          },
          {
            label: "05",
            title: "Mid-course dropout",
            body: "The jump from 'I started' to 'final project' was too large. No intermediate milestones. Introduced visible pre-submissions as checkpoints.",
          },
          {
            label: "06",
            title: "Confusing navigation",
            body: "A hierarchy and typographic rhythm problem, not a content problem. Redesigned the syllabus and reading experience.",
          },
          {
            label: "07",
            title: "Support tickets from friction",
            body: "No structured way to report, no separation between 'this is broken' and 'I don't like this'. Built a dual-stream feedback system.",
          },
        ],
      },
      {
        type: "text",
        chapter: "03",
        chapterLabel: "Concept",
        title: "Two modalities, one system",
        body: "The product had to serve two very different ways of studying: Group Mode (cohort, live classes, tutors) and Solo Mode (asynchronous, self-paced, no classes). And later a third: an upskilling membership for professionals.\n\nThe design decision was not to build two products. Login, onboarding, profile, syllabus, progress, submissions, certificates, self-service, and the AI tutor are the same. What changes are the rules: Group Mode has live classes and 30 days for the final project; Solo Mode has no classes and gives 6 months with a suggested calendar.\n\nTwo products would have been faster for the first release and catastrophic afterward: two design systems diverging, two definitions of 'progress,' and a student who buys both modalities encountering two different platforms. Modeling the variation as rules over a shared system cost more upfront, and is what allowed the third modality to be added without redesigning the campus.",
      },
      {
        type: "process",
        subtitle: "Solo Mode risk matrix",
        steps: [
          {
            label: "01",
            title: "Dropout from lack of support",
            body: "Proactive AI tutor, reminders ('3 days since you last progressed'), 30-day challenge mode with calendar.",
          },
          {
            label: "02",
            title: "Questions that block progress",
            body: "AI with course context, forums, peer resolution.",
          },
          {
            label: "03",
            title: "No real feedback",
            body: "Automated correction, peer feedback, examples of excellent submissions, clear rubrics.",
          },
          {
            label: "04",
            title: "Lower perceived value without classes",
            body: "Reposition value around practice, resources, and permanent access.",
          },
        ],
      },
      {
        type: "mockup-row",
        chapter: "04",
        chapterLabel: "Product",
        mockupId: "coderhouse-screens",
        title: "The platform",
      },
      {
        type: "text",
        chapter: "05",
        chapterLabel: "Craft",
        title: "Designing AI on shifting ground",
        body: "This is the part of the project that taught me the most, and the hardest to have done well. I started designing AI in June 2025. What a model could reliably do in June 2025 wasn't what it could do in January 2026, or June 2026. I was designing on a material whose properties changed every three months.",
      },
      {
        type: "text",
        subtitle: "The rule that ordered everything",
        body: "I decided not to design screens that depended on how good the model was. I designed surfaces of entry (where and when the student encounters the AI) and let the quality of the output be a variable that could improve without forcing me to redesign.\n\nA concrete example: I didn't design the submission correction as 'a text the AI returns.' I designed it as three blocks with a fixed structure:",
      },
      {
        type: "process",
        steps: [
          {
            label: "01",
            title: "What's correct",
            body: "Goes first, and it's not decoration: it's what makes the student keep reading.",
          },
          {
            label: "02",
            title: "Required corrections",
            body: "What needs fixing, separated from the recognition.",
          },
          {
            label: "03",
            title: "Suggestions",
            body: "How to go beyond the minimum.",
          },
        ],
      },
      {
        type: "text",
        body: "That structure is a design decision, not a model capability. It works equally well with a mediocre model and an excellent one: it gives the student a map of what to look at first, separates recognition from criticism, and gives the team a stable format to evaluate whether quality improved or worsened between versions.",
      },
      {
        type: "text",
        subtitle: "From chatbot to AI in the flow",
        body: "In 2025, Ticher (the AI tutor) was essentially a good chat: the student opened a window and asked. It worked, and it was used less than it should have been. The diagnosis: the cost of asking was too high, and not in time. In cognitive cost. Opening an empty chat forces you to formulate the question from scratch and explain the context to someone who doesn't have it.\n\nSo in the 2026 redesign I moved AI from 'a place you go to' to 'something that's where you already are': each bullet in the corrections and suggestions has a deep-link to Ticher. Hover over the bullet, tap 'Ask Ticher,' and the chat opens with that exact point already loaded as context.",
        pullQuote: "A correction is information. A conversation is learning. The deep-link turns each line of feedback into an open door.",
      },
      {
        type: "process",
        subtitle: "How AI decisions actually got made",
        body: "Using AI to generate a first draft didn't mean shipping the first draft. Every AI touchpoint in the product went through the same three checks before it reached a student.",
        steps: [
          {
            label: "01",
            title: "AI proposed, the team argued",
            body: "Course programs, correction structures, and copy started as AI output, but nothing shipped without the team pulling it apart first. Disagreement was normal, not a sign the process had failed.",
          },
          {
            label: "02",
            title: "Human feedback, every time",
            body: "Every generated draft went through a person before publishing: an admin reviewing a course program, a reviewer checking a correction structure, a lead reading the copy. AI proposed, people decided.",
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
        chapter: "06",
        chapterLabel: "Decisions",
        title: "The feedback system",
        body: "The platform launched and migrated at the end of 2025. The same error I'd diagnosed in the old platform (no structured way to listen) I could repeat. So I designed the listening system.",
      },
      {
        type: "process",
        steps: [
          {
            label: "01",
            title: "Two streams, not a catch-all",
            body: "The feedback sidebar splits into 'report a bug' (comment only) and 'rate the platform' (1-5 stars + comment). Mixing them was the old version's error: a bug and an experience complaint are different things, go to different teams, and mixed together neither can be analyzed.",
          },
          {
            label: "02",
            title: "Low ratings that produce backlog",
            body: "If the student rates ≤3 stars, actionable improvement categories appear. A 2-star rating without a category is noise. With a category, it's a task.",
          },
          {
            label: "03",
            title: "Respect for user attention",
            body: "Three entry points (sidebar, proactive pop-up, end-of-course survey) share one state: rating or skipping in any one resets the counter for all. The pop-up appears every 30 days or every 10 logins, whichever comes first, and is skippable.",
          },
        ],
      },
      {
        type: "text",
        chapter: "07",
        chapterLabel: "Reflection",
        title: "What I take with me",
        subtitle: "What I'd do the same",
        body: "Start with the design system and align it with the production component library before designing a screen. I lost expressive freedom; I gained that almost nothing came back from development for not being buildable. With a single designer, that cycle is what sinks you.\n\nDesign by complete flows, not by screens. The risk with a single designer isn't that one screen looks bad: it's that two screens designed weeks apart contradict each other and nobody notices until production.",
      },
      {
        type: "text",
        subtitle: "What I'd do differently",
        body: "I documented the research poorly. I did the interviews, they fed decisions, and I didn't leave a synthesis. Six months later it's hard to justify why something was decided that way, and the knowledge stayed in my head on a project where I was the single point of truth for design. One synthesis page per interview batch costs two hours and is what turns research into an asset.",
      },
      {
        type: "text",
        subtitle: "What I learned about gamification",
        body: "The points system launched before the community layer that gave it meaning: forums, submission feed, peer feedback. The student accumulates points in a space where nobody else is. A social motivation mechanic launched without its social layer isn't a reduced version of itself: it's a different thing, and it works worse.",
      },
      {
        type: "text",
        subtitle: "What I learned about designing with AI",
        body: "Design the surface, not the capability. Everything you specify assuming a fixed quality level of the model will be wrong in two releases, in either direction. What holds up are the structures: where it appears, with what context, what format the response takes, who reviews it.",
        pullQuote: "A designer who outsources judgment to a model produces plausible output and bad decisions.",
      },
      {
        type: "tech-stack",
        chapter: "08",
        chapterLabel: "Tools",
        title: "The stack",
        stack: [
          { name: "Figma + FigJam", role: "Design system, tokens, product surfaces, workshops", category: "Design" },
          { name: "Mobbin", role: "Pattern benchmarking across ed-tech and SaaS", category: "Design" },
          { name: "Shadcn/UI", role: "Component base the design system was built on, not from scratch", category: "Components" },
          { name: "Notion", role: "Specs, decisions, and living documentation", category: "Documentation" },
          { name: "Linear", role: "Task tracking and sprint management", category: "Project" },
          { name: "PostHog", role: "Event instrumentation and analytics", category: "Analytics" },
          { name: "Claude", role: "Specs, copy, pattern processing, documentation", category: "AI" },
        ],
      },
    ],
  },
];
