'use client';

import { motion } from 'motion/react';
import { useDashboardStore, type Category } from '@/lib/store';

const CATEGORIES: { id: Category; label: string; marker: string }[] = [
  { id: 'news', label: 'News', marker: 'N' },
  { id: 'gold', label: 'Gold', marker: 'Au' },
  { id: 'silver', label: 'Silver', marker: 'Ag' },
  { id: 'platinum', label: 'Platinum', marker: 'Pt' },
  { id: 'markets', label: 'Markets', marker: 'M' },
  { id: 'analysis', label: 'Analysis', marker: 'A' },
];

export function DynamicHeader() {
  const { selectedCategory, setCategory } = useDashboardStore();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Market Intelligence</h1>
            <p className="mt-1 text-sm text-slate-400">
              Precious metals and financial data for allocation decisions
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-amber-200/40 bg-amber-200/20 text-amber-100'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-amber-200/30'
              }`}
            >
              <span className="text-amber-100/80">{category.marker}</span>
              {category.label}
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 -z-10 rounded-full border border-amber-200/60"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </header>
  );
}
