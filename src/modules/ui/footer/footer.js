import { LightningElement, api } from "lwc";

/**
 * A simple footer component, which can display a dynamic collection of icon links
 */
export default class Footer extends LightningElement {
	/**
	 * The main text to display in the footer
	 * @type {string}
	 */
	@api
	get footerText() {
		return this._footerText;
	}
	set footerText(value) {
		this._footerText = value;
	}

	/**
	 * An array of icon links to display
	 * @type {object[]}
	 */
	@api
	get iconLinks() {
		return this._iconLinks;
	}
	set iconLinks(value) {
		this._iconLinks = value;
	}

	_footerText;
	_iconLinks;
}
