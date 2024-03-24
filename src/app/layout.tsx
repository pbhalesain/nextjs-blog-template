import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
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
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="munimji.ai"
          enabled={process.env.NEXT_PUBLIC_VERCEL_ENV === "production"}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}