import { getRelatedProjects } from "@/lib/content";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const RealtedProjects = ({ slug }: { slug: string }) => {
  const projects: Project[] = getRelatedProjects(slug);

  return (
    <div className="w-full">
        <SectionHeading heading="Related Projects" />
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-y-20  lg:gap-y-32">
        {projects.map((project, index) => (
          <article key={index} className="h-auto">
            <ProjectCard.Minimal project={project} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default RealtedProjects;
