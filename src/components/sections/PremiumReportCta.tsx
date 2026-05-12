import Link from 'next/link';
import { ArrowUpRight, FileText } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';

const reportPoints = [
  'Gold allocation framework for inflation-sensitive portfolios',
  'Silver, platinum, and palladium demand signals',
  'Custody, liquidity, and private market access considerations',
];

export function PremiumReportCta() {
  return (
    <section className="border-y border-white/10 bg-black/45 px-5 py-20 text-white backdrop-blur-[1px] sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="mx-auto grid max-w-7xl gap-10 border border-white/10 bg-zinc-950/75 p-6 shadow-[0_50px_120px_-90px_rgba(0,0,0,0.9)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/75">
            Premium report
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl">
            2026 Gold & Precious Metals Outlook
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            A report-style briefing designed for investors evaluating physical metals, macro
            volatility, and long-term wealth preservation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <ul className="space-y-4 text-base leading-7 text-slate-300">
            {reportPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-amber-200 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
          >
            <FileText className="h-4 w-4" />
            Request briefing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
