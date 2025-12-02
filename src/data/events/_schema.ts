import { z } from "astro/zod";

export const EventSchema = z.object({
  title: z.string(),
  date: z.string(),
  rank: z.string().optional(),
  link: z.string().optional(),
  writeups: z.string().optional(),
  type: z.enum(["past", "upcoming"]),
});
