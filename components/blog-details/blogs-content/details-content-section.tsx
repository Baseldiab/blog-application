import Image from "next/image";

// assets
import UserImg from "@/public/images/moSalah.webp";

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
    <section className="md:py-14 py-8  container !max-w-[860px]">
      <p className="text-theme-text-title text-sm font-lora text-normal  md:py-14 py-8  mx-auto flex justiy-center items-center text-start border-b borer-gray-900">
        {blog.body}
      </p>

      <UserArticle user={user} />
    </section>
  );
}

const UserArticle = ({ user }: { user: UserItem }) => {
  return (
    <article className="flex flex-col gap-4 md:py-14 py-8">
      <div className="flex items-start  gap-4">
        <Image
          src={UserImg.src}
          alt="post image"
          width={60}
          height={60}
          loading="lazy"
          className={"rounded-full"}
        />

        <div className="flex flex-col gap-2">
          <p className="text-theme-text-title text-sm font-lora font-bold">
            {user.name}
          </p>
          <p className="text-theme-text-subtitle text-xs font-lora font-normal">
            {user.company.bs}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-start gap-3">
        <DetailsItem title="Name : " value={user.name} />

        <DetailsItem title="Email : " value={user.email} />

        <DetailsItem title="Phone : " value={user.phone} />

        <DetailsItem title="website : " value={user.website} />

        <DetailsItem title="City : " value={user.address.city} />

        <DetailsItem title="Street : " value={user.address.street} />

        <DetailsItem title="Suite : " value={user.address.suite} />

        <DetailsItem title="Zipcode : " value={user.address.zipcode} />
      </div>
    </article>
  );
};

const DetailsItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex items-start  gap-4">
      <p className="text-theme-text-title text-sm font-lora font-bold">
        {title}
      </p>
      <p className="text-theme-text-subtitle text-sm font-lora font-bold">
        {value}
      </p>
    </div>
  );
};
