import Hero from "@/components/hero";
import WorkItem from "@/components/workCard";
// import { liveProjects } from "@/projects.json/liveProjects";
import { clientWork, personalWork } from "@/data/projects";
import Image from "next/image";
import Card from "@/components/card";

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
      <div className=" rounded-t-[3rem] bg-gray-100 dark:bg-[#15202b]">
        <section className=" mt-96 opacity-100   transition-opacity duration-300  xl:container  sm:mt-[60dvh] sm:px-10 xl:mx-auto">
          <div className="relative z-10 mt-[60dvh] w-full  px-2 py-20 ">
            <h2 className="text-xl font-light uppercase tracking-wide text-gray-500">
              Client Work
            </h2>
            <div
              id="clientWork"
              className="place-items- mx-auto  mt-16 grid w-full scroll-m-44 gap-20 lg:grid-cols-2"
            >
              {clientWork.map((item, index) => {
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
                  <article key={index} className="relative mb-10 ">
                    <Card
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
            <h2 className="mt-20 text-xl font-light uppercase tracking-wide text-gray-500">
              Personal Projects
            </h2>
            <div
              id="personalProjects"
              className=" mt-10 grid w-full scroll-m-44 grid-cols-1 place-items-center gap-20 lg:grid-cols-2 lg:place-items-start"
            >
              {personalWork.map((item, index) => {
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
                  <article key={index} className="relative mb-10 w-full ">
                    <Card
                      title={title}
                      tags={tags}
                      live_href={live_href}
                      github_href={github_href}
                      image={image}
                      slug={slug}
                      small_description={small_description}
                      personal
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
