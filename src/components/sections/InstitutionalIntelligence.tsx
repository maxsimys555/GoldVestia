import Link from 'next/link';
import { ArrowUpRight, BookOpen, Landmark, LineChart, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const referenceSources = [
  'World Gold Council',
  'LBMA market standards',
  'IMF macro data',
  'Federal Reserve releases',
  'Commodity research desks',
];

const methodology = [
  {
    icon: Landmark,
    title: 'Macro first',
    description:
      'Rates, inflation, currency pressure, and policy signals are reviewed before any metal narrative is presented.',
  },
  {
    icon: LineChart,
    title: 'Liquidity aware',
    description:
      'Commentary is framed around market depth, custody access, settlement quality, and realistic execution conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'Preservation focused',
    description:
      'Research favors long-horizon resilience and purchasing power over short-term trading noise.',
  },
];

export function InstitutionalIntelligence() {
  return (
    <section className="border-t border-white/10 bg-black/35 px-5 py-20 text-white backdrop-blur-[1px] sm:px-8 sm:py-28 lg:px-10">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div>
          <SectionHeading
            pre="Curated intelligence"
            title="Research built for investors who think in cycles, not headlines"
            description="GoldVestia organizes precious metals commentary through macro context, custody discipline, and allocation relevance."
          />

          <div className="mt-10 border border-white/10 bg-zinc-950/75 p-6 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.85)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-100">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
                  Weekly outlook
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  The metals brief is edited for strategic clarity.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  Each issue prioritizes the signals that matter to long-term private capital:
                  policy shifts, real yields, industrial demand, physical market liquidity, and
                  custody standards.
                </p>
              </div>
            </div>

            <Link
              href="/market-insights"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition hover:text-white"
            >
              Read market insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          {methodology.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border border-white/10 bg-zinc-950/70 p-6 shadow-[0_36px_90px_-72px_rgba(0,0,0,0.85)] transition duration-300 hover:border-amber-200/25 hover:bg-zinc-950/85 sm:p-7"
              >
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-200/15 bg-amber-200/10 text-amber-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="border border-white/10 bg-black/45 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Market references
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {referenceSources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
