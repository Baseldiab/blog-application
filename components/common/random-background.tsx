"use client";

import { useEffect, useState } from "react";
import { generateRandomImage } from "@/lib/utils";

interface RandomBackgroundProps {
  width: number;
  height: number;
}

export default function RandomBackground({
  width,
  height,
}: RandomBackgroundProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    const loadImage = async (attempt: number) => {
      try {
        const url = generateRandomImage(width, height);

        const response = await fetch(url, {
          mode: "cors",
          credentials: "omit",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const img = new Image();
        img.crossOrigin = "anonymous";

        const imageLoadPromise = new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });

        await imageLoadPromise;
        setImageUrl(url);
      } catch (error) {
        console.warn(
          `Failed to load image, attempt ${attempt + 1} of ${MAX_RETRIES}:`,
          error
        );
        if (attempt < MAX_RETRIES) {
          loadImage(attempt + 1);
        } else {
          console.error("Failed to load image after maximum retries");
          setImageUrl(null);
        }
      }
    };

    loadImage(0);
  }, [width, height]);

  return (
    <div
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full object-cover"
    />
  );
}
