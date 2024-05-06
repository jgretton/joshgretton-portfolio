import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopOfPage from "@/components/topOfPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josh Gretton || Portfolio",
  description: "Portfolio site for Josh Gretton.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative mx-auto max-w-[96rem] `}>
        <Header />
        <main>{children}</main>
        <TopOfPage />
        <Footer />
      </body>
    </html>
  );
}
