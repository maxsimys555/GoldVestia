import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';

export function CallToAction() {
  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[3rem] border border-white/10 bg-[#09090b]/95 p-10 shadow-[0_80px_120px_-72px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
              Start the reserve
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Elevate metal allocation with a luxurious digital experience.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Connect with a dedicated team to configure a tailored bullion portfolio aligned with
              modern wealth objectives.
            </p>
          </div>
          <Button
            className="mt-8 inline-flex rounded-full bg-amber-200 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_22px_60px_-42px_rgba(255,215,125,0.9)] transition hover:-translate-y-0.5 sm:mt-0"
            size="lg"
          >
            Request private access
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
