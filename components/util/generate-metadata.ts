import { Metadata } from 'next'

interface MetadataProps {
  title: string;
  description?: string;
}

export function generateMetadata({ title, description }: MetadataProps): Metadata {
  return {
    title: {
      absolute: `${title} | Blog app`,
    },
    description: description || "Modern web application with Next.js 14",
    icons: {
      icon: '/favicon.ico',
   
    },
  }
}