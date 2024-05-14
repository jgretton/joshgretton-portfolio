import React from "react";
import Image from "next/image";
import Tag from "./tag";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const WorkItem = ({
  image,
  title,
  tags,
  github_href,
  live_href,
  alt,
  slug,
  small_description,
}) => {
  return (
    <>
      <div className=" group/card relative h-80 w-full overflow-hidden rounded-t-lg sm:h-[34rem]">
        <Link href={`/projects/${slug}`} className="">
          <Image
            src={image}
            alt={alt}
            className="h-full w-full rounded-t-lg object-cover object-top"
            layout="fill"
            priority
          />
          <div className="absolute bottom-0 right-0 grid size-20 place-items-center rounded-tl-3xl bg-blue-300 transition-all group-hover/card:w-32">
            <ArrowRightIcon className="size-8 text-white" />
          </div>
        </Link>
      </div>
      <div className="mt-5 h-auto transform bg-white transition-all duration-200 group-hover:translate-y-0 md:relative md:translate-y-0 dark:bg-[#15202b] ">
        <h3 className="transform  py-3 text-2xl font-light tracking-wide sm:text-3xl  md:translate-y-0">
          <span className=" mr-3 h-full w-px border-2 border-blue-300 "></span>
          {title}
        </h3>

        <p className=" px-5 text-sm font-light tracking-wider">
          {small_description}
        </p>

        <div className="m-5 flex transform flex-col ">
          <Link
            href={`/projects/${slug}`}
            className="sm:text-md mb-3 flex flex-row self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 hover:text-blue-300 dark:text-white/80 "
          >
            View project details
          </Link>
          {live_href ? (
            <a
              href={live_href}
              target="_blank"
              className="sm:text-md mb-3 flex flex-row self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 hover:text-blue-300 dark:text-white/80"
            >
              Preview live site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : null}

          {github_href ? (
            <a
              href={github_href}
              target="_blank"
              rel="noreferrer"
              className="sm:text-md mb-3 flex flex-row self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 hover:text-blue-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View code on Github
            </a>
          ) : null}
        </div>
        <div className="transform pb-3 pl-3 ">
          {tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </div>
      </div>
    </>
  );
};

export default WorkItem;
