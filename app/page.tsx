'use client';

import { ThemeSwitcher } from '@/components/theme-switcher';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end gap-4 mb-8">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <h1 className="text-4xl font-bold text-center">{t('meta.title')}</h1>
      </div>
    </div>
  );
}