"use client";

import React from "react";

// lib
import { cn, generateRandomDate } from "@/lib/utils";

// types
import { PostItem } from "@/api/types/posts";

import Link from "next/link";
import Image from "next/image";

// components constants
import { postsImg } from "@/components/constants/posts-img";

interface BlogItemProps {
  blog: PostItem;
  index: number;
}

export default function BlogItem({ blog, index }: BlogItemProps) {
  const date = React.useMemo(() => {
    return generateRandomDate();
  }, []);

  return (
    <article className={cn("flex flex-col gap-2 relative", "max-w-[310px]")}>
      <Link title="blog details" href={`/blog/${blog.id}`}>
        <Image
          src={postsImg[index].img}
          alt="post image"
          width={310}
          height={200}
          loading="lazy"
          className={cn("rounded-lg")}
        />
      </Link>

      <Link title="blog details" href={`/blog/${blog.id}`}>
        <p className="text-sm text-theme-text-subtitle font-normal font-lora">
          {date}
        </p>
        <p className="text-xl text-theme-text-title line-clamp-1 font-lora">
          {blog.title}
        </p>
        <p className="text-sm text-theme-text-subtitle font-normal font-lora line-clamp-3">
          {blog.body}
        </p>
      </Link>
    </article>
  );
}
