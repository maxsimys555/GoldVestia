import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/sections/ContactForm';

export const unstable_instant = { prefetch: 'static' };

export const metadata: Metadata = {
  title: 'Contact | GoldVestia',
  description:
    'Contact the private metals desk for gold, silver, platinum, and palladium investment strategy.',
};

const contactReasons = [
  {
    title: 'Allocation review',
    copy: 'Discuss how gold, silver, platinum, or palladium could support reserve strength, diversification, or a more specialized metals mandate.',
  },
  {
    title: 'Custody conversation',
    copy: 'Explore private vaulting, settlement expectations, reporting needs, and how physical ownership should be documented over time.',
  },
  {
    title: 'Plan selection',
    copy: 'Compare Core Bullion, Strategic Metals, and Private Reserve paths with a specialist before choosing an execution framework.',
  },
];

const responseNotes = [
  'A specialist reviews the inquiry and the capital objective behind it.',
  'The first conversation focuses on mandate, custody preferences, and timing.',
  'Follow-up materials can include plan guidance, metal mix considerations, and next-step options.',
];

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

      <section className="border-t border-white/10 bg-[#050505] px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <SectionHeading
            pre="What to discuss"
            title="A private conversation before any allocation decision"
            description="The contact process is designed to clarify the mandate first, then match the investor with the right metals framework."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactReasons.map((item) => (
              <article key={item.title} className="border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            pre="After you submit"
            title="A calm, structured next step"
            description="We keep the process direct and discreet, with enough context to make the first call useful."
          />
          <div className="border border-white/10 bg-zinc-950/80 p-8">
            <ul className="space-y-5 text-base leading-7 text-slate-300">
              {responseNotes.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
