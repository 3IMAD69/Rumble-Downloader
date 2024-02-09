import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumble Downloader",
  description: "Download Rumble videos quickly and easily with our free online tool. Simply paste the video link and get access to various download options in high quality. No hassle, just fast downloads!",
  openGraph: {
    images : ["https://i.imgur.com/jPjwsag.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
