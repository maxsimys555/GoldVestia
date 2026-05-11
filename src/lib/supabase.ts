import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured =
  Boolean(supabaseUrl && supabaseAnonKey) && !supabaseUrl?.includes('xxxx.supabase.co');

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: false,
    },
  },
);

// Type definitions
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating?: number;
  avatar_url?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  image_url: string;
  source: string;
  date: string;
  created_at: string;
}

export interface InvestmentPlan {
  id: string;
  name: string;
  price: string;
  highlight: string;
  features: string[];
  description: string;
}

export interface MetalPrice {
  id: string;
  metal: string;
  symbol: string;
  price: number;
  currency: string;
  change_percent: number;
  change_direction: 'up' | 'down' | 'neutral';
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
  status?: string;
}
