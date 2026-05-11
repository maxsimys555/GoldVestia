'use client';

import { motion } from 'motion/react';
import { useDashboardStore } from '@/lib/store';
import { Clock, TrendingUp } from 'lucide-react';

export function DynamicNewsGrid() {
  const { selectedCategory, data } = useDashboardStore();
  const categoryData = data[selectedCategory];
  const articles = categoryData.articles.slice(1, 7); // Show articles 1-6 (skip featured)

  if (categoryData.loading && articles.length === 0) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 animate-pulse"
          >
            <div className="h-6 w-24 rounded bg-white/10 mb-4" />
            <div className="h-20 w-full rounded bg-white/10" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      key={`grid-${selectedCategory}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:border-amber-200/30 hover:bg-white/5"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
              <TrendingUp className="h-3 w-3" />
              {selectedCategory}
            </div>

            <h3 className="text-lg font-semibold leading-tight text-white group-hover:text-amber-100 transition-colors">
              {article.title}
            </h3>

            <p className="text-sm leading-6 text-slate-300 line-clamp-2">{article.description}</p>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
              <span className="truncate">{article.source}</span>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Clock className="h-3 w-3" />
                {new Date(article.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
