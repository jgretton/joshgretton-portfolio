import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import MdxContent from "@/components/MdxContent";
import TopOfPage from "@/components/TopOfPage";
import {
	getAllUpdates,
	getProjectBySlug,
	getUpdateBySlug,
} from "@/lib/content";
import Link from "next/link";
import { notFound } from "next/navigation";

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

export async function generateMetadata(props: any) {
	const { slug, updateSlug } = await props.params;
	const update = getUpdateBySlug(slug, updateSlug);
	const project = getProjectBySlug(slug);

	if (!update || !project) {
		return {
			title: "Update Not Found | Josh Gretton",
			description: "The requested update could not be found.",
		};
	}

	return {
		title: `${update.title} — ${project.title} | Josh Gretton`,
		description: update.summary,
	};
}

export async function generateStaticParams() {
	try {
		const updates = getAllUpdates();

		return updates.map((update) => ({
			slug: update.projectSlug,
			updateSlug: update.slug,
		}));
	} catch (error) {
		console.error("Error generating static params for updates:", error);
		return [];
	}
}

const Page = async (props: any) => {
	const { slug, updateSlug } = await props.params;

	const update = getUpdateBySlug(slug, updateSlug);
	const project = getProjectBySlug(slug);

	if (!update || !project) {
		return notFound();
	}

	const { title, date, summary, content } = update;

	return (
		<>
			<Hero back backHref={`/${slug}`} heading={title} />

			<div className="dark:bg-dark relative z-20 bg-gray-50 pb-10">
				<AnimatedSection className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 pb-20 max-w-5xl sm:px-12">
					<div className="flex flex-col gap-8 border-t py-10 border-gray-200 sm:flex-row sm:items-start dark:border-white/10">
						<div className="shrink-0">
							<p className="text-base font-medium">Project</p>
							<Link
								href={`/${project.slug}`}
								className="text-sm font-light text-text decoration-2 underline-offset-2 transition-colors hover:text-accent hover:underline dark:text-stone-300 dark:hover:text-accent"
							>
								{project.title}
							</Link>
						</div>
						<div className="shrink-0">
							<p className="text-base font-medium">Date</p>
							<p className="text-sm font-light text-text dark:text-stone-300">
								{formatDate(date)}
							</p>
						</div>
					</div>

					<article className="grid">
						<MdxContent source={content} />
					</article>
				</AnimatedSection>

				<TopOfPage />
			</div>
		</>
	);
};

export default Page;
