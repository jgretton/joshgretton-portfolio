"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Hero = ({
  children,
  back,
}: {
  children: React.ReactNode;
  back?: boolean;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      style={{ willChange: "transform, opacity" }}
      transition={{
        duration: 1.2,
        opacity: { type: "tween", ease: "easeOut", delay: 0.1 },
        translateX: { type: "spring", damping: 25, stiffness: 120 },
      }}
      className={`dark:bg-dark relative z-0 mx-auto mt-20 flex h-[60dvh] items-center bg-gray-50 px-4 pt-12 xl:container sm:px-12`}
    >
      {back && (
        <Link
          href={"/"}
          className="group fixed top-36 inline-flex items-center gap-2"
        >
          <ArrowLeftIcon
            className="size-5 text-gray-800 transition-transform group-hover:-translate-x-1 dark:text-white"
            aria-label="hidden"
          />
          back
        </Link>
      )}
      <span className="fixed text-[min(7vw,1.85rem)] font-light leading-relaxed tracking-widest sm:text-4xl sm:leading-relaxed md:text-5xl md:leading-relaxed">
        {children}
      </span>
    </motion.section>
  );
};

export default Hero;
