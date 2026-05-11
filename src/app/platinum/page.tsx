import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const unstable_instant = { prefetch: 'static' };

const platinumPoints = [
  {
    title: 'Luxury resilience',
    description: 'Platinum blends exclusivity with industrial relevance, creating a distinctive wealth anchor.',
  },
  {
    title: 'Selective exposure',
    description: 'Premium access to a rare metal used in advanced manufacturing and high-end applications.',
  },
  {
    title: 'Refined storage',
    description: 'High-security custody tailored to elite metal allocations and discreet ownership.',
  },
];

export default function PlatinumPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(240,240,255,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(220,215,255,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Platinum"
                title="A premium metal for elite allocations"
                description="Platinum offers refined exposure for investors seeking rarity, industrial depth, and portfolio singularity."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Platinum is a distinguished alternative for high-conviction metal portfolios. It combines scarcity with practical demand from advanced industries.
                </p>
                <p>
                  Our platinum access layer is designed to preserve value quietly while enabling informed capital positioning.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300" size="lg">
                  Discover platinum access
                </Button>
                <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5">
                  Learn about our approach
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Platinum insight</p>
              <div className="mt-6 grid gap-4">
                {platinumPoints.map((item) => (
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
            pre="Platinum exposure"
            title="Rare metal access with modern strategic clarity"
            description="A premium allocation designed for investors who value scarcity, durability, and portfolio differentiation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Industrial relevance',
                copy: 'Platinum remains critical for clean energy and advanced technologies.',
              },
              {
                label: 'Luxury demand',
                copy: 'Rare vehicle, jewelry, and premium manufacturing demand supports the metal’s premium status.',
              },
              {
                label: 'Secure ownership',
                copy: 'Private custody with clear audit trails and premium handling standards.',
              },
            ].map((item) => (
              <article key={item.label} className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)] transition hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/5">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">{item.label}</p>
                <p className="mt-5 text-lg leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
