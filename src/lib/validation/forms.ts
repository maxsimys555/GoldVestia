import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(120, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Please enter a valid email address.')
    .max(254, 'Email address is too long.'),
  message: z
    .string()
    .trim()
    .min(20, 'Please share a little more about your investment goals.')
    .max(4000, 'Message is too long.'),
});

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Please enter a valid email address.')
    .max(254, 'Email address is too long.'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type NewsletterFormInput = z.infer<typeof newsletterFormSchema>;
