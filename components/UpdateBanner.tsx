import { Update } from "@/types";
import { ArrowPathIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

const UpdateBanner = ({
	update,
	projectSlug,
}: {
	update: Update | null | undefined;
	projectSlug: string;
}) => {
	if (!update) return null;

	const { slug, date, summary } = update;

	return (
		<Link
			href={`/${projectSlug}/${slug}`}
			className="group mt-10 block w-full rounded-lg border border-gray-200 p-4 transition-colors hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20 sm:p-5"
		>
			<div className="flex flex-row items-start gap-3 sm:gap-5">
				<ArrowPathIcon className="mt-0.5 size-4 shrink-0 text-stone-600 dark:text-white/60 sm:mt-1" />
				<div className="flex flex-1 flex-col gap-1">
					<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
						<p className="text-base font-medium">Latest update</p>
						<span className="text-stone-600/60 dark:text-white/40">·</span>
						<p className="text-xs text-stone-600/60 dark:text-white/40">
							{formatDate(date)}
						</p>
					</div>
					<p className="text-sm font-light text-text dark:text-stone-300">
						{summary}
					</p>
					<span className="mt-2 inline-flex items-center gap-1.5 text-sm font-light text-gray-700 transition-colors group-hover:text-accent dark:text-white/80 dark:group-hover:text-accent sm:hidden">
						Read update
						<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
					</span>
				</div>
				<span className="ml-auto hidden shrink-0 items-center gap-1.5 text-sm font-light text-gray-700 transition-colors group-hover:text-accent dark:text-white/80 dark:group-hover:text-accent sm:inline-flex">
					Read update
					<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
				</span>
			</div>
		</Link>
	);
};

export default UpdateBanner;
