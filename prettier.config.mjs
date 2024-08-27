/**
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions &
 *       import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
const config = {
	arrowParens: "always",
	printWidth: 80,
	singleQuote: true,
	jsxSingleQuote: false,
	semi: false,
	trailingComma: "all",
	tabWidth: 2,

	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss", // MUST come last
	],

	astroAllowShorthand: false,
	tailwindConfig: "./tailwind.config.ts",
	importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[.][.]/", "^[.]/"],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "4.4.0",
};

export default config;
