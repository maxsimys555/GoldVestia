import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

const analysts = [
  {
    role: 'Senior Precious Metals Analyst',
    focus: 'Gold reserve behavior, real yield sensitivity, and long-horizon allocation themes.',
  },
  {
    role: 'Macro Research Specialist',
    focus: 'Central bank policy, inflation regimes, currency pressure, and global risk cycles.',
  },
  {
    role: 'Commodity Market Strategist',
    focus: 'Silver, platinum, and palladium demand across industrial and store-of-value flows.',
  },
];

const standards = [
  'Separate strategic allocation themes from short-term price speculation.',
  'Use neutral market references instead of promotional performance claims.',
  'Prioritize clarity, downside awareness, and custody context for private investors.',
];

export function ResearchAuthority() {
  return (
    <section className="px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            pre="Research desk"
            title="Analyst-style commentary with an editorial investment standard"
            description="The experience is designed to feel closer to a private market briefing than a noisy trading feed."
          />

          <div className="border-l border-amber-200/25 pl-6 text-lg leading-8 text-slate-300">
            GoldVestia presents precious metals through the lens of portfolio resilience: why a
            position exists, what conditions support it, and how custody and liquidity influence
            investor confidence.
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {analysts.map((analyst) => (
            <article
              key={analyst.role}
              className="border border-white/10 bg-zinc-950/70 p-7 shadow-[0_40px_90px_-76px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-zinc-950/85"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
                Analyst profile
              </p>
              <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-white">
                {analyst.role}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{analyst.focus}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 border border-white/10 bg-black/45 p-6 sm:p-8 lg:grid-cols-[0.36fr_1fr] lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
            Intelligence standards
          </p>
          <ul className="grid gap-4 text-base leading-8 text-slate-300 md:grid-cols-3">
            {standards.map((standard) => (
              <li key={standard} className="border-t border-white/10 pt-4">
                {standard}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
