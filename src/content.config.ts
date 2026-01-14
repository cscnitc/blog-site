import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";
import fs from "fs";

export const BLOG_PATH = "src/data/blog";
export const EVENTS_PATH = "src/data/events";
// prefer external submodule path if present, otherwise fall back to pages/writeups
const EXTERNAL_WRITEUPS = "src/external/writeups";
export const WRITEUPS_PATH = fs.existsSync(EXTERNAL_WRITEUPS)
  ? EXTERNAL_WRITEUPS
  : "src/pages/writeups";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${EVENTS_PATH}` }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(),
    venue: z.string().optional(),
    rank: z.string().optional(),
    link: z.string().optional(),
    writeups: z.string().optional(),
    type: z.enum(["past", "upcoming"]),
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${WRITEUPS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      title: z.string(),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      description: z.string().optional(),
      tags: z.array(z.string()).default(["writeups"]),
      ogImage: image().or(z.string()).optional(),
    }),
});

export const collections = { blog, events, writeups };
