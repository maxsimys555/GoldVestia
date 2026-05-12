'use server';

import { subscribeToNewsletter } from '@/lib/services/newsletter';
import { newsletterFormSchema } from '@/lib/validation/forms';

export type NewsletterFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function subscribeNewsletterAction(
  _previousState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  const parsed = newsletterFormSchema.safeParse({
    email: formData.get('email'),
  });

  if (!parsed.success) {
    return {
      status: 'error',
      message: parsed.error.issues[0]?.message || 'Please enter a valid email address.',
    };
  }

  const result = await subscribeToNewsletter(parsed.data);

  if (result.status === 'duplicate') {
    return {
      status: 'success',
      message: 'You are already subscribed to GoldVestia intelligence.',
    };
  }

  if (result.status === 'error') {
    return {
      status: 'error',
      message: result.message,
    };
  }

  return {
    status: 'success',
    message: 'Subscription confirmed. Private metals intelligence is now reserved for your inbox.',
  };
}
