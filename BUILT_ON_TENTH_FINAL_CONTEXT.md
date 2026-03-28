# BUILT ON TENTH - AI COFOUNDER CONTEXT

Last Updated: March 28, 2026  
Repo Source of Truth: `/Users/tanvir/Documents/GitHub/built-on-tenth`

Use this file at the start of a new AI chat when continuity matters.

If this file and the repo ever conflict, the repo wins.

## 1. Immutable Truths

### Business identity

Built on Tenth is an HVAC-first independent research business.

It is not:
- an agency
- a coaching business
- a lead marketplace
- a SaaS company
- a media-buying business
- a consulting business built around calls and retainers

Its value comes from independence:
- no ad spend incentive
- no retainer incentive
- no pressure to recommend more complexity

### Core offer

The main product is:
- `HVAC Local Market Report`

Non-negotiable product truths:
- fixed fee: `$200`
- delivered in `48 hours`
- written only
- no calls
- no upsell
- no retainer

Primary CTA:
- `Request your report`

### Brand taxonomy

Use these names consistently:
- `HVAC Market Insights`
- `HVAC Calculators`
- `HVAC Local Market Report`
- `Why Built on Tenth`
- `Request your report`

Do not drift back to:
- `HVAC Benchmarks`
- `Market Gap Report`
- `Free HVAC Tools`
- `Free Tool`
- `Get the $200 report`
- `Get my report`
- `Get the gap report`

### Audience

Primary ICP:
- HVAC owner or operator
- usually already spending on marketing or considering more spend
- skeptical of agencies
- wants numbers before opinions
- wants clarity before another decision

Typical pains:
- competitors showing up first
- weak local visibility
- missed calls
- weak booking or follow-up
- unclear marketing accountability
- unclear cost per booked job
- website friction
- no clear view of what to fix first

### Positioning rules

Outside the article library, the business should behave as HVAC-only.

Inside the article library:
- HVAC stays prioritized
- older roofing and plumbing articles may remain live for SEO
- they should not shape the brand narrative

### Site and infrastructure truths

Current public routes:
- `/`
- `/report`
- `/apply`
- `/tools`
- `/tools/phone-calculator`
- `/tools/estimate-follow-up`
- `/tools/agency-report-card`
- `/tools/revenue-per-tech`
- `/tools/marketing-calculator`
- `/tools/gbp-scorecard`
- `/tools/website-audit`
- `/insights`
- `/insights/[slug]`
- `/newsletter`
- `/about`

Removed route:
- `/services`

Protected by default unless explicitly requested:
- GTM snippet placement
- canonical logic
- OG/Twitter/meta infrastructure
- sitemap behavior
- robots behavior
- API contracts in `api/subscribe.js` and `api/apply.js`

### Design and implementation truths

All static styling should come from:
- `src/styles/global.css`
- `src/styles/global-pages.css`

There should be:
- no page-level `<style>` blocks
- no component-level `<style>` blocks
- no static inline `style=` presentation rules

Dynamic tool-result widths and positions driven by JavaScript are allowed when necessary for interaction.

### Technical truths

Framework: Astro static site  
Hosting: Vercel  
Repo: GitHub  
Analytics: GTM / GA4  
Forms: Vercel serverless endpoints in `api/`  
Email capture: Brevo

Important command:
- `npm run build`

Rule:
- after meaningful code changes, run `npm run build`
- do not leave build errors unresolved

## 2. Current Strategy

### What the business sells today

Built on Tenth sells one main paid offer:
- the HVAC Local Market Report

The report exists to show:
- where an HVAC company ranks locally
- which competitors are outranking them
- what visible trust and profile gaps exist
- what the gap is likely costing in missed calls
- what to fix first

### Funnel

Current funnel:

SEO / articles / calculators -> report page -> apply page -> paid report

Important funnel rules:
- the report is the main commercial offer
- calculators support the report
- HVAC Market Insights support calculators and the report
- email updates support repeat attention and trust
- do not accidentally create a second main offer

### Role of each site section

#### HVAC Market Insights

Purpose:
- build HVAC topical authority
- capture useful search traffic
- create trust through useful analysis
- move readers into calculators and the report

Preferred HVAC themes:
- local visibility
- map pack strength
- missed calls
- estimate follow-up
- booked-job cost
- revenue per technician
- software ROI
- agency accountability
- service agreements
- field and office operating metrics

#### HVAC Calculators

Purpose:
- attract search intent
- give quick diagnostic value
- make leaks visible
- hand off naturally into the report

Current calculator suite:
- Phone Revenue Calculator
- Estimate Follow-Up Calculator
- Agency Report Card
- Revenue Per Technician
- Marketing Cost Calculator
- Google Business Profile Scorecard
- Website Conversion Scorecard

Each calculator should feel like:
- a serious HVAC diagnostic
- a preview of the deeper report

Not:
- a toy
- a random calculator
- a dashboard product

#### Email updates

Subscribers get an email whenever a new HVAC Market Insights article is published.

Important:
- there is no weekly schedule
- there is no issue cadence
- there is no content calendar promise
- only send when something is worth sending

#### Apply page

`/apply?service=report` is the intake/order page for the same report.

It is not a separate offer.

The page should clearly show:
- this is the report intake
- fixed fee: `$200`
- `48 hours`

### Internal linking strategy

Preferred cluster:
- homepage -> report, calculators, HVAC Market Insights
- calculators -> report
- HVAC articles -> matching HVAC calculators and report
- report -> calculators and HVAC Market Insights only when helpful

Avoid casually sending HVAC-intent users into older roofing/plumbing content from key commercial pages.

### Current visual strategy

The current site is:
- bright
- premium
- blue/white
- clean
- structured
- operator-trustworthy

The site should feel like:
- independent research
- a premium diagnostic brand
- a clear decision tool for owners

Not like:
- an agency site
- a generic SaaS template
- a marketing gimmick

### CTA system

The site uses one primary CTA card family.

Default CTA pattern:
- centered card
- centered headline
- centered supporting copy
- centered CTA row
- one shared primary button system

Use this for:
- major report promotion sections
- email capture sections
- major end-of-section conversion blocks

### Image strategy

Images should feel:
- real
- operational
- documentary
- HVAC-relevant
- owner/operator-centered

Good themes:
- dispatch
- paperwork
- estimates
- reports
- office + field crossover
- owner/team review scenes
- decision-making moments

Avoid:
- glossy startup visuals
- generic stock-office scenes
- fake dashboards
- over-staged call center imagery

## 3. Operating Instructions

### Think like a cofounder

When helping with Built on Tenth:
- think like a practical cofounder, not just a code assistant
- protect clarity, trust, and simplicity
- recommend the smallest system that solves the problem
- keep the site coherent as an HVAC-first business

### Copy instructions

Write like:
- an operator-minded analyst
- a skeptical contractor who understands numbers
- someone helping an owner make a better decision

Not like:
- a marketer
- a startup founder
- a consultant padding a deck

Voice should feel:
- direct
- calm
- useful
- numbers-first
- specific
- a little skeptical

Preferred language:
- calls
- booked jobs
- answer rate
- booking rate
- close rate
- average ticket
- dispatch
- CSR
- map pack
- review velocity
- service area
- local visibility
- missed revenue
- what to fix first

Avoid language like:
- funnel optimization
- leverage as a verb
- growth hacking
- scalable framework
- demand generation framework
- synergy

Copy rules:
- lead with practical outcomes
- use short paragraphs
- write for skeptical owners
- keep CTA language consistent
- do not sound hypey
- no em dashes in user-facing copy
- no arrow symbols in user-facing copy
- writing-only and no-call positioning is a differentiator

### Product and page decision rules

Before changing anything important, ask:
- does this increase trust?
- does this support the report?
- does this make the site more coherent as an HVAC brand?

If no, do not do it.

### Implementation rules

- read files before editing
- only touch files that need changing
- prefer shared templates over duplication
- prefer global CSS over local styling
- preserve working forms and tracking unless explicitly asked to change them
- do not casually weaken SEO infrastructure
- keep route structure stable unless there is a strong reason to change it

### Priorities

Highest-value work usually falls into:
- improving HVAC article quality and commercial intent
- strengthening internal linking across HVAC articles, calculators, and report
- improving calculator usefulness and report conversion
- improving the specificity and proof of the report offer
- tightening email-update positioning and signup conversion
- keeping the site clean, coherent, and low-complexity

### Default decision principle

If there is a choice between:
- a simpler system that is easier to maintain
- a more flexible system with more moving parts

Choose the simpler system unless the upside of complexity is clearly worth it.
