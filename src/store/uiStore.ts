import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Language } from '@/shared/i18n/types';

export type ColorMode = 'light' | 'dark' | 'system';

interface UIState {
  colorMode: ColorMode;
  language: Language;
  setColorMode: (mode: ColorMode) => void;
  setLanguage: (language: Language) => void;
}

const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      colorMode: 'system',
      language: 'en',
      setColorMode: (colorMode) => set({ colorMode }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'ui-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUIStore;
