import type { Metadata } from "next";
import { Baloo_Bhai_2, Lilita_One, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { FaCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

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
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

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
        <body>
          <Toaster
            position="top-center"
            icons={{
              success: (
                <FaCircleCheck className="h-4 w-4 mr-2 text-green-500" />
              ),
              error: <IoClose className="h-4 w-4 mr-2 text-rose-500" />,
            }}
            toastOptions={{
              style: {
                background: "#333",
                fontFamily: "var(--font-inter)",
                fontSize: "14px",
              },
              duration: 4000,
              classNames: {
                title: "text-foreground",
                toast: "border shadow-md border-foreground/30",
              },
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
