import "./globals.css";
import type { Metadata } from "next";

import { lora } from "@/components/util/fonts";

// components
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "Blog app",
    template: "%s | Blog app",
  },
  description:
    "Discover engaging blog posts, detailed articles, and connect with our community of writers. Share your thoughts, explore diverse topics, and get in touch with us for any inquiries.",
  openGraph: {
    title: {
      default: "Blog app",
      template: "%s | Blog app",
    },
    description:
      "Discover engaging blog posts, detailed articles, and connect with our community of writers. Share your thoughts, explore diverse topics, and get in touch with us for any inquiries.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable}`}>
      <body className={"flex flex-col min-h-screen"}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
