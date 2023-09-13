import deno from "@astrojs/deno";
import Prefetch from "@astrojs/prefetch";
import Sitemap from "@astrojs/sitemap";
import Compress from "astro-compress";
import Critters from "astro-critters";
import Rome from "astro-rome";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://astro-deno-deploy.deno.dev",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? Worker() : null,
		Sitemap(),
		Critters({ Logger: 1 }),
		Prefetch(),
		Rome({ Logger: 1 }),
		Compress({ Logger: 1 }),
	],
	output: "server",
	adapter: deno(),
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
