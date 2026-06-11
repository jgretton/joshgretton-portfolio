import GithubSlugger from "github-slugger";

export interface Heading {
	text: string;
	id: string;
	level: 2 | 3;
}

export function extractHeadings(content: string): Heading[] {
	const slugger = new GithubSlugger();
	const headingRegex = /^(#{2,3})\s+(.+)$/gm;
	const headings: Heading[] = [];
	let match: RegExpExecArray | null;

	while ((match = headingRegex.exec(content)) !== null) {
		const level = match[1].length as 2 | 3;
		const text = match[2].trim();
		const id = slugger.slug(text);
		headings.push({ text, id, level });
	}

	return headings;
}