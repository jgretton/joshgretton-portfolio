import React from "react";
import { getAllProjects, getRelatedProjects } from "@/lib/content";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

const RealtedProjects = ({ slug }: { slug: string }) => {
  const projects: Project[] = getRelatedProjects(slug);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
        Related Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3 lg:gap-y-32">
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
