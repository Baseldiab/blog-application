"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

// utils
import { generateRandomDate } from "@/lib/utils";

// ui imports
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from "@/components/ui/carousel";

// components common
import HeaderSection from "@/components/common/header-section";

export default function HomeHeaderSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <HeaderSection>
      <article className="absolute left-0 md:top-2/3 top-1/2 -translate-y-1/2 md:max-w-[530px] max-w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full md:max-w-[530px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <SliderItem
                key={index}
                badge={"ADVENTURE"}
                title="Richird Norton photorealistic rendering as real photos"
                description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
              />
            ))}
          </CarouselContent>
          <CarouselPagination className="md:flex justify-start  z-10 md:!mt-7 mt-4 " />
        </Carousel>
      </article>
    </HeaderSection>
  );
}

interface SliderItemProps {
  badge: string;
  title: string;
  description: string;
}
const SliderItem = ({ badge, title, description }: SliderItemProps) => {
  // Use useMemo to ensure consistent date between renders
  const date = React.useMemo(() => {
    // Use a fixed seed for each index to ensure consistency
    return generateRandomDate(1234);
  }, []);

  return (
    <CarouselItem className="md:max-w-[530px] max-w-full">
      <Badge
        key={`header-blog-${title}`}
        className="bg-white/15 font-bold text-[10px] rounded-[8px] uppercase"
      >
        {badge}
      </Badge>
      <h2 className="text-theme-text-lightTitle md:text-4xl sm:text-2xl text-xl font-bold font-lora capitalize w-full my-4">
        {title}
      </h2>
      <div className="text-theme-text-lightSubtitle text-xs font-normal flex gap-2 items-start">
        <span>{date}</span>
        <span className="h-0.5 w-10 block bg-theme-text-lightSubtitle mt-2 mx-1"></span>
        <p className="font-lora">{description}</p>
      </div>
    </CarouselItem>
  );
};
