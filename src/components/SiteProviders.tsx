'use client';

import { ReactNode } from 'react';
import { DashboardProvider } from '@/components/providers/DashboardProvider';
import { SmoothScrollProvider } from '@/components/scroll/SmoothScrollProvider';

export function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </SmoothScrollProvider>
  );
}
