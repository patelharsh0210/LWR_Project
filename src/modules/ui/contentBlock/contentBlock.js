import { LightningElement, api } from "lwc";

export default class ContentBlock extends LightningElement {
	/**
	 * The heading to display at the start of this content block
	 * @type {string}
	 */
	@api
	get heading() {
		return this._heading;
	}
	set heading(value) {
		this._heading = value;
	}

	/**
	 * Toggles the waving hand emoji as part of the heading
	 * @type {boolean}
	 * @default true
	 */
	@api
	get showWaveEmoji() {
		return this._showWaveEmoji;
	}
	set showWaveEmoji(value) {
		this._showWaveEmoji = value;
	}

	/**
	 * An array of strings which will render as paragraphs within the content block
	 * @type {string[]}
	 */
	@api
	get paragraphs() {
		return this._paragraphs;
	}
	set paragraphs(value) {
		this._paragraphs = value;
	}

	_heading;
	_showWaveEmoji = true;
	_paragraphs = [];
}
