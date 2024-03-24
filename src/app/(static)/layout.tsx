import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sitefooter";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const data = {
  description: "",
  title: "Munimji | The Best Accounting Software",
  url: "/",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.munimji.ai"),
  title: data.title,
  description: data.description,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    siteName: "Munimji",
    images: [
      {
        url: "/_static/meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: data.title,
    description: data.description,
    creator: "@papermarkio",
    images: ["/_static/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <SiteHeader />
      {children}
    <SiteFooter />
  </>
  );
}