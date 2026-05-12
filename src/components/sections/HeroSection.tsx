'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '$12B+',
    label: 'Precious metals tracked',
  },
  {
    icon: ShieldCheck,
    value: '15,000+',
    label: 'Private investors',
  },
  {
    icon: BarChart3,
    value: '24/7',
    label: 'Market intelligence',
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-36">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-200/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[240px] w-[240px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* TOP BADGE */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md sm:mb-7">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="text-sm font-medium text-slate-200">
            Trusted by 15,000+ investors worldwide
          </span>
        </div>

        {/* TITLE */}
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <h1 className="font-serif text-[34px] font-bold leading-[1.02] tracking-tight text-white min-[390px]:text-[37px] sm:text-6xl sm:leading-[0.96] lg:text-[84px]">
            <span className="whitespace-nowrap">Premium Insights</span>
            <br />
            <span className="whitespace-nowrap">for Precious</span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            <span className="whitespace-nowrap bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Metals
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-[14px] leading-7 text-slate-300 sm:text-lg sm:leading-relaxed">
            Institutional-grade research, macroeconomic analysis, and real-time intelligence for
            gold, silver, platinum, and global commodity markets.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row">
          <Link
            href="/market-insights"
            prefetch
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-200 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Explore Insights
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/investment-plans"
            prefetch
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Investment Plans
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:border-amber-200/20 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-200">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white">{item.value}</h3>

                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
