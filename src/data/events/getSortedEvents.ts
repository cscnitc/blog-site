import { glob } from "astro/loaders";
import { EventSchema } from "./_schema";

export async function getSortedEvents() {
  const modules = import.meta.glob("./*.md", { eager: true });

  const events = Object.values(modules).map((mod: any) => {
    return {
      ...mod.frontmatter,
      body: mod.default,
    };
  });

  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
