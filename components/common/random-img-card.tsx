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
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    setImageUrl(generateRandomImage(310, 280));
  }, []);
  return (
    <>
      <Image
        src={imageUrl}
        alt="post image"
        width={width}
        height={height}
        loading="lazy"
        className={cn("rounded-lg h-[280px]", className)}
      />
    </>
  );
}
