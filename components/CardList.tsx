import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import { SectionHeading } from './SectionHeading';

const CardList = ({
	projects,
	heading,
}: {
	projects: Project[];
	heading: string;
}) => {
	return (
		<div className="w-full">
			<SectionHeading heading={heading} />
			<div className="mt-10 grid grid-cols-1 md:gap-x-10 gap-y-20">
				{projects.map((project, index) => (
					<article key={index} className="h-auto">
						<ProjectCard project={project} />
					</article>
				))}
			</div>
		</div>
	);
};

export default CardList;
