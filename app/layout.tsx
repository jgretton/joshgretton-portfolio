import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title: {
    default: "Josh Gretton ",
    template: "%s | Josh Gretton",
  },
  description:
    "Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.",
  keywords: [
    "Josh Gretton",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
    "JavaScript Developer",
  ],
  alternates: {
    canonical: "https://www.joshgretton.co.uk",
  },
  openGraph: {
    title: "Josh Gretton",
    description:
      "Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.",
    url: "https://www.joshgretton.co.uk",
    siteName: "Josh Gretton Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Josh Gretton Portfolio Banner",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Gretton",
    description:
      "Discover the portfolio of Josh Gretton, a web developer specialising in Next.js and Tailwind CSS.",
    images: ["/og-image.svg"],
  },
  metadataBase: new URL("https://www.joshgretton.co.uk"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-dark relative mx-auto bg-gray-50 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class">
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
