import Hero from "@/components/hero";
import { clientWork, personalWork } from "@/data/projects";
import Card from "@/components/card";

import BluButtonDesktop from "@/public/Images/blubutton-web.jpg";
import BluButtonMobile from "@/public/Images/blubutton-mobile.jpg";
import CurrentlyWorkingCard from "@/components/CurrentlyWorkingCard";
import Card_2 from "@/components/card_2";

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
        <h1 className="max-w-xl text-balance">
          Hi! - My name is <span className="text-blue-500">Josh</span>. I&apos;m
          a <span className="text-blue-500">Developer </span> based in the UK.
        </h1>
      </Hero>

      {/* projects */}
      <div className="relative bg-gray-50 dark:bg-[#15202b]">
        <section className="px-2 opacity-100 transition-opacity duration-300 xl:container sm:px-10 xl:mx-auto">
          <div className="relative z-10 w-full px-2 pb-20">
            <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
              Currently Building
            </h2>
            <div
              id="currentlyWorkingOn"
              className="mt-10 flex w-full scroll-m-44 flex-col gap-5 md:flex-row"
            >
              <CurrentlyWorkingCard />
            </div>
          </div>
          <div className="relative z-10 w-full px-2 pb-20">
            <h2 className="text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
              Personal Projects
            </h2>
            <div
              id="personalProjects"
              className="mt-10 flex w-full scroll-m-44 flex-col gap-10 md:flex-row md:gap-5"
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
                  <article key={index} className="h-auto">
                    <Card_2
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

            <h2 className="mt-20 text-2xl font-normal tracking-wide text-gray-900 dark:text-gray-200">
              Client Work
            </h2>
            <div
              id="clientWork"
              className="mt-10 grid w-full scroll-m-44 grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-5 md:gap-y-16 lg:grid-cols-3"
              //   className="mt-10 flex w-full scroll-m-44 flex-col flex-wrap gap-10 md:flex-row md:gap-5"
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
                  <article key={index} className="h-auto">
                    <Card_2
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
