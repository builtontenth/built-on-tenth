import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Built on Tenth'),
    category: z.enum(['Revenue Diagnostics', 'Pipeline Systems', 'Channel Teardowns', 'Growth Benchmarks', 'Operator Case Studies']),
    trade: z.array(z.enum(['HVAC', 'Roofing', 'Plumbing', 'All'])),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
    seoKeywords: z.array(z.string()),
  }),
});

export const collections = { blog };
