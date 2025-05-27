import { createElement } from "lwc";
import ContentBlock from "ui/contentBlock";

let element; // Declare an element reference which can be shared between tests.
describe("ui-content-block", () => {
	beforeEach(() => {
		element = createElement("ui-content-block", {
			is: ContentBlock,
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
		expect(element.heading).toBeUndefined();
		expect(element.showWaveEmoji).toBe(true);
		expect(element.paragraphs.length).toBe(0);
	});

	it("should render the provided heading content", () => {
		const testHeading = "Hello, test world!";
		element.heading = testHeading;
		element.showWaveEmoji = false;
		document.body.appendChild(element);

		// The `heading` property getter, and the rendered `h1` should both have the provided text content
		const headingEl = element.shadowRoot.querySelector("h1");
		expect(element.heading).toBe(testHeading);
		expect(headingEl.textContent).toBe(testHeading);
	});

	it("should render the expected number of paragraphs", () => {
		const testParagraphs = ["p1", "p2", "p3", "p4"];
		element.paragraphs = testParagraphs;
		document.body.appendChild(element);

		// The `paragraphs` property will be iterated over.
		// The number of `p` elements should match the length of the array.
		const paragraphEls = element.shadowRoot.querySelectorAll("p");
		expect(paragraphEls.length).toBe(testParagraphs.length);
	});

	it("should render the waving hand emoji", () => {
		element.showWaveEmoji = true;
		document.body.appendChild(element);
		const wavingHandEl = element.shadowRoot.querySelector("span.emoji-wave");
		expect(wavingHandEl).toBeTruthy();
	});

	it("is accessible", async () => {
		document.body.appendChild(element);
		await Promise.resolve();
		expect(element).toBeAccessible();
	});
});
