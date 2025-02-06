import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { lora } from "@/components/util/fonts";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable}`}>
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
