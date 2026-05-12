import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const unstable_instant = { prefetch: 'static' };

const palladiumAdvantages = [
  {
    title: 'Elite allocation',
    description: 'Palladium is an exclusive metal with asymmetric appeal for premium portfolios.',
  },
  {
    title: 'Demand resilience',
    description:
      'Strong industrial demand supports long-term structural value for rare metal exposure.',
  },
  {
    title: 'Strategic balance',
    description: 'Palladium adds a rare complement to the traditional precious metals mix.',
  },
];

const palladiumFramework = [
  {
    label: 'Concentrated supply',
    copy: 'Palladium production is tied to a limited set of mining regions and byproduct streams, making supply dynamics unusually important to the investment case.',
  },
  {
    label: 'Demand transition',
    copy: 'Automotive catalysts, recycling flows, substitution, and policy shifts all influence palladium, so the strongest strategy is selective and closely reviewed.',
  },
  {
    label: 'Asymmetric profile',
    copy: 'Because palladium can be volatile, it works best as a high-conviction satellite allocation rather than a broad reserve replacement.',
  },
];

const palladiumUseCases = [
  'Experienced investors seeking a rare and tactical metals position.',
  'Portfolios built to include carefully sized satellite allocations.',
  'Clients who want exposure to supply-constrained precious metal markets.',
  'Private holdings supported by secure custody, documentation, and review.',
];

export default function PalladiumPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,230,230,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,215,190,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Palladium"
                title="Exclusive exposure for a discerning metal strategy"
                description="Palladium offers rare upside potential with a premium industrial and portfolio narrative."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Palladium is a highly selective allocation that enhances premium portfolios. Our
                  service provides refined access to this rare metal with trusted custody.
                </p>
                <p>
                  For investors seeking portfolio distinction, palladium delivers an elevated
                  dimension of precious metal exposure.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  size="lg"
                >
                  Explore palladium access
                </Button>
                <Link
                  href="/market-insights"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
                >
                  Review market insight
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Palladium profile
              </p>
              <div className="mt-6 grid gap-4">
                {palladiumAdvantages.map((item) => (
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
            pre="Palladium strategy"
            title="Curated access to one of the rarest precious metals"
            description="A premium metal solution for experienced investors seeking a rare portfolio differentiator."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Structural demand',
                copy: 'Palladium’s supply-constrained profile supports premium valuation potential.',
              },
              {
                label: 'Private custody',
                copy: 'Bespoke storage and settlement designed for discreet metal holdings.',
              },
              {
                label: 'Portfolio differentiation',
                copy: 'Rare metal exposure with a modern premium investment thesis.',
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
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              pre="Palladium thesis"
              title="A rare metal shaped by supply tension"
              description="Palladium can add distinction to a metals portfolio, but it deserves discipline, sizing control, and regular review."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              The opportunity is not simply that palladium is rare. The opportunity is the
              relationship between concentrated production, industrial need, recycling flows, and
              shifting demand patterns.
            </p>
          </div>

          <div className="grid gap-5">
            {palladiumFramework.map((item) => (
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
                title="A high-conviction satellite for private portfolios"
                description="Palladium belongs in portfolios where the investor understands scarcity, volatility, and the importance of deliberate exposure."
              />
              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  We frame palladium as a selective position for investors who already understand
                  the stabilizing role of gold and want a more specialized layer of metal exposure.
                </p>
                <p>
                  The allocation can be reviewed against supply data, industrial demand signals,
                  liquidity conditions, and custody preferences so it remains intentional over time.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Best suited for
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {palladiumUseCases.map((item) => (
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
