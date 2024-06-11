"use client";
// import TopOfPage from "../components/topOfPage";
import { useState } from "react";

import Image from "next/image";
import PhotoOfMe from "@/public/Images/about/photo-of-me.png";
import { languages } from "@/data/languages";
import BluButton from "@/public/Blubutton.png";
import Hero from "@/components/hero";
import Markdown from "react-markdown";

import { aboutMeText } from "@/data/about";

// markup
const AboutPage = () => {
  return (
    // <div className="relative h-full w-full px-12">
    <div className="mx-auto px-6 pb-10 xl:container sm:px-12">
      <Hero>
        Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
        I&apos;m a <span className="text-blue-300">Developer </span> based
        <br />
        in the UK.
      </Hero>

      <section className="relative mt-[60dvh] h-full w-full bg-white dark:bg-[#15202b]">
        <div className="z-10 mb-32 w-full bg-white dark:bg-[#15202b]">
          <div className="flex flex-col gap-14 md:flex-row">
            <div className="w-6/6 top-28 self-center sm:h-1/2 md:sticky md:self-auto lg:h-full lg:w-1/3">
              <Image
                src={PhotoOfMe}
                alt="Photo of me"
                className="h-1/3 rounded-2xl object-contain md:w-full lg:h-1/3 lg:object-cover lg:object-top"
                priority
              />
            </div>
            <div className="relative mt-5 h-auto w-full lg:w-2/3">
              <Markdown className="prose min-w-full font-light tracking-wide dark:prose-invert prose-headings:font-light prose-h2:text-3xl prose-strong:font-normal">
                {aboutMeText.markdown}
              </Markdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
