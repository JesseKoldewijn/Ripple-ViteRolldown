import { mount } from 'ripple';
// @ts-expect-error
import { App } from './app.ripple';

import './styles/tailwind.css';
import { getInitialTheme } from './logic/theme';
import { AppProps } from './app.types';

const theme = getInitialTheme();

document.documentElement.classList.remove('light', 'dark');
document.documentElement.classList.add(theme);

mount(App, {
	props: {
		theme,
	} satisfies AppProps,
	target: document.getElementById('app')!,
});
