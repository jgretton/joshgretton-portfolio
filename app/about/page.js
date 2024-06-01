"use client";
// import TopOfPage from "../components/topOfPage";
import { useState } from "react";

import Image from "next/image";
import PhotoOfMe from "@/public/Photo-of-me-2.jpg";
import { languages } from "@/data/languages";
import BluButton from "@/public/Blubutton.png";
import Hero from "@/components/hero";
import Markdown from "react-markdown";

import { aboutMeText } from "@/data/about";

// markup
const AboutPage = () => {
  return (
    <div className="  relative h-full w-full">
      <Hero>
        Hi! - My name is <span className="text-blue-300">Josh</span>. <br />
        I&apos;m a <span className="text-blue-300">Developer </span> based
        <br />
        in the UK.
      </Hero>

      <div
        className={
          "relative mt-[60dvh] scale-100   transform bg-white opacity-100 transition-all duration-300 xl:container  sm:px-10 xl:mx-auto dark:bg-[#15202b]"
        }
      >
        <div className="  z-10 mb-32 w-full bg-white px-3 dark:bg-[#15202b]">
          <div className=" clear-left mb-10 flex flex-col gap-10 sm:px-4 md:flex-row ">
            <div className="top-28  w-4/6 self-center sm:h-1/2 md:sticky md:self-auto lg:h-full lg:w-1/3 ">
              <Image
                src={PhotoOfMe}
                alt="Photo of me"
                className="h-1/3 rounded-2xl object-contain md:w-full lg:h-full lg:object-cover lg:object-top "
                priority
              />
            </div>
            <div className="relative bottom-0 left-0 right-0 mt-5 h-auto w-full  px-4 lg:w-2/3">
              {/* <h3 className="py-3 text-2xl font-light  tracking-wide sm:text-3xl"> */}
              {/* <h3 className=" text-2xl font-light tracking-wide transition-colors sm:text-3xl">
                About me
              </h3>
              <p className="py-4 text-sm font-light leading-6 tracking-wider text-gray-700 md:text-base dark:text-white/80">
                I am a self taught full stack developer. I started working on
                Front end code around 4 years ago and slowly transitioned into
                React. I am the co-founder of Guidecks; an audio guide solution
                for businesses.
              </p> */}
              <Markdown className=" prose min-w-full font-light tracking-wide dark:prose-invert prose-headings:font-light prose-h2:text-3xl prose-strong:font-normal ">
                {aboutMeText.markdown}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
