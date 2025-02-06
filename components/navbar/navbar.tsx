import Link from "next/link";

// types
import { NavLink as NavLinkType } from "@/components/types/nav-links";

// components navbar
import NavLink from "@/components/navbar/navlink";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const links: NavLinkType[] = [
    {
      id: "nav-home",
      name: "Home",
      href: "/",
    },
    {
      id: "nav-contact",
      name: "Contact Us",
      href: "/contact",
    },
  ];

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

        <ul className="flex items-center gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink href={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
