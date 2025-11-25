import { Navbar } from "@/components/features/navbar";
import { Hero } from "@/components/features/hero";
import { AboutSection } from "@/components/features/about/about-section";
import { ServicesSection } from "@/components/features/services/services-section";
import { ContactSection } from "@/components/features/contact/contact-section";
import { Footer } from "@/components/features/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-bg-default">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
