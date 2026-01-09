import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Abyasa's Website",
  description: "Abyasa's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" 
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased bgToggleLight`}
      >
        {children}
      </body>
    </html>
  );
}
