"use client";
import React, { useState, useEffect } from "react";

const TopOfPage = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <div
      aria-hidden="true"
      className={`${
        showScroll ? "opacity-100" : "hidden opacity-0"
      } duration-400 fixed bottom-10 right-3 z-40 size-fit text-right transition-opacity`}
    >
      <button
        className={`h-8 w-8 cursor-pointer rounded-sm bg-slate-700/40 text-gray-950 dark:bg-slate-200/40`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="button"
        value="Scroll to top of page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <p className="hidden">Scroll to top of page</p>
      </button>
    </div>
  );
};

export default TopOfPage;
