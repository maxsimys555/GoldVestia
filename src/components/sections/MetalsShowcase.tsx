import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { fetchMetalPrices } from '@/lib/services/metal-prices';

const fallbackMetals = [
  {
    id: 'gold',
    metal: 'Gold',
    symbol: 'XAU',
    price: 2328.42,
    currency: 'USD / oz',
    change_percent: 1.8,
    change_direction: 'up' as const,
  },
  {
    id: 'silver',
    metal: 'Silver',
    symbol: 'XAG',
    price: 29.41,
    currency: 'USD / oz',
    change_percent: 0.9,
    change_direction: 'up' as const,
  },
  {
    id: 'platinum',
    metal: 'Platinum',
    symbol: 'XPT',
    price: 982.15,
    currency: 'USD / oz',
    change_percent: 0.2,
    change_direction: 'neutral' as const,
  },
  {
    id: 'palladium',
    metal: 'Palladium',
    symbol: 'XPD',
    price: 1048.9,
    currency: 'USD / oz',
    change_percent: 1.1,
    change_direction: 'down' as const,
  },
];

function formatPerformance(changeDirection: string, changePercent: number) {
  const prefix = changeDirection === 'up' ? '+' : changeDirection === 'down' ? '-' : '';
  return `${prefix}${Math.abs(changePercent).toFixed(1)}%`;
}

function TrendIcon({ direction }: { direction: string }) {
  if (direction === 'up') return <ArrowUpRight className="h-4 w-4" />;
  if (direction === 'down') return <ArrowDownRight className="h-4 w-4" />;
  return <Minus className="h-4 w-4" />;
}

export async function MetalsShowcase() {
  const metals = await fetchMetalPrices();
  const visibleMetals = metals.length > 0 ? metals : fallbackMetals;

  return (
    <section className="border-t border-white/10 py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          pre="Precious metals"
          title="Live market pricing for premium bullion allocation"
          description="Precious metals rates with liquidity signals and refined composition for a resilient portfolio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {visibleMetals.map((metal) => (
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
                  className={`inline-flex items-center gap-1 rounded-3xl px-3 py-2 text-sm font-semibold ${
                    metal.change_direction === 'up'
                      ? 'bg-green-200/10 text-green-100'
                      : metal.change_direction === 'down'
                        ? 'bg-red-200/10 text-red-100'
                        : 'bg-amber-200/10 text-amber-100'
                  }`}
                >
                  <TrendIcon direction={metal.change_direction} />
                  {formatPerformance(metal.change_direction, metal.change_percent)}
                </div>
              </div>
              <p className="mt-6 text-lg font-semibold text-white">
                ${metal.price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="mt-2 text-sm text-slate-400">{metal.currency}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
