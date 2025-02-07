// util
import { generateMetadata } from "@/components/util/generate-metadata";

// assets
import HeaderBg from "@/public/images/header-details.webp";

// components contact
import ContactForm from "@/components/contact-us/contact-form";

export const metadata = generateMetadata({
  title: "Contact",
});

export default function ContactPage() {
  return (
    <main className="flex-1 p-0 bg-gray-50">
      <header className="flex items-center justify-center relative w-full h-[220px]  max-h-[300px]">
        <div
          style={{ backgroundImage: `url(${HeaderBg.src})` }}
          className="absolute bg-cover bg-center bg-no-repeat w-full h-full object-cover"
        />

        <div className="absolute  bg-[#343A40]/80" />

        <h1 className="text-3xl font-bold py-5 text-theme-text-lightTitle z-30 md:mt-8 mt-4">
          Contact Us
        </h1>
      </header>

      <section className=" container md:py-14 sm:py-8 py-6  !max-w-[860px]">
        <ContactForm />
      </section>
    </main>
  );
}
