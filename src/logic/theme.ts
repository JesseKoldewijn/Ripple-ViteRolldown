export const THEME = {
	LIGHT: "light",
	DARK: "dark",
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export const isValidTheme = (theme: string) => {
	return Object.values(THEME).includes(theme as Theme);
};

export const getInitialTheme = () => {
	const storedTheme = localStorage.getItem("theme");
	if (storedTheme && isValidTheme(storedTheme)) {
		localStorage.setItem("theme", storedTheme);
		return storedTheme as Theme;
	}
	const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? THEME.DARK
		: THEME.LIGHT;
	localStorage.setItem("theme", theme);
	return theme;
};
