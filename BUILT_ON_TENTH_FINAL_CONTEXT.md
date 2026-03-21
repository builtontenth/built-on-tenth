# BUILT ON TENTH - AI COFOUNDER CONTEXT

Last Updated: March 21, 2026  
Repo Source of Truth: `/Users/tanvir/Documents/GitHub/built-on-tenth`

## How To Use This Document

Upload this file at the start of a new chat when you want continuity.

Treat this as the operating context for Built on Tenth:
- founder context
- brand voice
- business model
- current site structure
- article workflow
- service positioning
- SEO and distribution context
- working rules for code and copy

If this file and the repo ever conflict, the repo wins.

## Non-Negotiable Working Rules

- Only touch files that need changing
- Read files before editing
- Never regenerate the whole project
- Keep Astro structure intact
- Avoid risky refactors unless explicitly asked
- Use contractor language, not agency language
- No em dashes in user-facing copy
- No arrow symbols in user-facing copy
- Numbers should be concrete and usually in dollars
- Prefer fewer moving parts over clever systems
- If a shared template solves it, prefer that over duplication
- After code changes, run `npm run build`
- Fix build errors before finishing

Protected unless Tanvir explicitly asks:
- GTM snippet
- font imports
- `robots.txt`
- sitemap routes and sitemap behavior
- Brevo API integration
- tool calculation logic
- `src/styles/global.css`

## Business Snapshot

Name: Built on Tenth  
Website: [https://www.builtontenth.com](https://www.builtontenth.com)  
Primary email: `hello@builtontenth.com`

Category:

Revenue intelligence for home service companies.

Positioning:

We study how the most profitable HVAC, roofing, and plumbing companies grow. We publish everything we find.

What Built on Tenth is not:
- not an agency
- not a coaching program
- not a lead gen service

Core differentiator:

Built on Tenth has no financial incentive to recommend more ad spend. The job is to show what is working, what is leaking money, and what should be fixed first.

## Founder Context

Founder: Tanvir Hossain  
Location: Bangladesh  
Market served: United States  
Working style: async only  
Preferred communication: writing only  
Technical level: non-technical founder using AI tools to execute  
Operating style: lean, low-overhead, low-complexity systems

Strengths:
- writing
- research
- analysis
- synthesis

Important working notes:
- Tanvir has limited daily time
- do not recommend systems that require heavy maintenance unless the upside is obvious
- do not push him into personal-brand posting, calls, or video unless he asks
- default to calm, confidence-building collaboration

## Revenue Model And ICP

Funnel:

Content -> SEO -> Free tools -> Newsletter -> Paid services

Ideal customer:
- HVAC, roofing, or plumbing owner
- usually doing $1M to $5M per year
- usually 5 to 30 employees
- already spending on marketing
- cannot clearly connect spend to booked jobs or revenue
- skeptical because they have been burned by agencies before

Common pains:
- spending $5K to $15K per month without clarity
- missing calls
- weak booking rate
- weak follow-up
- poor measurement
- agency reports that avoid the real number

## Services And Pricing

### Revenue Leak Audit

Price: $750

Positioning:
- 7-day written analysis
- every finding translated into dollars
- no calls required

### Growth System Blueprint

Price: $3,000

Positioning:
- audit
- phone scripts
- follow-up sequences
- dashboard structure
- 90-day action plan

### 90-Day Growth Advisory

Price: $7,500

Positioning:
- audit
- blueprint
- 90 days of written performance guidance

Locked service language:
- always say `90 days`, never `12 weeks`
- lead with outcome, not process
- no calls required is a differentiator
- do not sell page counts

## Brand Voice

Core instruction:

Write like a contractor who figured out growth systems. Not a marketer.

The voice should feel:
- direct
- skeptical
- specific
- useful
- operator-minded
- numbers-first

Writing test:

Would a contractor read this on their phone at 6am and immediately understand it?

Use language like this:
- calls
- booked jobs
- average ticket
- answer rate
- close rate
- booking rate
- tire kickers
- price shoppers
- busy season
- slow season
- dispatch board
- CSR
- map pack
- review velocity
- replacement vs repair
- storm work vs retail
- service plans
- maintenance agreements
- get off the truck

Avoid language like this:
- optimize your funnel
- customer acquisition cost
- conversion rate optimization
- inbound methodology
- growth hacking
- synergy
- scalable framework
- leverage as a verb
- AOV

Translate jargon into contractor language:
- customer acquisition cost = what it costs you to get a new customer
- conversion rate optimization = turning more calls into booked jobs
- AOV = average ticket

Copy rules:
- lead with numbers and dollar amounts
- use short sentences
- use short paragraphs
- translate percentages into dollars whenever possible
- avoid generic marketing language
- avoid hype
- write for skeptical owners

## Design System

The design source of truth is:
- `src/styles/global.css`

High-level visual direction:
- dark
- editorial
- research-first
- technical
- independent analyst feel

The site should not feel like:
- an agency site
- a SaaS template
- generic performance marketing design

Core tokens and direction:
- background: near-black
- text: cream
- accent: teal
- positive: green
- negative: red
- headlines: DM Serif Display
- body: IBM Plex Sans
- UI labels and buttons: IBM Plex Mono

Historical design tokens:
- `--bg: #090C0B`
- `--bg2: #0E1412`
- `--bg3: #141C18`
- `--bg4: #1A2420`
- `--ink: #E2DDD0`
- `--ink2: rgba(226,221,208,0.88)`
- `--ink3: rgba(226,221,208,0.62)`
- `--teal: #00C49A`
- `--pos: #22D37A`
- `--neg: #F04040`

## Tech Stack

Framework: Astro 4 static site  
Hosting: Vercel  
Repo: GitHub  
Forms: server-side endpoints inside Astro  
Analytics: GA4 and GTM  
Email capture: Brevo  
Search: Google Search Console, sitemap submitted  
Fonts: Google Fonts via site code

Current `package.json` scripts:
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run indexnow`

Current Astro config:
- `site: https://www.builtontenth.com`
- `output: static`

Important implementation rules:
- no TypeScript casts inside inline client scripts
- shared templates are preferred to duplicated page logic
- dynamically generated elements need global-safe styling if client JS injects them

## Current Site Architecture

Core public pages:
- `/` -> `src/pages/index.astro`
- `/insights` -> `src/pages/insights/index.astro`
- `/insights/[slug]` -> `src/pages/insights/[slug].astro`
- `/tools` -> `src/pages/tools/index.astro`
- `/services` -> `src/pages/services.astro`
- `/about` -> `src/pages/about.astro`
- `/newsletter` -> `src/pages/newsletter.astro`
- `/apply` -> `src/pages/apply.astro`

Tool pages:
- `/tools/marketing-calculator`
- `/tools/phone-calculator`
- `/tools/lead-grader`
- `/tools/website-audit`
- `/tools/capacity-planner`

Internal-only tooling in repo:
- `src/pages/tools/audit-report-builder.astro`

API endpoints:
- `src/pages/api/subscribe.ts`
- `src/pages/api/apply.ts`

SEO routes:
- `src/pages/sitemap.xml.ts`
- `src/pages/sitemap-index.xml.ts`

## Content System

Built on Tenth uses Astro Content Collections.

Schema file:
- `src/content/config.ts`

Article files:
- `src/content/blog/*.md`

Article template:
- `src/pages/insights/[slug].astro`

Insights hub:
- `src/pages/insights/index.astro`

Important frontmatter fields currently supported:
- `title`
- `seoTitle`
- `description`
- `metaDescription`
- `pubDate`
- `updatedDate`
- `author`
- `category`
- `trade`
- `heroImage`
- `heroImageAlt`
- `readTime`
- `featured`
- `preview`
- `pills`
- `primaryCtaLabel`
- `primaryCtaHref`
- `secondaryCtaLabel`
- `secondaryCtaHref`
- `seoKeywords`

Current article workflow:
1. Create one markdown file in `src/content/blog/`
2. Fill frontmatter from schema
3. Write the article in markdown
4. Run `npm run build`
5. Push and deploy

The insights index, article routes, and sitemap are generated automatically from the collection.

Markdown conventions:
- use `##` and `###` headings
- use normal markdown tables
- use inline markdown links for citations and internal links
- use a real `heroImage` in frontmatter
- the article template now renders the hero image visibly near the top

## Current Published Article Library

Current article files in repo:
- `are-angi-leads-worth-it-for-roofing-companies`
- `how-hvac-service-agreements-add-200k-annual-revenue`
- `how-many-google-reviews-roofing-company-map-pack`
- `how-much-should-hvac-company-spend-on-marketing-2026`
- `how-offering-financing-closes-more-roofing-jobs`
- `how-to-set-up-google-local-service-ads-hvac`
- `how-to-work-roofing-insurance-claim-job`
- `hvac-cost-per-lead-by-channel-2026`
- `hvac-flat-rate-pricing-undercharging-service-calls`
- `hvac-google-ads-campaign-structure`
- `hvac-marketing-benchmarks-2026-what-top-performers-spend`
- `hvac-revenue-per-truck-benchmark`
- `i-analyzed-a-3m-hvac-company-online-presence`
- `plumbing-company-marketing-playbook`
- `plumbing-google-business-profile-optimization`
- `revenue-per-technician-plumbing-business-scaling`
- `roofing-cost-per-booked-job-by-lead-source`
- `the-follow-up-sequence-that-moved-close-rate-to-40-percent`
- `why-hvac-csrs-are-losing-you-300k-per-year`
- `why-roofing-companies-miss-60-percent-inbound-calls-storm-season`

Current content strategy:
- HVAC cluster is strongest
- Roofing cluster is growing and commercially strong
- Plumbing cluster is still thinner and should keep expanding

## Locked Stats And Messaging

These are the canonical numbers and should stay consistent unless the business intentionally updates them.

- companies in data set: `300+`
- benchmark missed call rate: `32%`
- benchmark answer rate: `68%`
- booking rate on answered calls: `42% average`
- top performers often hit `62% to 70%`
- follow-up on unbooked calls: under `20%`
- owners who cannot connect spend to booked jobs: `67%`
- estimates never followed up: `68%`
- example annual leakage found: `$247K`
- example company size: `$2.3M HVAC company`

Important exception:
- the Apex/Audit demo card may use a different fictional case-specific missed call number
- do not treat that one-off demo as the benchmark stat

## SEO And Distribution Context

Current state:
- canonical host is `https://www.builtontenth.com`
- `robots.txt` points to `https://www.builtontenth.com/sitemap-index.xml`
- sitemap routes are generated from the repo and article collection
- article pages have shared metadata and article schema

Distribution priorities:
- SEO first
- Reddit before Facebook
- newsletter supports trust and repeat traffic

Search Console expectations:
- indexing reports lag behind sitemap changes
- review example URLs before reacting to warning buckets
- redirected URLs, blocked API routes, and alternate canonicals may be normal

## Newsletter Context

The newsletter page exists as:
- `src/pages/newsletter.astro`

Current rule:
- do not show fake issue history
- only publish real sent issues or honest signup value

## Audit Product Context

The $750 Revenue Leak Audit is the most important paid entry offer.

How it should feel:
- written
- specific
- benchmarked
- visual
- proof-backed
- easy for an owner to forward to a team

What the audit should usually include:
- cover page
- company snapshot
- performance scores
- annual leak estimate
- benchmark comparison
- top 5 actions
- screenshot proof
- competitor notes
- next-step CTA

Offline tooling:
- an offline report builder HTML can exist outside the public site
- it should not depend on Astro
- it should support local input, screenshot uploads, and PDF export

## Current Repo Hygiene Rules

This repo should stay source-only.

Generated/local files should not be versioned:
- `node_modules/`
- `dist/`
- `.astro/`
- `.DS_Store`

Internal-only local files can exist in ignored folders if useful.

## What To Prioritize Next

Highest-value work usually falls into one of these:
- publish more high-intent HVAC, roofing, and plumbing articles
- improve internal linking between article clusters
- tighten homepage and article conversion paths
- improve audit delivery tooling and operating systems
- keep site complexity low

## Default Operating Principle

If there is a choice between:
- a simpler system that is stable
- a more flexible system with more moving parts

Choose the simpler stable system unless the upside of complexity is obvious.
