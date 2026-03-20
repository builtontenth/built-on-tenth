import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    metaDescription: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Tanvir Hossain'),
    category: z.string(),
    trade: z.array(z.enum(['HVAC', 'Roofing', 'Plumbing'])),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
    preview: z.string().optional(),
    pills: z.array(z.string()).max(3).default([]),
    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    secondaryCtaLabel: z.string().default('Get a Revenue Leak Audit'),
    secondaryCtaHref: z.string().default('/apply'),
    seoKeywords: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
