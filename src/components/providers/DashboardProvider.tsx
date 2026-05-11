'use client';

import { ReactNode } from 'react';
import { useDashboardInitialize } from '@/hooks/useDashboardInitialize';

export function DashboardProvider({ children }: { children: ReactNode }) {
  useDashboardInitialize();
  return <>{children}</>;
}
