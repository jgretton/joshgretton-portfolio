import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import MdxContent from "@/components/MdxContent";
import RealtedProjects from "@/components/RelatedProducts";
import TableOfContents from "@/components/TableOfContents";
import TopOfPage from "@/components/TopOfPage";
import UpdateBanner from "@/components/UpdateBanner";
import {
	getAllProjects,
	getMostRecentUpdate,
	getProjectBySlug,
} from "@/lib/content";
import { extractHeadings } from "@/lib/extractHeadings";
import { generateJsonLd } from "@/lib/generateJsonld";
import { Project } from "@/types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: any) {
	const params = await props.params;
	const slug = params.slug;
	const project: Project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found | Josh Gretton",
			description: "The requested project could not be found.",
		};
	}

	const { seo } = project;

	return {
		title: seo.title,
		description: seo.description,
		keywords: seo.keywords.join(", "),
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
			siteName: "Josh Gretton Portfolio",
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
			"application-name": "Josh Gretton Portfolio",
		},
	};
}

export async function generateStaticParams() {
	try {
		const projects = getAllProjects();

		// Ensure projects exist and have valid slugs
		if (!projects || projects.length === 0) {
			console.warn("No projects found for static generation");
			return [];
		}

		return projects
			.filter((project) => project.slug) // Filter out any projects without slugs
			.map((project) => ({
				slug: project.slug,
			}));
	} catch (error) {
		console.error("Error generating static params:", error);
		return []; // Return empty array to prevent build failure
	}
}
const Page = async (props: any) => {
	const { slug } = await props.params;

	const project: Project = getProjectBySlug(slug);

	const mostRecentUpdate = getMostRecentUpdate(slug);

	if (!project) {
		return notFound();
	}

	const {
		title,
		technologies,
		coverImage,
		headerImage,
		liveUrl,
		content,
		client,
		image_alt,
		githubUrl,
		seo,
	} = project;

	const headings = extractHeadings(content);

	// Generate JSON-LD structured data
	const jsonLd = generateJsonLd(seo);

	return (
		<>
			{/* Add JSON-LD structured data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>

			<Hero back heading={title} />

			<div className="dark:bg-dark relative z-20 bg-gray-50 pb-10">
				<AnimatedSection className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 pb-20 max-w-5xl sm:px-12">
					<div className="flex flex-col gap-8 border-t py-10 border-gray-200 sm:flex-row sm:items-start  dark:border-white/10">
						{/* <div className="flex flex-col gap-12 sm:gap-16"> */}
						<div className="shrink-0">
							<p className="text-base font-medium">Client</p>
							<p className="text-sm font-light text-text dark:text-stone-300">
								{client}
							</p>
						</div>
						<div>
							<p className="text-base font-medium">Technologies used</p>
							<p className="text-sm font-light text-text dark:text-stone-300n">
								{technologies.join(" · ")}
							</p>
						</div>
						{/* </div> */}

						{(liveUrl || githubUrl) && (
							<div className="flex shrink-0 flex-col items-start sm:ml-auto gap-2">
								{liveUrl && (
									<Link
										href={liveUrl}
										target="_blank"
										className="group inline-flex items-center gap-1.5 text-sm font-light text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-gray-950 hover:underline dark:text-white/80 dark:hover:text-white"
									>
										<ArrowTopRightOnSquareIcon className="size-4" />
										Live site
									</Link>
								)}
								{githubUrl && (
									<Link
										href={githubUrl}
										target="_blank"
										className="group inline-flex items-center gap-1.5 text-sm font-light text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-gray-950 hover:underline dark:text-white/80 dark:hover:text-white"
									>
										<svg
											role="img"
											viewBox="0 0 24 24"
											className="size-4"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
										</svg>
										GitHub
									</Link>
								)}
							</div>
						)}
					</div>
					<div className="sm:h-134 group relative h-80 w-full overflow-hidden ">
						<Image
							src={headerImage ?? coverImage}
							alt={image_alt}
							className="h-full w-full rounded-t-lg object-cover object-top"
							priority
							fill
						/>
					</div>
					<UpdateBanner update={mostRecentUpdate} projectSlug={slug} />
					<div className="relative flex flex-col gap-x-5 md:flex-row">
						<TableOfContents headings={headings} />
						<article className="mt-18 grid flex-1">
							<MdxContent source={content} />
						</article>
					</div>
				</AnimatedSection>

				<section className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 pt-20 max-w-5xl sm:px-12">
					<RealtedProjects slug={slug} />
				</section>

				<TopOfPage />
			</div>
		</>
	);
};

export default Page;
