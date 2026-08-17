# AGENTS.md

## Project Overview

You are building the personal portfolio of **Mariam Abdul-Rasheed**, a **Product Engineer** based in Nigeria.

The portfolio's primary purpose is to position Mariam as a Product Engineer who can:

**Think → Design → Build → Integrate AI → Ship**

The portfolio should feel like a **real, production-quality product**, not a generic portfolio template or traditional UI/UX portfolio.

---

## Core Identity

**Primary identity:** Product Engineer

Design, AI, and automation are supporting capabilities.

Do not position Mariam primarily as:

* UI/UX Designer
* Design Engineer
* Visual Designer

The portfolio should demonstrate the combination of:

* Product thinking
* Design
* Engineering
* AI
* Automation

---

## Product Goals

The portfolio must:

* Clearly communicate the Product Engineer positioning.
* Showcase selected projects through strong visuals and concise case studies.
* Demonstrate product thinking and technical implementation.
* Provide live product links where available.
* Provide GitHub and Figma links where available.
* Be responsive, accessible, performant, and production-ready.
* Feel distinctive rather than template-based.
* Demonstrate the integration of AI and automation honestly and specifically.

---

## AI & Automation

Show AI and automation as real capabilities, not gimmicks. Appropriate ways the portfolio can communicate this:

* Projects that ship AI features (e.g., a product tool with an AI-powered workflow).
* Automations Mariam built to speed up design or engineering work.
* Brief, honest mention of an AI-assisted process inside a case study.

Describe AI concretely per project. Avoid generic AI buzzwords and unsupported claims.

---

## Site Structure

Primary sections:

* Home
* Work / Projects
* Individual Project Case Studies
* About
* Contact
* Resume

Navigation must be clear, responsive, and easy to use.

### Resume

A Resume page plus a downloadable PDF version, generated from the same source content.

### Contact

Keep it simple: a Contact section or page with a clear email link and CTA. Do not build a form backend unless the user requests one.

---

## Project Structure

Every project should communicate:

**Problem → Approach → Design → Build → AI/Technology → Outcome**

Where relevant, projects should support:

* Case Study
* Live Product
* GitHub
* Figma

Only render links that actually exist.

Project content should be separated from presentation components where practical.

Project data should support:

```text
title
summary
description
role
technologies
image
caseStudy
liveUrl
githubUrl
figmaUrl
```

Adding a new project should not require rewriting reusable UI components.

---

## Design Direction

The visual direction is:

* Premium
* Modern
* Minimal
* Editorial
* Clean
* Confident
* Human

Prioritize:

* Strong typography
* Clear visual hierarchy
* Generous whitespace
* Consistent grids
* High-quality project visuals
* Clear CTAs
* Strong responsive layouts

Do not use generic portfolio aesthetics, excessive gradients, unnecessary effects, or visual clutter.

### Theme

Light theme by default: a near-white neutral background, near-black text, and the orange accent. Do not add dark mode unless the user requests it.

### Typography

* Display headings: an editorial serif (e.g., Newsreader or Instrument Serif).
* Body and UI: a clean sans (e.g., Inter or Instrument Sans).
* Use a small, consistent type scale with clear hierarchy.

---

## Brand Color

**Primary brand accent:** Orange

Use orange strategically for:

* Primary CTAs
* Links
* Active states
* Highlights
* Important interactions

Support the orange accent with a neutral color system.

Do not allow orange to dominate the interface.

---

## Design System

Maintain reusable design tokens and components for:

* Colors
* Typography
* Spacing
* Border radius
* Buttons
* Cards
* Tags
* Navigation
* Section headings
* Links
* Focus states
* Interactive states

Do not create one-off styles when an existing design-system pattern can be reused.

---

## Animation

Use **Framer Motion only when animation genuinely improves the experience**.

Appropriate uses include:

* Page transitions
* Scroll reveals
* Project interactions
* Image reveals
* Micro-interactions

Animations must be:

* Subtle
* Purposeful
* Fast
* Performant
* Accessible

Support reduced-motion preferences.

Never add animation purely for decoration.

---

## Technical Stack

Use:

* Next.js (App Router) + React
* TypeScript
* Tailwind CSS
* Framer Motion only where it genuinely improves the experience
* npm as the package manager
* Vercel for deployment

Do not introduce unnecessary frameworks, libraries, or dependencies.

Prioritize simple, reusable, maintainable implementation.

---

## Development Commands

Use npm. Verify all work with these before finishing:

* `npm install` — install dependencies
* `npm run dev` — local development server
* `npm run lint` — lint check (must pass)
* `npm run build` — production build (must succeed)
* `npm run start` — serve the production build locally

No unit-test framework is used by default. Verify with `npm run lint`, `npm run build`, and manual checks of every route and interaction. Add tests only if the user requests them.

---

## Folder Structure

* `src/app/` — App Router routes and pages
* `src/components/` — reusable UI components
* `src/data/` — site and project content
* `public/images/` — optimized project images

---

## Component Architecture

Build reusable components for repeated UI patterns.

Prefer components for:

* Navigation
* Buttons
* Project cards
* Tags
* Section headings
* Case-study sections
* Links
* Footer
* Interactive elements

Keep content/data separate from presentation where practical.

Avoid unnecessary duplication.

---

## Responsive Design

The portfolio must work across:

* Mobile
* Tablet
* Desktop
* Large desktop

Do not simply shrink desktop layouts.

Intentionally design responsive behavior for:

* Navigation
* Typography
* Project grids
* Images
* Buttons
* Case studies
* Spacing
* Touch interactions

---

## Accessibility

Use accessibility from the beginning.

Requirements:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible buttons and links
* Appropriate color contrast
* Descriptive image alt text
* Responsive typography
* Touch-friendly controls
* Reduced-motion support

Never rely on color alone to communicate information.

---

## SEO

Implement:

* Page titles
* Meta descriptions
* Correct heading hierarchy
* Semantic HTML
* Open Graph metadata
* Favicon
* Sitemap
* Robots.txt
* Descriptive URLs
* Project-specific metadata where appropriate

Optimize social previews for platforms such as LinkedIn.

---

## Performance

Prioritize:

* Fast loading
* Optimized images
* Minimal dependencies
* Efficient animations
* Responsive images
* Lazy loading where appropriate
* Minimal unnecessary JavaScript

Never sacrifice performance for visual effects.

---

## Content Rules

Use a:

* Confident
* Clear
* Modern
* Human
* Direct
* Product-focused

tone.

Keep content concise and specific.

Avoid:

* Corporate language
* Clichés
* Generic AI buzzwords
* Exaggerated claims
* Unsupported metrics

Never invent:

* Projects
* Clients
* Experience
* Skills
* Metrics
* Testimonials
* Achievements

Use only information provided by the user.

### Getting Real Content

Before building content, ask the user for their real projects, role, bio, experience, links, and contact details, then store it in `src/data/`.

Placeholder copy may be used temporarily for layout only, must be clearly marked, and must be replaced with real content before finishing.

---

## Error Handling

The portfolio must remain usable when external resources fail.

Handle gracefully:

* Broken links
* Missing images
* Missing project data
* Unavailable live projects
* Failed external resources
* Unexpected screen sizes

A failed external resource must not break the entire page.

If a live project is unavailable, keep its case study accessible.

Never expose sensitive technical information through errors.

---

## Development Workflow

Always follow:

**Inspect → Plan → Build → Test → Review → Refine**

### Before coding

1. Inspect the existing project structure (or scaffold Next.js if absent).
2. Understand the current implementation.
3. Establish or review the design system.
4. Establish reusable components.
5. Plan the page architecture.

### Build order

1. Home page: hero, positioning statement, selected work.
2. Work / Projects listing.
3. Project case study page(s).
4. About.
5. Contact.
6. Resume.
7. SEO metadata, sitemap, robots.txt.

### During development

* Reuse existing components.
* Avoid unnecessary rewrites.
* Keep changes focused.
* Maintain consistent patterns.
* Avoid unnecessary dependencies.

### After development

* Check for errors.
* Test navigation.
* Test project links.
* Test responsive behavior.
* Review accessibility.
* Review visual consistency.
* Fix issues before moving forward.

Do not make large architectural changes without a clear reason.

---

## Quality Standards

Before considering a feature complete, verify:

### Functionality

* Pages, navigation, project links, external links, and contact all work.

### Visual

* Layouts, typography, orange usage, and images are consistent; mobile layouts are polished.

### Technical

* No console errors, no broken routes, no unnecessary dependencies; `npm run lint` and `npm run build` succeed.

### Accessibility

* Keyboard navigation, focus states, contrast, alt text, and reduced motion all pass per the Accessibility section.

### SEO

* Metadata, Open Graph, sitemap, robots.txt, and descriptive URLs are configured per the SEO section.

---

## Decision-Making Principle

When choosing between implementation options, prioritize:

1. User experience
2. Product clarity
3. Accessibility
4. Performance
5. Maintainability
6. Visual polish
7. Technical simplicity

Do not choose complexity simply because it is technically impressive.

---

## Final Product Principle

Every design and technical decision should strengthen one central message:

> **Mariam is a Product Engineer who can think, design, build, integrate AI, and ship real products.**
