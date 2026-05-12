import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';

export const unstable_instant = { prefetch: 'static' };

const silverPoints = [
  {
    title: 'Industrial strength',
    description:
      'Silver offers dynamic demand from technology, energy, and premium reserve allocations.',
  },
  {
    title: 'Balanced growth',
    description:
      'A smart complement to gold that can enhance portfolio diversification with liquidity.',
  },
  {
    title: 'Elegant precision',
    description:
      'Access refined silver positions with streamlined custody and audit-ready transparency.',
  },
];

const silverFramework = [
  {
    label: 'Industrial demand',
    copy: 'Silver remains essential to electronics, energy systems, medical tools, and precision manufacturing, giving the metal a growth-sensitive demand profile.',
  },
  {
    label: 'Monetary memory',
    copy: 'Its precious metal character allows silver to participate in defensive flows while still responding to expansion in real-world industrial usage.',
  },
  {
    label: 'Volatility control',
    copy: 'Silver can move quickly, so premium allocation requires thoughtful sizing, liquidity planning, and a disciplined rebalancing cadence.',
  },
];

const silverUseCases = [
  'A satellite allocation beside a stronger gold reserve core.',
  'Exposure to electrification, solar, advanced electronics, and manufacturing demand.',
  'A more tactical precious metals sleeve with high liquidity potential.',
  'Portfolio diversification for investors comfortable with a more active price profile.',
];

export default function SilverPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(238,242,255,0.1),transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(200,210,255,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Silver"
                title="Premium silver exposure for subtle portfolio strength"
                description="Discover the versatile role of silver as a bridge between wealth protection and industrial demand."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Silver is a sophisticated complement to bullion holdings. It delivers exposure to
                  real-world growth while preserving the refined character of precious metal wealth.
                </p>
                <p>
                  Our silver offering blends secure ownership with premium service and transparent
                  valuation insights.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  className="rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                  size="lg"
                >
                  View silver strategies
                </Button>
                <Link
                  href="/investment-plans"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
                >
                  See investment plans
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Silver edge</p>
              <div className="mt-6 grid gap-4">
                {silverPoints.map((item) => (
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
            pre="Silver allocation"
            title="Engineered for modern portfolios and private capital"
            description="A refined silver allocation can strengthen portfolio resilience while remaining highly liquid."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Premium liquidity',
                copy: 'Access silver holdings with rapid execution and secure settlement pathways.',
              },
              {
                label: 'Industrial demand',
                copy: 'Benefit from silver’s role in electronics, energy, and premium manufacturing.',
              },
              {
                label: 'Modern custody',
                copy: 'Private vaulting built for audit-ready reporting and discreet asset control.',
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
              pre="Silver thesis"
              title="Where monetary metal meets modern industry"
              description="Silver is useful because it carries two identities at once: a precious metal reserve and a material embedded in the future economy."
            />
            <p className="mt-8 text-lg leading-8 text-slate-300">
              That dual profile gives silver a different rhythm than gold. It can strengthen a
              metals portfolio, but it deserves a more tactical framework, especially for investors
              balancing wealth preservation with industrial growth exposure.
            </p>
          </div>

          <div className="grid gap-5">
            {silverFramework.map((item) => (
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
                title="A precise complement for diversified metals exposure"
                description="Silver is most effective when the allocation has a clear purpose and a known tolerance for movement."
              />
              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  We position silver as a flexible allocation that can sit beside gold, not replace
                  it. The objective is to add industrial participation while keeping custody,
                  settlement, and reporting as refined as the rest of the metals portfolio.
                </p>
                <p>
                  Clients can use silver to create tactical depth, diversify entry points, and
                  maintain liquidity across changing market environments.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-zinc-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                Best suited for
              </p>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {silverUseCases.map((item) => (
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
