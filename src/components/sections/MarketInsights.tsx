import { marketInsights } from '@/lib/landing';

export function MarketInsights() {
  return (
    <section
      id="insights"
      className="relative border-t border-white/10 bg-black/35 py-16 backdrop-blur-[1px] sm:py-28"
    >
      <div className="mx-auto block max-w-7xl px-5 sm:hidden">
        <div className="border border-white/10 bg-[#141414]/90 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
            Market intelligence
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
            Bullion momentum and liquidity direction.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Premium market context for gold, silver, platinum, and long-term capital protection.
          </p>
        </div>

        <div className="mt-5 grid gap-4">
          {marketInsights.map((item) => (
            <article key={item.label} className="border border-white/10 bg-black/80 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
                {item.label}
              </p>
              <h4 className="mt-3 text-lg font-semibold leading-snug text-white">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.details}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_18%_36%,rgba(255,215,160,0.09),transparent_26%),radial-gradient(circle_at_82%_24%,rgba(255,198,90,0.055),transparent_24%)] sm:block" />
      <div className="relative z-10 mx-auto hidden max-w-7xl px-5 sm:block sm:px-8 lg:px-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div className="safari-paint-layer relative transform-gpu rounded-[2.5rem] border border-white/12 bg-[#151515]/90 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.65)]">
            <p className="text-xs uppercase tracking-[0.26em] text-amber-200/75 sm:text-sm sm:tracking-[0.35em]">
              Market intelligence
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-tight text-white">
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
                className="safari-paint-layer relative transform-gpu rounded-[2rem] border border-white/10 bg-zinc-950/90 p-7 shadow-2xl shadow-black/30"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-amber-200/80 sm:text-sm sm:tracking-[0.35em]">
                  {item.label}
                </p>
                <h4 className="mt-5 text-2xl font-semibold text-white">
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
