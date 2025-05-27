const MAIN_CONTENT = {
	BANNER: {
		title: "hello, world!",
		subtitle: "Welcome to lachlanpeacock.com",
		typeWriterEffect: true,
	},
	BODY: {
		heading: "I'm Lachie",
		showWaveEmoji: true,
		paragraphs: [
			"I'm a software developer based in Melbourne, Australia. Passionate about building beautiful, high-quality software. I have extensive experience working with Salesforce, as well as full-stack JavaScript development.",
			"Besides being a dev, I love music and photography.",
		],
	},
	FOOTER: {
		text: `© ${new Date().getFullYear()} Lachlan Peacock`,
		iconLinks: [
			{
				href: "https://www.linkedin.com/in/lachlan-peacock/",
				ariaLabel: "Lachlan's LinkedIn Profile",
				target: "_blank",
				iconName: "linkedin",
			},
			{
				href: "https://github.com/l-peacock",
				ariaLabel: "Lachlan's GitHub Profile",
				target: "_blank",
				iconName: "github",
			},
			{
				href: "https://www.salesforce.com/trailblazer/lachlan-peacock",
				ariaLabel: "Lachlan's Salesforce Trailblazer Profile",
				target: "_blank",
				iconName: "salesforce",
			},
		],
	},
	DEVELOPER_INFO: {
		introduction: {
			text: "I see you, checking out the dev console 👀",
			style:
				"color: white; font-family: monospace; font-size: 1rem; padding: 0.5rem; border-radius: 0.5rem; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,0.7693671218487395) 0%, rgba(145,20,0,0.77) 85%, rgba(126,0,0,0.77) 100%);",
		},
		info: {
			text: "Since you're here, have some of the nerdy details:",
			body: {
				builtWith: "Lightning Web Components",
				framework: "https://lwc.dev/",
				repository: "https://github.com/l-peacock/lwr-portfolio-site",
				author: "Lachlan Peacock",
				hostedOn: "GitHub Pages",
				testFramework: "Jest",
			},
		},
	},
};

export { MAIN_CONTENT };
