import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title: "Josh Gretton",
  description: "Portfolio site for Josh Gretton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative mx-auto bg-white text-gray-900 dark:bg-[#15202b] dark:text-gray-100`}
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
