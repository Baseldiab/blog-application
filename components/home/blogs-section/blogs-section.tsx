// api
import { getAllPosts } from "@/api/routes/posts";
import NoData from "@/components/common/no-data";

// components home blog
import BlogItem from "@/components/home/blogs-section/blog-item";

// assets
import NoDataIcon from "@/components/icons/no-dataIcon";

export default async function BlogsSection() {
  const blogs = await getAllPosts({ _limit: 8 });

  return (
    <section id="articles" className="py-10 container">
      <h1 className="text-theme-text-title text-start font-lora text-4xl font-bold md:py-8 sm:py-6 py-3">
        Blogs
      </h1>

      {!blogs || blogs.length === 0 ? (
        <>
          <NoData
            icon={<NoDataIcon />}
            title="No blogs found"
            className="py-10"
            iconClassName="text-theme-text-lightTitle"
            titleClassName="text-theme-text-lightTitle"
          />
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-8 gap-4">
            {blogs.map((blog, index) => (
              <BlogItem key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
