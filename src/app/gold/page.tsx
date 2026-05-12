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

const goldFramework = [
  {
    label: 'Reserve core',
    copy: 'Gold is best positioned as the stable center of a precious metals strategy: highly recognized, deeply liquid, and historically resilient during periods of currency stress.',
  },
  {
    label: 'Custody discipline',
    copy: 'Allocated storage, insured vaulting, and clear ownership records help transform a gold position from an idea into a practical reserve asset.',
  },
  {
    label: 'Rebalancing rhythm',
    copy: 'Premium investors use gold to preserve optionality, then rebalance deliberately when market volatility creates valuation gaps across the broader portfolio.',
  },
];

const goldUseCases = [
  'Long-term family wealth preservation with a physical reserve layer.',
  'Portfolio protection during equity, credit, or currency instability.',
  'A liquid asset base for investors who want discretion and global recognition.',
  'Legacy planning where custody, documentation, and ownership continuity matter.',
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

      <section className="border-t border-white/10 bg-[#050505] px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              pre="Why gold"
              title="A physical reserve for uncertain capital cycles"
              description="Gold performs its strongest role when it is treated with patience, proper custody, and a clear place inside the wider portfolio."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              For private investors, gold is less about chasing every price movement and more about
              protecting decision-making freedom. It gives capital a durable reference point when
              financial markets become noisy, correlated, or emotionally charged.
            </p>
          </div>

          <div className="grid gap-5">
            {goldFramework.map((item) => (
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                pre="Investor fit"
                title="Designed for capital that values control"
                description="A gold allocation is strongest when the objective is clear: reserve strength, liquidity, and calm through volatility."
              />
              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  We help clients define how much gold belongs in the portfolio, how it should be
                  stored, and how it should be reviewed over time. The process is quiet, measured,
                  and built for investors who prefer precision over spectacle.
                </p>
                <p>
                  Each allocation can be shaped around custody preferences, reporting needs, and
                  the level of liquidity required for future capital events.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Common objectives
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {goldUseCases.map((item) => (
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
