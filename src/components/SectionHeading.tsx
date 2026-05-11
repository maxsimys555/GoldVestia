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
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
