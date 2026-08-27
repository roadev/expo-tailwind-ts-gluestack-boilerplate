export type Language = 'en' | 'es';

/** A locale file: nested objects whose leaves are the translated strings. */
export interface TranslationTree {
  [key: string]: string | TranslationTree;
}

/**
 * Every dot-notation path that resolves to a string in `T`.
 * For `{ home: { title: 'Hi' } }` this is `'home.title'`, so a typo in a
 * translation key is a compile error rather than a string rendered to the user.
 */
export type TranslationPath<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${TranslationPath<T[K]>}`;
}[keyof T & string];

/**
 * `T` with every string-literal leaf widened back to `string`. Locale files are
 * declared `as const` so key paths can be inferred from them; a translation of
 * one must match its *shape*, not its English wording.
 */
export type Localized<T> = {
  [K in keyof T]: T[K] extends string ? string : Localized<T[K]>;
};

/** Values interpolated into a translation, e.g. `{ name: 'Ada', count: 2 }`. */
export type TranslationParams = Record<string, string | number>;
