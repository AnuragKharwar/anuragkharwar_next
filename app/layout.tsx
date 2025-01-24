import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnuragKharwar.in",
  description: "Personal Portfolio to showcase my skills and projects",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://anuragkharwar.in",
    siteName: "Anurag Kharwar",
    title: "Anurag Kharwar",
    description: "Personal Portfolio to showcase my skills and projects",
    images: [
      {
        url: "https://anuragkharwarportfolio.in/assets/anurag_pic.jpg",
        width: 100,
        height: 100,
        alt: "Anurag Kharwar",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-100 to-teal-200/80 dark:from-black dark:to-gray-900 bg-fixed`}

        // style={{backgroundImage :linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)}}
      >
        {children}
      </body>
    </html>
  );
}
