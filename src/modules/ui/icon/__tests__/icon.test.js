import { createElement } from "lwc";
import Icon from "ui/icon";

let element; // Declare an element reference which can be shared between tests.
describe("ui-icon", () => {
	beforeEach(() => {
		element = createElement("ui-icon", {
			is: Icon,
		});
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("default attributes", () => {
		expect(element.iconName).toBeFalsy();
	});

	it("should display an icon", async () => {
		element.iconName = "linkedin";
		document.body.appendChild(element);

		await Promise.resolve();
		const svgEl = element.shadowRoot.querySelector("svg");
		// Ensure the SVG element exists
		expect(svgEl).toBeTruthy();
	});

	it("is accessible", async () => {
		element.iconName = "linkedin";
		document.body.appendChild(element);
		await Promise.resolve();
		expect(element).toBeAccessible();
	});
});
