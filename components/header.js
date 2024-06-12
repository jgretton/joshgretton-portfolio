"use client";

import Link from "next/link";
import React, { useState, Fragment } from "react";
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = ({ setIsDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [copiedText, setCopiedText] = useState(false);

  const copyToClipboard = () => {
    let copyText = "jb.gretton@googlemail.com";
    copy(copyText);
    setCopiedText(true);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white/80 py-2 backdrop-blur-lg dark:bg-[#15202b]/80">
      <div className="mx-auto flex items-center justify-between p-4 xl:container sm:px-12">
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
          <Popover className={"group"}>
            <PopoverButton
              className={
                "flex items-center gap-3 rounded-md px-4 py-2 transition-all hover:bg-slate-200 data-[active]:bg-slate-200 dark:hover:bg-slate-700 dark:data-[active]:bg-slate-700 dark:data-[active]:text-white"
              }
            >
              Contact Me
              <ChevronDownIcon className="size-4 group-data-[open]:rotate-180" />
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
                  <Link
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
                  </Link>
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
                    <p className="flex items-center gap-5 text-gray-950/50 dark:text-white/50">
                      Copy my email address
                      {copiedText ? (
                        <ClipboardDocumentCheckIcon className="size-6 text-green-400 dark:text-green-300" />
                      ) : (
                        <ClipboardDocumentIcon className="size-6" />
                      )}
                    </p>
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 dark:bg-dark sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
            <div className="space-y-2 py-6">
              <Link
                href={"/about"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                About
              </Link>
              <div className="min-w-full">
                <Disclosure as="div" className="-mx-3" defaultOpen={false}>
                  <DisclosureButton className="group flex min-w-full items-center justify-between rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700">
                    Contact
                    <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
                  </DisclosureButton>
                  <DisclosurePanel className="mx-3 mt-2 origin-top text-sm/5 text-black/50 transition">
                    <Link
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
                    </Link>
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
                      <p className="flex items-center gap-5 text-gray-950/50 dark:text-white/50">
                        Copy my email address
                        {copiedText ? (
                          <ClipboardDocumentCheckIcon className="size-6 text-green-400 dark:text-green-300" />
                        ) : (
                          <ClipboardDocumentIcon className="size-6" />
                        )}
                      </p>
                    </button>
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <Link
                href={"/personalProjects"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                Personal Projects
              </Link>
              <Link
                href={"/#clientwork"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 text-gray-900 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                Client Work
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
