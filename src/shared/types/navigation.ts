import type { ComponentType } from 'react';
import type { TranslationKey } from '@/shared/i18n';

export interface DrawerRoute {
  /** Expo Router path, e.g. `/profile`. Also the drawer's active-state key. */
  href: string;
  labelKey: TranslationKey;
  icon: ComponentType<{ color: string; size: number }>;
}
