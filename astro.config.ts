import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkWriteupLinks from "./src/utils/remark-writeup-links";
import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
    site: SITE.website,
    integrations: [
        sitemap({
            filter: (page) => SITE.showArchives || !page.endsWith("/archives"),
        }),
    ],
    markdown: {
        remarkPlugins: [
            remarkToc,
            [remarkCollapse, { test: "Table of contents" }],
            remarkMath,
            // rewrite relative links in writeups at build time to GitHub blob URLs
            remarkWriteupLinks,
        ],
        rehypePlugins: [[rehypeKatex, {}]],
        shikiConfig: {
            // For more themes, visit https://shiki.style/themes
            themes: { light: "monokai", dark: "monokai" },
            defaultColor: false,
            wrap: false,
        },
    },
    vite: {
        // @ts-ignore
        plugins: [tailwindcss()],
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
        },
        build: {
            cssMinify: "lightningcss",
            minify: "terser",
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    },
    image: {
        responsiveStyles: true,
        layout: "constrained",
    },
    env: {
        schema: {
            PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
                access: "public",
                context: "client",
                optional: true,
            }),
        },
    },
    compressHTML: true,
    build: {
        inlineStylesheets: "auto",
    },
    experimental: {
        clientPrerender: true,
    },
    server: {
        headers: {
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    },
});
