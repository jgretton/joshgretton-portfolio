import React from "react";
import Image from "next/image";
import Tag from "./tag";
import Link from "next/link";

const WorkItem = ({
  image,
  title,
  tags,
  github_href,
  live_href,
  alt,
  slug,
}) => {
  return (
    <>
      <div className=" group relative h-80 w-full sm:h-[34rem]  ">
        <Image
          src={image}
          alt={alt}
          className="h-full w-full rounded-t-lg object-cover object-top"
          layout="fill"
          priority
        />
      </div>
      <div className="mt-5 h-auto transform bg-white transition-all duration-200 group-hover:translate-y-0 md:relative md:translate-y-0 ">
        <h3 className="transform bg-white py-3 text-2xl font-light tracking-wide sm:text-3xl  md:translate-y-0 lg:-translate-y-full">
          <span className=" mr-3 h-full w-px border-2 border-blue-300 "></span>
          {title}
        </h3>

        <p className=" px-5 text-sm font-light tracking-wider">
          This is the part where i write a small description about the project
          to save them clicking the link for more.
        </p>

        <div className="m-5 flex transform flex-col md:translate-y-0 lg:-translate-y-full">
          <Link
            href={`/projects/${slug}`}
            className="sm:text-md mb-3 flex flex-row self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 hover:text-blue-300 "
          >
            View project details
          </Link>
          {live_href ? (
            <a
              href={live_href}
              target="_blank"
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
              Preview live site
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
        <div className="transform pb-3 pl-3 lg:-translate-y-full">
          {tags.map((tag, index) => {
            return (
              //   <span
              //     key={tag}
              //     className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium tracking-wide text-gray-700 sm:text-sm"
              //   >
              //     {tag}
              //   </span>
              <Tag key={index}>{tag}</Tag>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkItem;
