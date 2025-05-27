import { LightningElement, api } from "lwc";

export default class ContentCard extends LightningElement {
	/**
	 * The type of content card to display
	 * @type {string} text | link | image
	 * @default text
	 */
	@api
	get type() {
		return this._type;
	}
	set type(value) {
		this._type = value;
	}

	/**
	 * The title of the card
	 * @type {string} text
	 * @default text
	 */
	@api
	get title() {
		return this._title;
	}
	set title(value) {
		this._title = value;
	}

	/**
	 * The text content of the card
	 * @type {string}
	 * @default text
	 */
	@api
	get text() {
		return this._text;
	}
	set text(value) {
		this._text = value;
	}

	get isText() {
		return this.type === "text";
	}

	_type = "text";
	__title;
	_text;
}
