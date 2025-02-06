"use client";

import React from "react";

// lib
import { cn, generateRandomDate } from "@/lib/utils";

// types
import { PostItem } from "@/api/types/posts";

// components common
import RandomImgCard from "@/components/common/random-img-card";

interface BlogItemProps {
  blog: PostItem;
}

export default function BlogItem({ blog }: BlogItemProps) {
  const date = React.useMemo(() => {
    return generateRandomDate(1234);
  }, []);

  return (
    <article className={cn("flex flex-col gap-2 relative", "max-w-[310px]")}>
      <RandomImgCard className="w-full h-full" />

      <p className="text-sm text-theme-text-subtitle font-normal">{date}</p>
      <p className="text-xl text-theme-text-subtitle">{blog.title}</p>
      <p className="text-sm text-theme-text-subtitle font-normal">
        {blog.body}
      </p>
    </article>
  );
}
