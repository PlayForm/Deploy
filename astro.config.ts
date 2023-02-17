// @ts-nocheck
import { defineConfig } from "astro/config";

import compress from "astro-compress";
import critters from "astro-critters";
import deno from "@astrojs/deno";
import prefetch from "@astrojs/prefetch";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";
import worker from "astrojs-service-worker";

export default defineConfig({
	site: "https://astro-deno-deploy.deno.dev/",
	integrations: [
		worker(),
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	output: "server",
	adapter: deno(),
});
