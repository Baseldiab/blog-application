import { generateMetadata } from "@/components/util/generate-metadata";

// components home
import HomeHeaderSection from "@/components/home/header-section";
import BlogPostSection from "@/components/home/blog-post-section";
import BlogsSection from "@/components/home/blogs-section/blogs-section";

export const metadata = generateMetadata({
  title: "Home",
});

export default function HomePage() {
  return (
    <main className="min-h-screen p-0 bg-gray-50">
      <HomeHeaderSection />

      <BlogsSection />

      <BlogPostSection />
    </main>
  );
}
