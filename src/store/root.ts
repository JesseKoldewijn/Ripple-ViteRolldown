import { atom } from "jotai-ripple";
import type { Theme } from "../logic/theme";

const initialState = {
	theme: "dark" as Theme,
	loading: false,
	error: null,
} as {
	theme: Theme;
	loading: boolean;
	error: {
		cause?: string;
		message: string;
		code?: number;
	} | null;
};

export const appStateAtom = atom(initialState);
