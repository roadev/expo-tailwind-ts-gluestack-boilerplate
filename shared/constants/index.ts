// App constants will go here
export const API_BASE_URL = 'https://api.example.com';
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  SETTINGS: 'settings',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  danger: '#FF3B30',
} as const;

export const ROUTES = {
  HOME: '/',
  SETTINGS: '/settings',
  PROFILE: '/profile',
} as const;

export const API_ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  POSTS: '/posts',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
