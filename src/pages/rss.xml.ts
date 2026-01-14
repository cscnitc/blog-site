import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import { WRITEUPS_PATH } from "@/content.config";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

export async function GET() {
  const blogPosts = await getCollection("blog");
  const writeups = await getCollection("writeups");

  const all = [...blogPosts, ...writeups];
  const sortedPosts = getSortedPosts(all as any);

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map((post) => {
      const { data, id, filePath, collection } = post as any;

      let link: string;
      if (collection === "blog") {
        link = getPath(id, filePath);
      } else {
        const fp = filePath ?? id;
        const rel = fp.includes(WRITEUPS_PATH) ? fp.split(WRITEUPS_PATH)[1] : fp;
        const cleaned = rel.replace(/^\/+/, "").replace(/\.md$/i, "");
        const parts = cleaned
          .split("/")
          .filter(Boolean)
          .map((p: string) =>
            p
              .toLowerCase()
              .replace(/[^a-z0-9\-]+/g, "-")
              .replace(/^-+|-+$/g, "")
          );
        // Keep filename (e.g., README) as part of the path so RSS links include /readme
        link = `/posts/${parts.join("/")}`;
      }

      return {
        link,
        title: data.title,
        description: data.description,
        pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      };
    }),
  });
}
