// api
import { notFound } from "next/navigation";
import { getAllPosts, getPostById } from "@/api/routes/posts";
import { getUserById } from "@/api/routes/user";

// components details
import DetailsHeaderSection from "@/components/blog-details/details-header";

export async function generateStaticParams() {
  try {
    const blogs = await getAllPosts();
    return blogs.map((blog) => ({
      id: blog.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array to prevent build failures
  }
}

export const dynamicParams = false; // Allow dynamic routes

export default async function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  if (!params.id) {
    notFound();
  }

  try {
    const blog = await getPostById(params.id);
    if (!blog) {
      notFound();
    }

    const user = await getUserById(blog.userId);
    if (!user) {
      notFound();
    }

    return (
      <main className="min-h-screen p-0 bg-gray-50">
        <DetailsHeaderSection blog={blog} user={user} />
      </main>
    );
  } catch (error) {
    // Log the actual error for debugging
    console.error("Error in BlogDetailsPage:", error);
    throw error; // Let Next.js error boundary handle it
  }
}
