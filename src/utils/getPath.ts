import { BLOG_PATH, WRITEUPS_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a blog post
 * @param id - id of the blog post (aka slug)
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true
) {
  // Normalize filePath: strip known content base folders (writeups/blog)
  let fp = filePath ?? id;
  if (fp && WRITEUPS_PATH && String(fp).includes(WRITEUPS_PATH)) {
    fp = String(fp).split(WRITEUPS_PATH)[1] || "";
  } else if (fp && String(fp).includes(BLOG_PATH)) {
    fp = String(fp).replace(BLOG_PATH, "");
  }

  const pathSegments = String(fp)
    .split("/")
    .filter(path => path !== "") // remove empty string in the segments
    .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
    .slice(0, -1) // remove the last segment (file name)
    .map(segment => slugifyStr(segment)); // slugify each segment path

  const basePath = includeBase ? "/posts" : "";

  // Making sure `id` does not contain the directory
  const blogId = String(id).split("/");
  const lastPart = blogId.length > 0 ? String(blogId[blogId.length - 1]) : "";
  const slug = slugifyStr(lastPart.replace(/\.md$/i, ""));

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}
