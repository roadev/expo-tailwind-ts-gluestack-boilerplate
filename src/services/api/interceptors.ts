import type { AxiosInstance } from 'axios';
import useAuthStore from '@/store/authStore';
import logger from '@/shared/lib/logger';
import { AppError, kindFromStatus } from '@/shared/utils/errors';

/**
 * Adds the bearer token to every request and normalizes every failure into an
 * `AppError`, so no screen ever has to know axios's error shape.
 */
export default function attachInterceptors(client: AxiosInstance): void {
  client.interceptors.request.use((config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error?.response?.status as number | undefined;
      const kind = kindFromStatus(status);

      // A 401 means the token the request just used is dead; keeping it around
      // would make every later request fail the same way.
      if (kind === 'unauthorized') {
        useAuthStore.getState().signOut();
      }

      logger.error('API request failed', { url: error?.config?.url, status, kind });

      return Promise.reject(new AppError(kind, error?.message, { status, cause: error }));
    }
  );
}
