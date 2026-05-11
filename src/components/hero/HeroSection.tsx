'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { duration: 1.05, ease: 'power3.out' } });

      timeline.from('.hero-intro', { opacity: 0, y: 26, stagger: 0.08, delay: 0.15 });
      timeline.from(
        '.hero-copy',
        { opacity: 0, y: 40, duration: 1.1, ease: 'power4.out' },
        '-=.85',
      );
      timeline.from(
        '.hero-cta',
        { opacity: 0, y: 28, duration: 0.95, ease: 'power4.out' },
        '-=0.75',
      );
      timeline.from(
        '.hero-panel',
        { opacity: 0, y: 48, duration: 1.1, ease: 'power4.out' },
        '-=0.95',
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.12),_transparent_24%),radial-gradient(circle_at_80%_20%,_rgba(255,205,110,0.08),_transparent_22%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.18),_transparent_28%),linear-gradient(180deg,_transparent_0%,_rgba(0,0,0,0.95)_100%)]" />

      <div
        ref={heroRef}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center"
      >
        <div className="space-y-10">
          <div className="hero-intro inline-flex items-center gap-3 rounded-full border border-amber-200/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-100/90 shadow-[0_0_0_1px_rgba(255,236,179,0.08)] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-200" />
            Premium bullion experience
          </div>

          <div className="hero-copy space-y-7">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80">
                Digitized precious metal wealth
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Build a cinematic gold legacy with{' '}
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-100 bg-clip-text text-transparent">
                  premium bullion strategies
                </span>
                .
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A modern investment experience designed for high-net-worth capital, combining
                elegant market intelligence with secure precious metal allocation.
              </p>
            </div>
          </div>

          <div className="hero-cta flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              className="min-w-[200px] rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              size="lg"
            >
              Start a private strategy
            </Button>
            <a
              href="#insights"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/5"
            >
              Explore insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="hero-cta grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/50 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Security</p>
              <div className="mt-4 flex items-center gap-3 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-200/10 text-amber-100">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xl font-semibold">Institutional custody</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Private vault architecture with insured channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/50 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Performance</p>
              <div className="mt-4 space-y-1">
                <p className="text-2xl font-semibold text-white">+6.8%</p>
                <p className="text-sm text-slate-400">
                  Average quarterly bullion uplift across premium portfolios.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-panel relative rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-3xl sm:p-8 lg:p-10">
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,196,110,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,240,205,0.12),transparent_30%)]" />
          <div className="relative space-y-8">
            <div className="flex items-center justify-between gap-4 rounded-3xl bg-zinc-950/70 px-5 py-4 text-slate-100 shadow-black/20 ring-1 ring-white/10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                  Gold reserve
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">$1,269</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-amber-200/15 px-3 py-1 text-sm font-semibold text-amber-100">
                +6.8%
              </span>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                    Active valuation
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">1.3x premium</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-amber-100">
                  liquidity
                </div>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Gold', value: 'XAU' },
                  { label: 'Platinum', value: 'XPT' },
                  { label: 'Palladium', value: 'XPD' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300"
                  >
                    <p className="font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-amber-200/10 bg-amber-200/8 p-5 text-slate-100 shadow-[inset_0_0_0_1px_rgba(255,235,170,0.08)]">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-100/90">
                Portfolio insights
              </p>
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <Sparkles className="h-5 w-5 text-amber-100" />
                <p className="text-slate-50">
                  Daily alerts, liquidity strategy, and adaptive metal weighting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
