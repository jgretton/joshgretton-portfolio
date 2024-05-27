import Image from "next/image";
import React from "react";

import { readFileSync } from "fs";
import path from "path";

import Blubutton from "@/public/Blubuttonlaptop.png";
import Link from "next/link";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Hero from "@/components/hero";
import Markdown from "react-markdown";

const getProjectsData = (personal) => {
  let filePath;
  if (personal)
    filePath = path.join(process.cwd(), "data", "personalWork.json");
  else filePath = path.join(process.cwd(), "data", "projects.json");
  const jsonData = readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

const Page = ({ params }) => {
  const { slug } = params;
  console.log("parms", params);
  const projects = getProjectsData();
  const project = projects.find((p) => p.slug === slug);
  const { title, tags, image, live_href, github_href, markdown } = project;

  console.log(markdown);
  return (
    <div className=" mx-auto px-6 pb-10 xl:container sm:px-16">
      {/* <p>back</p> */}
      <Hero back> {title}</Hero>
      {/* <div
        className={` fixed inset-x-0 top-0 -z-10 mx-auto flex h-[60svh] transform items-center bg-white px-4 pt-12 transition-all xl:container sm:px-16`}
      >
        <h2 className="text-2xl font-light tracking-widest sm:text-4xl md:text-5xl">
          <span className="text-blue-300">{title}</span>
        </h2>
      </div> */}
      <section className="mt-[60svh] h-full w-full bg-white dark:bg-[#15202b]">
        <div className=" sm:h-134 group relative h-80 w-full cursor-pointer overflow-hidden ">
          <Image
            src={image}
            alt="guidecks header"
            className="h-full w-full rounded-t-lg object-cover object-top"
            layout="fill"
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px\-5 mt-20 w-full md:w-1/4">
            <p className="text-base font-normal">Project Name</p>
            <p className="mb-5 ml-1 text-base font-light">{title}</p>

            <p className="text-base font-normal">Technologies used</p>
            <ul className="ml-1">
              {tags.map((tag, index) => (
                <li className="text-base font-light" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <Link
              href={live_href}
              target="_blank"
              className="sm:text-md group group mb-3 mt-5 inline-flex items-center  gap-2 self-start text-base leading-6 tracking-wide text-gray-700 decoration-2 underline-offset-2 hover:underline dark:text-white"
            >
              See the live project
              <ArrowTopRightOnSquareIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-20 grid flex-1  gap-10">
            {/* text-2xl font-light tracking-wide transition-colors sm:text-3xl */}
            <Markdown className=" prose dark:prose-invert min-w-full font-light tracking-wide ">
              {markdown}
            </Markdown>
            {/* <p className="text-lg font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              dui mauris. Vivamus vehicula, nibh dapibus hendrerit finibus, quam
              dolor volutpat lorem, sed pretium dui eros at libero. Vestibulum
              vel mollis tortor. Fusce ac maximus massa, ac ultricies neque.
              Duis nec sodales lacus. Integer feugiat, urna eget posuere tempor,
              neque lectus aliquet dolor, a rhoncus risus turpis non leo.
              Phasellus sit amet maximus nisi. Vestibulum posuere lobortis
              turpis quis semper. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec elementum eros
              sagittis lectus ornare sagittis.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Nulla aliquet lectus vestibulum augue tempus condimentum
              sollicitudin id elit. Integer vel viverra ex. Nunc vitae molestie
              ipsum, ac posuere ex. Donec cursus pulvinar euismod. Quisque
              gravida ante lorem, in facilisis justo ultrices in. Cras
              pellentesque diam sed urna pharetra, nec gravida ante mattis. Sed
              eu turpis nec dolor pharetra ornare. Sed iaculis sem sem, at
              volutpat sapien lobortis vitae. Vestibulum venenatis tempus
              efficitur. Integer cursus lectus libero. Etiam non luctus turpis.
              Phasellus fermentum a diam at suscipit. Donec eleifend maximus
              augue vel dictum.{" "}
            </p> */}
          </div>
        </div>
        <div className=" sm:h-134 group relative mt-20 h-80 w-full cursor-pointer ">
          <Image
            src={Blubutton}
            alt="guidecks header"
            className="h-full w-full rounded-t-lg object-cover object-top"
            layout="fill"
            priority
            placeholder="blur"
          />
        </div>
        <div className="relative mt-5 flex w-full flex-col  justify-between sm:flex-row">
          <div className="h-full w-full sm:w-[49%]">
            <Image
              src={Blubutton}
              alt="guidecks header"
              className="rounded-b-lg object-fill object-top"
              priority
              placeholder="blur"
            />
          </div>
          <div className="h-full w-full sm:w-[49%]">
            <Image
              src={Blubutton}
              alt="guidecks header"
              className="rounded-b-lg object-cover object-top"
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
