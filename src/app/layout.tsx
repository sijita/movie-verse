import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies Info App - Movie-Verse",
  description: "Movies Info App - Movie-Verse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
