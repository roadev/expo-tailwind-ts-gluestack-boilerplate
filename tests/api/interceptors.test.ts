import type { AxiosInstance } from 'axios';
import attachInterceptors from '@/services/api/interceptors';
import useAuthStore from '@/store/authStore';
import { AppError } from '@/shared/utils/errors';

jest.mock('@/shared/lib/logger', () => ({
  __esModule: true,
  default: { debug: jest.fn(), info: jest.fn(), warn: jest.fn(), error: jest.fn() },
}));

/** Captures the handlers `attachInterceptors` registers, without a real client. */
function captureResponseRejection() {
  let onRejected: ((error: unknown) => Promise<never>) | undefined;
  const client = {
    interceptors: {
      request: { use: jest.fn() },
      response: {
        use: jest.fn((_onFulfilled: unknown, rejected: (error: unknown) => Promise<never>) => {
          onRejected = rejected;
        }),
      },
    },
  } as unknown as AxiosInstance;

  attachInterceptors(client);
  if (!onRejected) throw new Error('no response rejection handler registered');
  return onRejected;
}

function failWith(status: number) {
  return { response: { status }, config: { url: '/things' }, message: `HTTP ${status}` };
}

describe('response interceptor', () => {
  beforeEach(() => {
    useAuthStore.getState().signIn({ id: '1', name: 'Ada', email: 'ada@example.test' }, 'token-1');
  });

  it('signs the user out on 401', async () => {
    const onRejected = captureResponseRejection();

    await expect(onRejected(failWith(401))).rejects.toBeInstanceOf(AppError);

    expect(useAuthStore.getState().token).toBeNull();
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });

  it('keeps the session on 403', async () => {
    const onRejected = captureResponseRejection();

    await expect(onRejected(failWith(403))).rejects.toMatchObject({ kind: 'forbidden' });

    expect(useAuthStore.getState().token).toBe('token-1');
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });

  it.each([500, 422, 404])('keeps the session on %s', async (status) => {
    const onRejected = captureResponseRejection();

    await expect(onRejected(failWith(status))).rejects.toBeInstanceOf(AppError);

    expect(useAuthStore.getState().token).toBe('token-1');
  });
});
