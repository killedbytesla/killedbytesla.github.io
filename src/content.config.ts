import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { statuses, categories, validateProject } from '../scripts/data-schema.mjs';
const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    name: z.string().min(1), category: z.enum(categories as [string, ...string[]]),
    status: z.enum(statuses as [string, ...string[]]), description: z.string().min(20).max(400),
    start: z.string(), end: z.string(), endLabel: z.string().optional(),
    announcementDate: z.string().optional(), dateNote: z.string().min(10),
    details: z.string().min(20), lastVerified: z.string(),
    sources: z.array(z.object({ title: z.string().min(1), url: z.url().refine(u => u.startsWith('https://')), supports: z.enum(['start', 'ending', 'context']) })).min(2)
  }).superRefine((data, ctx) => { for (const message of validateProject(data)) ctx.addIssue({code: 'custom', message}); })
});
export const collections = { projects };
