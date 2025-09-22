import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassValue[]) => {
	return twMerge(clsx(classNames));
};
