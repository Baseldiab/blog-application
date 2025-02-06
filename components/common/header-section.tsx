import { ReactNode } from "react";

// utils
import { generateRandomImage } from "@/lib/utils";

interface HeaderSectionProps {
  children: ReactNode;
}

export default function HeaderSection({ children }: HeaderSectionProps) {
  return (
    <header className="relative w-full h-[100vh]  max-h-[600px]">
      <div
        style={{ backgroundImage: `url(${generateRandomImage(2000, 600)})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#343A40] opacity-80" />
      <div className="relative z-10 container">{children}</div>
    </header>
  );
}
