import Hero from "@/components/hero";
import WorkItem from "@/components/workCard";
// import { liveProjects } from "@/projects.json/liveProjects";
import liveProjects from "@/data/projects.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}

      <Hero>
        Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
        I&apos;m a <span className="text-blue-300">Developer </span> based
        <br />
        in the UK.
      </Hero>

      {/* projects */}
      <div className="bg-white dark:bg-[#15202b]">
        <section className="mt-96 opacity-100 transition-opacity   duration-300 xl:container  sm:mt-[60svh]  sm:px-10 xl:mx-auto">
          <div
            id="liveProjects"
            className="relative z-10  mb-32 mt-[60svh] w-full px-2 sm:mb-44"
          >
            <h3 className="mb-5 transform px-4 text-xl font-light tracking-widest sm:sticky sm:top-[16rem] sm:float-left sm:mb-0 sm:h-0 sm:origin-top-left sm:-translate-x-12 sm:-rotate-90 sm:px-0 sm:text-4xl">
              <span className="text-blue-300 "> Projects</span>
            </h3>
            <div className="mx-auto w-full ">
              {liveProjects.map((item, index) => {
                const {
                  title,
                  tags,
                  live_href,
                  github_href,
                  image,
                  slug,
                  small_description,
                } = item;
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
                      small_description={small_description}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
