'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/gold', label: 'Gold' },
  { href: '/silver', label: 'Silver' },
  { href: '/platinum', label: 'Platinum' },
  { href: '/palladium', label: 'Palladium' },
  { href: '/investment-plans', label: 'Plans' },
  { href: '/market-insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 font-sans backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1224px] items-center justify-between px-5 sm:px-8 lg:h-[86px] lg:px-10">
        {/* LOGO */}
        <Link
          href="/"
          prefetch
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="GoldVestia"
            width={56}
            height={56}
            className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
          />

          <span className="text-lg font-bold text-white sm:text-xl whitespace-nowrap">
            GoldVestia
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 lg:flex xl:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={cn(
                  'rounded-full px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white',
                  isActive && 'bg-white/10 text-white',
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            prefetch
            className="ml-1 inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full bg-amber-200 px-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Request Access
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={cn(
          'lg:hidden',
          isOpen ? 'block border-t border-white/10 bg-[#080808]/96' : 'hidden',
        )}
      >
        <nav className="mx-auto grid max-w-[1224px] grid-cols-2 gap-2 px-5 py-5 sm:grid-cols-3 sm:px-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onClick={() => setIsOpen(false)}
                className={cn(
                  'rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-200/25 hover:bg-white/8',
                  isActive && 'border-amber-200/35 bg-amber-200/10 text-amber-100',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
