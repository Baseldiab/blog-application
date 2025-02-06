// api
import { getAllPosts } from "@/api/routes/posts";

// components home blog
import BlogItem from "@/components/home/blogs-section/blog-item";

export default async function BlogsSection() {
  const blogs = await getAllPosts({ _limit: 8 });
  return (
    <section className="py-10 container">
      <h1 className="text-theme-text-title text-start font-lora text-4xl font-bold md:py-8 sm:py-6 py-3">
        Blogs
      </h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-8 gap-4">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
