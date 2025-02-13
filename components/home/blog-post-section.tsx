"use client";

import React from "react";

// assets
import BgImg from "@/public/images/post.webp";

// utils
import { generateRandomDate } from "@/lib/utils";

export default function BlogPostSection() {
  return (
    <section id="about" className="relative w-full h-[100vh]  max-h-[600px]">
      <div
        style={{ backgroundImage: `url(${BgImg.src})` }}
        className="absolute bg-cover bg-center bg-no-repeat w-full h-full object-cover"
      />

      <div className="absolute bg-[#343A40]/80" />

      <SectionText />
    </section>
  );
}

const SectionText = () => {
  const date = React.useMemo(() => {
    return generateRandomDate();
  }, []);

  return (
    <article className="relative z-10 container h-full w-fullv md:max-w-[530px]">
      <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center md:gap-4 gap-2 text-center">
        <h2 className="text-theme-text-lightTitle md:text-4xl sm:text-2xl text-xl font-bold font-lora capitalize w-full my-4">
          {"Richird Norton photorealistic rendering as real photos"}
        </h2>
        <p className="font-lora text-theme-text-lightTitle">
          {
            "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
          }
        </p>

        <div className="h-0.5 w-10 block bg-theme-text-lightSubtitle mt-2 mx-1" />
        <p className="font-lora text-theme-text-lightTitle">{date}</p>
      </div>
    </article>
  );
};
