import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ViewContainer from "../components/layouts/view-container";
import Layout from "../components/layouts";

export const metadata: Metadata = {
  title: {
    default: "Sumit Singh",
    template: "%s | Sumit Singh",
  },
  description:
    "Hey!, I am an engineer and designer, I build beautiful interfaces and experiences for the web with a focus on ux design and branding.",
  twitter: {
    card: "summary_large_image",
    site: "@wh0sumit",
    creator: "@wh0sumit",
  },
  metadataBase: new URL("https://wh0sumit.vercel.app"),
};

const manrope = Manrope({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </head>
      <body>
        <Layout>
          <ViewContainer>{children}</ViewContainer>
        </Layout>
      </body>
    </html>
  );
}

