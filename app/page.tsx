import { generateMetadata } from "@/components/util/generate-metadata";

export const metadata = generateMetadata({
  title: "Home",
  description: "My page description",
});

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        Built with TypeScript, Tailwind CSS, Zod, and React Hook Form
      </div>
    </main>
  );
}
