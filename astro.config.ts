// @ts-nocheck
import { defineConfig } from "astro/config";

import deno from "@astrojs/deno";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";

export default defineConfig({
	site: "https://astro-deno-deploy.deno.dev/",
	integrations: [
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	output: "server",
	adapter: deno(),
});
