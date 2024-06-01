"use client";

import Link from "next/link";
import React, { useState, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import ThemeToggle from "./themeToggle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/",
  },
  {
    title: "Client Work",
    link: "/#clientWork",
  },
  {
    title: "Personal Projects",
    link: "/#personalProjects",
  },
];
const Header = ({ setIsDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-20  bg-white/80 py-2 backdrop-blur-lg dark:bg-[#15202b]/80  ">
      <div className=" mx-auto flex items-center justify-between p-4 xl:container sm:px-14">
        <Link href="/" className="text-4xl hover:underline">
          JG <span className="text-blue-300"> / </span>
        </Link>
        <nav className="hidden sm:flex sm:gap-10">
          <Link
            href="/about"
            className={`${pathname === "/about" && "underline"} rounded-md px-4 py-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${pathname === "/contact" && "underline"} rounded-md px-4 py-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700`}
          >
            Contact
          </Link>
          <ThemeToggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </nav>
        <div className="flex sm:hidden">
          <div className="mr-3 max-w-fit">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-slate-800 dark:text-gray-300"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <Dialog
        className="lg:hidden"
        open={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-dark">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <Link
              href="/"
              className="text-4xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              JG <span className="text-blue-300"> / </span>
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-slate-800 dark:text-gray-300"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 border-b border-gray-100 py-6 dark:border-gray-700">
                {links.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900  dark:text-gray-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
