/**
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["prettier-plugin-ripple"],
	useTabs: true,
	singleQuote: false,
	trailingComma: "es5",
	printWidth: 100,
	tabWidth: 2,

	// TODO: Remove this when prettier-plugin-ripple supports propper formatting
	// overrides: [
	// 	{
	// 		files: "*.ripple",
	// 		options: {
	// 			parser: "none",
	// 		},
	// 	},
	// ],
};

export default config;
