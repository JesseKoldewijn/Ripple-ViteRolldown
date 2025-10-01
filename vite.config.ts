import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// @ts-expect-error
import { ripple } from "vite-plugin-ripple";

const config = defineConfig({
	plugins: [ripple(), tailwindcss()],
	optimizeDeps: {
		exclude: ["jotai", "jotai-ripple"],
	},
});

export default config;
