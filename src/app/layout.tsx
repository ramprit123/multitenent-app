import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi Tenant Ecommerce Platform",
  description:
    "A powerful multi-tenant ecommerce platform for managing multiple stores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.className} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
