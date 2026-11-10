import type { CollectionEntry } from "astro:content";

const getSortedAnnouncements = (
  announcements: CollectionEntry<"announcements">[]
) => {
  return announcements
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDatetime).getTime() -
        new Date(a.data.pubDatetime).getTime()
    );
};

export default getSortedAnnouncements;

