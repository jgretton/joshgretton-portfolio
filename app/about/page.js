"use client";
// import TopOfPage from "../components/topOfPage";
import { useState } from "react";

import Image from "next/image";
import PhotoOfMe from "@/public/Photo-of-me-2.jpg";
import { languages } from "@/data/languages";
import BluButton from "@/public/Blubutton.png";
import Hero from "@/components/hero";

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
          "mt-[60svh] scale-100 transform   bg-white opacity-100 transition-all duration-300 xl:container  sm:px-10 xl:mx-auto"
        }
      >
        <div className="relative  z-10 mb-32 w-full bg-white px-3">
          <div className="relative clear-left mb-10 flex flex-col overflow-hidden sm:px-4 md:flex-row ">
            <div className="relative w-4/6 self-center sm:h-1/2 md:self-start lg:h-full lg:w-1/3 lg:self-center">
              <Image
                src={PhotoOfMe}
                alt="Photo of me"
                className="h-1/3 rounded-2xl object-contain md:w-full lg:h-full lg:object-cover lg:object-top "
                priority
              />
            </div>
            <div className="relative bottom-0 left-0 right-0 mt-5 h-auto w-full  px-4 lg:w-2/3">
              <h3 className="bg-white py-3 text-2xl font-light  tracking-wide sm:text-3xl">
                <span className=" mr-3 h-full w-px border-2 border-blue-300 "></span>
                About me
              </h3>
              <p className="py-4 text-sm font-light leading-6 tracking-wider text-gray-700 md:text-base">
                I am a self taught full stack developer. I started working on
                Front end code around 4 years ago and slowly transitioned into
                React. I am the co-founder of Guidecks; an audio guide solution
                for businesses.
              </p>

              <p className="my-10 text-base font-normal tracking-wider">
                Languages and frameworks I am confident with:
              </p>
              <div className="flex flex-row flex-wrap">
                {languages.map((language) => {
                  return (
                    <span
                      key={language.title}
                      className="my-2 mr-2 flex flex-row rounded-full bg-gray-200 px-3 py-1 text-xs font-medium tracking-wide text-gray-700 sm:text-sm"
                    >
                      <Image
                        src={language.icon}
                        alt={language.title}
                        className={`h-6 w-6 `}
                        priority
                      />
                      <p className="self-center pl-2">{language.title} </p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
