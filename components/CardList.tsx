import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

const CardList = ({
  projects,
  heading,
}: {
  projects: Project[];
  heading: string;
}) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
        {heading}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-10 md:gap-y-20 2xl:grid-cols-3">
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
