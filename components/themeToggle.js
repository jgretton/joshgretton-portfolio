"use client";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useState, useEffect } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder
  }
  console.log(theme);

  return (
    <Popover className="relative flex items-center">
      <PopoverButton
        aria-label="Toggle theme"
        className="group inline-flex items-center gap-1 rounded-md px-4 py-2 transition-all hover:bg-slate-200 data-[active]:bg-slate-200 dark:hover:bg-slate-700 dark:data-[active]:bg-slate-700"
      >
        {theme === "light" ? (
          <SunIcon className="size-5" aria-hidden="true" />
        ) : (
          <MoonIcon className="size-5" aria-hidden="true" />
        )}
        <ChevronDownIcon
          className="size-3 transition-transform group-data-[open]:rotate-180"
          aria-hidden="true"
        />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute right-0 top-full z-10 mt-3 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-700">
          {({ close }) => (
            <div className="grid w-full place-items-center py-4">
              <div className="group relative rounded-lg">
                <button
                  type="button"
                  className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200 dark:bg-dark dark:group-hover:bg-slate-400"
                  onClick={() => {
                    setTheme("light");
                    close();
                  }}
                  aria-label="Set light mode"
                >
                  <SunIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-slate-800 dark:text-gray-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="group relative mt-4 rounded-lg">
                <button
                  className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200 dark:bg-dark dark:group-hover:bg-slate-400"
                  onClick={() => {
                    setTheme("dark");
                    close();
                  }}
                  aria-label="Set dark mode"
                >
                  <MoonIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-slate-800 dark:text-gray-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default ThemeToggle;
