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
    description: description || "Discover engaging blog posts, detailed articles, and connect with our community of writers. Share your thoughts, explore diverse topics, and get in touch with us for any inquiries.",
    icons: {
      icon: '/favicon.ico',
   
    },
  }
}