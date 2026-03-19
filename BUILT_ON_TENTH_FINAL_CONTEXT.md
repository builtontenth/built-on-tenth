# BUILT ON TENTH - AI COFOUNDER CONTEXT

Last Updated: March 19, 2026  
Repo Source of Truth: `/Users/tanvir/Documents/GitHub/built-on-tenth`

## HOW TO USE THIS DOCUMENT

Upload this file at the start of any new chat.

Treat it as the working context for Built on Tenth:
- brand voice
- founder context
- business model
- current website structure
- current article workflow
- protected files and working rules

If this file and the repo ever conflict, the repo wins.

## NON-NEGOTIABLE WORKING RULES

- Only touch files that need changing
- Never regenerate the whole project
- Read target files before editing
- Keep Astro structure intact
- Avoid risky refactors unless explicitly asked
- Use contractor language
- No em dashes in user-facing copy
- No arrow symbols in user-facing copy
- After code changes, run `npm run build`
- Fix build errors before finishing
- Prefer fewer moving parts over clever systems
- If a shared template can solve it, prefer that over hand-built duplication

Protected unless Tanvir explicitly asks:
- GTM snippet
- font imports
- `robots.txt`
- `sitemap.xml`
- Brevo API integration
- tool calculation logic
- `src/styles/global.css`

## SECTION 1 - WHO WE ARE

Domain: `builtontenth.com`  
Primary email: `hello@builtontenth.com`  
GitHub repo: `builtontenth/built-on-tenth`  
Main branch: `main`

Category:

Revenue intelligence for home service companies.

Core positioning:

We study how the most profitable HVAC, roofing, and plumbing companies grow. We publish everything we find.

What Built on Tenth is not:
- not an agency
- not a coaching program
- not a lead gen service

Core differentiator:

Built on Tenth has no financial incentive to recommend more ad spend. The point is to show what is working, what is leaking money, and what should be fixed first.

## SECTION 2 - THE FOUNDER

Name: Tanvir Hossain  
Location: Bangladesh  
Market served: United States  
Working style: Async only  
Preferred communication: Writing only  
Budget mindset: Lean, low-overhead, stable systems  
Technical level: Non-technical founder using AI tools to execute

Strengths:
- writing
- research
- analysis
- synthesis

Important working notes:
- Tanvir has limited daily time
- do not recommend systems that require heavy ongoing maintenance unless the upside is obvious
- do not push him into public personal-brand content, calls, or video unless he says he is ready
- default to calm, practical, confidence-building collaboration

## SECTION 3 - BUSINESS MODEL AND ICP

Revenue funnel:

Content -> SEO -> Free tools -> Newsletter -> Paid services

Ideal customer:
- HVAC, roofing, or plumbing business owner
- usually doing $1M to $5M per year
- typically 5 to 30 employees
- US market
- already spending money on marketing
- cannot clearly connect spend to booked jobs or revenue
- skeptical because they have been burned by agencies before

Common pains:
- spending $5K to $15K per month without clarity
- missing calls
- poor booking rate
- weak follow-up
- bad measurement
- agency reports that avoid the real number

## SECTION 4 - SERVICES AND PRICING

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

## SECTION 5 - BRAND VOICE

Core instruction:

Write like a contractor who figured out growth systems. Not a marketer.

The voice should feel:
- direct
- skeptical
- specific
- useful
- operator-minded
- numbers-first

The writing test:

Would a contractor read this on their phone at 6am and immediately understand it?

### Use Language Like This

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

### Avoid Language Like This

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

### Copy Rules

- lead with numbers and dollar amounts
- use short sentences
- use short paragraphs
- make the finding concrete
- translate percentages into dollars whenever possible
- avoid generic marketing language
- avoid hype
- write for skeptical owners

## SECTION 6 - DESIGN SYSTEM

Current visual direction:
- dark
- editorial
- research-first
- technical
- independent analyst feel

The site should not feel like:
- an agency site
- a startup SaaS template
- generic performance-marketing design

Design source of truth:
- `src/styles/global.css`

High-level visual characteristics:
- near-black backgrounds
- cream text
- teal accent
- serif display headlines
- mono labels, pills, and buttons
- compact bordered controls
- deliberate spacing

Historical design tokens preserved from prior context:
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

Typography direction:
- headlines: DM Serif Display
- UI labels and buttons: IBM Plex Mono
- body copy: IBM Plex Sans

## SECTION 7 - CURRENT TECH STACK

Verified from the repo:
- Astro
- static output
- package version: `astro ^4.16.0`

Current `package.json` scripts:
- `npm run dev`
- `npm run build`
- `npm run preview`

Current `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://builtontenth.com',
  output: 'static',
});
```

Operational context carried forward from prior handoff:
- hosting is expected to be Vercel
- analytics historically uses GA4 and GTM
- newsletter and form handling use Brevo
- `BREVO_API_KEY` should stay in deployment env only
- do not ask Tanvir to paste secrets into chat

Important repo note:

The current checked-in repo does not visibly include `src/pages/api/*` files, even though the live site and page scripts reference `/api/subscribe` and `/api/apply`.

Future chats should not blindly recreate or rewrite API infrastructure unless Tanvir explicitly asks.

## SECTION 8 - CURRENT SITE ARCHITECTURE

Current checked-in pages:

- `/` -> `src/pages/index.astro`
- `/insights` -> `src/pages/insights/index.astro`
- `/insights/[slug]` -> `src/pages/insights/[slug].astro`
- `/tools` -> `src/pages/tools/index.astro`
- `/tools/marketing-calculator` -> `src/pages/tools/marketing-calculator.astro`
- `/tools/phone-calculator` -> `src/pages/tools/phone-calculator.astro`
- `/tools/lead-grader` -> `src/pages/tools/lead-grader.astro`
- `/tools/website-audit` -> `src/pages/tools/website-audit.astro`
- `/tools/capacity-planner` -> `src/pages/tools/capacity-planner.astro`
- `/services` -> `src/pages/services.astro`
- `/apply` -> `src/pages/apply.astro`
- `/about` -> `src/pages/about.astro`
- `/newsletter` -> `src/pages/newsletter.astro`

Shared building blocks:
- `src/components/Nav.astro`
- `src/components/Footer.astro`
- `src/layouts/Layout.astro`
- `src/layouts/ToolLayout.astro`

Current navigation conventions:
- `Read Research` goes to `/insights`
- `Get an Audit` goes to `/apply`
- mobile navigation uses a `Menu` button and bottom sheet

Footer content areas:
- Research
- Free Tools
- Work With Us

## SECTION 9 - CURRENT CONTENT SYSTEM

The site now uses Astro Content Collections for insights.

This is a locked improvement because it reduces breakage and makes publishing much simpler.

### Blog Setup

- Collection config: `src/content/config.ts`
- Content files: `src/content/blog/*.md`
- Listing page: `src/pages/insights/index.astro`
- Dynamic article template: `src/pages/insights/[slug].astro`

### Current Collection Schema

The checked-in schema currently includes:
- `title`
- `description`
- `pubDate`
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

Trades supported:
- HVAC
- Roofing
- Plumbing

Multi-trade tagging is supported.

### How To Add A New Article

Current workflow:

1. Create one new markdown file in `src/content/blog/`
2. Fill in frontmatter using the collection schema
3. Write the article in standard Markdown
4. Run `npm run build`

Do not:
- create a new article `.astro` page
- manually add article cards to `src/pages/insights/index.astro`

### Article Body Rules

Use normal Markdown:
- paragraphs
- `##` and `###` headings
- lists
- images
- tables
- blockquotes
- horizontal rules

Important correction from older docs:
- articles are no longer hand-built `.astro` pages
- FAQ content is no longer based on custom accordion logic
- use normal markdown structure and let the shared article template style it

### Current Published Markdown Articles

- `how-much-should-hvac-company-spend-on-marketing-2026.md`
- `why-hvac-csrs-are-losing-you-300k-per-year.md`
- `are-angi-leads-worth-it-for-roofing-companies.md`
- `hvac-marketing-benchmarks-2026-what-top-performers-spend.md`
- `i-analyzed-a-3m-hvac-company-online-presence.md`
- `the-follow-up-sequence-that-moved-close-rate-to-40-percent.md`

## SECTION 10 - CURRENT INSIGHTS BEHAVIOR

Insights hub behavior:
- reads from the content collection
- supports trade filtering by URL query param
- supports `All`, `HVAC`, `Roofing`, and `Plumbing`
- uses one featured article plus secondary article cards

Article template behavior:
- one shared template for all insight articles
- hero image comes from frontmatter
- category, trade, date, and read time render from frontmatter
- CTA labels and destinations render from frontmatter
- JSON-LD article schema is generated in the template

## SECTION 11 - CURRENT NEWSLETTER POSITIONING

Newsletter positioning:
- free
- every Tuesday
- one useful insight at a time
- built for owners, not marketers

Current truth:
- placeholder recent issues were removed
- do not reintroduce fake newsletter issue history
- only show sent issues when real ones exist

## SECTION 12 - CANONICAL STATS AND LOCKED MESSAGING

These are the core numbers to keep consistent unless Tanvir explicitly changes them:

- companies in dataset: `300+`
- missed-call benchmark: `32%`
- answer-rate benchmark: `68%`
- average booking / close benchmark in several examples: `42%`
- follow-up on unbooked calls: under `20%`

Messaging rules:
- if it is a benchmark, keep it consistent
- if it is a case study number, treat it as local to that example
- do not casually overwrite case-study math
- translate insights into dollars whenever possible

## SECTION 13 - COMMUNITY AND DISTRIBUTION CONTEXT

This is operating context from the prior handoff and should still be preserved unless Tanvir changes it.

### Reddit

Account: `u/BuiltOnTenth`

Approach:
- comment helpfully before posting
- be useful first
- do not drop links unprompted
- focus on trades and small-business operator communities

### Facebook

Lower priority than Reddit.

### LinkedIn

No strong personal-brand push unless Tanvir explicitly wants one.

### Posting Workflow

Preferred workflow:
- Tanvir pastes draft or screenshot
- AI writes or sharpens the response
- Tanvir reviews
- Tanvir posts manually

## SECTION 14 - MINI AUDIT CONTEXT

If someone accepts a free mini audit, preserve this rough process:

Ask for:
- company name
- location
- website
- social links

Research with public data:
- Google Maps
- search results
- website
- trust signals
- mobile experience
- ad visibility
- top competitors

Goal:
- show one real gap
- translate it into a dollar amount
- give one fix away for free
- create trust by showing how the paid audit thinks

## SECTION 15 - CURRENT CHANGE GUARDRAILS

Do not casually change:
- tool formulas
- tool scoring logic
- analytics setup
- GTM
- font imports
- global CSS
- infrastructure assumptions

When making decisions:
- stability beats novelty
- fewer moving parts beats flexibility
- one template beats duplicated page systems
- plain systems beat fancy systems

## SECTION 16 - KNOWN OUTDATED ITEMS FROM OLDER CONTEXT DOCS

Older context docs may still say some of these things. Treat them as outdated:

- newsletter page has placeholder issues
- each article is a hand-built `.astro` file
- article FAQs use custom accordion behavior
- only two or three articles are published
- article cards must be added manually to the insights hub

Those statements are no longer true in the current repo.

## SECTION 17 - FUTURE CHAT STARTER

Recommended prompt for future chats:

`Use this file as the Built on Tenth source of truth. The current repo is the final website state unless I say otherwise. Keep contractor language, stability, and low-complexity systems intact.`

## SECTION 18 - SEO AND CONTENT STRATEGY

Last reviewed: March 19, 2026

### What Is Working (Do Not Change)

The content is already well-positioned because:

- articles target decision-stage, buying-intent keywords, not informational fluff
- original numbers and benchmarks are used throughout, not recycled industry averages
- the positioning as an independent analyst with no ad-spend incentive is a real trust signal for both Google and LLMs
- content structure is clear: problem, math, breakdown, fix
- tables and scenario modeling make content extractable by AI systems

Do not change the voice, structure, or writing style in response to generic SEO advice. The current approach is the differentiator. Articles that read like content-mill output (fragment bullets, emoji checkboxes, generic frameworks) would undermine the brand.

Do not add beginner-layer explainers ("what is a close rate") for the ICP. A $2M HVAC owner does not need that. Writing down to them breaks trust.

### What Needs Fixing (Structural Gaps)

Three structural problems have been identified and accepted as real:

**1. No internal linking**

Articles currently behave as standalone pieces. They do not link to each other or to tools. This means authority does not compound across the site.

Fix: every article must link to 2 to 3 related articles and 1 relevant tool. Links should be contextual and in-body, not a tacked-on list at the end.

**2. Narrow keyword coverage per article**

Each article currently targets one primary search intent. Related search queries that a buyer would also use are not captured.

Fix: expand each article with sections that address related queries naturally. Do not stuff keywords. Add content that a reader would actually want, that also happens to capture the adjacent search intent.

**3. No external mentions or citations**

LLMs and Google both weight content that is referenced elsewhere. Right now nothing links to Built on Tenth from outside the site.

Fix: this is a distribution problem, not a content problem. Addressed through Reddit presence and community distribution over time. Do not try to manufacture citations artificially.

### Execution Rules for Article Fixes

- fix one article at a time
- do not rewrite voice, structure, or narrative
- only add what is missing: internal links, related sections, extended FAQ coverage
- every added section must match the existing article's tone exactly
- start with the Angi article (`are-angi-leads-worth-it-for-roofing-companies.md`)

### Internal Linking Map (Current)

Use this as the reference when adding links. Every article should link to at least 2 of the others where the connection is natural in context.

| Article | Natural link targets |
|---|---|
| Angi leads (roofing) | CSR article, follow-up sequence article, benchmarks article |
| HVAC marketing budget | Benchmarks article, CSR article, phone calculator tool |
| HVAC marketing benchmarks | Budget article, CSR article, marketing calculator tool |
| CSR / phone performance | Follow-up sequence article, phone calculator tool, benchmarks article |
| Follow-up sequence | CSR article, phone calculator tool |
| HVAC online presence analysis | Benchmarks article, budget article |

### What Was Rejected From the External SEO Audit

An external SEO analysis was reviewed March 19, 2026. The following recommendations were rejected:

- rewriting articles in a fragment-bullet, emoji-checkbox format
- adding beginner-layer definitions for ICP who already understands the basics
- the "rewritten Angi article" produced by the audit, which stripped narrative and replaced it with generic structure
- inflated traffic estimates used to justify urgency

These were rejected because they conflict with brand voice and would make the content worse, not better.

### Keyword Expansion: Angi Article

When expanding the Angi article, these are the adjacent queries to cover naturally within new sections:

- angi vs thumbtack roofing
- homeadvisor roofing cost per lead
- angi leads conversion rate roofing
- how to improve angi ROI
- when to cancel angi
- angi vs google lsa roofing

Do not force all of these. Add only the sections that a reader who finished the current article would genuinely want next.

## SECTION 19 - CURRENT CHANGE GUARDRAILS

Do not casually change:
- tool formulas
- tool scoring logic
- analytics setup
- GTM
- font imports
- global CSS
- infrastructure assumptions

When making decisions:
- stability beats novelty
- fewer moving parts beats flexibility
- one template beats duplicated page systems
- plain systems beat fancy systems

---

## SECTION 20 - BRAND NAME DECISION (LOCKED)

Last reviewed: March 19, 2026

The name "Built on Tenth" is non-negotiable. Tanvir has confirmed this explicitly.

Do not suggest renaming, rebranding, or adding a DBA. Do not treat external criticism of the name as a signal to revisit it.

Rationale accepted: brand names do not need to describe the business. McKinsey, LinkedIn, Clay, Apollo, and others carry no inherent meaning. The name's job is to be memorable and distinct. The copy's job is to explain what the business does. That separation is intentional.

Future AI cofounder context: if feedback from any source questions the name, acknowledge the tension, then redirect to copy and context delivery as the actual lever.

---

## SECTION 21 - SITE COPY CHANGES IMPLEMENTED (March 19, 2026)

These changes were made via Codex based on a structured copy audit. Do not revert them. Do not duplicate them.

### Change 1 -- Header descriptor added

File: `src/components/Nav.astro` (or equivalent header component)

A one-line descriptor was added directly below the wordmark in the site header, visible on every page:

```
Revenue Intelligence · HVAC · Roofing · Plumbing
```

Styling: IBM Plex Mono, --ink3 color, ~10-11px, no bold.

Why: Cold visitors landing on interior pages (services, about, insights articles) had no trade context before reading a headline. The descriptor solves this without changing layout or nav structure.

Do not remove this line. Do not move it. Do not change the trades listed.

---

### Change 2 -- Fourth stat box on homepage reframed

File: `src/pages/index.astro`

The fourth stat box was changed from:

```
Headline: 100%
Sub-label: Written delivery, no calls required
```

To:

```
Headline: Written only
Sub-label: Every finding documented. Share it with your team. Act on it at your pace.
```

Why: The original format read as a disclaimer. The replacement sells the benefit of written delivery rather than naming the absence of calls. "No calls required" was framing the feature as avoidance. The new copy frames it as precision and permanence.

Do not reintroduce "100%" or "no calls required" as a homepage stat.

---

### Change 3 -- Proof line added under the $0 stat box

File: `src/pages/index.astro`

A second sub-label line was added under the existing $0 stat box:

```
Existing sub-label: Incentive to sell more ad spend. Ever.
New line added: We don't run ads, manage campaigns, or earn commissions on your spend.
```

Why: The $0 claim is an assertion. Skeptical owners have heard every agency claim independence. The three concrete specifics (don't run ads, don't manage campaigns, don't earn commissions) convert assertion into proof. This is the difference between a positioning claim and evidence.

Styling of the new line: IBM Plex Mono, --ink3 color, same or slightly smaller than the existing sub-label.

Do not remove this line. Do not merge it with the existing sub-label.

---

### What triggered these changes (context for future AI)

An external roast-style critique of the site was reviewed on March 19, 2026. Three real signals were extracted from the noise:

1. The name does not explain the business on cold page loads (fixed via header descriptor)
2. "No calls required" reads as avoidance to a fast skeptical reader (fixed via stat box reframe)
3. The independence claim is an assertion without concrete proof on the homepage (fixed via the $0 proof line)

Everything else in the critique was performance for an audience, not usable signal. The $750 price point, the founder's background, and the business model itself were not changed and should not be reconsidered based on that critique.

---

## FINAL RULE

Built on Tenth should always feel like this:

An independent operator who studied the numbers, found where contractors leak money, and wrote down exactly what matters in plain English.
