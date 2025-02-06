import { headers } from "next/headers";
import Link from "next/link";
import { generateMetadata } from "@/components/util/generate-metadata";

export const metadata = generateMetadata({
  title: "Not Found",
  description: "The page you are looking for could not be found.",
});

export default function NotFound() {
  return (
    <div className="relative text-center py-[6rem]">
      <h3 className="lg:text-7xl text-center md:text-5xl text-4xl w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase">
        {"Not Found"}
      </h3>
      <h2 className="lg:text-[18rem] text-center w-full md:text-[14rem] text-[11rem] text-secondary">
        404
      </h2>
      <p className="text-center text-SecondaryText">
        {"The page you are looking for could not be found."}
      </p>

      <Link href="/" className="mt-10 border-b border-black">
        {"Go to Home"}
      </Link>
    </div>
  );
}
