import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LatestEditsSection } from "@/components/sections/latest-edits";
import PricingSection from "@/components/sections/pricing-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

const App = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <LatestEditsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
};

export default App;
