import { defineConfig } from "astro/config";

import deno from "@astrojs/deno";
import compress from "astro-compress";
import rome from "astro-rome";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";

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
