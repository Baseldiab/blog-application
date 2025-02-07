"use client";

import Link from "next/link";
import { useState } from "react";

// constants
import { links } from "@/components/constants/nav-links";
import { cn } from "@/lib/utils";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-theme-text-lightTitle hover:text-white"
      >
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-theme-text-lightTitle"></span>
          <span className="block w-8 h-0.5 bg-theme-text-lightTitle"></span>
          <span className="block w-8 h-0.5 bg-theme-text-lightTitle"></span>
        </div>
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-16 left-0 w-full bg-white shadow-lg",
          isOpen ? "" : "hidden"
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="hover:text-gray-600"
              onClick={handleClick}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
