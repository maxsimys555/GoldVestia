import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { FeaturedArticlesSection } from '@/components/sections/FeaturedArticlesSection';
import { MarketInsights } from '@/components/sections/MarketInsights';

export const unstable_instant = { prefetch: 'static' };

const insightMethod = [
  {
    label: 'Macro context',
    copy: 'We look at rates, inflation expectations, currency pressure, and risk appetite to understand why metals are moving, not only where prices are trading.',
  },
  {
    label: 'Physical market signals',
    copy: 'Premiums, custody demand, settlement conditions, and liquidity windows help translate market noise into practical allocation decisions.',
  },
  {
    label: 'Portfolio interpretation',
    copy: 'Each signal is viewed through the lens of reserve strength, diversification, liquidity, and long-term investor behavior.',
  },
];

const readerBenefits = [
  'Understand the difference between short-term price movement and durable allocation signals.',
  'Compare gold, silver, platinum, and palladium through a portfolio lens.',
  'Use market commentary to support custody, rebalancing, and liquidity conversations.',
  'Follow precious metals without relying on noisy trading narratives.',
];

export default function MarketInsightsPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="relative mx-auto max-w-7xl">
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

      <section className="border-t border-white/10 bg-[#050505] px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              pre="Research method"
              title="How we translate markets into allocation context"
              description="Premium metals research should clarify decisions, not overwhelm investors with disconnected headlines."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              Our editorial view connects macro conditions, physical metal signals, and portfolio
              construction. The result is research that supports calmer allocation conversations.
            </p>
          </div>

          <div className="grid gap-5">
            {insightMethod.map((item) => (
              <article key={item.label} className="border border-white/10 bg-white/[0.03] p-7">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                  {item.label}
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SectionHeading
              pre="For investors"
              title="Research built for measured precious metals decisions"
              description="The insights are designed for readers who care about ownership quality, custody, and long-term capital behavior."
            />
            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                What you can use it for
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {readerBenefits.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <FeaturedArticlesSection />
    </div>
  );
}
