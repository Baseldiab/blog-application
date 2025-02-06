import { generateMetadata } from "@/components/util/generate-metadata";

// components home
import HomeHeaderSection from "@/components/home/header-section";
import BlogPostSection from "@/components/home/blog-post-section";

export const metadata = generateMetadata({
  title: "Home",
  description: "My page description",
});

export default function Home() {
  return (
    <main className="min-h-screen p-0 bg-gray-50">
      <HomeHeaderSection />

      <BlogPostSection />
    </main>
  );
}
