import Image from "next/image";
import PhotoOfMe from "@/public/Images/about/photo-of-me.jpg";
import Hero from "@/components/hero";
import Markdown from "react-markdown";
import { aboutMeText } from "@/data/about";

export const metadata = {
  title: "About || Josh Gretton",
  description:
    "Portfolio of a Uk based, self-taught front-end developer specialising in Nextjs and TailwindCss.",
  keywords:
    "Josh Gretton, front end web developer, web development portfolio, HTML, CSS, JavaScript, React, responsive design, UK developer, NextJs, tailwindcss, self-taught developer",
};

const AboutPage = () => {
  return (
    <>
      <Hero>
        <h1 className="max-w-xl">
          Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
          I&apos;m a <span className="text-blue-300">Developer </span> based
          <br />
          in the UK.
        </h1>
      </Hero>

      <div className="bg-gray-50 pb-10 dark:bg-dark">
        <section className="relative mx-auto h-full w-full bg-gray-50 px-4 xl:container dark:bg-[#15202b] sm:px-12">
          <div className="z-10 mb-32 w-full bg-gray-50 dark:bg-[#15202b]">
            <div className="flex flex-col gap-14 md:flex-row">
              <div className="w-6/6 top-28 self-center sm:h-1/2 md:sticky md:self-auto lg:h-full lg:w-1/3">
                <Image
                  src={PhotoOfMe}
                  alt="Photo of me"
                  className="h-1/3 rounded-2xl object-contain md:w-full lg:h-1/3 lg:object-cover lg:object-top"
                  placeholder="blur"
                />
              </div>
              <article className="relative mt-5 h-auto w-full lg:w-2/3">
                <Markdown className="prose min-w-full font-light tracking-wide dark:prose-invert prose-headings:font-light prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal hover:prose-a:dark:text-blue-500">
                  {aboutMeText.markdown}
                </Markdown>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
