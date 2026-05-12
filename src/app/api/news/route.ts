import { NextRequest, NextResponse } from 'next/server';
import type { Category, NewsItem } from '@/lib/store';

const categories: Category[] = ['news', 'gold', 'silver', 'platinum', 'markets', 'analysis'];

const curatedNews: Record<Category, NewsItem[]> = {
  news: [
    {
      id: 'news-precision-storage',
      title: 'Secure custody and premium bullion stewardship',
      description: 'Private vault networks designed for high-value metals and confident preservation.',
      source: 'GoldVestia Insights',
      date: '2026-05-08T00:00:00.000Z',
      url: '/market-insights',
      image: '/logo.svg',
    },
    {
      id: 'news-elite-exposure',
      title: 'Exclusive metal frameworks for long-term capital stability',
      description: 'Refined allocation strategies that blend gold, silver, platinum and palladium.',
      source: 'GoldVestia Insights',
      date: '2026-05-05T00:00:00.000Z',
      url: '/investment-plans',
      image: '/logo.svg',
    },
  ],
  gold: [
    {
      id: 'gold-safety-premium',
      title: 'Gold remains the central store-of-value in uncertain markets',
      description: 'High conviction investors continue to build gold as a stable reserve asset.',
      source: 'GoldVestia Metals',
      date: '2026-05-06T00:00:00.000Z',
      url: '/gold',
      image: '/logo.svg',
    },
  ],
  silver: [
    {
      id: 'silver-industrial-demand',
      title: 'Silver demand strengthens across clean energy and technology supply chains',
      description: 'Industrial adoption is paired with renewed store-of-value interest.',
      source: 'GoldVestia Metals',
      date: '2026-05-04T00:00:00.000Z',
      url: '/silver',
      image: '/logo.svg',
    },
  ],
  platinum: [
    {
      id: 'platinum-portfolio-edge',
      title: 'Platinum provides a rare diversification edge in wealth portfolios',
      description: 'Selective platinum exposure can improve liquidity with premium upside.',
      source: 'GoldVestia Metals',
      date: '2026-05-03T00:00:00.000Z',
      url: '/platinum',
      image: '/logo.svg',
    },
  ],
  markets: [
    {
      id: 'markets-vault-updates',
      title: 'Private vault liquidity remains strong for premium metal holdings',
      description: 'Institutional channels continue to support discreet and rapid settlement.',
      source: 'GoldVestia Markets',
      date: '2026-05-02T00:00:00.000Z',
      url: '/market-insights',
      image: '/logo.svg',
    },
  ],
  analysis: [
    {
      id: 'analysis-metal-weights',
      title: 'Analysis: optimizing metal weighting for preservation and growth',
      description: 'A structured review of how gold, silver, platinum, and palladium perform together.',
      source: 'GoldVestia Analysis',
      date: '2026-05-01T00:00:00.000Z',
      url: '/market-insights',
      image: '/logo.svg',
    },
  ],
};

export async function GET(request: NextRequest) {
  const categoryParam = request.nextUrl.searchParams.get('category') || 'news';
  const category = categories.includes(categoryParam as Category)
    ? (categoryParam as Category)
    : 'news';

  return NextResponse.json(
    { articles: curatedNews[category] || [] },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    },
  );
}
