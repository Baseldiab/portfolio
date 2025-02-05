import { useEffect, useState, useCallback } from 'react';
import { getClientTranslations } from '@/app/i18n';

export function useTranslations(locale: string) {
  const [t, setT] = useState<(key: string | string[], options?: Record<string, unknown>) => string>(
    () => (key: string | string[]) => Array.isArray(key) ? key[0] : key
  );
  const [isLoading, setIsLoading] = useState(true);

  const initTranslations = useCallback(async () => {
    try {
      setIsLoading(true);
      const { t: translator } = await getClientTranslations(locale);
      setT(() => translator);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Translation initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    initTranslations();
  }, [initTranslations]);

  return { t, isLoading };
}