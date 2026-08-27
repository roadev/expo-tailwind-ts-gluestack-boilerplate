import { IS_PRODUCTION } from '@/shared/constants/env';

type Level = 'debug' | 'info' | 'warn' | 'error';

const ORDER: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };

// Production ships warnings and errors only; debug/info are dev noise and can
// leak request payloads into device logs.
const MIN_LEVEL: Level = IS_PRODUCTION ? 'warn' : 'debug';

function log(level: Level, message: string, context?: Record<string, unknown>): void {
  if (ORDER[level] < ORDER[MIN_LEVEL]) return;
  // eslint-disable-next-line no-console
  console[level === 'debug' ? 'log' : level](`[${level}] ${message}`, context ?? '');
}

const logger = {
  debug: (message: string, context?: Record<string, unknown>) => log('debug', message, context),
  info: (message: string, context?: Record<string, unknown>) => log('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) => log('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) => log('error', message, context),
};

export default logger;
