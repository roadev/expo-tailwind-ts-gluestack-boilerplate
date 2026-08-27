import en from './locales/en';
import es from './locales/es';
import type { Language, TranslationParams, TranslationPath, TranslationTree } from './types';

const translations: Record<Language, TranslationTree> = { en, es };

/** Dot-notation key of any string in the locale files, e.g. `'home.title'`. */
export type TranslationKey = TranslationPath<typeof en>;

const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Replaces `{name}` placeholders, and resolves the `{s}` plural marker against
 * `params.count` so a single key covers "1 item" and "3 items".
 */
function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;

  const filled = Object.entries(params).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    template
  );

  const isPlural = params.count !== undefined && Number(params.count) !== 1;
  return filled.replaceAll('{s}', isPlural ? 's' : '');
}

export class I18n {
  private language: Language;

  constructor(language: Language = DEFAULT_LANGUAGE) {
    this.language = language;
  }

  setLanguage(language: Language): void {
    this.language = language;
  }

  getLanguage(): Language {
    return this.language;
  }

  /**
   * Translates `key`. Falls back to the key itself when the path is missing, so
   * a bad key shows up in the UI instead of crashing the screen.
   */
  t(key: TranslationKey, params?: TranslationParams): string {
    const resolved = key
      .split('.')
      .reduce<string | TranslationTree | undefined>((node, segment) => {
        if (node && typeof node === 'object' && segment in node) {
          return node[segment];
        }
        return undefined;
      }, translations[this.language]);

    return typeof resolved === 'string' ? interpolate(resolved, params) : key;
  }
}

const i18n = new I18n();

export default i18n;

/** Shorthand for `i18n.t`, bound so it can be passed around as a function. */
export const translate = (key: TranslationKey, params?: TranslationParams): string =>
  i18n.t(key, params);

export const createI18n = (language: Language = DEFAULT_LANGUAGE): I18n => new I18n(language);
