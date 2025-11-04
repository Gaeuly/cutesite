
import "./globals.css";
import NavBar from "./sections/NavBar";
import Footer from "./sections/Footer";

import { Pixelify_Sans, Jersey_10 } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-pixelify",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: "--font-jersey",
});

export const metadata = {
  title: "gaeuly",
  description: "Portfolio",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelify.variable} ${jersey.variable} antialiased`}>
      <body className="bg-white text-gray-900 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}