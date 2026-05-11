import { NewsItem, Category } from './store';

interface NewsResponse {
  articles?: NewsItem[];
}

export async function fetchNewsForCategory(category: Category): Promise<NewsItem[]> {
  try {
    const response = await fetch(`/api/news?category=${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data: NewsResponse = await response.json();

    if (!data.articles || data.articles.length === 0) {
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
}

// Cache management
const cache: Map<string, { data: NewsItem[]; timestamp: number }> = new Map();
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

export async function fetchNewsForCategoryWithCache(category: Category): Promise<NewsItem[]> {
  const cacheKey = `news-${category}`;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const data = await fetchNewsForCategory(category);
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
}
