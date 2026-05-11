import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const unstable_instant = { prefetch: 'static' };

const goldDetails = [
  {
    title: 'Anchor protection',
    description:
      'Gold remains the preferred store of value for families and institutions navigating market uncertainty.',
  },
  {
    title: 'Refined liquidity',
    description:
      'Premium bullion access with private vault settlement and trusted delivery options.',
  },
  {
    title: 'Portfolio balance',
    description:
      'gold offers strategic downside resilience while preserving capital across business cycles.',
  },
];

export default function GoldPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Gold"
                title="The premium anchor for long-term wealth"
                description="Unlock resilient bullion exposure, elegant custody, and portfolio-grade access to physical gold."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Gold is the timeless foundation for private wealth preservation. Our refined
                  platform helps investors secure premium metal positions with institutional-grade
                  delivery, storage, and portfolio oversight.
                </p>
                <p>
                  Designed for discerning investors, this experience blends clarity, discretion, and
                  modern investment craftsmanship.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  size="lg"
                >
                  Explore gold allocation
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
                >
                  Book a private consultation
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Gold exposure</p>
              <div className="mt-6 grid gap-4">
                {goldDetails.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-black/50 p-5">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <SectionHeading
            pre="Gold allocation"
            title="Tailored premium strategies built around bullion strength"
            description="From sovereign-grade bars to private storage, every solution is crafted for clarity and discretion."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Institutional custody',
                copy: 'Private vaults with insured oversight and dedicated access controls.',
              },
              {
                label: 'Discreet settlement',
                copy: 'Controlled delivery options with secure chain-of-custody and premium handling.',
              },
              {
                label: 'Legacy planning',
                copy: 'Structures that support family offices and multi-generational wealth preservation.',
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)] transition hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/5"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                  {item.label}
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
