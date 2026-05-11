import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { FeaturedArticlesSection } from '@/components/sections/FeaturedArticlesSection';
import { MarketInsights } from '@/components/sections/MarketInsights';

export const unstable_instant = { prefetch: 'static' };

export default function MarketInsightsPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Market Insights"
                title="Premium data and bullion narratives for thoughtful investors"
                description="View refined market context, liquidity themes, and the signals shaping precious metal allocations."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Our insights page brings together curated research, private market signals, and
                  premium commentary for metal-focused portfolios.
                </p>
                <p>
                  Explore the rhythm of gold, silver, platinum, and palladium markets through a lens
                  built for wealth preservation and strategic allocation.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Insight view</p>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Private metals intelligence designed to clarify allocation decisions, monitor
                liquidity, and preserve premium capital.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <MarketInsights />
      <FeaturedArticlesSection />
    </div>
  );
}
