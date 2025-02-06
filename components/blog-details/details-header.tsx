// types
import { PostItem } from "@/api/types/posts";
import { UserItem } from "@/api/types/users";

// components common
import RandomBackground from "@/components/common/random-background";

interface DetailsHeaderSectionProps {
  blog: PostItem;
  user: UserItem;
}

export default function DetailsHeaderSection({
  blog,
  user,
}: DetailsHeaderSectionProps) {
  return (
    <header className="relative w-full h-[100vh]  max-h-[600px]">
      <RandomBackground width={2000} height={600} />
      <div className="absolute inset-0 bg-[#343A40] opacity-80" />

      <SectionText blog={blog} user={user} />
    </header>
  );
}

const SectionText = ({ blog, user }: DetailsHeaderSectionProps) => {
  return (
    <article className="relative z-10 container h-full w-fullv md:max-w-[530px]">
      <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center md:gap-4 gap-2 text-center">
        <h1 className="text-theme-text-lightTitle md:text-4xl sm:text-2xl text-xl font-bold font-lora capitalize w-full my-4">
          {blog.title}
        </h1>
        <p className="font-lora text-theme-text-lightTitle">{blog.body}</p>

        <p className="font-lora text-xs text-theme-text-lightTitle">
          By {user.name}
        </p>
      </div>
    </article>
  );
};
