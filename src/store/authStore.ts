import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  /** False until AsyncStorage has been read; guards against a login-screen flash. */
  hasHydrated: boolean;
  signIn: (user: AuthUser, token: string) => void;
  signOut: () => void;
  setHasHydrated: (value: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      hasHydrated: false,
      signIn: (user, token) => set({ user, token, isAuthenticated: true }),
      signOut: () => set({ user: null, token: null, isAuthenticated: false }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // `hasHydrated` describes this session, not the stored account.
      partialize: ({ user, token, isAuthenticated }) => ({ user, token, isAuthenticated }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    }
  )
);

export default useAuthStore;
