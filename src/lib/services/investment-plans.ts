import { cacheLife, cacheTag } from 'next/cache';
import { isSupabaseConfigured, supabase, type InvestmentPlan } from '../supabase';

export async function fetchInvestmentPlans(): Promise<InvestmentPlan[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('investment-plans');

  if (!isSupabaseConfigured) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('investment_plans')
      .select('id, name, price, highlight, features, description')
      .order('price', { ascending: true });

    if (error) {
      console.error('Error fetching investment plans:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching investment plans:', error);
    return [];
  }
}
