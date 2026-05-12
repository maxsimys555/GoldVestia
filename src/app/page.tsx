import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedArticlesSection } from '@/components/sections/FeaturedArticlesSection';
import { BlogContentSections } from '@/components/sections/BlogContentSections';
import { MetalsShowcase } from '@/components/sections/MetalsShowcase';
import { Advantages } from '@/components/sections/Advantages';
import { MarketInsights } from '@/components/sections/MarketInsights';
import { Testimonials } from '@/components/sections/Testimonials';
import { AnimatedGoldBackground } from '@/components/ui/animated-gold-background';

export const unstable_instant = { prefetch: 'static' };

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <AnimatedGoldBackground className="fixed inset-0" />

      <div className="relative z-10">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,214,120,0.2),transparent_24%),radial-gradient(circle_at_80%_15%,_rgba(255,200,0,0.14),transparent_22%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/18 to-transparent" />

          <HeroSection />
        </section>

        <MetalsShowcase />
        <Advantages />
        <MarketInsights />
        <Testimonials />
        <FeaturedArticlesSection />
        <BlogContentSections />
      </div>
    </div>
  );
}
