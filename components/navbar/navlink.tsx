"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-theme-text-lightTitle font-bold text-xs md:py-2 py-1",
        isActive ? "border-b-2 border-theme-border-main" : ""
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
