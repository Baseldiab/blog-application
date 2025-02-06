import { ReactNode } from "react";

// components common
import RandomBackground from "@/components/common/random-background";

interface HeaderSectionProps {
  children: ReactNode;
  imageUrl: string;
}

export default function HeaderSection({
  children,
  imageUrl,
}: HeaderSectionProps) {
  return (
    <header className="relative w-full h-[100vh] max-h-[600px]">
      {/* <RandomBackground width={2000} height={600} /> */}

      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#343A40] opacity-80" />
      <div className="relative z-10 container h-full">{children}</div>
    </header>
  );
}
