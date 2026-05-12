import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { fetchArticles } from '@/lib/services/articles';

const fallbackArticles = [
  {
    id: 'gold-wealth-anchor',
    slug: 'gold-wealth-anchor',
    title: 'Gold remains the anchor for private wealth preservation',
    description:
      'Why disciplined gold allocation continues to matter for families, institutions, and long-horizon capital.',
    category: 'Gold',
    image_url: '/images/gold-reserve.svg',
    source: 'GoldVestia Research',
    date: '2026-05-08',
  },
  {
    id: 'silver-industrial-demand',
    slug: 'silver-industrial-demand',
    title: 'Silver demand intensifies across strategic industries',
    description:
      'A refined look at silver as both a monetary metal and an industrial asset with structural demand.',
    category: 'Silver',
    image_url: '/images/silver-market.svg',
    source: 'Metals Desk',
    date: '2026-05-06',
  },
  {
    id: 'private-vault-custody',
    slug: 'private-vault-custody',
    title: 'How private vault custody supports confident allocations',
    description:
      'The operational standards that help precious metal investors preserve discretion, access, and control.',
    category: 'Strategy',
    image_url: '/images/vault-strategy.svg',
    source: 'Custody Brief',
    date: '2026-05-02',
  },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export async function FeaturedArticlesSection() {
  const articles = await fetchArticles();
  const visibleArticles = (articles.length > 0 ? articles : fallbackArticles).slice(0, 6);

  return (
    <section id="featured-articles" className="border-t border-white/10 bg-black/45 px-5 py-20 text-white backdrop-blur-[1px] sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            pre="Market insights"
            title="Precious metals intelligence for long-term capital"
            description="Research, market commentary, and allocation themes powered by the articles table."
          />
          <Link
            href="/market-insights"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-200/30 hover:bg-white/5"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {visibleArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className={index === 0 ? 'group md:col-span-2 lg:row-span-2' : 'group'}
            >
              <article className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/25 hover:bg-white/5">
                <div className={index === 0 ? 'relative aspect-[1.18] bg-zinc-900 sm:aspect-[1.72]' : 'relative aspect-[1.28] bg-zinc-900 sm:aspect-[1.45]'}>
                  <Image
                    src={article.image_url || '/logo.svg'}
                    alt={article.title}
                    fill
                    unoptimized
                    sizes={index === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
                    priority={index === 0}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/80" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-black/55 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100 backdrop-blur">
                    {article.category}
                  </div>
                </div>
                <div className={index === 0 ? 'p-6 sm:p-8' : 'p-6'}>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>{article.source}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-500" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <h3 className={index === 0 ? 'mt-5 text-2xl font-semibold leading-tight text-white sm:text-4xl' : 'mt-4 text-xl font-semibold leading-tight text-white'}>
                    {article.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                    {article.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
