import WonkyDestop from "@/public/Images/wonky-web.png";
import WonkyMobile from "@/public/Images/wonky-mobile.png";
import SheepDesktop from "@/public/Images/sheepbridge-web.png";
import SheepMobile from "@/public/Images/sheepbridge-mobile.png";
import BluButtonDesktop from "@/public/Images/blubutton-web.png";
import BluButtonMobile from "@/public/Images/blubutton-mobile.png";
import VolleyDesktop from "@/public/Images/volley-web.png";
import VolleyMobile from "@/public/Images/volley-mobile.png";

export const clientWork = [
  {
    title: "Sheepbridge Business Centre",
    slug: "sheepbridge",
    small_description: "A Business centre ",
    image: SheepDesktop,
    mobileImage: SheepMobile,
    image_alt: "Screenshots of the sheepbridge website",
    live_href: "http://www.sheepbridgebusinesscentre.co.uk",
    more_detail: false,
  },
  {
    title: "The Wonky Labrador",
    slug: "wonkylabrador",
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
    slug: "volleyscore",
    small_description:
      "A simple solution to scoring your friendly volleyball games.",
    tags: ["NextJS", "TailwindCSS"],
    image: VolleyMobile,
    mobileImage: VolleyDesktop,
    image_alt: "Screenshots of the Volleyscore website",
    live_href: "https://www.volleyscore.co.uk/",
    more_detail: true,
  },
  {
    title: "Blubutton Digital",
    slug: "blubuttondigital",
    small_description:
      "A digital agency I run as a side business. All the work complete is that of my own.",
    image: BluButtonDesktop,
    mobileImage: BluButtonMobile,
    image_alt: "Screenshots of the Blubutton digital website",
    live_href: "https://blubuttondigital.co.uk",
    more_detail: false,
  },
];
