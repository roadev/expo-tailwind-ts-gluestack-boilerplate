import { useCallback, useEffect, useMemo } from 'react';
import i18n, { createI18n, type TranslationKey } from '@/shared/i18n';
import type { TranslationParams } from '@/shared/i18n/types';
import useUIStore from '@/store/uiStore';

/**
 * Translator bound to the persisted language. Uses its own instance so that
 * changing the language re-renders every caller, and keeps the module-level
 * singleton in sync for non-React callers such as the API layer.
 */
export default function useTranslation() {
  const language = useUIStore((state) => state.language);
  const setLanguage = useUIStore((state) => state.setLanguage);

  useEffect(() => {
    i18n.setLanguage(language);
  }, [language]);

  const instance = useMemo(() => createI18n(language), [language]);

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => instance.t(key, params),
    [instance]
  );

  return { t, language, setLanguage };
}
