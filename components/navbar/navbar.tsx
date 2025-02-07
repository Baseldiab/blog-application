import Link from "next/link";

// utils
import { cn } from "@/lib/utils";

// components navbar
import NavLink from "@/components/navbar/navlink";
import MobileNavbar from "@/components/navbar/mobile-navbar";

// constants
import { links } from "@/components/constants/nav-links";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "bg-theme-background-nav p-4 absolute top-0 left-0 right-0 z-50 md:min-h-[80px] flex justify-center items-center",
        className
      )}
    >
      <div className="container flex justify-between items-center h-full">
        <Link
          href="/"
          className="md:text-xl text-lg font-bold text-theme-text-navLogo"
        >
          Blog app
        </Link>

        <ul className="flex items-center gap-4 max-md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <MobileNavbar />
    </nav>
  );
}
