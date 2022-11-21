import deno from "@astrojs/deno";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";

// https://astro.build/config
export default {
	// TODO Place your site URL here
	// site: "",
	integrations: [
		sitemap(),
		critters(),
		rome(),
		compress(),
	],
	output: "server",
	adapter: deno(),
};
