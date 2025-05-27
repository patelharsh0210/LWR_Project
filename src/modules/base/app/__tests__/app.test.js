import { createElement } from "lwc";
import App from "base/app";

let element; // Declare an element reference which can be shared between tests.
describe("base-app", () => {
	beforeEach(() => {
		element = createElement("base-app", {
			is: App,
		});
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	// Essentially, this test ensures that the correct semantic structure of the base application is preserved
	it("should have the expected semantic elements", () => {
		document.body.appendChild(element);

		const headerEl = element.shadowRoot.querySelector("header");
		expect(headerEl).toBeTruthy();

		const mainEl = element.shadowRoot.querySelector("main");
		expect(mainEl).toBeTruthy();

		const footerEl = element.shadowRoot.querySelector("footer");
		expect(footerEl).toBeTruthy();
	});

	// This test will check this specific component
	// but it will also check the general accessibility status of the whole application in its default state
	it("is accessible", async () => {
		document.body.appendChild(element);
		await Promise.resolve();

		await expect(element).toBeAccessible();
		await expect(document).toBeAccessible();
	});
});
