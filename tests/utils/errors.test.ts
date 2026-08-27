import { AppError, type AppErrorKind, isAppError, kindFromStatus } from '@/shared/utils/errors';

describe('kindFromStatus', () => {
  const cases: [number | undefined, AppErrorKind][] = [
    [undefined, 'network'],
    [401, 'unauthorized'],
    // A 403 is an authorization decision about one resource, not a dead
    // session: folding it into 'unauthorized' is what used to sign the user out.
    [403, 'forbidden'],
    [400, 'validation'],
    [422, 'validation'],
    [500, 'server'],
    [503, 'server'],
    [418, 'unknown'],
  ];

  it.each(cases)('maps %s to %s', (status, expected) => {
    expect(kindFromStatus(status)).toBe(expected);
  });
});

describe('AppError', () => {
  it('exposes a translation key for the UI', () => {
    expect(new AppError('unauthorized').messageKey).toBe('errors.unauthorized');
    expect(new AppError('forbidden').messageKey).toBe('errors.forbidden');
    expect(new AppError('server').messageKey).toBe('errors.unexpected');
  });

  it('keeps the status and the original cause', () => {
    const cause = new Error('socket hang up');
    const error = new AppError('server', 'boom', { status: 500, cause });

    expect(error.status).toBe(500);
    expect(error.cause).toBe(cause);
    expect(error.message).toBe('boom');
  });

  it('is recognizable through isAppError', () => {
    expect(isAppError(new AppError('network'))).toBe(true);
    expect(isAppError(new Error('network'))).toBe(false);
  });
});
