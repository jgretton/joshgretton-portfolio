import CardList from "@/components/CardList";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/content";
import { Project } from "@/types";

export default function Home() {
  const projects: Project[] = getAllProjects();

  const currentlyBuilding = projects.filter(
    (p) => p.status === "building" && p.draft !== true,
  );
  const clientProjects = projects.filter(
    (p) => p.status === "client" && p.draft !== true,
  );
  const personalProjects = projects.filter(
    (p) => p.status === "personal" && p.draft !== true,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Josh Gretton",
            url: "https://www.joshgretton.co.uk",
            jobTitle: "Web Developer & Designer",
            worksFor: {
              "@type": "Organization",
              name: "Self-Employed",
            },
          }),
        }}
      />
      <Hero>
        <h1 className="max-w-xl text-balance">
          Hi! - My name is <span className="text-blue-500">Josh</span>. I&apos;m
          a <span className="text-blue-500">Developer </span> based in the UK.
        </h1>
      </Hero>

      {/* projects */}
      <div className="dark:bg-dark relative bg-gray-50">
        <section className="px-2 opacity-100 transition-opacity duration-300 xl:container sm:px-10 xl:mx-auto">
          <div className="relative z-10 w-full px-2 pb-20">
            <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
              Currently Building
            </h2>
            <div
              id="currentlyWorkingOn"
              className="mt-10 flex w-full scroll-m-44 flex-col gap-5 md:flex-row"
            >
              {/* <CurrentlyWorkingCard /> */}
              {currentlyBuilding.map((project, index) => (
                <article key={index} className="h-auto">
                  <ProjectCard project={project} />
                </article>
              ))}
            </div>
          </div>
          <div className="relative z-10 w-full px-2 pb-20">
            <CardList
              projects={personalProjects}
              heading={"Personal Projects"}
            />

            <div className="mt-20">
              <CardList projects={clientProjects} heading={"Client Work"} />
            </div>

            {/* <h2 className="mt-20 text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
              Client Work
            </h2>
            <div
              id="clientWork"
              className="mt-10 grid w-full scroll-m-44 grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-5 md:gap-y-16 lg:grid-cols-3"
            >
              {clientProjects.map((project, index) => {
                return (
                  <article key={index} className="h-auto">
                    <ProjectCard project={project} />
                  </article>
                );
              })}
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
