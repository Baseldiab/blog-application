"use client";

import { cn, generateRandomImage } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface RandomImgCardProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function RandomImgCard({
  className,
  width = 310,
  height = 280,
}: RandomImgCardProps) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    setImageUrl(generateRandomImage(width, height));
  }, [width, height]);

  return (
    <>
      {!imageUrl && (
        <div
          className={cn(
            "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg !w-full !h-full min-h-[280px]",
            className
          )}
        />
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="post image"
          width={width}
          height={height}
          loading="lazy"
          className={cn("rounded-lg", className)}
        />
      )}
    </>
  );
}
