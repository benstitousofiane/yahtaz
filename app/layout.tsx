import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Yahtaz",
  description: "Minimalist app for learn quran tajweed, hadiths and names of Allah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
