import Image from "next/image";
import React from "react";

import { readFileSync } from "fs";
import path from "path";

import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Hero from "@/components/hero";
import Markdown from "react-markdown";
import TopOfPage from "@/components/topOfPage";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/content";

export async function generateMetadata(props, parent) {
  const params = await props.params;
  // read route params
  const slug = params.slug;

  return {
    title: `${slug} | Josh Gretton`,
    description:
      "Volleyscore is a simple scoreboard app designed to track volleyball matches. I developed it to give referees, scorekeepers, and players a user-friendly scoring solution for both official and recreational games.",
    keywords:
      "Josh Gretton, front end web developer, web development portfolio, HTML, CSS, JavaScript, React, responsive design, UK developer, NextJs, tailwindcss, self-taught developer",
  };
}

const getProjectsData = (personal) => {
  let filePath;
  if (personal)
    filePath = path.join(process.cwd(), "data", "personalWork.json");
  else filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

const Page = async (props) => {
  const params = await props.params;
  const { slug } = params;

  const project = getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }
  const {
    title,
    technologies,
    coverImage,
    liveUrl,
    content,
    client,
    image_alt,
  } = project;

  return (
    <>
      <Hero back>
        <h1>{title}</h1>
      </Hero>
      <div className="z-20 bg-gray-50 pb-10 dark:bg-dark">
        <section className="relative mx-auto h-full w-full bg-gray-50 px-4 xl:container dark:bg-dark sm:px-12">
          <div className="sm:h-134 group relative h-80 w-full overflow-hidden">
            <Image
              src={coverImage}
              alt={image_alt}
              className="h-full w-full rounded-t-lg object-cover object-top"
              priority
              fill
            />
          </div>
          <div className="relative flex flex-col gap-x-5 md:flex-row">
            <aside className="top-32 mt-20 h-fit w-full md:sticky md:w-1/4">
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

              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  className="sm:text-md group mb-3 mt-5 inline-flex items-center gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
                >
                  See the live project
                  <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </aside>
            <article className="mt-20 grid flex-1">
              <Markdown className="prose-headings:f prose min-w-full font-light tracking-wide dark:prose-invert prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl hover:prose-a:dark:text-blue-500 prose-img:dark:border-slate-700">
                {content}
              </Markdown>
            </article>
          </div>
          <TopOfPage />
        </section>
      </div>
    </>
  );
};

export default Page;
