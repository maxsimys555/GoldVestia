# GoldVestia

Premium frontend investment website for gold, precious metals, market insights, and long-term wealth preservation.

The project is built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Supabase, and Resend.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion / Motion
- Supabase
- Resend
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Fill in the required values in `.env.local`.

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Environment Variables

The repository intentionally does not include `.env.local`.

Use `.env.example` as the safe template.

### Required for Supabase data

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

These values are public client values. They are safe to expose when Supabase Row Level Security policies are configured correctly.

### Required for correct metadata

```env
NEXT_PUBLIC_SITE_URL=
```

Example:

```env
NEXT_PUBLIC_SITE_URL=https://goldvestia.com
```

### Optional email notifications

```env
RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_NOTIFICATION_EMAIL=
SITE_OWNER_EMAIL=
```

`RESEND_API_KEY` is private and must never be committed to Git.

If Resend is not configured, the site still builds and runs, but contact email notifications are skipped.

### Not currently required

```env
COINGECKO_API_KEY=
```

The current codebase does not read `COINGECKO_API_KEY`.

## Supabase Tables

The site can run with fallback content, but live dynamic content expects these Supabase tables:

- `articles`
- `metal_prices`
- `investment_plans`
- `testimonials`
- `contacts`
- `newsletter_subscribers`

If Supabase is not configured, the frontend uses local fallback content where available.

## Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after build.

## Deployment Notes

For Vercel or Netlify:

1. Add all required environment variables in the hosting dashboard.
2. Do not upload `.env.local`.
3. Run the default build command:

```bash
npm run build
```

4. Make sure Supabase RLS policies are configured before using production data.

## Security Notes

- `.env.local` is ignored by Git.
- `.env.example` is safe to commit because it contains no secrets.
- Do not commit service role keys, private API tokens, or Resend API keys.
- `NEXT_PUBLIC_*` variables are exposed to the browser by design.

## Project Structure

```txt
src/
  app/
  components/
  lib/
  services/
public/
```

Main homepage entry:

```txt
src/app/page.tsx
```

Main layout:

```txt
src/app/layout.tsx
```

Header:

```txt
src/components/header/Header.tsx
```
