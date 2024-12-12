import Hero from "@/sections/Hero";
import Services from "@/components/OurServices/OurServices";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Services />
      <ContactForm />
    </main>
  );
}
