'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';

const FALLBACK_LOGO = '/logo.svg';

const posts = [
  {
    image: '/images/gold-reserve.svg',
    category: 'Gold',
    date: 'May 08, 2026',
    title: 'Gold remains the anchor for private wealth preservation',
  },
  {
    image: '/images/silver-market.svg',
    category: 'Silver',
    date: 'May 06, 2026',
    title: 'Silver demand intensifies amid industrial and store-of-value flows',
  },
  {
    image: '/images/vault-strategy.svg',
    category: 'Platinum',
    date: 'May 02, 2026',
    title: 'Platinum allocations step into luxury and industrial resilience',
  },
  {
    image: '/images/gold-reserve.svg',
    category: 'Palladium',
    date: 'April 28, 2026',
    title: "Palladium's supply story reshapes elite metals strategies",
  },
  {
    image: '/images/vault-strategy.svg',
    category: 'Market Insight',
    date: 'April 20, 2026',
    title: 'How private vault custody supports confident allocations',
  },
  {
    image: '/images/silver-market.svg',
    category: 'Strategy',
    date: 'April 16, 2026',
    title: 'Designing a blended precious metals portfolio for legacy capital',
  },
];

const leftAccessPosts = [posts[5], posts[2], posts[0], posts[4]];
const rightAccessPosts = [posts[3], posts[4], posts[1], posts[2]];

function BrowseLink() {
  return (
    <a
      href="#recent-posts"
      className="inline-flex items-center gap-3 text-base font-bold text-white/80 transition hover:text-white sm:text-xl"
    >
      Browse more posts
      <ArrowUpRight className="h-5 w-5" />
    </a>
  );
}

function PostMeta({ category, date }: { category: string; date: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-white sm:mt-8 sm:gap-7 sm:text-base">
      <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 leading-none">
        {category}
      </span>
      <span>{date}</span>
    </div>
  );
}

function ImageCard({
  image,
  title,
  className = '',
}: {
  image?: string;
  title: string;
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = image && !imageFailed ? image : FALLBACK_LOGO;
  const isFallback = imageSrc === FALLBACK_LOGO;

  return (
    <div className={`relative overflow-hidden rounded bg-zinc-900 ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        onError={() => setImageFailed(true)}
        className={isFallback ? 'object-contain p-10 sm:p-16' : 'object-cover'}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-black/12 to-black/62" />
    </div>
  );
}

export function BlogContentSections() {
  return (
    <>
      <section className="bg-black px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">Featured Briefings</h2>
            <BrowseLink />
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {posts.slice(0, 2).map((post) => (
              <article key={post.title}>
                <ImageCard image={post.image} title={post.title} className="aspect-[1.18]" />
                <PostMeta category={post.category} date={post.date} />
                <h3 className="mt-5 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {posts.slice(2).map((post) => (
              <article key={post.title}>
                <ImageCard image={post.image} title={post.title} className="aspect-[1.24]" />
                <PostMeta category={post.category} date={post.date} />
                <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="max-w-xl lg:sticky lg:top-28">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sign up for access to exclusive articles
            </h2>
            <p className="mt-5 font-sans text-lg leading-7 text-white/80">
              Join investors following the forces shaping global precious metals markets and
              economic uncertainty.
            </p>
            <Link
              href="/contact"
              className="mt-8 flex h-14 w-full items-center justify-center rounded bg-[#f3c96f] font-sans text-base font-bold text-black transition hover:bg-[#ffd982] sm:mt-12 sm:text-lg"
            >
              Subscribe now!
            </Link>

            <div className="mt-10 sm:mt-16">
              <h3 className="text-2xl font-bold sm:text-3xl">What&apos;s included:</h3>
              <ul className="mt-7 space-y-4 font-sans text-base text-white sm:mt-10 sm:space-y-5 sm:text-lg">
                {['Full article access', 'Weekly emails', 'No advertisement'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <Check className="h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] sm:h-[720px] lg:h-[880px]">
            <div className="grid h-full gap-x-8 md:grid-cols-2 lg:gap-x-12">
              <div className="access-scroll-up flex flex-col gap-10 sm:gap-16">
                {[...leftAccessPosts, ...leftAccessPosts].map((post, index) => (
                  <article
                    key={`access-left-${post.title}-${index}`}
                    className="opacity-75 transition hover:opacity-100"
                  >
                    <ImageCard image={post.image} title={post.title} className="aspect-square" />
                    <h3 className="mt-5 text-xl font-bold leading-tight text-white/78 sm:mt-8 sm:text-3xl">
                      {post.title}
                    </h3>
                  </article>
                ))}
              </div>

              <div className="access-scroll-down hidden flex-col gap-10 sm:gap-16 md:flex">
                {[...rightAccessPosts, ...rightAccessPosts].map((post, index) => (
                  <article
                    key={`access-right-${post.title}-${index}`}
                    className="opacity-75 transition hover:opacity-100"
                  >
                    <ImageCard image={post.image} title={post.title} className="aspect-square" />
                    <h3 className="mt-5 text-xl font-bold leading-tight text-white/78 sm:mt-8 sm:text-3xl">
                      {post.title}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recent-posts" className="bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">Recent Intelligence</h2>
            <BrowseLink />
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {posts.map((post) => (
              <article key={`recent-${post.title}`}>
                <ImageCard image={post.image} title={post.title} className="aspect-[1.18]" />
                <PostMeta category={post.category} date={post.date} />
                <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
