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
    console.warn(
      `Supabase is not configured. Newsletter subscription accepted locally for ${input.email}.`,
    );

    return {
      status: 'success',
      subscriber: {
        id: `local-${input.email}`,
        email: input.email,
        created_at: new Date().toISOString(),
        status: 'active',
      },
    };
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
