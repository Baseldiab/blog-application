import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { lora } from '@/components/util/fonts'

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "Blog app",
    template: "%s",
  },
  description: "Modern web application with Next.js 14",
  openGraph: {
    title: {
      default: "Blog app",
      template: "%s",
    },
    description: "Modern web application with Next.js 14",
  },
};

// ... existing code ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${lora.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
