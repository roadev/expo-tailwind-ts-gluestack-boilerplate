import { API_URL } from '@/shared/constants/env';

export const API_BASE_URL = API_URL;

/** Long enough for a cold serverless start, short enough to not hang a screen. */
export const REQUEST_TIMEOUT_MS = 15_000;

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
