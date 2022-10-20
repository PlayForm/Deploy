import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	integrations: [
		sitemap(),
		critters(),
		compress({
			logger: 1,
		}),
	],
	output: "server",
	adapter: deno(),
});
