// api
import { notFound } from "next/navigation";
import { getAllPosts, getPostById } from "@/api/routes/posts";

// components details
import DetailsHeaderSection from "@/components/blog-details/details-header";
import NoData from "@/components/common/no-data";
import NoDataIcon from "@/components/icons/no-dataIcon";

export async function generateStaticParams() {
  try {
    const blogs = await getAllPosts({}); // Get all posts without limit
    return blogs.map((blog) => ({
      id: blog.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export const dynamicParams = true; // Allow dynamic routes

export default async function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const blog = await getPostById(params.id);

    if (!blog) {
      notFound();
    }

    return (
      <main className="min-h-screen p-0 bg-gray-50">
        <DetailsHeaderSection blog={blog} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
}
