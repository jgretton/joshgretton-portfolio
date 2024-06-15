import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const Card = ({
  image,
  mobileImage,
  title,
  live_href,
  image_alt,
  slug,
  small_description,
  more_detail,
  built_with,
}) => {
  return (
    <div className="grid h-full w-full grid-flow-row gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-light tracking-wide transition-colors sm:text-3xl">
          {title}
        </h3>
        <p className="text-sm font-light tracking-wider dark:text-gray-300">
          {small_description}
        </p>
        <p className="inline-flex w-full flex-wrap gap-2 text-balance text-sm font-light tracking-wider dark:text-gray-300">
          <span className="font-semibold"> Built using:</span>
          {built_with.map((item, index) => (
            <span
              className="border-r border-gray-400 pr-2 last:border-none last:pr-0"
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
        {/* <ul className="ml-1 inline-flex flex-1 flex-wrap gap-y-2 divide-x divide-gray-400">
            {built_with.map((item, index) => (
              <li className="px-2 first:pl-0" key={index}>
                {item}
              </li>
            ))}
          </ul> */}
        <div className="mt-3 grid place-items-start gap-2">
          <Link
            href={live_href}
            target="_blank"
            className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white/80"
          >
            View site
            <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          {more_detail && (
            <Link
              href={{ pathname: `/projects/${slug}` }}
              className="sm:text-md group inline-flex items-center gap-2 self-start text-sm font-medium leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white/80"
            >
              View project details
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
      <div className="relative aspect-square w-full self-end overflow-hidden rounded-3xl border-2 border-slate-300 shadow-xl dark:border-slate-700">
        <Image
          src={image}
          alt={image_alt}
          className="hidden h-full w-full rounded-lg object-cover object-top md:block"
          placeholder="blur"
        />
        <Image
          src={mobileImage}
          alt={image_alt}
          className="h-full w-full rounded-lg object-cover object-top md:hidden"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Card;
