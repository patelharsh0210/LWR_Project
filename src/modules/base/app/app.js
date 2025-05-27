import { LightningElement } from "lwc";

import { MAIN_CONTENT } from "./mainContent";
/**
 * The base-level app. This should primarily be used to determine the layout of ui-level components.
 * Make sure you refer to semantic elements here: https://www.w3schools.com/html/html5_semantic_elements.asp
 */
export default class HelloWorldApp extends LightningElement {
	CONTENT = MAIN_CONTENT;

	/**
	 * When first loading the application, log some technical info to the console, for anyone who may be interested in checking it out.
	 */
	connectedCallback() {
		document.documentElement.lang = "en";
		document.title = "Lachlan Peacock";

		console.info(
			`%c${this.CONTENT.DEVELOPER_INFO.introduction.text}`,
			this.CONTENT.DEVELOPER_INFO.introduction.style,
		);
		console.info(
			this.CONTENT.DEVELOPER_INFO.info.text,
			this.CONTENT.DEVELOPER_INFO.info.body,
		);
	}
}
