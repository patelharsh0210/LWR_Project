import { LightningElement, api } from "lwc";

import { icon } from "@fortawesome/fontawesome-svg-core";
import {
	faLinkedin as linkedin,
	faGithub as github,
	faSalesforce as salesforce,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Renders the selected icon from the `fontawesome` library.
 * To add new icons, they should be added to the above `import` statement, as well as the `iconDefinitions` object within the class
 */
export default class Icon extends LightningElement {
	/**
	 * The name of the icon to display. This should match a key within the iconDefinitions object,
	 * @type {string}
	 */
	@api
	get iconName() {
		return this._iconName;
	}
	set iconName(value) {
		this._iconName = value;
		this._iconDef = this.iconDefinitions[value];
	}

	iconDefinitions = {
		linkedin,
		github,
		salesforce,
	};

	_iconName;
	_iconDef;

	/**
	 * When connected, adds the desired icon element to the template
	 */
	connectedCallback() {
		this.template.appendChild(icon(this._iconDef).node[0]);
	}
}
