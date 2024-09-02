import Hero from "@/components/hero";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

import { currentlyWorkingOn } from "@/data/projects";

const Page = () => {
  return (
    <>
      <Hero>
        <h1 className="max-w-xl text-balance">
          Volley<span className="text-blue-500"> Drills</span>
        </h1>
      </Hero>

      <section className="relative mx-auto max-w-7xl bg-white px-4 dark:bg-[#15202b]">
        <div className="relative flex flex-col gap-x-5 md:flex-row">
          <aside className="top-32 mt-20 h-fit w-full md:sticky md:w-1/4">
            <p className="text-base font-medium">Project Name</p>
            <p className="mb-5 ml-2 text-sm font-light">Volley Drills</p>

            <p className="text-base font-medium">Technologies used</p>
            <ul className="ml-2">
              {/* {tags.map((tag, index) => (
                  <li className="text-sm font-light" key={index}> {tag} 
                  </li>
                ))} */}
            </ul>
            <Link
              // href={live_href}
              href={"#"}
              target="_blank"
              className="sm:text-md group mb-3 mt-5 inline-flex items-center gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
            >
              See the live project
              <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </aside>
          <article className="mt-20 grid flex-1">
            <Markdown className="prose min-w-full font-light tracking-wide dark:prose-invert prose-headings:font-light prose-h2:text-2xl hover:prose-a:text-blue-500 prose-strong:font-normal prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-xl hover:prose-a:dark:text-blue-500 prose-img:dark:border-slate-700">
              {currentlyWorkingOn.markdown}
            </Markdown>
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
