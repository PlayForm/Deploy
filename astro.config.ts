// @ts-nocheck
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

import deno from "@astrojs/deno";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://astro-deno-deploy.deno.dev",
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	output: "server",
	adapter: deno(),
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
