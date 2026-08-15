import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
