import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import ClientScripts from '@/components/layout/ClientScripts';
import Providers from '@/components/Providers';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NUBS-GHANA | Welcome',
  description: 'NUBS-GHANA - A Christ-centered fellowship of students committed to spiritual growth and leadership.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} style={{ scrollPaddingTop: '100px' }}>
      <head>
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
      </head>
      <body>
        <Providers>
          <ClientScripts />
          {children}
        </Providers>
      </body>
    </html>
  );
}
