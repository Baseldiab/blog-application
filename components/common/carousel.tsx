"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  autoPlay?: boolean;
  interval?: number;
  previousButton?: boolean;
  nextButton?: boolean;
  paginationClassName?: string;
}

export default function Carousel({
  children,
  autoPlay = true,
  interval = 3000,
  previousButton = false,
  nextButton = false,
  paginationClassName,
}: CarouselProps) {
  const slides = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main carousel content */}
      <div
        className="relative h-full w-[101%]"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          display: "flex",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={cn("min-w-full")}>
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {previousButton && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          ←
        </button>
      )}
      {nextButton && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
        >
          →
        </button>
      )}

      {/* Pagination dots */}
      <div className={cn("  flex gap-2", paginationClassName)}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",

              currentIndex === index ? "bg-white" : "bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
