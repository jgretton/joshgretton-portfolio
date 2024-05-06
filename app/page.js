import WorkItem from "@/components/workCard";
// import { liveProjects } from "@/projects.json/liveProjects";
import liveProjects from "@/data/projects.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className={` fixed inset-x-0 top-0 -z-10 mx-auto flex h-[60svh] items-center bg-white px-6 pt-12 xl:container sm:px-16   `}
      >
        <span className="text-2xl font-light tracking-widest sm:text-4xl md:text-5xl">
          Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
          I&apos;m a <span className="text-blue-300">Developer </span> based
          <br />
          in the UK.
        </span>
      </section>

      {/* projects */}
      <section className="mt-96 bg-white opacity-100 transition-opacity   duration-300 xl:container  sm:mt-[60svh]  sm:px-10 xl:mx-auto">
        <div
          id="liveProjects"
          className="relative z-10  mb-32 mt-[60svh] w-full bg-white px-2 sm:mb-44"
        >
          <h3 className="mb-5 transform px-4 text-xl font-light tracking-widest sm:sticky sm:top-[22rem] sm:float-left sm:mb-0 sm:h-0 sm:origin-top-left sm:-translate-x-12 sm:-rotate-90 sm:px-0 sm:text-4xl">
            <span className="text-blue-300 "> Live</span> Projects
          </h3>
          <div className="mx-auto w-full ">
            {liveProjects.map((item, index) => {
              const { title, tags, live_href, github_href, image, slug } = item;
              return (
                <article
                  key={index}
                  className="relative mb-10 overflow-hidden sm:px-4"
                >
                  <WorkItem
                    title={title}
                    tags={tags}
                    live_href={live_href}
                    github_href={github_href}
                    image={image}
                    slug={slug}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
