import { cacheLife, cacheTag } from 'next/cache';
import { isSupabaseConfigured, supabase, type Article } from '../supabase';

const fallbackArticles: Article[] = [
  {
    id: 'gold-wealth-anchor',
    slug: 'gold-wealth-anchor',
    title: 'Gold remains the anchor for private wealth preservation',
    description:
      'Why disciplined gold allocation continues to matter for families, institutions, and long-horizon capital.',
    content:
      'Gold continues to act as a stabilizing reserve for investors who prioritize durability, liquidity, and long-term purchasing power.\n\nFor private capital, the value of gold is not only price exposure. It is the ability to hold a globally recognized asset outside the rhythm of short-term financial sentiment.\n\nA disciplined allocation can support portfolio resilience while preserving optionality through changing rate cycles and market stress.',
    category: 'Gold',
    image_url: '/images/gold-reserve.svg',
    source: 'GoldInvest Research',
    date: '2026-05-08',
    created_at: '2026-05-08T00:00:00.000Z',
  },
  {
    id: 'silver-industrial-demand',
    slug: 'silver-industrial-demand',
    title: 'Silver demand intensifies across strategic industries',
    description:
      'A refined look at silver as both a monetary metal and an industrial asset with structural demand.',
    content:
      'Silver occupies a rare position between wealth preservation and industrial utility.\n\nDemand from electronics, solar, medical, and advanced manufacturing continues to support a strategic case for selective exposure.\n\nFor investors, silver can complement gold by adding liquidity, growth sensitivity, and broader metals diversification.',
    category: 'Silver',
    image_url: '/images/silver-market.svg',
    source: 'Metals Desk',
    date: '2026-05-06',
    created_at: '2026-05-06T00:00:00.000Z',
  },
  {
    id: 'private-vault-custody',
    slug: 'private-vault-custody',
    title: 'How private vault custody supports confident allocations',
    description:
      'The operational standards that help precious metal investors preserve discretion, access, and control.',
    content:
      'Custody is a core part of any serious precious metals strategy.\n\nPrivate vault infrastructure gives investors a clearer framework for insurance, auditability, settlement, and long-term asset control.\n\nThe best custody experience is quiet and exacting: secure enough to protect capital, transparent enough to support decision-making, and discreet enough for private wealth.',
    category: 'Strategy',
    image_url: '/images/vault-strategy.svg',
    source: 'Custody Brief',
    date: '2026-05-02',
    created_at: '2026-05-02T00:00:00.000Z',
  },
];

export async function fetchArticles(): Promise<Article[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');

  if (!isSupabaseConfigured) {
    return fallbackArticles;
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, description, content, category, image_url, source, date, created_at')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching articles:', error);
      return fallbackArticles;
    }

    return data && data.length > 0 ? data : fallbackArticles;
  } catch (error) {
    console.error('Unexpected error fetching articles:', error);
    return fallbackArticles;
  }
}

export async function fetchArticlesByCategory(category: string): Promise<Article[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');
  cacheTag(`articles:${category}`);

  if (!isSupabaseConfigured) {
    return fallbackArticles.filter((article) => article.category === category);
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, description, content, category, image_url, source, date, created_at')
      .eq('category', category)
      .order('date', { ascending: false });

    if (error) {
      console.error(`Error fetching articles for category ${category}:`, error);
      return fallbackArticles.filter((article) => article.category === category);
    }

    return data && data.length > 0
      ? data
      : fallbackArticles.filter((article) => article.category === category);
  } catch (error) {
    console.error(`Unexpected error fetching articles for category ${category}:`, error);
    return fallbackArticles.filter((article) => article.category === category);
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  'use cache';
  cacheLife('hours');
  cacheTag('articles');
  cacheTag(`article:${slug}`);

  if (!isSupabaseConfigured) {
    return fallbackArticles.find((article) => article.slug === slug) || null;
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, description, content, category, image_url, source, date, created_at')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching article with slug ${slug}:`, error);
      return fallbackArticles.find((article) => article.slug === slug) || null;
    }

    return data;
  } catch (error) {
    console.error(`Unexpected error fetching article with slug ${slug}:`, error);
    return fallbackArticles.find((article) => article.slug === slug) || null;
  }
}
