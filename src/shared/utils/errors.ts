export type AppErrorKind = 'network' | 'unauthorized' | 'validation' | 'server' | 'unknown';

/** Translation key each error kind maps to, so screens never build error copy. */
const MESSAGE_KEYS = {
  network: 'errors.network',
  unauthorized: 'errors.unauthorized',
  validation: 'errors.unexpected',
  server: 'errors.unexpected',
  unknown: 'errors.unexpected',
} as const;

/**
 * A failure the UI knows how to render. Everything thrown out of the API layer
 * is normalized into one of these so screens branch on `kind`, never on an
 * axios shape or an HTTP status.
 */
export class AppError extends Error {
  readonly kind: AppErrorKind;

  readonly status?: number;

  readonly cause?: unknown;

  constructor(
    kind: AppErrorKind,
    message?: string,
    options?: { status?: number; cause?: unknown }
  ) {
    super(message ?? kind);
    this.name = 'AppError';
    this.kind = kind;
    this.status = options?.status;
    this.cause = options?.cause;
  }

  /** Translation key for user-facing copy. Pass it to `translate()`. */
  get messageKey(): (typeof MESSAGE_KEYS)[AppErrorKind] {
    return MESSAGE_KEYS[this.kind];
  }
}

/** Maps an HTTP status to the error kind the UI reacts to. */
export function kindFromStatus(status?: number): AppErrorKind {
  if (status === undefined) return 'network';
  if (status === 401 || status === 403) return 'unauthorized';
  if (status === 422 || status === 400) return 'validation';
  if (status >= 500) return 'server';
  return 'unknown';
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}
