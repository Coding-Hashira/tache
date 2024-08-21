import type { Metadata } from "next";
import { Baloo_Bhai_2, Lilita_One, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-balooBhai",
  weight: ["400", "500", "600", "700"],
});
const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tâche by Bramble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${balooBhai.variable} ${lilita.variable} ${inter.variable}`}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
