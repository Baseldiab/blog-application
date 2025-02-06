// types
import { PostItem } from "@/api/types/posts";
import { UserItem } from "@/api/types/users";

interface BlogsDetailsContentSectionProps {
  className?: string;
  blog: PostItem;
  user: UserItem;
}

export default function BlogsDetailsContentSection({
  className,
  blog,
  user,
}: BlogsDetailsContentSectionProps) {
  return (
    <section className="py-10 container">
      <p className="text-theme-text-title text-start font-lora text-normal  md:py-8 sm:py-6 py-3 max-w-[860px]">
        {blog.body}
      </p>
    </section>
  );
}
