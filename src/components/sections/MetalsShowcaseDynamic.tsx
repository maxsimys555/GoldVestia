'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { fetchMetalPrices } from '@/lib/services/metal-prices';
import type { MetalPrice } from '@/lib/supabase';

interface MetalWithPerformance extends MetalPrice {
  performance?: string;
}

export function MetalsShowcase() {
  const [metals, setMetals] = useState<MetalWithPerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMetals() {
      const data = await fetchMetalPrices();
      const enriched = data.map((metal) => ({
        ...metal,
        performance: `${metal.change_direction === 'up' ? '+' : metal.change_direction === 'down' ? '-' : ''}${Math.abs(metal.change_percent).toFixed(1)}%`,
      }));
      setMetals(enriched);
      setLoading(false);
    }

    loadMetals();
  }, []);

  if (loading) {
    return (
      <section className="py-24 border-t border-white/10 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-40 rounded-[2rem] bg-white/5 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 border-t border-white/10 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          pre="Precious metals"
          title="Live market pricing for premium bullion allocation"
          description="Real-time precious metals rates with liquidity signals and refined composition for your portfolio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {metals.map((metal) => (
            <article
              key={metal.id}
              className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                    {metal.metal}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">{metal.symbol}</p>
                </div>
                <div
                  className={`rounded-3xl px-3 py-2 text-sm font-semibold ${
                    metal.change_direction === 'up'
                      ? 'bg-green-200/10 text-green-100'
                      : metal.change_direction === 'down'
                        ? 'bg-red-200/10 text-red-100'
                        : 'bg-amber-200/10 text-amber-100'
                  }`}
                >
                  {metal.performance}
                </div>
              </div>
              <p className="mt-6 text-lg font-semibold text-white">
                ${metal.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="mt-2 text-sm text-slate-400">{metal.currency}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
