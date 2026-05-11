import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { faqs } from '@/lib/landing';

export function FAQSection() {
  return (
    <section className="py-24 border-t border-white/10 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          pre="Luxury FAQ"
          title="Answers for premium bullion investors"
          description="Essential clarity for secure metal custody, portfolio design, and private market access."
        />
        <div className="mt-12 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[2rem] border border-white/10 bg-black/50 p-6 transition hover:border-amber-200/20 hover:bg-white/5"
            >
              <summary className="cursor-pointer text-lg font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
