'use client';

import { useActionState, useEffect, useRef } from 'react';
import {
  subscribeNewsletterAction,
  type NewsletterFormState,
} from '@/app/newsletter/actions';

const initialState: NewsletterFormState = {
  status: 'idle',
  message: '',
};

export function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action, pending] = useActionState(subscribeNewsletterAction, initialState);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="mx-auto mt-8 w-full max-w-[640px]">
      <form ref={formRef} action={action} className="grid w-full gap-3 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          disabled={pending}
          className="h-14 w-full min-w-0 rounded-xl border border-white/10 bg-white/8 px-5 text-base text-white outline-none placeholder:text-white/35 focus:border-[#f3c96f] disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-14 w-full shrink-0 rounded-xl bg-[#f3c96f] px-8 text-base font-bold text-black transition hover:bg-[#ffd982] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-36"
        >
          {pending ? 'Joining...' : 'Subscribe'}
        </button>
      </form>

      {state.status !== 'idle' && (
        <p
          className={`mt-3 text-sm font-semibold ${
            state.status === 'success' ? 'text-amber-100' : 'text-red-200'
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
