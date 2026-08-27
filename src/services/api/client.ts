import axios from 'axios';
import { API_BASE_URL, DEFAULT_HEADERS, REQUEST_TIMEOUT_MS } from './config';
import attachInterceptors from './interceptors';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT_MS,
  headers: DEFAULT_HEADERS,
});

attachInterceptors(apiClient);

export default apiClient;
