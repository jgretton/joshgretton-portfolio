import Image from "next/image";
import PhotoOfMe from "@/public/Images/about/photo-of-me.jpg";
import Hero from "@/components/hero";
import Markdown from "react-markdown";
import { getPageBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Josh Gretton, a passionate web designer and JavaScript developer with expertise in Next.js and Tailwind CSS.",
  keywords:
    "About Josh Gretton, Web Developer, JavaScript Developer, Next.js Expert, Tailwind CSS Designer",
  openGraph: {
    title: "About Me | Josh Gretton",
    description:
      "Learn more about Josh Gretton, a passionate web designer and JavaScript developer with expertise in Next.js and Tailwind CSS.",
    url: "https://www.joshgretton.co.uk/about",
    siteName: "Josh Gretton Portfolio",
    alternates: {
      canonical: "https://www.joshgretton.co.uk/about",
    },
    images: [
      {
        url: "/og-image.svg", // Replace with an actual image URL for this page
        width: 1200,
        height: 630,
        alt: "Josh Gretton About Me Banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Josh Gretton",
    description:
      "Learn more about Josh Gretton, a passionate web designer and JavaScript developer with expertise in Next.js and Tailwind CSS.",
    images: ["/og-image.svg"], // Replace with an actual image URL for this page
  },
};

const AboutPage = () => {
  const aboutPage = getPageBySlug("about");
  if (!aboutPage) {
    return notFound();
  }
  const { title, content } = aboutPage;
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
        <section className="relative mx-auto h-full w-full bg-gray-50 px-4 xl:container dark:bg-dark sm:px-12">
          <div className="z-10 mb-32 w-full bg-gray-50 dark:bg-dark">
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
                  {content}
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
