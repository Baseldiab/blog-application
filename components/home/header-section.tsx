"use client";

import * as React from "react";

// utils
import { generateRandomDate } from "@/lib/utils";

// components common
import HeaderSection from "@/components/common/header-section";
import Carousel from "@/components/common/carousel";

export default function HomeHeaderSection() {
  return (
    <HeaderSection>
      <article className="absolute left-0 md:top-2/3 top-1/2 -translate-y-1/2 md:max-w-[530px] max-w-full">
        <Carousel paginationClassName={"left-0 top-[110%] mt-5"}>
          {Array.from({ length: 3 }).map((_, index) => (
            <SliderItem
              key={index}
              index={index}
              badge={"ADVENTURE"}
              title="Richird Norton photorealistic rendering as real photos"
              description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
            />
          ))}
        </Carousel>
      </article>
    </HeaderSection>
  );
}

interface SliderItemProps {
  badge: string;
  title: string;
  description: string;
  index: number;
}
const SliderItem = ({ badge, title, description, index }: SliderItemProps) => {
  const date = React.useMemo(() => {
    return generateRandomDate(index);
  }, [index]);

  return (
    <div className="md:max-w-[530px] max-w-full">
      <div
        key={`header-blog-${title}`}
        className="p-1.5 bg-white/15 font-bold text-[10px] rounded-[8px] uppercase max-w-fit text-xs text-white"
      >
        {badge}
      </div>
      <h2 className="text-theme-text-lightTitle md:text-4xl sm:text-2xl text-xl font-bold font-lora capitalize w-full my-4">
        {title}
      </h2>
      <div className="text-theme-text-lightSubtitle text-xs font-normal flex gap-2 items-start">
        <span>{date}</span>
        <span className="h-0.5 w-10 block bg-theme-text-lightSubtitle mt-2 mx-1"></span>
        <p className="font-lora">{description}</p>
      </div>
    </div>
  );
};
