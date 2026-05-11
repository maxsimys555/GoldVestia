import Image from 'next/image';
import Link from 'next/link';
import { NewsletterForm } from '@/components/NewsletterForm';

const linkColumns = [
  ['Home', '/'],
  ['Gold', '/gold'],
  ['Silver', '/silver'],
  ['Platinum', '/platinum'],
  ['Palladium', '/palladium'],
  ['Plans', '/investment-plans'],
  ['Insights', '/market-insights'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] px-6 pt-16 font-sans text-white sm:px-8 sm:pt-20 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[390px] w-[820px] -translate-x-1/2 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-[1160px] border-t border-white/10">
        <div className="mx-auto max-w-[620px] pb-16 pt-20 text-center sm:pb-20 sm:pt-24">
          <h2 className="font-serif text-4xl font-bold leading-[1.08] text-white sm:text-[50px]">
            Gold intelligence
            <br />
            for long-term investors
          </h2>

          <NewsletterForm />

          <p className="mx-auto mt-7 max-w-[430px] text-base font-semibold leading-6 text-white/55">
            The only <span className="text-[#f3c96f]">5-minute</span> read you need to navigate
            the precious metals market this week.
          </p>
        </div>

        <div className="border-t border-white/10 py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.8fr)_1.4fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <Image src="/icon.svg" alt="GoldInvest" width={28} height={28} />
                <span className="text-xl font-bold">GoldInvest</span>
              </div>
              <p className="mt-6 max-w-44 text-base leading-6 text-white/58">
                Luxury metals strategy for discerning investors.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-4 text-base text-white/82 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {linkColumns.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  prefetch
                  className="min-h-8 whitespace-nowrap transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
          (c) 2026 GoldInvest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
