import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FontProvider } from "@/context/FontContext";

// Définition des polices locales
const inter = localFont({
  src: "./fonts/inter/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

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
  title: "Dictionary Web App",
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
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
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
