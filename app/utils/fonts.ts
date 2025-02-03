import { Karla, Noto_Kufi_Arabic, Playfair_Display } from 'next/font/google';

export const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-kufi',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
}); 