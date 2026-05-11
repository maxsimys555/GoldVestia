import { cacheLife, cacheTag } from 'next/cache';
import { isSupabaseConfigured, supabase, type Testimonial } from '../supabase';

export async function fetchTestimonials(): Promise<Testimonial[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('testimonials');

  if (!isSupabaseConfigured) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('id, quote, name, role, rating, avatar_url')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error fetching testimonials:', error);
    return [];
  }
}
