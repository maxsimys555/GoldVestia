'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [search, setSearch] = useState('');

  return (
    <section className="relative flex min-h-[58vh] items-center justify-center px-5 pb-16 pt-20 sm:min-h-[62vh] sm:px-8 sm:pb-20 sm:pt-24 lg:min-h-[64vh] lg:px-10 lg:pt-28">
      <div className="mx-auto w-full max-w-5xl space-y-7 text-center sm:space-y-9">
        <p className="text-sm font-semibold text-white sm:text-base">
          Trusted by <span className="text-[#fff6a6]">15,000+</span> private investors and fund
          managers
        </p>

        <div className="space-y-1">
          <h1 className="font-serif text-4xl font-bold leading-[0.96] tracking-normal text-white min-[420px]:text-5xl sm:text-6xl lg:text-[68px]">
            <span className="text-[#ebc374]">Gold &amp; Macro</span>
            <br />
            Market Insights
          </h1>
        </div>

        <div className="space-y-6 pt-4">
          <div className="mx-auto max-w-xl">
            <div className="flex h-12 items-center gap-3 rounded bg-[#353535] px-4 shadow-[0_12px_34px_rgba(0,0,0,0.24)] ring-1 ring-white/10 sm:px-5">
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-white outline-none placeholder:text-white"
              />
              <button
                type="button"
                aria-label="Search"
                className="grid h-8 w-8 place-items-center text-white transition hover:text-[#fff8a8]"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-sans sm:gap-x-5">
            <span className="basis-full text-sm font-bold text-white sm:basis-auto">Top Suggestion:</span>
            {['All', 'Gold', 'Investment', 'Analytics', 'Markets'].map((tag) => (
              <button
                key={tag}
                type="button"
                className="text-sm font-bold text-white transition hover:text-[#fff8a8]"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
