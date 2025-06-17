import React from "react";
import { currentlyWorkingOn } from "@/data/projects";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CurrentlyWorkingCard = () => {
  const { title, small_description, built_with, image, image_alt, slug } =
    currentlyWorkingOn;
  return (
    <div className="_bg-white _shadow-sm h-full rounded-xl md:max-w-lg md:pr-4">
      <div className="">
        <Image
          src={image}
          alt={image_alt}
          className="h-full w-full rounded-lg object-cover object-top"
          placeholder="blur"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-normal tracking-wide transition-colors sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 inline-flex w-full flex-wrap gap-2 text-balance text-sm font-light tracking-wider dark:text-gray-300">
          <span className="font-normal"> Built using:</span>
          {built_with.map((item, index) => (
            <span
              className="border-r border-gray-400 pr-2 last:border-none last:pr-0"
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
        <p className="mt-4 text-sm font-light tracking-wider dark:text-gray-300">
          {small_description}
        </p>
      </div>
      <div className="mt-3 grid place-items-start gap-2">
        <Link
          href={{ pathname: `/projects/${slug}` }}
          className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 transition-colors hover:text-blue-500 hover:underline dark:text-white/80 dark:hover:text-blue-500"
        >
          View project details
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default CurrentlyWorkingCard;
