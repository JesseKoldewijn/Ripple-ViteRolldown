import { mount } from "ripple";
// @ts-expect-error
import { App } from "./app.ripple";

import "./styles/tailwind.css";

mount(App, {
	target: document.getElementById("app")!,
});
