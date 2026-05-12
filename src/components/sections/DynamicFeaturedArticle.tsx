'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useDashboardStore } from '@/lib/store';
import { fetchNewsForCategoryWithCache } from '@/lib/api';
import { ArrowRight, Sparkles } from 'lucide-react';

export function DynamicFeaturedArticle() {
  const { selectedCategory, data, setData, setFeatured, setLoading, setError } =
    useDashboardStore();
  const categoryData = data[selectedCategory];

  useEffect(() => {
    // If we already have data, don't refetch
    if (categoryData.loading || categoryData.articles.length > 0) {
      return;
    }

    const loadData = async () => {
      setLoading(selectedCategory, true);
      try {
        const articles = await fetchNewsForCategoryWithCache(selectedCategory);
        setData(selectedCategory, articles);
        if (articles.length > 0) {
          setFeatured(selectedCategory, articles[0]);
        }
      } catch {
        setError(selectedCategory, 'Failed to load articles');
      } finally {
        setLoading(selectedCategory, false);
      }
    };

    loadData();
  }, [
    selectedCategory,
    categoryData.articles.length,
    categoryData.loading,
    setData,
    setFeatured,
    setLoading,
    setError,
  ]);

  const featured = categoryData.featured || categoryData.articles[0];

  if (categoryData.loading && !featured) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        <div className="space-y-6">
          <div className="h-8 w-48 rounded-lg bg-white/10 animate-pulse" />
          <div className="h-24 w-full rounded-lg bg-white/10 animate-pulse" />
          <div className="h-6 w-32 rounded-lg bg-white/10 animate-pulse" />
        </div>
      </motion.div>
    );
  }

  if (!featured) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl text-center"
      >
        <p className="text-slate-400">No articles available for this category.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={`${selectedCategory}-${featured.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl hover:border-amber-200/30 transition-all duration-300"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-100">
            <Sparkles className="h-3.5 w-3.5" />
            {selectedCategory.toUpperCase()} / Featured
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {featured.title}
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">{featured.description}</p>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-200" />
              {featured.source}
            </div>
            <div>{new Date(featured.date).toLocaleDateString()}</div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/40 bg-amber-200/10 text-amber-100 transition-all duration-300 hover:bg-amber-200/20 lg:h-16 lg:w-16"
        >
          <ArrowRight className="h-6 w-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}
