import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import MdxContent from '@/components/MdxContent';
import { getTilSnippets } from '@/lib/content';
import { Til } from '@/types';

const TilPage = () => {
	const allTils = getTilSnippets();

	return (
		<>
			<Hero
				heading="Today I Learned"
				subHeading="Small snippets of things I have learned on my coding adventures"
			/>

			<div className="dark:bg-dark bg-gray-50 pb-10">
				<AnimatedSection className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 max-w-5xl sm:px-12">
					{allTils.length === 0 ? (
						<p className="text-stone-500 dark:text-stone-400 py-8">
							Nothing here yet.
						</p>
					) : (
						<div className="grid">
							{allTils.map((til: Til) => {
								return (
									<div
										key={til.slug}
										className="py-8 min-w-full border-b border-rule last:border-b-0"
									>
										<div className="flex flex-wrap items-center gap-2 mb-2">
											<p className="text-xs font-normal text-stone-600/60 sm:text-sm dark:text-white/40">
												{new Date(til.date).toLocaleDateString('en-GB', {
													day: 'numeric',
													month: 'long',
													year: 'numeric',
												})}
											</p>
											<span className="text-stone-400/50 dark:text-white/20 text-xs">
												·
											</span>
											<div className="inline-flex gap-1">
												{til.tags.map((tag) => (
													<span
														key={tag}
														className="text-xs font-normal text-stone-600/60 dark:text-white/40 bg-stone-100 dark:bg-white/5 rounded-full px-2 py-0.5"
													>
														{tag}
													</span>
												))}
											</div>
										</div>
										<h2 className="text-xl tracking-wide text-gray-900 dark:text-gray-200">
											{til.title}
										</h2>
										<div className="border-l border-rule pl-3 my-3">
											<MdxContent source={til.content} />
										</div>
									</div>
								);
							})}
						</div>
					)}
				</AnimatedSection>
			</div>
		</>
	);
};

export default TilPage;
