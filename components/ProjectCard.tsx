import { Project } from "@/types";
import {
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
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
    <div className="flex h-full w-full shrink flex-col rounded-xl md:pr-4">
      <div>
        <Image
          width={640}
          height={360}
          src={coverImage}
          alt={image_alt || "image alt"}
          className={`${mobileImage && "hidden md:block"} w-full rounded-t-lg object-cover object-top aspect-video`}
        />
        {mobileImage && (
          <Image
            width={640}
            height={360}
            src={mobileImage}
            alt={image_alt || "image alt"}
            className="w-full rounded-lg object-cover object-top aspect-video md:hidden"
          />
        )}
      </div>
      <div className="mt-1 flex-1">
        <p className=" text-xs font-normal text-stone-600/60 sm:text-sm dark:text-white/40">
          {technologies.join(" · ")}
        </p>
        <h3 className="mt-4 text-xl tracking-wide text-gray-900 dark:text-gray-200">
            {title}
        </h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-stone-600 sm:text-base dark:text-white/60">
          {smallDescription}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <HoverPrefetchLink
          href={`/${slug}`}
          className="group inline-flex items-center gap-2 text-sm font-light text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-blue-500 hover:underline dark:text-white/90 dark:hover:text-blue-500"
        >
          View project details
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </HoverPrefetchLink>
        <div className="flex items-center gap-4">
          {liveUrl && (
            <HoverPrefetchLink
              href={liveUrl}
              target="_blank"
              className="group inline-flex items-center gap-1.5 text-xs font-light text-gray-400 transition-colors hover:text-gray-700 dark:text-white/40 dark:hover:text-white/80"
            >
              Site
              <ArrowTopRightOnSquareIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </HoverPrefetchLink>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="group inline-flex items-center gap-1.5 text-xs font-light text-gray-400 transition-colors hover:text-gray-700 dark:text-white/40 dark:hover:text-white/80"
            >
              GitHub
              <ArrowTopRightOnSquareIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
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
            width={640}
            height={360}
            src={coverImage}
            alt={image_alt || "image alt"}
            className={`${mobileImage && "hidden md:block"} w-full rounded-lg object-cover object-top aspect-video`}
          />
          {mobileImage && (
            <Image
              width={640}
              height={360}
              src={mobileImage}
              alt={image_alt || "image alt"}
              className="w-full rounded-lg object-cover object-top aspect-video md:hidden"
            />
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-normal tracking-wide transition-colors ">
            {title}
          </h3>
        </div>
        <div className="mt-4 grid place-items-start gap-2">
          <p className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-light leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors group-hover:text-blue-500 group-hover:underline dark:text-white/90 dark:group-hover:text-blue-500">
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
