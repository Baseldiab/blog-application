// api
import { getAllPosts } from "@/api/routes/posts";

// components home blog
import BlogItem from "@/components/home/blogs-section/blog-item";

export default async function BlogsSection() {
  const blogs = await getAllPosts();
  return (
    <section className="py-10 container">
      <h1 className="text-theme-text-title text-start font-lora text-4xl font-bold">
        Blogs
      </h1>

      <div className="flex flex-wrap gap-4">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
