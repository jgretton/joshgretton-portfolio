import Image from "next/image";
import PhotoOfMe from "@/public/Images/about/photo-of-me.jpg";
import Hero from "@/components/Hero";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPageBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { generateJsonLd } from "@/lib/generateJsonld";

export async function generateMetadata() {
  const page = getPageBySlug("about");

  if (!page) {
    return {
      title: "Josh Gretton",
      description: "The requested page could not be found.",
    };
  }

  const { seo } = page;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(", "),
    authors: [{ name: seo.author }],
    creator: seo.author,
    robots: seo.robots,

    // Open Graph
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      type: seo.openGraph.type,
      url: seo.openGraph.url,
      images: [
        {
          url: seo.openGraph.image,
          alt: seo.openGraph.imageAlt,
        },
      ],
      siteName: "Josh Gretton Portfolio",
    },

    // Twitter
    twitter: {
      card: seo.twitter.card,
      title: seo.twitter.title,
      description: seo.twitter.description,
      images: [seo.twitter.image],
    },

    // Canonical URL
    alternates: {
      canonical: seo.canonical,
    },

    // Additional metadata
    other: {
      "application-name": "Josh Gretton Portfolio",
    },
  };
}
const AboutPage = () => {
  const aboutPage = getPageBySlug("about");
  if (!aboutPage) {
    return notFound();
  }
  const { content, seo } = aboutPage;

  const jsonLd = generateJsonLd(seo);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Hero>
        <h1 className="max-w-xl">
          Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
          I&apos;m a <span className="text-blue-300">Developer </span> based
          <br />
          in the UK.
        </h1>
      </Hero>

      <div className="dark:bg-dark bg-gray-50 pb-10">
        <section className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 xl:container sm:px-12">
          <div className="dark:bg-dark z-10 mb-32 w-full bg-gray-50">
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
                <div className="prose dark:prose-invert prose-headings:font-light prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal hover:prose-a:dark:text-blue-500 min-w-full font-light tracking-wide">
                  <MDXRemote source={content} />
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
