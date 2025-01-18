import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
