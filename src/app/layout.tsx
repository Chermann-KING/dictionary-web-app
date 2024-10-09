import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FontProvider } from "@/context/FontContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dictionnary Web App",
  description: "An English Word Dictionary Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex justify-center ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <FontProvider>
            <div className="w-[327px] sm:w-[689px] lg:w-[736px] mx-auto">
              {children}
            </div>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
