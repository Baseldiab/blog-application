import { generateMetadata } from "@/components/util/generate-metadata";

// components home
import HomeHeaderSection from "@/components/home/header-section";
import BlogPostSection from "@/components/home/blog-post-section";
import BlogsSection from "@/components/home/blogs-section/blogs-section";

export const metadata = generateMetadata({
  title: "Contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen p-0 bg-gray-50">
      <h1 className="text-3xl font-bold py-5">Contact</h1>
    </main>
  );
}
