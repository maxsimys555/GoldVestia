import { cacheLife, cacheTag } from 'next/cache';
import { isSupabaseConfigured, supabase, type MetalPrice } from '../supabase';

export async function fetchMetalPrices(): Promise<MetalPrice[]> {
  'use cache';
  cacheLife({
    stale: 60,
    revalidate: 300,
    expire: 3600,
  });
  cacheTag('metal-prices');

  if (!isSupabaseConfigured) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('metal_prices')
      .select('id, metal, symbol, price, currency, change_percent, change_direction, updated_at')
      .order('metal', { ascending: true });

    if (error) {
      console.error('Error fetching metal prices:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching metal prices:', error);
    return [];
  }
}

export async function fetchMetalPrice(metal: string): Promise<MetalPrice | null> {
  'use cache';
  cacheLife({
    stale: 60,
    revalidate: 300,
    expire: 3600,
  });
  cacheTag('metal-prices');
  cacheTag(`metal-price:${metal}`);

  if (!isSupabaseConfigured) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('metal_prices')
      .select('id, metal, symbol, price, currency, change_percent, change_direction, updated_at')
      .eq('metal', metal)
      .single();

    if (error) {
      console.error(`Error fetching price for ${metal}:`, error);
      return null;
    }

    return data;
  } catch (error) {
    console.error(`Unexpected error fetching price for ${metal}:`, error);
    return null;
  }
}
