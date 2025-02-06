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
  const [isLoading, setIsLoading] = React.useState(true);
  const [retryCount, setRetryCount] = React.useState(0);
  const MAX_RETRIES = 3;

  React.useEffect(() => {
    const loadImage = async (attempt: number) => {
      try {
        const url = generateRandomImage(width, height);
        
        // Verify the URL is accessible
        const response = await fetch(url, {
          mode: 'cors',
          credentials: 'omit'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setImageUrl(url);
        setIsLoading(false);
      } catch (error) {
        console.warn(`Failed to load image, attempt ${attempt + 1} of ${MAX_RETRIES}:`, error);
        if (attempt < MAX_RETRIES) {
          loadImage(attempt + 1);
        } else {
          console.error("Failed to load image after maximum retries");
          setImageUrl(null);
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    loadImage(0);
  }, [width, height]);

  return (
    <>
      {(isLoading || !imageUrl) && (
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
          onError={() => {
            if (retryCount < MAX_RETRIES) {
              setRetryCount(prev => prev + 1);
              setImageUrl(null);
            }
          }}
        />
      )}
    </>
  );
}
