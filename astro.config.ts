import deno from "@astrojs/deno";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import Compress from "astro-compress";
import critters from "astro-critters";
import ROME from "astro-rome";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
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
		ROME({ logger: 1 }),
		Compress({ logger: 1 }),
	],
	output: "server",
	adapter: deno(),
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
