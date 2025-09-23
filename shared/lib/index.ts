// Third-party integrations and stores will go here (ready for zustand, zod, etc.)
// Example:
// export { useAuthStore } from './stores/auth';
// export { useUserStore } from './stores/user';
// export { userSchema } from './schemas/user';
// export { loginSchema } from './schemas/auth';
// export { api } from './axios';

// Base store configuration
export const STORE_CONFIG = {
  persist: {
    name: 'app-storage',
    version: 1,
  },
} as const;
