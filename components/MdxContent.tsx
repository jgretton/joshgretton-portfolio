import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

interface MdxContentProps {
	source: string;
}

const options = {
	theme: { light: 'catppuccin-macchiato', dark: 'catppuccin-mocha' },
	keepBackground: true,
};

const MdxContent = ({ source }: MdxContentProps) => {
	return (
		<div className="prose dark:prose-invert prose-headings:font-medium prose-h2:text-2xl prose-a:hover:text-blue-500 prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl prose-a:dark:hover:text-blue-500 prose-img:dark:border-slate-700  prose-code:font-light prose-pre:text-dark  prose-pre:overflow-x-auto max-w-full text-text font-light dark:prose-pre:bg-(--shiki-dark-bg) prose-pre:bg-(--shiki-light-bg) prose-pre:leading-loose">
			<MDXRemote
				source={source}
				options={{
					mdxOptions: {
						rehypePlugins: [[rehypePrettyCode, options]],
					},
				}}
			/>
		</div>
	);
};

export default MdxContent;
