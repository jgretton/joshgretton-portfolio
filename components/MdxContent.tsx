import { evaluate } from "@mdx-js/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import * as runtime from "react/jsx-runtime";

interface MdxContentProps {
	source: string;
}

const MdxContent = async ({ source }: MdxContentProps) => {
	const { default: MDXContent } = await evaluate(source, {
		...(runtime as any),
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, { theme: { light: "catppuccin-macchiato", dark: "catppuccin-mocha" }, keepBackground: true }],
		],
	});

	return (
		<div className="prose dark:prose-invert prose-headings:font-medium prose-h2:text-2xl prose-h3:text-lg prose-a:hover:text-accent prose-strong:font-medium prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl dark:prose-img:shadow-none prose-a:dark:hover:text-accent prose-img:dark:border-slate-700 prose-code:font-normal prose-pre:overflow-x-auto max-w-full text-text dark:text-stone-300 font-light dark:prose-pre:bg-(--shiki-dark-bg) prose-pre:bg-(--shiki-light-bg) prose-pre:leading-loose">
			<MDXContent />
		</div>
	);
};

export default MdxContent;
