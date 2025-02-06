import Link from "next/link";

// types
import { FooterLink } from "@/components/types/footer-links";

// constants
import {
  explorateLinks,
  headquarterLinks,
  publisherLinks,
} from "@/components/constants/footer-links";
import { cn } from "@/lib/utils";

export default function FooterLinks() {
  return (
    <div className=" bg-theme-background-footer md:py-14 py-3 min-h-[400px] flex items-center">
      <div className="container py-4 align-middle text-center relative ">
        <div className="max-w-[770px] flex md:gap-24 justify-between gap-3  items-start max-md:flex-col">
          <ContactLinks
            // className={"sm:max-w-[110px]"}
            links={publisherLinks}
            title="Contact the Publisher"
          />

          <ContactLinks
            // className={"sm:max-w-[110px]"}
            links={explorateLinks}
            title="Explorate"
          />

          <ContactLinks
            className={"sm:max-w-[110px]"}
            links={headquarterLinks}
            title="Headquarter"
          />
        </div>
      </div>
    </div>
  );
}

interface ContactLinksProps {
  links: FooterLink[];
  title: string;
  className?: string;
}

const ContactLinks = ({ links, title, className }: ContactLinksProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-start justify-start w-fit md:basis-1/3",
        className
      )}
    >
      <h6 className="text-theme-text-lightTitle font-bold text-lg font-lora capitalize text-start">
        {title}
      </h6>
      <ul className="flex flex-col md:gap-3 gap-2 items-start">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="font-normal font-lora text-theme-text-lightSubtitle text-xs w-full h-full block text-start"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
