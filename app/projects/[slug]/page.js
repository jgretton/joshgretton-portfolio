import Image from "next/image";
import React from "react";

import { readFileSync } from "fs";
import path from "path";

import Blubutton from "@/public/Blubuttonlaptop.png";
import Link from "next/link";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Hero from "@/components/hero";
import Markdown from "react-markdown";

const getProjectsData = (personal) => {
  let filePath;
  if (personal)
    filePath = path.join(process.cwd(), "data", "personalWork.json");
  else filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

const getMarkdownContent = (markdownPath) => {
  const fullPath = path.join(process.cwd(), markdownPath);
  return readFileSync(fullPath, "utf-8");
};
const Page = ({ params }) => {
  const { slug } = params;
  const projects = getProjectsData();
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  const { title, tags, image, live_href, image_alt, markdown, markdown_path } =
    project;

  let markdownContent = "";
  if (markdown_path) {
    try {
      markdownContent = getMarkdownContent(markdown_path);
    } catch (error) {
      console.error("Error reading markdown file:", error);
      markdownContent = "Error loading project description.";
    }
  }

  return (
    <div className="mx-auto px-6 pb-10 xl:container sm:px-12">
      {/* <p>back</p> */}
      <Hero back>{title}</Hero>
      {/* <div
        className={` fixed inset-x-0 top-0 -z-10 mx-auto flex h-[60svh] transform items-center bg-white px-4 pt-12 transition-all xl:container sm:px-16`}
      >
        <h2 className="text-2xl font-light tracking-widest sm:text-4xl md:text-5xl">
          <span className="text-blue-300">{title}</span>
        </h2>
      </div> */}
      <section className="relative mt-[60dvh] h-full w-full bg-white dark:bg-[#15202b]">
        <div className="sm:h-134 group relative h-80 w-full cursor-pointer overflow-hidden">
          <Image
            src={image}
            alt={image_alt}
            className="h-full w-full rounded-t-lg object-cover object-top"
            layout="fill"
            // placeholder="blur"
          />
        </div>
        <div className="relative flex flex-col md:flex-row">
          <div className="top-32 mt-20 h-fit w-full md:sticky md:w-1/4">
            <p className="text-base font-medium">Project Name</p>
            <p className="mb-5 ml-1 text-base font-light">{title}</p>

            <p className="text-base font-medium">Technologies used</p>
            <ul className="ml-1">
              {tags.map((tag, index) => (
                <li className="text-base font-light" key={index}>
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
          </div>
          <div className="mt-20 grid flex-1 gap-10">
            {/* text-2xl font-light tracking-wide transition-colors sm:text-3xl */}
            <Markdown className="prose min-w-full font-light tracking-wide dark:prose-invert prose-img:rounded-lg">
              {markdown}
            </Markdown>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
