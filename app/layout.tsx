import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { QueryProvider } from '@/components/query-provider';
import { I18nProvider } from './i18n-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'My Portfolio',
    template: '%s | My Portfolio',
  },
  description: 'A showcase of my work and skills as a software developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    siteName: 'My Portfolio',
    images: [
      {
        url: 'https://your-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Portfolio',
    description: 'A showcase of my work and skills as a software developer',
    images: ['https://your-portfolio.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <I18nProvider>
              {children}
              <Toaster />
            </I18nProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}