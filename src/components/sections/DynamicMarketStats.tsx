'use client';

import { motion } from 'motion/react';
import { useDashboardStore, type Category } from '@/lib/store';

const categoryMetrics: Record<Category, { label: string; value: string; trend: string }[]> = {
  news: [
    { label: 'Articles Updated', value: '24', trend: '+12% this week' },
    { label: 'Market Sentiment', value: 'Bullish', trend: '+8% confidence' },
    { label: 'Global Coverage', value: '145', trend: 'Countries monitored' },
  ],
  gold: [
    { label: 'Spot Price', value: '$1,945', trend: '+4.2% YTD' },
    { label: 'Institutional Demand', value: '98.7%', trend: 'Vault coverage' },
    { label: 'Market Premium', value: '2.1%', trend: '+0.3% this week' },
  ],
  silver: [
    { label: 'Spot Price', value: '$24.58', trend: '+6.8% YTD' },
    { label: 'Industrial Usage', value: '72%', trend: 'of global demand' },
    { label: 'Supply Tightness', value: 'High', trend: '+15% this month' },
  ],
  platinum: [
    { label: 'Spot Price', value: '$1,087', trend: '+5.4% YTD' },
    { label: 'Auto Industry', value: '58%', trend: 'primary demand' },
    { label: 'Scarcity Index', value: 'Critical', trend: 'supply concerns' },
  ],
  markets: [
    { label: 'Global Markets', value: '↑ +2.3%', trend: 'this month' },
    { label: 'Alternative Assets', value: '$89.2T', trend: 'under management' },
    { label: 'Volatility Index', value: '14.2', trend: '-8% normalized' },
  ],
  analysis: [
    { label: 'Technical Signals', value: '7/10', trend: 'bullish indicators' },
    { label: 'Fundamental Score', value: '8/10', trend: 'strong supports' },
    { label: 'Sentiment Index', value: '72%', trend: 'positive outlook' },
  ],
};

export function DynamicMarketStats() {
  const { selectedCategory } = useDashboardStore();
  const metrics = categoryMetrics[selectedCategory];

  return (
    <motion.div
      key={`metrics-${selectedCategory}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-3"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-7 shadow-lg shadow-black/20 hover:border-amber-200/25 transition-all duration-300"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">{metric.label}</p>
          <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
          <p className="text-sm text-amber-100/80">{metric.trend}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
