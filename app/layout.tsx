import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ViewContainer from "../components/layouts/view-container";

export const metadata: Metadata = {
  title: "Sumit Singh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;1,6..72,200;1,6..72,300;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ViewContainer>{children}</ViewContainer>
      </body>
    </html>
  );
}

