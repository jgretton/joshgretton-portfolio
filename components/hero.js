import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Hero = ({ children, back }) => {
  return (
    <section
      className={` fixed inset-x-0 top-0 -z-10 mx-auto flex h-[60dvh] items-center bg-white px-6 pt-12 xl:container sm:px-16  dark:bg-[#15202b] `}
    >
      {back && (
        <Link
          href={"/"}
          className="group absolute top-28 inline-flex items-center gap-2"
        >
          <ArrowLeftIcon
            className="size-5 text-gray-800 transition-transform group-hover:-translate-x-1 dark:text-white"
            aria-label="hidden"
          />
          back
        </Link>
      )}
      <span className="text-2xl font-light leading-relaxed tracking-widest sm:text-4xl  sm:leading-relaxed md:text-5xl md:leading-relaxed">
        {children}
      </span>
    </section>
  );
};

export default Hero;
