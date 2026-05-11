'use server';

import { submitContact } from '@/lib/services/contacts';
import { contactFormSchema } from '@/lib/validation/forms';
import { sendContactAutoReply, sendContactNotification } from '@/services/email';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitContactAction(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      status: 'error',
      message: parsed.error.issues[0]?.message || 'Please check the form and try again.',
    };
  }

  const result = await submitContact(parsed.data);

  if (!result) {
    return {
      status: 'error',
      message: 'We could not submit your inquiry. Please try again.',
    };
  }

  await Promise.allSettled([
    sendContactNotification(parsed.data),
    sendContactAutoReply(parsed.data),
  ]);

  return {
    status: 'success',
    message: 'Thank you. Your inquiry has been received and our private metals desk will respond shortly.',
  };
}
