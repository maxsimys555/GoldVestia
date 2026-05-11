'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { submitContactAction, type ContactFormState } from '@/app/contact/actions';

const initialState: ContactFormState = {
  status: 'idle',
  message: '',
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, pending] = useActionState(submitContactAction, initialState);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <>
      {state.status !== 'idle' && (
        <div
          className={`mb-6 rounded-2xl p-4 text-sm font-semibold ${
            state.status === 'success'
              ? 'border border-amber-200/30 bg-amber-200/10 text-amber-100'
              : 'border border-red-500/30 bg-red-500/10 text-red-100'
          }`}
        >
          {state.message}
        </div>
      )}

      <form ref={formRef} action={action} className="grid gap-6">
        <div className="grid gap-3">
          <label htmlFor="name" className="text-sm font-semibold text-white/90">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
            minLength={2}
            className="h-12 rounded-2xl border border-white/10 bg-black/60 px-4 text-white outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/20"
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="email" className="text-sm font-semibold text-white/90">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@wealth.com"
            required
            className="h-12 rounded-2xl border border-white/10 bg-black/60 px-4 text-white outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/20"
          />
        </div>
        <div className="grid gap-3">
          <label htmlFor="message" className="text-sm font-semibold text-white/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your investment interests"
            required
            minLength={20}
            className="min-h-[170px] rounded-2xl border border-white/10 bg-black/60 px-4 py-4 text-white outline-none transition focus:border-amber-200 focus:ring-2 focus:ring-amber-200/20"
          />
        </div>
        <Button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-amber-200 text-slate-950 shadow-[0_24px_60px_-40px_rgba(255,203,80,0.8)] transition hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
          size="lg"
        >
          {pending ? 'Sending...' : 'Send inquiry'}
        </Button>
      </form>
    </>
  );
}
