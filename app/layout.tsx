import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bagoss = localFont({
  src: "./fonts/BagossTRIALVF.ttf",
  variable: "--font-bagoss",
  display: "swap",
});

const sohne = localFont({
  src: "./fonts/Sohne-Buch.otf",
  variable: "--font-sohne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juicebox",
  description: "Brand Building Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${bagoss.variable} ${sohne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
