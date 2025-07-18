import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Project } from "@/types";
import { HoverPrefetchLink } from "./HoverPrefetchLink";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    smallDescription,
    technologies,
    liveUrl,
    coverImage,
    mobileImage,
    slug,
    image_alt,
    githubUrl,
  } = project;

  return (
    <div className="h-full w-full max-w-xl shrink rounded-xl md:pr-4">
      <div className="">
        <Image
          width={600}
          height={200}
          src={coverImage}
          alt={image_alt || "image alt"}
          className={`${mobileImage && "hidden md:block"} h-full w-full rounded-lg object-cover object-top`}
        />
        {mobileImage && (
          <Image
            width={600}
            height={200}
            src={mobileImage}
            alt={image_alt || "image alt"}
            className="h-full w-full rounded-lg object-cover object-top md:hidden"
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-normal tracking-wide transition-colors sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 inline-flex w-full flex-wrap gap-2 text-balance text-sm font-light tracking-wider dark:text-white/90">
          <span className="font-normal"> Built using:</span>
          {technologies.map((item, index) => (
            <span
              className="border-r border-gray-400 pr-2 last:border-none last:pr-0"
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
        <p className="mt-4 text-sm font-light tracking-wide text-gray-500 dark:text-white/75">
          {smallDescription}
        </p>
      </div>
      <div className="mt-4 grid place-items-start gap-2">
        <HoverPrefetchLink
          href={`/${slug}`}
          className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-blue-500 hover:underline dark:text-white/90 dark:hover:text-blue-500"
        >
          View project details
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </HoverPrefetchLink>
        {liveUrl && (
          <HoverPrefetchLink
            href={liveUrl}
            target="_blank"
            className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-blue-500 hover:underline dark:text-white/90 dark:hover:text-blue-500"
          >
            View site
            <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </HoverPrefetchLink>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-blue-500 hover:underline dark:text-white/90 dark:hover:text-blue-500"
          >
            View Github Respository
            <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
const ProjectCardMinimal = ({ project }: { project: Project }) => {
  const { title, coverImage, mobileImage, slug, image_alt } = project;

  return (
    <HoverPrefetchLink href={`/${slug}`} className="group">
      <div className="h-full w-full shrink rounded-xl md:pr-4">
        <div className="">
          <Image
            width={600}
            height={200}
            src={coverImage}
            alt={image_alt || "image alt"}
            className={`${mobileImage && "hidden md:block"} h-full w-full rounded-lg object-cover object-top`}
          />
          {mobileImage && (
            <Image
              width={600}
              height={200}
              src={mobileImage}
              alt={image_alt || "image alt"}
              className="h-full w-full rounded-lg object-cover object-top md:hidden"
            />
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-normal tracking-wide transition-colors sm:text-xl">
            {title}
          </h3>
        </div>
        <div className="mt-4 grid place-items-start gap-2">
          <p className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors group-hover:text-blue-500 group-hover:underline dark:text-white/90 dark:group-hover:text-blue-500">
            View project details
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </p>
        </div>
      </div>
    </HoverPrefetchLink>
  );
};

ProjectCard.Minimal = ProjectCardMinimal;

export default ProjectCard;
