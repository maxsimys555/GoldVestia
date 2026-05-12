import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { fetchArticleBySlug, fetchArticles } from '@/lib/services/articles';

export const unstable_instant = {
  prefetch: 'runtime',
  samples: [
    { params: { slug: 'gold-wealth-anchor' } },
    { params: { slug: 'silver-industrial-demand' } },
    { params: { slug: 'private-vault-custody' } },
    { params: { slug: 'platinum-luxury-industrial-resilience' } },
    { params: { slug: 'palladium-supply-story' } },
    { params: { slug: 'legacy-capital-metals-portfolio' } },
  ],
};

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article not found | GoldVestia',
    };
  }

  return {
    title: `${article.title} | GoldVestia`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      images: [
        {
          url: article.image_url || '/logo.svg',
          alt: article.title,
        },
      ],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([fetchArticleBySlug(slug), fetchArticles()]);

  if (!article) {
    notFound();
  }

  const formattedDate = formatDate(article.date);
  const paragraphs = article.content.split('\n\n').filter(Boolean);
  const keySignals = paragraphs.slice(1, 4).map((paragraph) => {
    const [firstSentence] = paragraph.split('. ');
    return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
  });
  const relatedArticles = articles
    .filter((relatedArticle) => relatedArticle.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative min-h-[760px] overflow-hidden bg-[#090909] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10">
        <Image
          src={article.image_url || '/logo.svg'}
          alt=""
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(7,7,7,0.96)_0%,rgba(7,7,7,0.78)_48%,rgba(7,7,7,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070707] to-transparent" />

        <Reveal className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-between">
          <Link
            href="/market-insights"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-amber-200/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Market insights
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(280px,0.26fr)] lg:items-end">
            <div className="max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
                <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-1.5 text-amber-100">
                  {article.category}
                </span>
                <span>{formattedDate}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{article.source}</span>
              </div>
              <h1 className="mt-7 text-4xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                {article.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                {article.description}
              </p>
            </div>

            <div className="border-l border-white/10 pl-6 text-sm leading-7 text-slate-300">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-200/80">Private briefing</p>
              <p className="mt-4">
                Editorial research for investors evaluating physical precious metals, custody,
                liquidity, and long-range portfolio resilience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,760px)_320px] lg:items-start">
          <article className="space-y-7 text-lg leading-8 text-slate-300">
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? 'text-xl leading-9 text-slate-100' : undefined}
              >
                {paragraph}
              </p>
            ))}
          </article>

          <aside className="lg:sticky lg:top-28">
            <div className="border border-white/10 bg-zinc-950/80 p-6 shadow-[0_40px_90px_-70px_rgba(0,0,0,0.8)]">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">
                Key signals
              </p>
              <div className="mt-6 space-y-4">
                {keySignals.map((signal) => (
                  <p
                    key={signal}
                    className="border-t border-white/10 pt-4 text-sm leading-7 text-slate-300"
                  >
                    {signal}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal className="mx-auto max-w-7xl border border-white/10 bg-zinc-950/80 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Article information</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
              <p className="mt-2 text-lg font-semibold text-white">{article.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Source</p>
              <p className="mt-2 text-lg font-semibold text-white">{article.source}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Published</p>
              <p className="mt-2 text-lg font-semibold text-white">{formattedDate}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/10 bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <Reveal className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">Continue reading</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
                More metals intelligence
              </h2>
            </div>
            <Link
              href="/market-insights"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-200 transition hover:text-amber-100"
            >
              View all insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                href={`/articles/${relatedArticle.slug}`}
                className="group border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[1.32] overflow-hidden bg-zinc-900">
                  <Image
                    src={relatedArticle.image_url || '/logo.svg'}
                    alt={relatedArticle.title}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/70" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 backdrop-blur">
                    {relatedArticle.category}
                  </span>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {formatDate(relatedArticle.date)}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-white transition group-hover:text-amber-100">
                  {relatedArticle.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                  {relatedArticle.description}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
