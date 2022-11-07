import deno from "@astrojs/deno";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

// https://astro.build/config
export default {
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
};
