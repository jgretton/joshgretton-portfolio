import React from "react";
import ProjectCard from "./projectCard";

const CardList = ({ projects, heading }) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
        {heading}
      </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-x-10 mt-10 md:gap-y-20">
        {projects.map((project, index) => (
          <article key={index} className="h-auto ">
            <ProjectCard project={project} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default CardList;
