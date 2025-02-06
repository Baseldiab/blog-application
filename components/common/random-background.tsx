"use client";

import { useEffect, useState } from "react";
import { generateRandomImage } from "@/lib/utils";

interface RandomBackgroundProps {
  width: number;
  height: number;
}

export default function RandomBackground({ width, height }: RandomBackgroundProps) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(generateRandomImage(width, height));
  }, [width, height]);

  return (
    <div
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full object-cover"
    />
  );
} 