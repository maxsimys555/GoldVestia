import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Testimonials } from '@/components/sections/Testimonials';
import { trustStats } from '@/lib/landing';

export const unstable_instant = { prefetch: 'static' };

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <SectionHeading
            pre="About"
            title="A premium platform for secure precious metal investing"
            description="We blend curated bullion access, private storage, and premium service for investors who expect discretion and clarity."
          />
          <div className="mt-10 space-y-6 max-w-3xl text-slate-300 sm:text-lg">
            <p>
              Our platform is built for asset owners who value the enduring strength of gold,
              silver, platinum, and palladium. Every experience is designed to feel modern, quiet,
              and deeply reliable.
            </p>
            <p>
              We partner with trusted vault custodians, provide premium market guidance, and
              preserve the refined nature of precious metal wealth.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <SectionHeading
            pre="Our promise"
            title="Built around trust, discretion, and premium metal execution"
            description="We provide a calm, elegant investment experience for clients who want to preserve and elevate their asset base."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {trustStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)]"
              >
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-400">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Testimonials />
      </section>
    </div>
  );
}
