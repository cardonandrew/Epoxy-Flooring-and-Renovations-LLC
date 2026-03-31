import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

interface SectionPageProps {
  scrollTo: string;
}

const SectionPage = ({ scrollTo }: SectionPageProps) => {
  useScrollToSection(scrollTo);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <GallerySection />
      <ServiceAreaSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SectionPage;
