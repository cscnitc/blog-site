import { visit } from "unist-util-visit";
import path from "path";
import { WRITEUPS_REPO } from "../config";


function isRelativeUrl(u: string) {
  if (!u) return false;
  const s = u.trim();
  // Not an absolute URL, not root, not anchor, not mailto, not tel
  return (
    !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(s) &&
    !s.startsWith("/") &&
    !s.startsWith("#") &&
    !s.startsWith("mailto:") &&
    !s.startsWith("tel:")
  );
}

export default function remarkWriteupLinks() {
  return (tree: any, vfile: any) => {
    try {
      const filePath: string = vfile.path || (vfile.history && vfile.history[0]) || "";
      if (!filePath) return;

      // Only operate on files under the writeups base (either external submodule or pages/writeups)
      const fpStr = String(filePath || "");
      let matchedBase = null;
      if (fpStr.includes("src/external/writeups")) matchedBase = "src/external/writeups";
      else if (fpStr.includes("src/pages/writeups")) matchedBase = "src/pages/writeups";
      if (!matchedBase) return;

      // Compute directory inside repo relative to matchedBase
      const rel = fpStr.split(matchedBase)[1] || ""; // e.g. /2025/BackdoorCTF/.../README.md
      const dir = path.posix.dirname(rel).replace(/^\/+/, "");

      function makeBlobUrl(target: string) {
        // Remove leading ./ or ../
        let cleanTarget = target.replace(/^\.\//, "");
        // If ../, resolve relative to dir
        while (cleanTarget.startsWith("../")) {
          cleanTarget = cleanTarget.replace(/^\.\.\//, "");
          // Remove one segment from dir
          const segs = dir.split("/").filter(Boolean);
          segs.pop();
          // Rebuild dir
          const newDir = segs.join("/");
          cleanTarget = newDir ? `${newDir}/${cleanTarget}` : cleanTarget;
        }
        const joined = path.posix.join(dir, cleanTarget);
        const clean = joined.replace(/^\/+/, "");
        return `${WRITEUPS_REPO.blobBase}/${clean}`;
      }

      visit(tree, (node: any) => {
        // markdown link: type 'link' with url
        if (node.type === "link" && typeof node.url === "string" && isRelativeUrl(node.url)) {
          const old = node.url;
          node.url = makeBlobUrl(node.url);
          if (process.env.NODE_ENV === "development") {
            // eslint-disable-next-line no-console
            console.log(`[remark-writeup-links] link: ${old} -> ${node.url}`);
          }
        }
        // markdown image: type 'image' with url
        if (node.type === "image" && typeof node.url === "string" && isRelativeUrl(node.url)) {
          const old = node.url;
          node.url = makeBlobUrl(node.url);
          if (process.env.NODE_ENV === "development") {
            // eslint-disable-next-line no-console
            console.log(`[remark-writeup-links] image: ${old} -> ${node.url}`);
          }
        }
        // raw HTML nodes: replace href/src attributes that are relative
        if (node.type === "html" && typeof node.value === "string") {
          let v = node.value;
          v = v.replace(/(href|src)=(["'])([^"'#>]+?)\2/gi, (m: string, attr: string, q: string, url: string) => {
            if (isRelativeUrl(url)) {
              const newUrl = makeBlobUrl(url);
              if (process.env.NODE_ENV === "development") {
                // eslint-disable-next-line no-console
                console.log(`[remark-writeup-links] html: ${url} -> ${newUrl}`);
              }
              return `${attr}=${q}${newUrl}${q}`;
            }
            return m;
          });
          node.value = v;
        }
      });
    } catch (e) {
      // swallow errors to avoid breaking build
      console.error("remarkWriteupLinks error:", e);
    }
  };
}
