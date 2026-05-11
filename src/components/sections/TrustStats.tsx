import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { trustStats } from '@/lib/landing';

export function TrustStats() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          pre="Trusted by discerning capital"
          title="Institutional-grade security and premium metal allocation"
          description="A refined platform optimized for discretion, liquidity, and a cinematic investment experience."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_40px_120px_-96px_rgba(0,0,0,0.65)] backdrop-blur-xl"
            >
              <p className="text-4xl font-semibold text-white">{item.value}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
