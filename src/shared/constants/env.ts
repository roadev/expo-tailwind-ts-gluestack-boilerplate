import Constants from 'expo-constants';

interface ExtraConfig {
  apiUrl?: string;
  env?: string;
}

const extra = (Constants.expoConfig?.extra ?? {}) as ExtraConfig;

/** Base URL every API service is built on. Set EXPO_PUBLIC_API_URL in `.env`. */
export const API_URL = extra.apiUrl ?? 'https://api.example.com';

/** 'development' | 'preview' | 'production' — comes from EXPO_PUBLIC_ENV. */
export const APP_ENV = extra.env ?? 'development';

export const IS_PRODUCTION = APP_ENV === 'production';
