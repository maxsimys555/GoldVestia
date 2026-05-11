import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { fetchInvestmentPlans } from '@/lib/services/investment-plans';

const fallbackPlans = [
  {
    id: 'core-bullion',
    name: 'Core Bullion',
    price: 'From $10,000',
    highlight: 'A disciplined entry point for physical gold and silver allocation.',
    features: [
      'Gold and silver allocation',
      'Quarterly portfolio review',
      'Private vault introduction',
    ],
  },
  {
    id: 'strategic-metals',
    name: 'Strategic Metals',
    price: 'From $50,000',
    highlight: 'A diversified plan across gold, silver, platinum, and palladium.',
    features: [
      'Multi-metal strategy',
      'Dedicated allocation specialist',
      'Priority settlement support',
    ],
  },
  {
    id: 'private-reserve',
    name: 'Private Reserve',
    price: 'Bespoke',
    highlight: 'A tailored structure for family offices and long-horizon wealth preservation.',
    features: ['Custom custody structure', 'Monthly market briefings', 'White-glove onboarding'],
  },
];

export async function InvestmentPlansSection() {
  const plans = await fetchInvestmentPlans();
  const visiblePlans = plans.length > 0 ? plans : fallbackPlans;

  return (
    <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading
          pre="Plan details"
          title="A premium structure for disciplined metal investing"
          description="Select from refined execution paths with clear service tiers and discreet custody support."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {visiblePlans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-7 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)] transition hover:-translate-y-1 hover:border-amber-200/20 hover:bg-white/5"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">{plan.name}</p>
              <p className="mt-5 text-xl font-semibold text-white">{plan.price}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{plan.highlight}</p>
              {Array.isArray(plan.features) && plan.features.length > 0 && (
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-200" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
