import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/sections/ContactForm';

export const unstable_instant = { prefetch: 'static' };

export const metadata: Metadata = {
  title: 'Contact | GoldInvest',
  description:
    'Contact the private metals desk for gold, silver, platinum, and palladium investment strategy.',
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                pre="Contact"
                title="Begin your premium metal strategy"
                description="Reach out for a private consultation, secure custody review, or bespoke portfolio conversation."
              />
              <div className="mt-10 space-y-6 text-slate-300 sm:text-lg">
                <p>
                  Our team supports investors with discreet onboarding, tailored metals allocations,
                  and premium storage solutions.
                </p>
                <p>
                  Complete the form and we will connect you with a dedicated specialist who
                  understands your capital goals.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Contact details</p>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>Private Metals Desk</p>
                <p>hello@goldinvest.io</p>
                <p>+1 212 555 0192</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-[0_45px_90px_-30px_rgba(0,0,0,0.75)] backdrop-blur-3xl">
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
