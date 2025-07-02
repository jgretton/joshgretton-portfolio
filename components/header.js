"use client";

import React, { useState, Fragment, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import ThemeToggle from "./themeToggle";
import copy from "copy-to-clipboard";
import { HoverPrefetchLink } from "./HoverPrefetchLink";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ClipboardButton = ({ copiedText }) => {
  return (
    <div className="relative size-5 transition-all sm:size-6">
      <ClipboardDocumentCheckIcon
        className={`${copiedText ? "opacity-100" : "opacity-0"} absolute left-0 top-0 size-5 text-green-400 transition-all duration-500 sm:size-6 dark:text-green-300`}
        // strokeDasharray={50}
        // strokeDashoffset={copiedText ? 0 : -50}
        aria-hidden="true"
        style={{
          strokeDasharray: 50,
          strokeDashoffset: copiedText ? 0 : -50,
        }}
      />
      <ClipboardDocumentIcon
        className={`${copiedText ? "opacity-0" : "opacity-100"} absolute left-0 top-0 size-5 transition-all duration-500 sm:size-6`}
        // strokeDasharray={50}
        // strokeDashoffset={copiedText ? -50 : 0}
        aria-hidden="true"
        style={{
          strokeDasharray: 50,
          strokeDashoffset: copiedText ? -50 : 0,
        }}
      />
    </div>
  );
};

const Header = ({ setIsDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [copiedText, setCopiedText] = useState(false);

  const copyToClipboard = () => {
    let copyText = "jb.gretton@googlemail.com";
    copy(copyText);
    setCopiedText(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copiedText) setCopiedText(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [copiedText]);
  return (
    <header className="dark:bg-dark/80 fixed inset-x-0 top-0 z-20 bg-gray-50/80 py-2 backdrop-blur-lg">
      <div className="mx-auto flex items-center justify-between p-4 xl:container sm:px-12">
        <HoverPrefetchLink
          href="/"
          className="text-2xl decoration-2 hover:underline sm:text-4xl"
        >
          JG <span className="text-blue-500"> / </span>
        </HoverPrefetchLink>
        <nav className="hidden sm:flex sm:gap-10">
          <HoverPrefetchLink
            href="/about"
            className={`${pathname === "/about" && "underline"} rounded-md px-4 py-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700`}
          >
            About
          </HoverPrefetchLink>
          <Popover className={"group"}>
            <PopoverButton
              className={
                "data-active:bg-slate-200 dark:data-active:bg-slate-700 dark:data-active:text-white flex items-center gap-3 rounded-md px-4 py-2 transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              }
            >
              Contact Me
              <ChevronDownIcon className="group-data-open:rotate-180 size-4 transition-transform" />
            </PopoverButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                anchor="bottom"
                className="z-50 flex flex-col divide-y divide-white/5 rounded-xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 [--anchor-gap:0.5rem] dark:bg-slate-700"
              >
                <div className="p-3">
                  <HoverPrefetchLink
                    className="group/github block rounded-lg px-3 py-2 transition hover:bg-black/5"
                    href="https://github.com/jgretton"
                    target="_blank"
                  >
                    <p className="font-semibold text-gray-950 dark:text-white">
                      Github
                    </p>
                    <p className="flex justify-between gap-2 text-gray-950/50 dark:text-white/50">
                      Go to my page{" "}
                      <ArrowTopRightOnSquareIcon className="size-5 transition-transform group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5" />
                    </p>
                  </HoverPrefetchLink>
                  <button
                    className="block w-full rounded-lg px-3 py-2 text-start transition hover:bg-black/5"
                    type="button"
                    onClick={() => {
                      copyToClipboard();
                    }}
                  >
                    <p className="font-semibold text-gray-950 dark:text-white">
                      Email
                    </p>
                    <div className="flex items-center gap-5 text-gray-950/50 dark:text-white/50">
                      <span>Copy my email address</span>
                      <ClipboardButton copiedText={copiedText} />
                    </div>
                  </button>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
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
        className="sm:hidden"
        open={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="dark:bg-dark fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="my-0.5 flex items-center justify-between">
            <HoverPrefetchLink
              href="/"
              className="text-2xl sm:text-4xl"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="home page"
            >
              JG <span className="text-blue-500"> / </span>
            </HoverPrefetchLink>

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
            <div className="space-y-2 py-6">
              <HoverPrefetchLink
                href={"/about"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                About
              </HoverPrefetchLink>
              <div className="min-w-full">
                <Disclosure as="div" className="-mx-3" defaultOpen={false}>
                  <DisclosureButton className="group flex min-w-full items-center justify-between rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700">
                    Contact
                    <ChevronDownIcon className="group-data-open:rotate-180 size-5 transition-transform" />
                  </DisclosureButton>
                  <DisclosurePanel className="mx-3 mt-2 origin-top text-sm/5 text-black/50 transition">
                    <HoverPrefetchLink
                      className="group/github block rounded-lg px-3 py-2 transition hover:bg-black/5"
                      href="https://github.com/jgretton"
                      target="_blank"
                    >
                      <p className="font-semibold text-gray-950 dark:text-white">
                        Github
                      </p>
                      <p className="flex gap-5 text-gray-950/50 dark:text-white/50">
                        Go to my page{" "}
                        <ArrowTopRightOnSquareIcon className="size-5 transition-transform group-hover/github:-translate-y-0.5 group-hover/github:translate-x-0.5" />
                      </p>
                    </HoverPrefetchLink>
                    <button
                      className="block w-full rounded-lg px-3 py-2 text-start transition hover:bg-black/5"
                      type="button"
                      onClick={() => {
                        copyToClipboard();
                      }}
                    >
                      <p className="font-semibold text-gray-950 dark:text-white">
                        Email
                      </p>
                      <div className="flex items-end gap-5 text-gray-950/50 dark:text-white/50">
                        <span>Copy my email address</span>
                        <ClipboardButton copiedText={copiedText} />
                      </div>
                    </button>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <HoverPrefetchLink
                href={"/#personalProjects"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                Personal Projects
              </HoverPrefetchLink>
              <HoverPrefetchLink
                href={"/#clientWork"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                Client Work
              </HoverPrefetchLink>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
