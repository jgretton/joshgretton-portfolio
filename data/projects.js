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
    // image: "https://utfs.io/f/f36d71a7-93b1-41f7-9a0a-59ae9a1fba1c-q9ux6o.jpg",
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
    // image: "https://utfs.io/f/82e1e257-9dec-4254-b3be-524a9b0b28bb-zc2cls.jpg",
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
    title: "Blubutton Digital",
    slug: "blubuttondigital",
    small_description:
      "A digital agency I run as a side business. All the work complete is that of my own.",
    // image: "https://utfs.io/f/8afd3473-a622-4342-b98a-78227dcb9958-b17oa1.png",
    image: BluButtonDesktop,
    mobileImage: BluButtonMobile,
    image_alt: "Screenshots of the Blubutton digital website",
    live_href: "https://blubuttondigital.co.uk",
    more_detail: false,
  },
  {
    title: "Volley Score",
    slug: "volleyscore",
    small_description:
      "A simple solution to scoring your friendly volleyball games.",
    tags: ["NextJS", "TailwindCSS"],
    // image: "https://utfs.io/f/1bb84cf2-dfbf-4d2c-b469-5598d4eb6f31-17ktnp.png",
    image: VolleyMobile,
    mobileImage: VolleyDesktop,
    image_alt: "Screenshots of the Volleyscore website",
    live_href: "https://www.volleyscore.co.uk/",
    more_detail: true,
    markdown: `
## Volleyscore Project

### Overview

**Volleyscore** is a simple yet effective scoreboard app designed to track volleyball matches effortlessly. As a volleyball coach, I recognized the need for a reliable and user-friendly scoring tool during practice matches and club tournaments. This app was developed to streamline the scoring process, ensuring accuracy and ease of use for referees and scorekeepers.

### Motivation

During practice matches and tournaments, the team off the court is responsible for refereeing and keeping score. Traditionally, one person referees while another counts the scores manually, often leading to confusion and errors. Volleyscore was created to address this issue by providing a digital solution that simplifies the scoring process and enhances accuracy.

### Features

- **Timeout Timer:** Automatically starts a 30-second timer when a team calls a timeout, ensuring adherence to official rules.
- **Action History:** Displays a history of all actions taken during the match, allowing users to track points runs and undo actions if needed.
- **Serving Indicator:** Shows which team is currently serving, even when points are undone, maintaining accurate serve tracking.

### Technology Stack

- **Next.js:** Utilized for server-side rendering and building a fast, scalable app.
- **Tailwind CSS:** Used for designing a responsive and modern user interface.

### Development Process

Developing Volleyscore involved carefully planning the app's logic, particularly the scoring mechanism. Storing and manipulating data to handle actions like undoing scores and updating the scoreline presented challenges. By focusing on robust data management, I ensured the app could handle various scoring scenarios seamlessly.

### Future Enhancements

I have several plans to enhance Volleyscore further:

- **Player Lineups:** Displaying which player is next to serve, their current rotation, and facilitating substitutions.
- **Comprehensive Match Tracking:** Including match details like location and times, tracking infringements, and other official scoresheet elements.
- **Live Match Data Streaming:** Allowing users to share links for live match updates and providing referees with real-time score and player rotation information.

### Impact and Feedback

Volleyscore has been well-received by local teams, making the scoring process more efficient and less prone to errors. The app has garnered positive feedback for its user-friendly design and helpful features, encouraging me to continue improving and expanding its capabilities.

Feel free to explore Volleyscore and see how it can simplify scoring for your volleyball matches. For more information or to discuss potential collaborations, please contact me at [your email] or connect with me on [LinkedIn](your LinkedIn profile).
`,
    //   markdown: `
    //           ## Project Overview

    //           I am a coach and player for a local volleyball team. During training sessions and recreational tournaments, we all take turns to score the matches. We were counting the points using our hands, and we kept getting distracted and forgetting the score! I know this type of web app already exists, but I saw this as an opportunity to develop my own.

    //           ### What was my main goal for this project?
    //           My initial goal was to create a scoreboard web app allowing me to keep track of the matches.

    //           ### Current Features
    //           - Keep track of a best-of-5 set volleyball match.
    //           - Local storage to remember previous game state
    //           - Allows for timed matches.
    //           - Allows for single set matches with an unlimited scoreline.

    //           ### Features to be added
    //           - [List upcoming features here]

    //       `,

    // "markdown": "## Project Overview\n\nI am a coach and player for a local volleyball team. During training sessions and recreational tournaments, we all take turns to score the matches. We were counting the points using our hands, and we kept getting distracted and forgetting the score! I know this type of web app already exists, but I saw this as an opportunity to develop my own.\n\n### What was my main goal for this project?\nMy initial goal was to create a scoreboard web app allowing me to keep track of the matches. As I thought about the web app itself, many additional features came to mind that would enhance the user experience.\n\n### Current Features\n- Keep track of a best-of-5 set volleyball match.\n- Allows for timed matches.\n- Allows for single set matches with an unlimited scoreline.\n\n### Features to be added\n- [List upcoming features here]\n"
  },
];
