import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().optional().default('Uncategorized'),
    tags: z.array(z.string()).default([]),
  }),    
});

export const collections = {
  'blog': blogCollection,
};
