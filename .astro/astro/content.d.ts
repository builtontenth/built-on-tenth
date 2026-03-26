declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"are-angi-leads-worth-it-for-roofing-companies.md": {
	id: "are-angi-leads-worth-it-for-roofing-companies.md";
  slug: "are-angi-leads-worth-it-for-roofing-companies";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"contractor-estimate-follow-up-gap.md": {
	id: "contractor-estimate-follow-up-gap.md";
  slug: "contractor-estimate-follow-up-gap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"contractor-website-not-converting.md": {
	id: "contractor-website-not-converting.md";
  slug: "contractor-website-not-converting";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cost-per-lead-vs-cost-per-booked-job-contractor.md": {
	id: "cost-per-lead-vs-cost-per-booked-job-contractor.md";
  slug: "cost-per-lead-vs-cost-per-booked-job-contractor";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"four-numbers-hvac-owner-marketing.mdx": {
	id: "four-numbers-hvac-owner-marketing.mdx";
  slug: "four-numbers-hvac-owner-marketing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"google-business-profile-audit-contractor.md": {
	id: "google-business-profile-audit-contractor.md";
  slug: "google-business-profile-audit-contractor";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-hvac-service-agreements-add-200k-annual-revenue.mdx": {
	id: "how-hvac-service-agreements-add-200k-annual-revenue.mdx";
  slug: "how-hvac-service-agreements-add-200k-annual-revenue";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-many-google-reviews-roofing-company-map-pack.md": {
	id: "how-many-google-reviews-roofing-company-map-pack.md";
  slug: "how-many-google-reviews-roofing-company-map-pack";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-much-should-hvac-company-spend-on-marketing-2026.mdx": {
	id: "how-much-should-hvac-company-spend-on-marketing-2026.mdx";
  slug: "how-much-should-hvac-company-spend-on-marketing-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-much-should-plumbing-company-spend-on-marketing-2026.md": {
	id: "how-much-should-plumbing-company-spend-on-marketing-2026.md";
  slug: "how-much-should-plumbing-company-spend-on-marketing-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-offering-financing-closes-more-roofing-jobs.md": {
	id: "how-offering-financing-closes-more-roofing-jobs.md";
  slug: "how-offering-financing-closes-more-roofing-jobs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-set-up-google-local-service-ads-hvac.mdx": {
	id: "how-to-set-up-google-local-service-ads-hvac.mdx";
  slug: "how-to-set-up-google-local-service-ads-hvac";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-work-roofing-insurance-claim-job.md": {
	id: "how-to-work-roofing-insurance-claim-job.md";
  slug: "how-to-work-roofing-insurance-claim-job";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hvac-cost-per-lead-by-channel-2026.mdx": {
	id: "hvac-cost-per-lead-by-channel-2026.mdx";
  slug: "hvac-cost-per-lead-by-channel-2026";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"hvac-flat-rate-pricing-undercharging-service-calls.mdx": {
	id: "hvac-flat-rate-pricing-undercharging-service-calls.mdx";
  slug: "hvac-flat-rate-pricing-undercharging-service-calls";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"hvac-google-ads-campaign-structure.mdx": {
	id: "hvac-google-ads-campaign-structure.mdx";
  slug: "hvac-google-ads-campaign-structure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"hvac-marketing-agency-report-card.md": {
	id: "hvac-marketing-agency-report-card.md";
  slug: "hvac-marketing-agency-report-card";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hvac-marketing-benchmarks-2026-what-top-performers-spend.mdx": {
	id: "hvac-marketing-benchmarks-2026-what-top-performers-spend.mdx";
  slug: "hvac-marketing-benchmarks-2026-what-top-performers-spend";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"hvac-revenue-per-truck-benchmark.md": {
	id: "hvac-revenue-per-truck-benchmark.md";
  slug: "hvac-revenue-per-truck-benchmark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"i-analyzed-a-3m-hvac-company-online-presence.mdx": {
	id: "i-analyzed-a-3m-hvac-company-online-presence.mdx";
  slug: "i-analyzed-a-3m-hvac-company-online-presence";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"plumbing-company-marketing-playbook.md": {
	id: "plumbing-company-marketing-playbook.md";
  slug: "plumbing-company-marketing-playbook";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"plumbing-cost-per-booked-job-by-channel.md": {
	id: "plumbing-cost-per-booked-job-by-channel.md";
  slug: "plumbing-cost-per-booked-job-by-channel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"plumbing-csr-phone-benchmarks.md": {
	id: "plumbing-csr-phone-benchmarks.md";
  slug: "plumbing-csr-phone-benchmarks";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"plumbing-google-business-profile-optimization.md": {
	id: "plumbing-google-business-profile-optimization.md";
  slug: "plumbing-google-business-profile-optimization";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"revenue-per-technician-benchmark-trades.md": {
	id: "revenue-per-technician-benchmark-trades.md";
  slug: "revenue-per-technician-benchmark-trades";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"revenue-per-technician-plumbing-business-scaling.md": {
	id: "revenue-per-technician-plumbing-business-scaling.md";
  slug: "revenue-per-technician-plumbing-business-scaling";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"roofing-cost-per-booked-job-by-lead-source.md": {
	id: "roofing-cost-per-booked-job-by-lead-source.md";
  slug: "roofing-cost-per-booked-job-by-lead-source";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"servicetitan-roi-audit-hvac.mdx": {
	id: "servicetitan-roi-audit-hvac.mdx";
  slug: "servicetitan-roi-audit-hvac";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"the-follow-up-sequence-that-moved-close-rate-to-40-percent.md": {
	id: "the-follow-up-sequence-that-moved-close-rate-to-40-percent.md";
  slug: "the-follow-up-sequence-that-moved-close-rate-to-40-percent";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"true-cost-missed-calls-contractor.md": {
	id: "true-cost-missed-calls-contractor.md";
  slug: "true-cost-missed-calls-contractor";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-to-ask-hvac-marketing-agency-before-signing.mdx": {
	id: "what-to-ask-hvac-marketing-agency-before-signing.mdx";
  slug: "what-to-ask-hvac-marketing-agency-before-signing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"why-hvac-csrs-are-losing-you-300k-per-year.mdx": {
	id: "why-hvac-csrs-are-losing-you-300k-per-year.mdx";
  slug: "why-hvac-csrs-are-losing-you-300k-per-year";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"why-roofing-companies-miss-60-percent-inbound-calls-storm-season.md": {
	id: "why-roofing-companies-miss-60-percent-inbound-calls-storm-season.md";
  slug: "why-roofing-companies-miss-60-percent-inbound-calls-storm-season";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
