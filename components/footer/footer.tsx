"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={``}>
   
      <SubFooter />
    </footer>
  );
}

const SubFooter = () => {
  const yearNow = new Date().getFullYear();

  return (
    <div className="bg-theme-background-subFooter py-5">
      <div className="container flex justify-center items-center max-md:flex-wrap gap-1 flex-wrap font-karla my-3">
        <span className="text-theme-text-lightSubtitle max-sm:text-sm">
          {`All rights reserved © ${yearNow} Created by`}
        </span>
        <Link
          className="font-bold max-sm:text-sm text-theme-text-lightSubtitle"
          href="https://github.com/Baseldiab"
          title="My GitHub"
        >
          Baseldiab
        </Link>
      </div>
    </div>
  );
};
