import { createElement } from "lwc";
import Banner from "ui/banner";

let element; // Declare an element reference which can be shared between tests.
describe("ui-banner", () => {
	beforeEach(() => {
		element = createElement("ui-banner", {
			is: Banner,
		});
	});

	afterEach(() => {
		// The jsdom instance is shared across test cases in a single file so reset the DOM
		while (document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
	});

	it("default properties", () => {
		document.body.appendChild(element);
		expect(element.title).toBeUndefined();
		expect(element.subtitle).toBeUndefined();
		expect(element.typeWriterEffect).toBe(true);
	});

	it("should warn in the console when `title` is not set", () => {
		const consoleWarnSpy = jest.spyOn(console, "warn");
		document.body.appendChild(element);
		expect(consoleWarnSpy).toHaveBeenCalled();
	});

	it("should render the provided title and subtitle properties", () => {
		const testTitle = "I am a title";
		const testSubtitle = "I am a subtitle";
		element.title = testTitle;
		element.subtitle = testSubtitle;

		document.body.appendChild(element);

		// The `title` property getter, and the rendered `h1` in the banner should both have the provided text content
		const titleEl = element.shadowRoot.querySelector("h1");
		expect(element.title).toBe(testTitle);
		expect(titleEl.textContent).toBe(testTitle);

		// The `subtitle` property getter, and the rendered `h2` in the banner should both have the provided text content
		const subtitleEl = element.shadowRoot.querySelector("h2");
		expect(element.subtitle).toBe(testSubtitle);
		expect(subtitleEl.textContent).toBe(testSubtitle);
	});

	it("should apply the typewriter effect when the property is updated", async () => {
		element.typeWriterEffect = false;
		document.body.appendChild(element);

		// If typeWriterEffect is false, this querySelector shouldn't return anything
		let typeWriterEl = element.shadowRoot.querySelector("div.typewriter");
		expect(typeWriterEl).toBe(null);

		// After updating the property, the selector should return the h1 element
		element.typeWriterEffect = true;

		await Promise.resolve();
		typeWriterEl = element.shadowRoot.querySelector("div.typewriter");
		expect(typeWriterEl).toBeTruthy();
	});

	it("is accessible", async () => {
		const testTitle = "I am a title";
		const testSubtitle = "I am a subtitle";
		element.title = testTitle;
		element.subtitle = testSubtitle;

		document.body.appendChild(element);
		await Promise.resolve();
		expect(element).toBeAccessible();
	});
});
