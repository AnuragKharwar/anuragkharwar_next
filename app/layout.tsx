import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Next.js Script component
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

// const GA_MEASUREMENT_ID = "G-4RG28L371D";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
console.log(GA_MEASUREMENT_ID, "GA_MEASUREMENT_ID");

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
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-100 to-teal-200/80 dark:from-black dark:to-gray-900 bg-fixed`}
      >
        {/* Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
