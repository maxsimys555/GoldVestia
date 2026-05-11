import type { Metadata } from 'next';
import './globals.css';
import { SiteProviders } from '@/components/SiteProviders';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'GoldInvest | Premium Precious Metals Strategies',
  description:
    'Secure asset storage and premium precious metals investment insights for modern wealth preservation.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex min-h-screen flex-col bg-[#050507] text-white selection:bg-amber-200/25 selection:text-white">
        <SiteProviders>
          <Header />
          <main className="relative flex-1 pt-20 lg:pt-[86px]">{children}</main>
          <Footer />
        </SiteProviders>
      </body>
    </html>
  );
}
