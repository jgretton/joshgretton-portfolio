import Hero from "@/components/hero";
import { clientWork, personalWork } from "@/data/projects";
import Card from "@/components/card";

export const metadata = {
  title: "Josh Gretton",
  description:
    "Portfolio of a Uk based, self-taught front-end developer specialising in Nextjs and TailwindCss.",
  keywords:
    "Josh Gretton, front end web developer, web development portfolio, HTML, CSS, JavaScript, React, responsive design, UK developer, NextJs, tailwindcss, self-taught developer",
};

export default function Home() {
  return (
    <>
      <Hero>
        Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
        I&apos;m a <span className="text-blue-300">Developer </span> based
        <br />
        in the UK.
      </Hero>

      {/* projects */}
      <div className="relative bg-white dark:bg-[#15202b]">
        <section className="px-2 opacity-100 transition-opacity duration-300 xl:container sm:px-10 xl:mx-auto">
          <div className="relative z-10 w-full px-2 pb-20">
            <h2 className="font-light uppercase tracking-wide text-gray-500 sm:text-xl">
              Personal Projects
            </h2>
            <div
              id="personalProjects"
              className="mt-10 grid w-full scroll-m-44 grid-cols-1 place-items-center gap-20 lg:grid-cols-2 lg:place-items-start"
            >
              {personalWork.map((item, index) => {
                const {
                  title,
                  tags,
                  live_href,
                  github_href,
                  image,
                  image_alt,
                  mobileImage,
                  slug,
                  small_description,
                  more_detail,
                  built_with,
                } = item;
                return (
                  <article key={index} className="relative h-full w-full">
                    <Card
                      title={title}
                      tags={tags}
                      live_href={live_href}
                      github_href={github_href}
                      image={image}
                      image_alt={image_alt}
                      mobileImage={mobileImage}
                      slug={slug}
                      small_description={small_description}
                      personal
                      more_detail={more_detail}
                      built_with={built_with}
                    />
                  </article>
                );
              })}
            </div>

            <h2 className="mt-20 font-light uppercase tracking-wide text-gray-500 sm:text-xl">
              Client Work
            </h2>
            <div
              id="clientWork"
              className="mt-10 grid w-full scroll-m-44 grid-cols-1 place-items-center gap-20 lg:grid-cols-2 lg:place-items-start"
            >
              {clientWork.map((item, index) => {
                const {
                  title,
                  tags,
                  live_href,
                  github_href,
                  image,
                  image_alt,
                  mobileImage,
                  slug,
                  small_description,
                  more_detail,
                  built_with,
                } = item;
                return (
                  <article key={index} className="relative mb-10 grid w-full">
                    <Card
                      title={title}
                      tags={tags}
                      live_href={live_href}
                      github_href={github_href}
                      image={image}
                      image_alt={image_alt}
                      mobileImage={mobileImage}
                      slug={slug}
                      small_description={small_description}
                      more_detail={more_detail}
                      built_with={built_with}
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
