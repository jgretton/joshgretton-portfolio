import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Hero from "@/components/Hero";
import TopOfPage from "@/components/TopOfPage";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/content";
import RealtedProjects from "@/components/RelatedProducts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Project } from "@/types";
import { generateJsonLd } from "@/lib/generateJsonld";
import AnimatedSection from "@/components/AnimatedSection";

export async function generateMetadata(props: any) {
  const params = await props.params;
  const slug = params.slug;
  const project: Project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Josh Gretton",
      description: "The requested project could not be found.",
    };
  }

  const { seo } = project;

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

const Page = async (props: any) => {
  const params = await props.params;
  const { slug } = params;

  const project: Project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const {
    title,
    technologies,
    coverImage,
    headerImage,
    liveUrl,
    content,
    client,
    image_alt,
    githubUrl,
    seo,
  } = project;

  // Generate JSON-LD structured data
  const jsonLd = generateJsonLd(seo);

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Hero back>
        <h1>{title}</h1>
      </Hero>
      <div className="dark:bg-dark relative z-20 bg-gray-50 pb-10">
        <AnimatedSection className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 py-20 xl:container sm:px-12">
          <div className="sm:h-134 group relative h-80 w-full overflow-hidden">
            <Image
              src={headerImage ?? coverImage}
              alt={image_alt}
              className="h-full w-full rounded-t-lg object-cover object-top"
              priority
              fill
            />
          </div>
          <div className="relative flex flex-col gap-x-5 md:flex-row">
            <aside className="top-10 mt-20 h-fit w-full md:sticky md:w-1/4">
              <p className="text-base font-medium">Project Name</p>
              <p className="mb-5 ml-2 text-sm font-light">{title}</p>
              <p className="text-base font-medium">Client</p>
              <p className="mb-5 ml-2 text-sm font-light">{client}</p>

              <p className="text-base font-medium">Technologies used</p>
              <ul className="ml-2">
                {technologies.map((tag, index) => (
                  <li className="text-sm font-light" key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3">
                {liveUrl && (
                  <Link
                    href={liveUrl}
                    target="_blank"
                    className="sm:text-md group inline-flex items-center gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
                  >
                    See the live project
                    <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                )}
                {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    className="sm:text-md group inline-flex items-center gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
                  >
                    View Github Repository
                    <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </aside>
            <article className="mt-20 grid flex-1">
              <div className="prose-headings:f prose dark:prose-invert prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl hover:prose-a:dark:text-blue-500 prose-img:dark:border-slate-700 min-w-full font-light tracking-wide">
                <MDXRemote source={content} />
              </div>
            </article>
          </div>
        </AnimatedSection>
        <section className="dark:bg-dark relative mx-auto h-full w-full bg-gray-50 px-4 pt-20 xl:container sm:px-12">
          <RealtedProjects slug={slug} />
        </section>

        <TopOfPage />
      </div>
    </>
  );
};

export default Page;
