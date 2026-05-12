import { marketInsights } from '@/lib/landing';

export function MarketInsights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-white/10 bg-[#070707] py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(255,215,160,0.09),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(255,198,90,0.055),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div className="relative rounded-[1.75rem] border border-white/12 bg-[#151515]/95 p-6 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-10">
            <p className="text-xs uppercase tracking-[0.26em] text-amber-200/75 sm:text-sm sm:tracking-[0.35em]">
              Market intelligence
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-4xl">
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
                className="relative rounded-[1.5rem] border border-white/10 bg-zinc-950/95 p-6 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-7"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-amber-200/80 sm:text-sm sm:tracking-[0.35em]">
                  {item.label}
                </p>
                <h4 className="mt-4 text-xl font-semibold text-white sm:mt-5 sm:text-2xl">
                  {item.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
