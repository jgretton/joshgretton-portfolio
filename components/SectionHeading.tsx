export const SectionHeading = ({ heading }: { heading: string }) => {
	return (
		<div className="flex flex-row w-full items-center gap-10">
			<h2 className="text-xl  font-normal tracking-wide text-gray-900 dark:text-gray-200">
				{heading}
			</h2>
			<div className="h-px w-full bg-gray-400  rounded-full flex-1" />
		</div>
	);
};
