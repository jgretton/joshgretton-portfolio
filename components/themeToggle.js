"use client";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Popover className="relative flex items-center rounded-md transition-all hover:bg-slate-200 dark:hover:bg-slate-700">
      <Popover.Button className="inline-flex items-center gap-1 px-4 py-2">
        {theme === "dark" ? (
          <MoonIcon className="size-5" aria-hidden="true" />
        ) : (
          <SunIcon className="size-5" aria-hidden="true" />
        )}
        <ChevronDownIcon className="size-3" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-600">
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
                >
                  <MoonIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-slate-800 dark:text-gray-200"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ThemeToggle;
