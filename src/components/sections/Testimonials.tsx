import { Star } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { fetchTestimonials } from '@/lib/services/testimonials';

const fallbackTestimonials = [
  {
    id: 'family-office',
    quote:
      'The platform presentation and execution quality feel aligned with the level of service we expect for long-term private capital.',
    name: 'Arielle Chen',
    role: 'Family Office Partner',
    rating: 5,
  },
  {
    id: 'wealth-director',
    quote:
      'Every interaction feels intentionally designed. It is rare to find a digital wealth platform this polished and discreet.',
    name: 'Mason Ortiz',
    role: 'Private Wealth Director',
    rating: 5,
  },
  {
    id: 'portfolio-strategist',
    quote:
      'The market signals and bullion insights are concise, modern, and ideal for strategic precious metals allocations.',
    name: 'Sofia Valdez',
    role: 'Portfolio Strategist',
    rating: 5,
  },
];

export async function Testimonials() {
  const testimonials = await fetchTestimonials();
  const visibleTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section className="py-24 sm:py-28">
      <Reveal className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          pre="Client experience"
          title="Luxury service and strategic clarity across every relationship"
          description="Feedback from modern investors who value design, discretion, and market reliability."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visibleTestimonials.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/25 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex gap-1 text-amber-200" aria-label={`${item.rating ?? 5} out of 5 rating`}>
                {Array.from({ length: Math.max(1, Math.min(5, item.rating ?? 5)) }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-100">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
