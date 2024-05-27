"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopOfPage from "@/components/topOfPage";
import { useEffect, useState } from "react";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
// const cardo = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Josh Gretton || Portfolio",
//   description: "Portfolio site for Josh Gretton.",
// };

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <html lang="en" className={`${isDarkMode && "dark"}`}>
      <body
        className={`${inter.className} relative mx-auto bg-white text-gray-900 dark:bg-[#15202b] dark:text-gray-100`}
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>{children}</main>
        {/* <TopOfPage /> */}
        <Footer />
      </body>
    </html>
  );
}
