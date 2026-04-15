import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { IndustriesSection } from "@/components/landing/IndustriesSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zynkora — Run Your Business, Even Offline" },
      { name: "description", content: "Offline-first attendance, payroll, and employee management platform for manufacturing SMEs, schools, and hospitals." },
      { property: "og:title", content: "Zynkora — Run Your Business, Even Offline" },
      { property: "og:description", content: "Track attendance, run payroll, and manage operations anywhere. Syncs automatically when online." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IndustriesSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
