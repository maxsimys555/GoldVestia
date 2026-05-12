import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const unstable_instant = { prefetch: 'static' };

const platinumPoints = [
  {
    title: 'Luxury resilience',
    description:
      'Platinum blends exclusivity with industrial relevance, creating a distinctive wealth anchor.',
  },
  {
    title: 'Selective exposure',
    description:
      'Premium access to a rare metal used in advanced manufacturing and high-end applications.',
  },
  {
    title: 'Refined storage',
    description:
      'High-security custody tailored to elite metal allocations and discreet ownership.',
  },
];

const platinumFramework = [
  {
    label: 'Scarcity premium',
    copy: 'Platinum supply is more concentrated and operationally complex than many investors realize, which can make patient positioning meaningful when demand improves.',
  },
  {
    label: 'Industrial depth',
    copy: 'The metal remains relevant across automotive catalysts, chemical processing, hydrogen technologies, and specialist manufacturing where reliability matters.',
  },
  {
    label: 'Portfolio distinction',
    copy: 'Platinum can add a refined layer of scarcity and industrial exposure without replacing the stability role typically held by gold.',
  },
];

const platinumUseCases = [
  'Investors seeking a rare-metal allocation beyond gold and silver.',
  'Portfolios that can tolerate a more specialist supply-demand profile.',
  'Long-term exposure to clean technology, manufacturing, and luxury demand.',
  'Private holdings where secure custody and audit-ready reporting are priorities.',
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
                  Platinum is a distinguished alternative for high-conviction metal portfolios. It
                  combines scarcity with practical demand from advanced industries.
                </p>
                <p>
                  Our platinum access layer is designed to preserve value quietly while enabling
                  informed capital positioning.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  size="lg"
                >
                  Discover platinum access
                </Button>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
                >
                  Learn about our approach
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Platinum insight
              </p>
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
              pre="Platinum thesis"
              title="Rarity with a technical demand profile"
              description="Platinum is most compelling when investors understand both sides of the metal: prestige and practical industrial necessity."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              This is not a generic reserve holding. Platinum rewards research, patience, and a
              willingness to hold a more specialized position inside a broader metals strategy.
            </p>
          </div>

          <div className="grid gap-5">
            {platinumFramework.map((item) => (
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
                title="A specialist holding for sophisticated portfolios"
                description="Platinum can be a powerful portfolio accent when the allocation is sized carefully and reviewed through supply-demand fundamentals."
              />
              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  We help investors frame platinum as a strategic satellite: rare enough to matter,
                  liquid enough to access through professional channels, and differentiated enough
                  to bring a distinct profile to private metals exposure.
                </p>
                <p>
                  The allocation can be paired with custody standards that keep ownership records
                  clear, reporting orderly, and long-term control intact.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Best suited for
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {platinumUseCases.map((item) => (
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
