import WonkyDestop from "@/public/Images/wonky-web.jpg";
import WonkyMobile from "@/public/Images/wonky-mobile.jpg";
import SheepDesktop from "@/public/Images/sheepbridge-web.jpg";
import SheepMobile from "@/public/Images/sheepbridge-mobile.jpg";
import BluButtonDesktop from "@/public/Images/blubutton-web.jpg";
import BluButtonMobile from "@/public/Images/blubutton-mobile.jpg";

import VolleyDesktop from "@/public/Images/volleyscore-desktop.jpg";
import VolleyMobile from "@/public/Images/volleyscore-mobile.jpg";

export const clientWork = [
  {
    title: "Sheepbridge Business Centre",
    slug: "sheepbridge",
    small_description: "A Business centre ",
    built_with: ["Next.js", "Tailwind CSS", "Figma"],
    image: SheepDesktop,
    mobileImage: SheepMobile,
    image_alt: "Screenshots of the sheepbridge website",
    live_href: "http://www.sheepbridgebusinesscentre.co.uk",
    more_detail: false,
  },
  {
    title: "The Wonky Labrador",
    slug: "wonkylabrador",
    built_with: ["Next.js", "Tailwind CSS", "Figma"],
    small_description: "A micro pub based in Sheffield, UK",
    image: WonkyDestop,
    mobileImage: WonkyMobile,
    image_alt: "Screenshots of the wonky labrador website",
    live_href: "https://www.thewonkylabrador.co.uk",
    github_href: "",
    more_detail: false,
  },
];

export const personalWork = [
  {
    title: "Volley Score",
    slug: "Volleyscore",
    built_with: ["Next.js", "Tailwind CSS", "Figma", "Zustand"],
    small_description:
      "A simple solution to scoring your friendly volleyball games.",
    tags: ["Next.JS", "TailwindCSS"],
    image: VolleyDesktop,
    mobileImage: VolleyMobile,
    image_alt: "Screenshots of the Volleyscore website",
    live_href: "https://www.volleyscore.co.uk/",
    more_detail: true,
  },
  {
    title: "Blubutton Digital",
    slug: "blubuttondigital",
    built_with: ["Next.js", "Tailwind CSS", "Figma"],
    small_description:
      "A digital agency I run as a side business. All the work complete is that of my own.",
    image: BluButtonDesktop,
    mobileImage: BluButtonMobile,
    image_alt: "Screenshots of the Blubutton digital website",
    live_href: "https://blubuttondigital.co.uk",
    more_detail: false,
  },
];
