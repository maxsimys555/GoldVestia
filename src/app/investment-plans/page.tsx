import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { InvestmentPlansSection } from '@/components/sections/InvestmentPlansSection';

export const unstable_instant = { prefetch: 'static' };

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
    </div>
  );
}
