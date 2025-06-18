import React from "react";
import ProjectCard from "./projectCard";

const CardList = ({ projects, heading }) => {
  return (
    <>
      <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
        {heading}
      </h2>
      <div
        id="personalProjects"
        className="mt-10 flex w-full scroll-m-44 flex-col gap-10 md:flex-row md:gap-5"
        // className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(300px,min(400px,1fr)))] gap-10 md:gap-5"
      >
        {projects.map((project, index) => (
          <article key={index} className="h-auto">
            <ProjectCard project={project} />
          </article>
        ))}
      </div>
    </>
  );
};

export default CardList;
