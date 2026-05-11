'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '@/lib/store';
import { fetchNewsForCategoryWithCache } from '@/lib/api';

export function useDashboardInitialize() {
  const { selectedCategory, data, setData, setFeatured, setLoading, setError } =
    useDashboardStore();

  useEffect(() => {
    const categoryData = data[selectedCategory];

    // Check if we already have data for this category
    if (categoryData.articles.length > 0) {
      return;
    }

    const initializeCategory = async () => {
      setLoading(selectedCategory, true);

      try {
        const articles = await fetchNewsForCategoryWithCache(selectedCategory);

        setData(selectedCategory, articles);

        if (articles.length > 0) {
          setFeatured(selectedCategory, articles[0]);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load data';
        setError(selectedCategory, errorMessage);
      } finally {
        setLoading(selectedCategory, false);
      }
    };

    initializeCategory();
  }, [selectedCategory, data, setData, setFeatured, setLoading, setError]);
}
