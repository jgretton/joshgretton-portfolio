import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
// const cardo = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josh Gretton || Portfolio",
  description: "Portfolio site for Josh Gretton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative mx-auto bg-white text-gray-900 dark:bg-[#15202b] dark:text-gray-100`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <main>{children}</main>
          {/* <TopOfPage /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
