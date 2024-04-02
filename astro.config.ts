export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://@playform/deploy.deno.dev",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/inline")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("@playform/format")).default({ Logger: 1 }),
		(await import("@playform/compress")).default({ Logger: 1 }),
	],
	output: "server",
	adapter: (await import("@astrojs/deno")).default(),
	vite: {
		build: {
			sourcemap: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
