import React from 'react'
import CardList from './cardList'
import { getAllProjects, getRelatedProjects } from '@/lib/content';
import ProjectCard from './projectCard';

const RealtedProjects = ({slug}) => {
    const projects = getRelatedProjects(slug);
    
  return (
    <div className="w-full">
          <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
Related Projects            
          </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-10 mt-10 md:gap-y-20 lg:gap-y-32">
            {projects.map((project, index) => (
              <article key={index} className="h-auto ">
                <ProjectCard.Minimal project={project} />
              </article>
            ))}
          </div>
        </div>
  )
}

export default RealtedProjects