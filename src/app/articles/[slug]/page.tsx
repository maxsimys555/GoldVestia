import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/motion/Reveal';
import { fetchArticleBySlug, fetchArticles } from '@/lib/services/articles';

export const unstable_instant = {
  prefetch: 'runtime',
  samples: [
    { params: { slug: 'gold-wealth-anchor' } },
    { params: { slug: 'silver-industrial-demand' } },
    { params: { slug: 'private-vault-custody' } },
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
      title: 'Article not found | GoldInvest',
    };
  }

  return {
    title: `${article.title} | GoldInvest`,
    description: article.description,
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
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = formatDate(article.date);

  return (
    <div className="relative overflow-hidden bg-[#070707] text-white">
      <section className="relative overflow-hidden bg-[#090909] px-6 py-24 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,160,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,198,90,0.08),transparent_28%)]" />
        <Reveal className="mx-auto max-w-4xl">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                {article.category}
              </span>
              <span>{formattedDate}</span>
              <span>{article.source}</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              {article.title}
            </h1>
            <p className="text-xl leading-8 text-slate-300">{article.description}</p>
          </div>
        </Reveal>
      </section>

      <section className="relative h-96 overflow-hidden bg-zinc-950 sm:h-[500px]">
        <Image
          src={article.image_url || '/icon.svg'}
          alt={article.title}
          fill
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070707]" />
      </section>

      <section className="px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl">
          <article className="space-y-6 text-lg leading-8 text-slate-300">
            {article.content.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </Reveal>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8">
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
    </div>
  );
}
