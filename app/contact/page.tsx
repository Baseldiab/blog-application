import { generateMetadata } from "@/components/util/generate-metadata";

// components home
import HomeHeaderSection from "@/components/home/header-section";
import BlogPostSection from "@/components/home/blog-post-section";
import BlogsSection from "@/components/home/blogs-section/blogs-section";
import ContactForm from "@/components/contact-us/contact-form";

export const metadata = generateMetadata({
  title: "Contact",
});

export default function ContactPage() {
  return (
    <main className="flex-1 p-0 bg-gray-50">
      <header className="flex items-center justify-center md:mt-[100px] mt-[100px]">
        <h1 className="text-3xl font-bold py-5">Contact Us</h1>
      </header>

      <section className=" container pb-10  !max-w-[860px]">
        <ContactForm />
      </section>
    </main>
  );
}
