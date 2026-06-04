import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import { getPageBySlug } from '@/lib/content';
import { generateJsonLd } from '@/lib/generateJsonld';
import PhotoOfMe from '@/public/Images/about/photo-of-me.jpg';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
	const page = getPageBySlug('about');

	if (!page) {
		return {
			title: 'Josh Gretton',
			description: 'The requested page could not be found.',
		};
	}

	const { seo } = page;

	return {
		title: seo.title,
		description: seo.description,
		keywords: seo.keywords.join(', '),
		authors: [{ name: seo.author }],
		creator: seo.author,
		robots: seo.robots,

		// Open Graph
		openGraph: {
			title: seo.openGraph.title,
			description: seo.openGraph.description,
			type: seo.openGraph.type,
			url: seo.openGraph.url,
			images: [
				{
					url: seo.openGraph.image,
					alt: seo.openGraph.imageAlt,
				},
			],
			siteName: 'Josh Gretton Portfolio',
		},

		// Twitter
		twitter: {
			card: seo.twitter.card,
			title: seo.twitter.title,
			description: seo.twitter.description,
			images: [seo.twitter.image],
		},

		// Canonical URL
		alternates: {
			canonical: seo.canonical,
		},

		// Additional metadata
		other: {
			'application-name': 'Josh Gretton Portfolio',
		},
	};
}
const AboutPage = () => {
	const aboutPage = getPageBySlug('about');
	if (!aboutPage) {
		return notFound();
	}
	const { content, seo } = aboutPage;

	const jsonLd = generateJsonLd(seo);
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>

			<Hero heading="Joshua Gretton" subHeading="Developer based in the UK" />

			<div className="dark:bg-dark bg-gray-50 pb-10">
				<AnimatedSection className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 max-w-5xl sm:px-12">
					<div className="dark:bg-dark z-10 mb-32 w-full bg-gray-50">
						<div className="flex flex-col gap-14 md:flex-row">
							<div className="w-6/6 top-1/3 self-center sm:h-1/2 md:sticky md:self-auto lg:h-full lg:w-1/3">
								<Image
									src={PhotoOfMe}
									alt="Photo of me"
									className="h-1/3 rounded-2xl object-contain md:w-full lg:h-1/3 lg:object-cover lg:object-top"
									placeholder="blur"
								/>
							</div>
							<article className="relative h-auto w-full lg:w-2/3">
								<div className="prose dark:prose-invert prose-headings:font-medium prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl hover:prose-a:dark:text-blue-500 prose-img:dark:border-slate-700 min-w-full font-light">
									<MDXRemote source={content} />
								</div>
							</article>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</>
	);
};

export default AboutPage;
