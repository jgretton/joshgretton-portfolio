import Image from "next/image";
import React from "react";

import { readFileSync } from "fs";
import path from "path";

import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Hero from "@/components/hero";
import Markdown from "react-markdown";
import TopOfPage from "@/components/topOfPage";

const getProjectsData = (personal) => {
  let filePath;
  if (personal)
    filePath = path.join(process.cwd(), "data", "personalWork.json");
  else filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

const Page = ({ params }) => {
  const { slug } = params;
  const projects = getProjectsData();
  const project = projects.find((p) => p.slug === slug);
  const { title, tags, image, live_href, image_alt, markdown, markdown_path } =
    project;

  return (
    <>
      <Hero back>{title}</Hero>
      <div className="z-20 bg-white pb-10 dark:bg-dark">
        <section className="relative mx-auto h-full w-full bg-white px-4 xl:container dark:bg-[#15202b] sm:px-12">
          <div className="sm:h-134 group relative h-80 w-full cursor-pointer overflow-hidden">
            <Image
              src={image}
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

              <p className="text-base font-medium">Technologies used</p>
              <ul className="ml-2">
                {tags.map((tag, index) => (
                  <li className="text-sm font-light" key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                href={live_href}
                target="_blank"
                className="sm:text-md group mb-3 mt-5 inline-flex items-center gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
              >
                See the live project
                <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </aside>
            <article className="mt-20 grid flex-1">
              <Markdown className="prose min-w-full font-light tracking-wide dark:prose-invert prose-headings:font-light prose-h2:text-2xl prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl prose-img:dark:border-slate-700">
                {markdown}
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
