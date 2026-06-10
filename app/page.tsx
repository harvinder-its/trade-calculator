import { Hero } from "@/components/sections/Hero";
import { TradeCalculator } from "@/components/sections/TradeCalculator";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Monetization } from "@/components/sections/Monetization";
import { TraderStories } from "@/components/sections/TraderStories";
import { FAQ } from "@/components/sections/FAQ";
export default function HomePage() {
  return (
    <>
      <Hero />
      <TradeCalculator />
      <Stats />
      <Features />
      <HowItWorks />
      <Monetization />
      <TraderStories />
      <FAQ />
    </>
  );
}
