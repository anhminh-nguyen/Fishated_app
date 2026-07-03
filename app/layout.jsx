import { Luckiest_Guy, Open_Sans, Titan_One, Inter } from "next/font/google";
import "./globals.css";
import BackgroundController from "@/components/BackgroundController";
import { icons } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-titan-one",
});

export const metadata = {
  title: "Fishated",
  description: "Fuel your passion for stories — Welcome to Fishated!",
  icons:{
    icon:"/images/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${luckiestGuy.variable} ${openSans.variable} ${titanOne.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BackgroundController />
        {children}
      </body>
    </html>
  );
}
