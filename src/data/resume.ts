export interface ResumeExperience {
  role: string;
  company: string;
  location?: string;
  period: string;
  type?: string;
  achievements: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  year: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    behance: string;
    portfolio: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: ResumeExperience[];
  certifications: ResumeCertification[];
  education: ResumeEducation[];
}

export const RESUME_DATA: ResumeData = {
  name: "Mariam Abdul-Rasheed",
  title: "Product Engineer | UI/UX Design Engineer | AI Automation Builder",
  location: "Nigeria",
  summary: "UI/UX Design Engineer and Product Engineer with experience designing, building, and launching user-centered digital products. Skilled in UX design, product strategy, AI-assisted development, and workflow automation. Experienced in transforming ideas into functional products through research, prototyping, design systems, and rapid MVP development. Passionate about solving real-world problems through design, technology, and AI-powered solutions.",
  contact: {
    email: "Marizmimi111@gmail.com",
    phone: "+2349045464299",
    github: "https://github.com/mariam-abdulrasheed",
    linkedin: "https://www.linkedin.com/in/mariam-abdulrasheed-139371329",
    behance: "https://www.behance.net/mariamabdulra6",
    portfolio: "https://mariam-abdulrasheed.vercel.app"
  },
  skills: [
    {
      category: "UX & Product Strategy",
      items: [
        "Product Thinking",
        "User Journey Mapping",
        "Usability Testing",
        "Accessibility Design (WCAG)",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Competitor Analysis",
        "Rapid MVP Development"
      ]
    },
    {
      category: "Engineering & Tools",
      items: [
        "Figma",
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "PostgreSQL",
        "Vercel",
        "GitHub"
      ]
    },
    {
      category: "AI & Automation",
      items: [
        "AI-Assisted Design",
        "Prompt Engineering",
        "Workflow Automation",
        "AI Tool Integration",
        "Product Scoping"
      ]
    }
  ],
  experience: [
    {
      role: "Product Design Intern",
      company: "Terntribe",
      location: "Remote",
      period: "January 2025 — June 2025",
      type: "Mental Health Accessibility Platform",
      achievements: [
        "Collaborated with cross-functional teams to design a web platform addressing mental health accessibility challenges.",
        "Conducted user research and usability testing to identify pain points and improve user experience.",
        "Designed user flows, wireframes, and interactive prototypes using Figma.",
        "Developed accessible experiences aligned with WCAG standards.",
        "Created design documentation and collaborated closely with developers during implementation."
      ]
    },
    {
      role: "Product Designer & AI Workflow Architect",
      company: "Trams (Harplify — AI-Powered Music Marketing)",
      location: "Remote",
      period: "June 2025 — January 2026",
      type: "AI Music Marketing SaaS",
      achievements: [
        "Designed end-to-end onboarding and campaign management experiences for artists, managers, curators, and influencers.",
        "Created role-based user journeys and AI-assisted workflows.",
        "Developed dashboard experiences, campaign builders, and AI-powered marketing tools."
      ]
    },
    {
      role: "UI/UX & Product Design Contributor",
      company: "MedVive",
      location: "Remote",
      period: "June 2025 — August 2025",
      type: "Healthcare Appointment & Access Platform",
      achievements: [
        "Conducted UX research and developed user-centered healthcare experiences.",
        "Designed accessible appointment booking and patient interaction workflows."
      ]
    }
  ],
  certifications: [
    {
      title: "Google UX Design Certificate",
      issuer: "Google",
      year: "2023"
    },
    {
      title: "Beginner and Advanced UI/UX Bootcamp",
      issuer: "Dev and Design",
      year: "2024"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) in Accounting",
      institution: "Miva Open University",
      location: "Yaba, Lagos",
      period: "2025 — 2028",
      details: "Pursuing degree with focus on financial systems, analytical modeling, and digital commerce."
    },
    {
      degree: "Diploma in Accounting",
      institution: "Federal Polytechnic Ede",
      location: "Ede, Osun State",
      period: "2015 — 2018",
      details: "Completed National Diploma program with foundational training in accounting and administration."
    }
  ]
};

