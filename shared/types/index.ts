// TypeScript type definitions will go here
// Example:
// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }
// export type ApiResponse<T> = {
//   data: T;
//   message: string;
//   success: boolean;
// };

export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  statusCode?: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser extends User {
  token: string;
  refreshToken: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';
export type Language = 'en' | 'es' | 'fr' | 'de';

export interface AppSettings {
  theme: ThemeMode;
  language: Language;
  notifications: boolean;
  biometricAuth: boolean;
}
