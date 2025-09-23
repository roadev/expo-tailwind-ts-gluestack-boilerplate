// API services will go here (ready for axios integration)
// Example:
// export { authService } from './auth';
// export { userService } from './user';
// export { apiClient } from './apiClient';
// export { postService } from './post';

// Base API client configuration
export const API_CONFIG = {
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;
