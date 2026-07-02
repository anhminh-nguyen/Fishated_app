import { Luckiest_Guy, Open_Sans, Titan_One } from "next/font/google";
import "./globals.css";
import BackgroundController from "@/components/BackgroundController";

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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${luckiestGuy.variable} ${openSans.variable} ${titanOne.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BackgroundController />
        {children}
      </body>
    </html>
  );
}
