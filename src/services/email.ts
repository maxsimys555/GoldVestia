import type { ContactFormInput } from '@/lib/validation/forms';

type EmailResult = {
  skipped: boolean;
  sent: boolean;
};

const resendApiKey = process.env.RESEND_API_KEY;
const ownerEmail = process.env.CONTACT_NOTIFICATION_EMAIL || process.env.SITE_OWNER_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'GoldInvest <onboarding@resend.dev>';

async function getResendClient() {
  if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not configured. Email notification skipped.');
    return null;
  }

  const { Resend } = await import('resend');
  return new Resend(resendApiKey);
}

export async function sendContactNotification(input: ContactFormInput): Promise<EmailResult> {
  try {
    const resend = await getResendClient();

    if (!resend || !ownerEmail) {
      if (!ownerEmail) {
        console.warn('CONTACT_NOTIFICATION_EMAIL or SITE_OWNER_EMAIL is not configured. Email notification skipped.');
      }

      return { skipped: true, sent: false };
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `New private metals inquiry from ${input.name}`,
      replyTo: input.email,
      text: [
        'New GoldInvest contact inquiry',
        '',
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        '',
        input.message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend contact notification failed:', error);
      return { skipped: false, sent: false };
    }

    return { skipped: false, sent: true };
  } catch (error) {
    console.error('Unexpected email notification error:', error);
    return { skipped: false, sent: false };
  }
}

export async function sendContactAutoReply(input: ContactFormInput): Promise<EmailResult> {
  try {
    const resend = await getResendClient();

    if (!resend) {
      return { skipped: true, sent: false };
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: input.email,
      subject: 'Your GoldInvest inquiry was received',
      text: [
        `Hello ${input.name},`,
        '',
        'Thank you for contacting GoldInvest. Our private metals desk has received your inquiry and will respond shortly.',
        '',
        'GoldInvest',
      ].join('\n'),
    });

    if (error) {
      console.error('Resend contact auto-reply failed:', error);
      return { skipped: false, sent: false };
    }

    return { skipped: false, sent: true };
  } catch (error) {
    console.error('Unexpected auto-reply email error:', error);
    return { skipped: false, sent: false };
  }
}
