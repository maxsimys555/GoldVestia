import { isSupabaseConfigured, supabase, type NewsletterSubscriber } from '../supabase';
import type { NewsletterFormInput } from '../validation/forms';

export type NewsletterSubmitResult =
  | { status: 'success'; subscriber: NewsletterSubscriber | null }
  | { status: 'duplicate' }
  | { status: 'error'; message: string };

function isDuplicateError(error: { code?: string; message?: string }) {
  return (
    error.code === '23505' ||
    error.message?.toLowerCase().includes('duplicate') ||
    error.message?.toLowerCase().includes('unique')
  );
}

export async function subscribeToNewsletter(
  input: NewsletterFormInput,
): Promise<NewsletterSubmitResult> {
  if (!isSupabaseConfigured) {
    console.error('Supabase is not configured. Newsletter subscription was skipped.');
    return { status: 'error', message: 'Newsletter subscription is temporarily unavailable.' };
  }

  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: input.email,
        status: 'active',
      })
      .select('id, email, created_at, status')
      .single();

    if (error) {
      if (isDuplicateError(error)) {
        return { status: 'duplicate' };
      }

      console.error('Error subscribing to newsletter:', error);
      return { status: 'error', message: 'We could not complete your subscription.' };
    }

    return { status: 'success', subscriber: data };
  } catch (error) {
    console.error('Unexpected newsletter subscription error:', error);
    return { status: 'error', message: 'Newsletter subscription is temporarily unavailable.' };
  }
}
