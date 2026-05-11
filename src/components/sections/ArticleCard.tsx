'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  image?: string;
  category: string;
  date: string;
  title: string;
  description?: string;
}

export function ArticleCard({ image, category, date, title, description }: ArticleCardProps) {
  const placeholderImage =
    image ||
    (category === 'Gold'
      ? '/images/gold-reserve.svg'
      : category === 'Silver'
        ? '/images/silver-market.svg'
        : '/images/vault-strategy.svg');

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/30 transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          <Image
            src={placeholderImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category and Date */}
          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-amber-300 uppercase tracking-wide">
              {category}
            </span>
            <span className="text-xs text-slate-400">{date}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          {description && <p className="text-sm text-slate-400 line-clamp-2">{description}</p>}

          {/* Link indicator */}
          <div className="flex items-center gap-2 text-amber-300 opacity-0 group-hover:opacity-100 transition">
            <span className="text-sm font-semibold">Read more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
