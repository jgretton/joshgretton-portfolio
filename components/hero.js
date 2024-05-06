import React from "react";

const Hero = ({ children }) => {
  return (
    <section
      className={` fixed inset-x-0 top-0 -z-10 mx-auto flex h-[60svh] items-center bg-white px-6 pt-12 xl:container sm:px-16   `}
    >
      <span className="text-2xl font-light tracking-widest sm:text-4xl md:text-5xl">
        {children}
      </span>
    </section>
  );
};

export default Hero;
