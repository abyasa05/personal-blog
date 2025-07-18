import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "700"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Abyasa's Blog",
  description: "Abyasa's personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
