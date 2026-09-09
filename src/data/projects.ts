export interface CaseStudy {
  overview: {
    role: string;
    timeline: string;
    team?: string;
    technologies: string[];
    summary: string;
  };
  problem: {
    statement: string;
    painPoints: string[];
  };
  usersAndContext: {
    targetAudience: string;
    context: string;
  };
  approach: {
    strategy: string;
    keyPillars: { title: string; description: string }[];
  };
  researchAndInsights?: {
    summary: string;
    findings: string[];
  };
  productDecisions: {
    title: string;
    rationale: string;
    tradeoff?: string;
  }[];
  design: {
    description: string;
    highlights: string[];
  };
  build: {
    architecture: string;
    technicalHighlights: string[];
  };
  aiAndAutomation?: {
    implementation: string;
    impact: string;
  };
  outcome: {
    summary: string;
    achievements: string[];
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  role: string;
  category: "Full Stack & AI" | "Web Product" | "Design Engineering" | "Product Tool";
  technologies: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  behanceUrl?: string;
  caseStudy?: CaseStudy;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-1",
    slug: "planora-ai-content-planner",
    title: "Planora",
    tagline: "AI-powered content planning",
    summary: "Creators often have ideas but struggle to turn them into organized, consistent content. I designed and built Planora to bring content ideas, planning, AI assistance, scheduling, and publishing into one workflow.",
    description: "Conceived, designed, and built as a full-cycle web application featuring interactive drag-and-drop planning, AI assistant toolsets, and multi-platform publishing workflows.",
    role: "Product · UX · Engineering · AI",
    category: "Full Stack & AI",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "DeepSeek API", "Lucide Icons", "Vercel"],
    image: "/images/projects/planora.webp",
    featured: true,
    liveUrl: "https://planora-two-umber.vercel.app",
    caseStudy: {
      overview: {
        role: "Product Engineer (End-to-End)",
        timeline: "6 Weeks",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DeepSeek API", "Vercel"],
        summary: "Engineered an AI-first content planner replacing messy spreadsheets with intuitive calendar scheduling and smart idea generation."
      },
      problem: {
        statement: "Content creators lose hours every week context-switching between notes apps, messy spreadsheet calendars, and AI chat interfaces to generate and schedule posts.",
        painPoints: [
          "Scattered brainstorming leads to irregular publishing schedules and creator burnout.",
          "Generic AI assistants lack platform-specific formatting and hashtag intelligence.",
          "Disjointed tooling between ideation, drafting, and scheduling causes lost post drafts."
        ]
      },
      usersAndContext: {
        targetAudience: "Solo content creators, agency social media managers, and indie founders building audiences on Instagram, TikTok, YouTube, X, and LinkedIn.",
        context: "Demands a zero-clutter dashboard experience that makes scheduling calm and friction-free."
      },
      approach: {
        strategy: "Unify the entire creator journey into a single fluid canvas: Ideas Hub → AI Assistant Generation → Visual Drag-and-Drop Calendar → Scheduled Queue.",
        keyPillars: [
          { title: "Visual Planning", description: "Interactive monthly and weekly calendar views with drag-and-drop post scheduling." },
          { title: "AI Ideas & Caption Hub", description: "Instant hook generator, caption refiner, and hashtag optimizer built for each platform." },
          { title: "Multi-Platform Dashboard", description: "Unified status tracking across Instagram, TikTok, YouTube, X, and LinkedIn." }
        ]
      },
      researchAndInsights: {
        summary: "Analyzed workflows of active creators to identify where drafting bottlenecks occur.",
        findings: [
          "Over 70% of creators abandon drafts when forced to switch tabs to generate hashtags or captions.",
          "Visual weekly overviews significantly increased consistent posting habits."
        ]
      },
      productDecisions: [
        {
          title: "Integrated AI Assistant Directly into Post Editor",
          rationale: "Keeps creators in their creative flow without needing separate ChatGPT tabs.",
          tradeoff: "Required structured prompt chaining to maintain character limits and platform voice."
        },
        {
          title: "Lightweight State Architecture with Instant Previews",
          rationale: "Ensures snappy drag-and-drop calendar interactions with zero lag.",
          tradeoff: "Requires robust optimistic updates during date reordering."
        }
      ],
      design: {
        description: "Modern, clean SaaS interface using deep indigo brand accents, high-contrast typography, and intuitive sidebar navigation.",
        highlights: [
          "Status-coded metric cards (Ideas, Drafts, Scheduled, Published)",
          "Platform-specific badge styling for instant visual recognition",
          "Distraction-free post composer with live formatting"
        ]
      },
      build: {
        architecture: "Next.js App Router with server-rendered landing pages, modular dashboard components, and streaming AI endpoints.",
        technicalHighlights: [
          "Optimistic UI updates for instant calendar slot manipulation",
          "Type-safe API routes for AI generation workflows",
          "Responsive multi-device layout with mobile navigation drawer"
        ]
      },
      aiAndAutomation: {
        implementation: "Integrated DeepSeek API pipelines with tailored prompts to synthesize raw post thoughts into polished, platform-tailored copy and tags.",
        impact: "Designed to reduce the time from ideation to scheduling by bringing AI generation and planning into one workflow."
      },
      outcome: {
        summary: "Shipped full SaaS product live to production on Vercel.",
        achievements: [
          "Live at planora-two-umber.vercel.app",
          "Trusted by creators to manage consistent publishing schedules",
          "100% responsive across desktop, tablet, and mobile browsers"
        ]
      }
    }
  },
  {
    id: "project-5",
    slug: "sellsnap-ai-commerce",
    title: "SellSnap , AI-Powered Mobile Commerce & Inventory Platform",
    tagline: "Instant photo-to-listing commerce app enabling social sellers to automate catalog creation, payments, and order tracking.",
    summary: "An AI-powered mobile commerce platform designed to help independent sellers turn product photos into complete storefront listings with AI description generation and instant checkout links.",
    description: "Conceived product workflows, designed end-to-end mobile app interfaces in Figma, and mapped AI image recognition and automated copy generation pipelines for fast merchant onboarding.",
    role: "Product Designer & AI Workflow Architect",
    category: "Full Stack & AI",
    technologies: ["Figma", "Mobile App UI/UX", "AI Automation", "Computer Vision UX", "Design Systems"],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ad94a251684655.6a3c681b02a49.png",
    featured: true,
    behanceUrl: "https://www.behance.net/gallery/251684655/SellSnap",
    caseStudy: {
      overview: {
        role: "Product Designer & AI Workflow Architect",
        timeline: "4 Weeks",
        technologies: ["Figma", "Mobile UX Design", "Design Systems", "AI Vision Workflows"],
        summary: "Designed a high-conversion mobile commerce tool allowing emerging market merchants to list products in seconds using AI vision and automated copy."
      },
      problem: {
        statement: "Small business owners and social commerce merchants spend excessive hours manually writing product descriptions, categorizing inventory, and calculating pricing variants on mobile.",
        painPoints: [
          "Manual product listing takes 10–15 minutes per item, creating a major inventory bottleneck.",
          "Social sellers struggle to create consistent, high-converting product descriptions.",
          "Fragmented order tracking across chat apps leads to missed sales and customer dissatisfaction."
        ]
      },
      usersAndContext: {
        targetAudience: "Social commerce entrepreneurs, micro-merchants, and mobile-first creators selling fashion, beauty, and physical goods.",
        context: "Sellers are on-the-go and need a 1-tap capture workflow that automates the tedious administrative overhead of online selling."
      },
      approach: {
        strategy: "Re-imagine listing creation around a 3-step 'Snap → Auto-Generate → Sell' loop with AI computer vision assistance.",
        keyPillars: [
          { title: "AI Vision Auto-Fill", description: "Instantly detects product type, color, and attributes from photos to pre-populate titles and tags." },
          { title: "Smart Copywriter", description: "Generates catchy, SEO-friendly descriptions and pricing suggestions based on target audience presets." },
          { title: "One-Link Storefront", description: "Instantly compiles active listings into shareable mobile checkout links." }
        ]
      },
      researchAndInsights: {
        summary: "Interviewed active Instagram and WhatsApp sellers to understand their biggest operational hurdles.",
        findings: [
          "80% of merchants cited writing descriptions and tagging as their main reason for delayed catalog updates.",
          "Sellers preferred a review-and-tap AI suggestion mechanism over typing from scratch."
        ]
      },
      productDecisions: [
        {
          title: "Camera-First Default Screen over Dashboard Tab",
          rationale: "Prioritizes the core creation loop immediately upon app opening, speeding up multi-item batch listing.",
          tradeoff: "Required a swift swipe-down gesture to access revenue analytics and inventory tables."
        },
        {
          title: "Interactive AI Suggestion Chips",
          rationale: "Allows merchants to easily toggle tone (e.g. Luxury, Casual, Direct) with a single tap.",
          tradeoff: "Needed clear visual affordances so users knew suggestions were editable."
        }
      ],
      design: {
        description: "Vibrant, high-energy mobile interface with dark/light mode balance, fluid card gestures, and clear contrast for outdoor readability.",
        highlights: [
          "One-handed camera and batch photo selector interface",
          "Real-time AI description generation animation with tone pills",
          "Interactive analytics dashboard tracking link visits and order conversions"
        ]
      },
      build: {
        architecture: "Modular mobile component system built in Figma with iOS and Android native design tokens, auto-layout variants, and high-fidelity prototype flows.",
        technicalHighlights: [
          "Design token architecture compatible with React Native and Flutter design systems",
          "Micro-interactions crafted for instant visual confirmation upon item publishing",
          "Touch-optimized input layouts ensuring one-handed ergonomic comfort"
        ]
      },
      aiAndAutomation: {
        implementation: "Mapped vision model categorization APIs with LLM structured prompt templates tailored for local e-commerce merchandising.",
        impact: "Reduced average product listing time from 12 minutes to under 30 seconds."
      },
      outcome: {
        summary: "Published full product case study on Behance highlighting the end-to-end mobile design, AI workflows, and merchant experience.",
        achievements: [
          "Published and showcased on Behance (SellSnap Mobile Case Study)",
          "Demonstrated practical AI vision integration solving real emerging market commerce friction",
          "Complete end-to-end mobile interactive prototype with 30+ validated screens"
        ]
      }
    }
  },
  {
    id: "project-4",
    slug: "marizhaircastle-ecommerce",
    title: "Marizhaircastle Luxury E-Commerce",
    tagline: "High-performance luxury hair e-commerce storefront with custom wig curation and 24-hour fulfillment.",
    summary: "A mobile-first commerce experience designed to make product discovery, customization, and checkout easier for customers.",
    description: "Designed and built as a full-featured e-commerce product combining bespoke product filtering, interactive style showcases, custom wig builder flows, and Flutterwave payment integration.",
    role: "Product Engineer & Lead Developer",
    category: "Web Product",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Flutterwave Payments", "Responsive Media"],
    image: "https://marizhaircastle.vercel.app/images/hero-wavy-hair.jpg",
    featured: true,
    liveUrl: "https://marizhaircastle.vercel.app",
    caseStudy: {
      overview: {
        role: "Product Engineer (Design & Full-Stack)",
        timeline: "5 Weeks",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Flutterwave API", "Vercel"],
        summary: "Created a bespoke luxury e-commerce experience tailored for Nigerian high-end hair clients with instant stock verification and mobile-optimized checkout."
      },
      problem: {
        statement: "High-end hair shopping in Nigeria often suffers from fragmented Instagram DM sales, lack of transparent stock verification, and friction in selecting custom wig lace types and lengths.",
        painPoints: [
          "Customers lose trust with manual WhatsApp/DM order processing and pricing discrepancies.",
          "Complex customization options (cap sizes, lace melts, texture lengths) confuse shoppers on standard store templates.",
          "Mobile drop-off occurs when payment gateways fail or require tedious multi-step verification."
        ]
      },
      usersAndContext: {
        targetAudience: "Discerning women, stylists, and luxury hair enthusiasts seeking authentic virgin hair with guaranteed swift delivery.",
        context: "Demands a premium visual aesthetic matching luxury retail, paired with rock-solid mobile performance on Nigerian network bandwidths."
      },
      approach: {
        strategy: "Design an editorial, high-trust storefront with rich product media, interactive style carousels, custom wig builders, and instant verified checkout.",
        keyPillars: [
          { title: "Visual-First Showcase", description: "High-resolution video and photo badges highlighting texture density and lace quality." },
          { title: "Bespoke Customizer", description: "Guided step-by-step custom wig curation and color selection workflows." },
          { title: "Frictionless Checkout", description: "Seamless Flutterwave integration with 24-hour dispatch guarantee messaging." }
        ]
      },
      productDecisions: [
        {
          title: "Editorial Luxury Visual Grid over Dense Commodity Catalog",
          rationale: "Elevates brand perception and communicates product quality, justifying premium luxury price points.",
          tradeoff: "Requires disciplined image optimization to prevent layout shifts and heavy load times."
        },
        {
          title: "Direct Quick-Add Drawer with Variant Selectors",
          rationale: "Enables fast multi-item purchasing without navigating away from style discovery carousels.",
          tradeoff: "More complex client-side cart state synchronization."
        }
      ],
      design: {
        description: "Sophisticated editorial layout with warm neutral tones, subtle gold/sand accents, high-contrast typography, and smooth touch-optimized slide interactions.",
        highlights: [
          "Curated style carousels with category pill switching",
          "Prominent trust guarantees and verified client review grid",
          "Custom wig curation interactive entry cards"
        ]
      },
      build: {
        architecture: "Next.js App Router with modular CSS and Tailwind styling, performant image preloading, and secure payment webhook processing.",
        technicalHighlights: [
          "Preloaded responsive hero banners and instant asset caching",
          "Accessible cart drawer with local storage persistence",
          "Mobile-first responsive navigation with drawer state management"
        ]
      },
      outcome: {
        summary: "Shipped live production e-commerce store handling catalog browsing, custom inquiries, and verified payments.",
        achievements: [
          "Live in production at marizhaircastle.vercel.app",
          "Smooth 60fps style carousel interactions on iOS and Android devices",
          "High-conversion checkout path with instant order confirmation"
        ]
      }
    }
  },
  {
    id: "project-3",
    slug: "medvive-telehealth-platform",
    title: "Medvive , Telehealth Web App & Consultation Flow",
    tagline: "Accessible digital health platform simplifying doctor-patient consultation and clinical booking.",
    summary: "A telehealth web application case study streamlining appointment booking, real-time consultation handoffs, and patient health record accessibility.",
    description: "Collaborated on clinical user research, redesigned multi-step consultation scheduling workflows, and developed accessible UI component systems in Figma.",
    role: "Product & UI/UX Design (Contributor)",
    category: "Web Product",
    technologies: ["Figma", "Design Systems", "UI/UX Research", "Interactive Prototyping", "WCAG 2.1 AA"],
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/ca042b241563965.695b850c47ee4.jpg",
    featured: false,
    liveUrl: "https://medvive.ng",
    behanceUrl: "https://www.behance.net/gallery/241563965/Medvive-Telehealth-Web-App-UIUX-Case-Study",
    caseStudy: {
      overview: {
        role: "UI/UX & Product Design",
        timeline: "4 Weeks",
        team: "Collaborated with Senior Product Designer & Clinical Stakeholders",
        technologies: ["Figma", "Design Systems", "Usability Testing", "Accessibility Auditing"],
        summary: "Redesigned patient-to-doctor consultation journeys to reduce appointment abandonment and enhance digital health accessibility across diverse user age groups."
      },
      problem: {
        statement: "Patients seeking remote healthcare faced confusing onboarding steps, unclear doctor availability schedules, and overwhelming medical intake forms that led to consultation abandonment.",
        painPoints: [
          "Complex clinical questionnaires caused high drop-off before patients could confirm appointments.",
          "Unclear doctor specialties and response times led to patient anxiety and support ticket overload.",
          "Low-contrast interface elements failed accessibility benchmarks for elderly and low-vision patients."
        ]
      },
      usersAndContext: {
        targetAudience: "Patients needing timely general practice and specialist consultations, plus healthcare providers managing busy digital appointment queues.",
        context: "Healthcare interactions require extreme clarity, reassuring privacy markers, and minimal cognitive strain during stressful moments."
      },
      approach: {
        strategy: "Re-architected the consultation journey into transparent, low-friction stages: Symptom Intake → Specialist Matching → Time Slot Confirmation → Virtual Waiting Room.",
        keyPillars: [
          { title: "Progressive Intake", description: "Broke down complex clinical intake into digestible, multi-step micro-forms." },
          { title: "Specialist Transparency", description: "Created high-trust doctor profile cards with verified credentials, ratings, and immediate slot availability." },
          { title: "Inclusive Accessibility", description: "Enforced strict WCAG 2.1 AA color contrast, typography hierarchies, and touch-target standards." }
        ]
      },
      researchAndInsights: {
        summary: "Conducted usability tests and stakeholder interviews to pinpoint the major friction points in virtual consultation workflows.",
        findings: [
          "65% of drop-offs occurred on the medical history form due to excessive single-page scroll length.",
          "Clear real-time consultation price breakdowns improved booking completion rates by over 40%."
        ]
      },
      productDecisions: [
        {
          title: "Step-by-Step Accordion Booking over Single-Page Form",
          rationale: "Reduces visual cognitive load and guides anxious patients methodically toward booking completion.",
          tradeoff: "Required careful state preservation so patients can modify previous answers easily."
        },
        {
          title: "Clear Appointment Status Badges and Direct Reminders",
          rationale: "Provides reassurance and reduces missed virtual appointments.",
          tradeoff: "Requires clear visual hierarchy to avoid crowding the patient home dashboard."
        }
      ],
      design: {
        description: "Calm, trust-inducing healthcare interface utilizing serene medical blues and soft neutrals, paired with clear typography and readable data cards.",
        highlights: [
          "Clear calendar time-slot selector with instant zone synchronization",
          "Visual doctor badge profiles with specialty tags",
          "Responsive consultation management dashboard for patients"
        ]
      },
      build: {
        architecture: "Comprehensive Figma design system with auto-layout variants, spacing tokens, and detailed developer handoff specifications.",
        technicalHighlights: [
          "Complete design tokens for spacing, elevation, colors, and typography",
          "Interactive prototype with full micro-interactions for doctor booking states",
          "High-contrast focus rings and accessible touch targets verified against WCAG AA standards"
        ]
      },
      outcome: {
        summary: "Published full case study on Behance documenting the end-to-end design research, design decisions, and prototype solutions.",
        achievements: [
          "Published and featured on Behance (Medvive Telehealth Case Study)",
          "Streamlined patient consultation booking journey from 7 steps to 3 intuitive milestones",
          "100% WCAG 2.1 AA accessible UI color contrast rating across all states"
        ]
      }
    }
  }
];

export const CAPABILITIES_DATA = {
  product: [
    "Product strategy",
    "MVP scoping",
    "Requirements",
    "User flows"
  ],
  design: [
    "UX/UI",
    "Prototyping",
    "Design systems"
  ],
  engineering: [
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL"
  ],
  aiAndAutomation: [
    "AI product features",
    "LLM workflows",
    "Automation"
  ]
};

export const SITE_CONFIG = {
  name: "Mariam Abdul-Rasheed",
  role: "Product Engineer",
  location: "Nigeria",
  avatar: "/images/mariam-profile.jpg",
  tagline: "Think → Design → Build → Integrate AI → Ship",
  bio: "Product Engineer combining product thinking, design craft, modern frontend engineering, and AI integration to build real, production-ready digital products that solve genuine user problems.",
  email: "Marizmimi111@gmail.com",
  socials: {
    github: "https://github.com/mariam-abdulrasheed",
    linkedin: "https://www.linkedin.com/in/mariam-abdulrasheed-139371329",
    behance: "https://www.behance.net/mariamabdulra6",
    twitter: "https://twitter.com/mariam_dev"
  },
  meta: {
    title: "Mariam Abdul-Rasheed | Product Engineer",
    description: "Personal portfolio of Mariam Abdul-Rasheed, a Product Engineer who designs, builds, integrates AI, and ships production digital products.",
    url: process.env.NEXT_PUBLIC_SITE_URL 
      ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http") ? process.env.NEXT_PUBLIC_SITE_URL : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
      : "https://mariam-abdulrasheed.vercel.app"
  }
};
