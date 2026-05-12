import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { InvestmentPlansSection } from '@/components/sections/InvestmentPlansSection';

export const unstable_instant = { prefetch: 'static' };

const planPrinciples = [
  {
    title: 'Allocation first',
    copy: 'Each plan begins with the role metals should play in the portfolio: protection, diversification, liquidity, or long-term legacy preservation.',
  },
  {
    title: 'Custody matched to intent',
    copy: 'We consider storage requirements, auditability, insurance, and reporting so the ownership structure supports the investment objective.',
  },
  {
    title: 'Review without noise',
    copy: 'Premium metal investing benefits from measured check-ins, not constant overreaction. Reviews focus on allocation drift, market context, and liquidity needs.',
  },
];

const comparisonPoints = [
  'Core Bullion suits investors building an initial physical metals reserve.',
  'Strategic Metals supports diversified exposure across multiple precious metals.',
  'Private Reserve is shaped for bespoke mandates, larger allocations, and family office needs.',
  'Every plan can be discussed around custody, reporting, settlement, and long-term review cadence.',
];

export default function InvestmentPlansPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Investment Plans"
                title="Premium metal strategies for every stage of wealth"
                description="Choose a refined plan that aligns with your capital goals, liquidity preferences, and custody expectations."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Each plan is designed to keep precious metal investment simple, secure, and
                  aligned with your long-term intent.
                </p>
                <p>
                  We partner with private vault providers and wealth teams to deliver a luxury
                  experience with disciplined execution.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  size="lg"
                >
                  Explore the plans
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
                >
                  Arrange a strategy call
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Plan design</p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                Our investment plans are tailored to support your precious metals allocation
                strategy with institutional-grade custody and professional oversight.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <InvestmentPlansSection />

      <section className="border-t border-white/10 bg-[#050505] px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              pre="Plan logic"
              title="Built around objectives, not generic tiers"
              description="The right plan depends on how the investor wants physical metals to behave inside the wider capital structure."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              Some clients want a simple gold and silver reserve. Others need a multi-metal
              portfolio with specialist exposure, custody reporting, and more frequent strategy
              review. The plan structure makes those choices easier to compare.
            </p>
          </div>

          <div className="grid gap-5">
            {planPrinciples.map((item) => (
              <article key={item.title} className="border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SectionHeading
              pre="Choosing a plan"
              title="A clearer path from interest to ownership"
              description="We help investors choose a starting point, then refine the structure through consultation and market context."
            />
            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Selection guide
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {comparisonPoints.map((item) => (
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
    </div>
  );
}
