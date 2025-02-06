import { generateMetadata } from "@/components/util/generate-metadata";

export const metadata = generateMetadata({
  title: "Home",
  description: "My page description",
});

export default function Home() {
  return <main className="min-h-screen p-8 bg-gray-50"></main>;
}
