import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  pre?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ pre, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', className)}>
      {pre ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/75 sm:text-sm sm:tracking-[0.35em]">
          {pre}
        </p>
      ) : null}
      <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
          {description}
        </p>
      ) : null}
    </div>
  );
}
