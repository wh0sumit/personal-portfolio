import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ViewContainer from "../components/layouts/view-container";
import Layout from "../components/layouts";

export const metadata: Metadata = {
  title: {
    default: "Sumit Singh",
    template: "%s | Sumit Singh",
  },
  description: "Hey!, I am a frontend engineer with a focus on ux design.",
  twitter: {
    card: "summary_large_image",
    site: "@wh0sumit",
    creator: "@wh0sumit",
  },
  metadataBase: new URL("https://wh0sumit.vercel.app"),
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>
          <ViewContainer>{children}</ViewContainer>
        </Layout>
      </body>
    </html>
  );
}

