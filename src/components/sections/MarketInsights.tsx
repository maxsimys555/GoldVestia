import { Reveal } from '@/components/motion/Reveal';
import { marketInsights } from '@/lib/landing';

export function MarketInsights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(255,215,160,0.09),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(255,198,90,0.055),transparent_24%)]" />
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative rounded-[2.5rem] border border-white/12 bg-[#151515]/95 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/75">
              Market intelligence
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              A cinematic view of bullion momentum and liquidity direction.
            </h3>
            <p className="mt-6 text-base leading-8 text-slate-300">
              High-touch insights presented with premium clarity so every allocation decision feels
              deliberate and refined.
            </p>
          </div>

          <div className="grid gap-5">
            {marketInsights.map((item) => (
              <article
                key={item.label}
                className="relative rounded-[2rem] border border-white/10 bg-zinc-950/95 p-7 shadow-2xl shadow-black/30"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                  {item.label}
                </p>
                <h4 className="mt-5 text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
