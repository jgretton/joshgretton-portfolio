import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const Card = ({
  image,
  title,
  tags,
  github_href,
  live_href,
  image_alt,
  slug,
  small_description,
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-5">
      <div className="flex flex-col gap-2 pl-2 ">
        <h3 className=" text-2xl font-light tracking-wide transition-colors sm:text-3xl">
          {title}
        </h3>
        <p className="text-sm font-light tracking-wider dark:text-gray-300">
          {small_description}
        </p>
        <div className="mt-3 grid gap-2">
          <Link
            href={live_href}
            target="_blank"
            className="sm:text-md group inline-flex items-center gap-2 self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white/80"
          >
            View site
            <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={{ pathname: `/projects/${slug}` }}
            className="sm:text-md group inline-flex items-center gap-2 self-start text-sm  font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white/80"
          >
            View project details
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
      <div className=" relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-slate-300 shadow-xl dark:border-slate-700">
        <Image
          src={image}
          alt={image_alt}
          className="h-full w-full rounded-lg object-cover object-top"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default Card;