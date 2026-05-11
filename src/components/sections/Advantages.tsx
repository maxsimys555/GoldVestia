import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { advantages } from '@/lib/landing';

export function Advantages() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-black/50 p-8 shadow-[0_55px_120px_-60px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-12">
          <SectionHeading
            pre="Strategic advantages"
            title="Premium capabilities for high-conviction metal investors"
            description="A boutique investment platform built for speed, clarity, and a luxury experience."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/20 hover:bg-amber-200/5"
              >
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
