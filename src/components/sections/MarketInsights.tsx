import { Reveal } from '@/components/motion/Reveal';
import { marketInsights } from '@/lib/landing';

export function MarketInsights() {
  return (
    <section id="insights" className="py-24 border-t border-white/10 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
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
                className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 shadow-2xl shadow-black/30"
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
