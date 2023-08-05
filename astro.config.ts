import deno from "@astrojs/deno";
import PreFetch from "@astrojs/prefetch";
import SiteMap from "@astrojs/sitemap";
import Compress from "astro-compress";
import Critters from "astro-critters";
import ROME from "astro-rome";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

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
		import.meta.env.MODE === "production" ? Worker() : null,
		SiteMap(),
		Critters({ logger: 1 }),
		PreFetch(),
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
