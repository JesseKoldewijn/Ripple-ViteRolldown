import { Theme } from "./logic/theme";

export type AppProps = {
	theme: Theme;
};

export type OnClick = (e: MouseEvent) => void;
