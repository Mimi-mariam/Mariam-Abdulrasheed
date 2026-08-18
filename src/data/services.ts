export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  exampleProjectSlug?: string;
  exampleProjectName?: string;
  badge?: string;
}

export interface BuildCapability {
  title: string;
  description: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface PricingTier {
  id: string;
  serviceName: string;
  startingPrice: string;
  currency: string;
  timelineEstimate: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "websites-digital-experiences",
    number: "01",
    title: "Websites & Digital Experiences",
    tagline: "High-performance marketing sites, web apps, and digital experiences.",
    description: "Professional websites built around your business goals.",
    bestFor: "Businesses · Startups · Personal Brands",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Portfolio websites"
    ],
    exampleProjectSlug: "medvive-telehealth-platform",
    exampleProjectName: "Medvive Platform"
  },
  {
    id: "ecommerce-storefronts",
    number: "02",
    title: "E-Commerce",
    tagline: "Modern, high-converting online storefronts and checkout flows.",
    description: "Complete online stores built to help your products sell.",
    bestFor: "Product businesses · Online stores · Growing brands",
    deliverables: [
      "Product catalogs",
      "Product pages",
      "Cart & checkout"
    ],
    exampleProjectSlug: "marizhaircastle-ecommerce",
    exampleProjectName: "Marizhaircastle Luxury E-Commerce",
    badge: "Case Study Available"
  },
  {
    id: "ai-business-automation",
    number: "03",
    title: "AI & Business Automation",
    tagline: "Custom AI workflows and integrations to scale operations.",
    description:
      "AI-powered workflows that reduce repetitive work.",
    bestFor: "Businesses · Startups · Scaling Teams",
    deliverables: [
      "AI customer support",
      "Lead & ticket automation",
      "Automated responses & workflows"
    ],
    exampleProjectSlug: "planora-ai-content-planner",
    exampleProjectName: "Planora AI SaaS",
    badge: "Live AI Product"
  }
];

export const DIFFERENTIATOR_POINTS = [
  {
    phase: "01",
    label: "IDEA",
    title: "Product Strategy & Scoping",
    description: "Deep dive into business logic, user pain points, and product mechanics before drawing a single wireframe."
  },
  {
    phase: "02",
    label: "DESIGN",
    title: "UX & Interface Craft",
    description: "Creating accessible, intuitive Figma designs and design systems informed by code feasibility."
  },
  {
    phase: "03",
    label: "BUILD",
    title: "Full-Stack Engineering",
    description: "Writing clean, scalable Next.js and TypeScript applications without handoff delays or lost fidelity."
  },
  {
    phase: "04",
    label: "LAUNCH",
    title: "AI Integration & Deployment",
    description: "Connecting AI workflows, payment gateways, testing across viewports, and shipping to production."
  }
];

export const BUILD_CAPABILITIES: BuildCapability[] = [
  {
    title: "Business Websites",
    description: "Authoritative web flagships designed to position your brand as a market leader.",
    category: "Web Flagships"
  },
  {
    title: "E-Commerce Stores",
    description: "High-converting online stores with curated catalogs, instant payments, and order tracking.",
    category: "Commerce"
  },
  {
    title: "SaaS Products",
    description: "Full-cycle software products with auth, subscription flows, and interactive workspaces.",
    category: "Software"
  },
  {
    title: "Operational Dashboards",
    description: "Data-dense management dashboards providing clear visibility into business metrics.",
    category: "Internal Tools"
  },
  {
    title: "Customer Portals",
    description: "Secure, client-facing hubs for status updates, document uploads, and self-serve workflows.",
    category: "Client Experience"
  },
  {
    title: "AI-Powered Tools",
    description: "Generative AI assistants, automated content pipelines, and structured prompt toolsets.",
    category: "AI & LLMs"
  },
  {
    title: "Internal Business Tools",
    description: "Custom admin backends and team utilities replacing spreadsheets and manual entry.",
    category: "Operations"
  },
  {
    title: "Automation Workflows",
    description: "Seamless webhook integrations, automated notifications, and multi-service pipelines.",
    category: "Automation"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We understand the business, users, goals, and requirements.",
    detail: "We align on your business model, core audience, target milestones, and must-have functionality to establish a crystal-clear product roadmap."
  },
  {
    step: "02",
    title: "Design",
    description: "I map the experience and create the interface.",
    detail: "I craft the information architecture, user flows, interactive prototypes, and design system in Figma,grounded from day one in engineering reality."
  },
  {
    step: "03",
    title: "Build",
    description: "I turn the approved design into a functional product.",
    detail: "I implement clean, scalable code in Next.js, React, and TypeScript with responsive layouts, optimal performance, and robust state management."
  },
  {
    step: "04",
    title: "Launch",
    description: "We test, deploy, and get it ready for real users.",
    detail: "We perform cross-browser and accessibility audits, hook up production domains and integrations, and deploy to live infrastructure."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-business-websites",
    serviceName: "Business Websites",
    startingPrice: "₦200k+",
    currency: "NGN",
    timelineEstimate: "3-4 days",
    description: "Tailored for businesses, consultants, and personal brands seeking a distinctive, high-converting web presence.",
    features: [
      "Custom responsive design (No templates)",
      "Multi-page architecture or high-impact landing page",
      "Contact & lead qualification forms",
      "SEO setup & fast loading optimization",
      "WCAG 2.1 AA accessibility compliance",
      "Production deployment on Vercel"
    ]
  },
  {
    id: "tier-ecommerce",
    serviceName: "E-commerce",
    startingPrice: "₦400k+",
    currency: "NGN",
    timelineEstimate: "3-5 days",
    description: "Complete online storefront tailored to showcase products, capture orders, and accept local/international payments.",
    features: [
      "Full product catalog with filtering & search",
      "Interactive product detail & variant selection",
      "Cart & frictionless checkout flow",
      "Payment gateway integration (Paystack / Flutterwave)",
      "Order notification & customer inquiry workflow",
      "Mobile-first responsive optimization"
    ],
    popular: true
  },
  {
    id: "tier-ai-automation",
    serviceName: "AI Automation",
    startingPrice: "₦500k+",
    currency: "NGN",
    timelineEstimate: "6-8 days",
    description: "Custom AI utilities and workflow automation to eliminate repetitive tasks and streamline operations.",
    features: [
      "Automated customer support & FAQ assistants",
      "Smart lead scoring & inquiry triage",
      "Internal AI tools & administrative utilities",
      "Structured data extraction & prompt engineering",
      "Workflow integration with third-party tools",
      "Security & guardrails setup"
    ]
  }
];
