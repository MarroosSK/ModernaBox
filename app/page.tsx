//images

// fonts
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LatestEditsSection } from "@/components/sections/latest-edits";
import PricingSection from "@/components/sections/pricing-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
// components
// import Accordion from "@/components/accordion/accordion";
// import CTA from "@/components/cta/CTA";
// import Demos from "@/components/demos/demos";
// import FAQ from "@/components/faq/faq";
// import Features from "@/components/features/features";
// import Hero from "@/components/hero/hero";
// import Logos from "@/components/logos/logos";
// import Pricing from "@/components/pricing/pricing";
// import Testimonials from "@/components/testimonials/testimonials";

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
      {/* <Logos />
      <Demos />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ>
        <Accordion />
      </FAQ>
      <CTA /> */}
    </main>
  );
};

export default App;
