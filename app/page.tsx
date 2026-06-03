import { Hero } from "@/components/sections/Hero";
import { TradeCalculator } from "@/components/sections/TradeCalculator";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Monetization } from "@/components/sections/Monetization";
import { FAQ } from "@/components/sections/FAQ";
import { AdPlaceholder } from "@/components/ui/AdPlaceholder";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ad placement: below hero — high viewability for AdSense */}
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <AdPlaceholder slot="banner" />
      </div>

      <TradeCalculator />
      <Stats />
      <Features />
      <HowItWorks />
      <Monetization />
      <FAQ />
    </>
  );
}
