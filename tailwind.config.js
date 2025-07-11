module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// default
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				background: "var(--color-background)",
				txt: "var(--color-text-primary)",
			},
		},
	},
	plugins: [],
};
