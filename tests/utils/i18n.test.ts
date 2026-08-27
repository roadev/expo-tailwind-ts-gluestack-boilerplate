import en from '@/shared/i18n/locales/en';
import es from '@/shared/i18n/locales/es';
import { createI18n } from '@/shared/i18n';

/** Every dot-notation leaf path in a locale object. */
function leafPaths(tree: object, prefix = ''): string[] {
  return Object.entries(tree).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'string' ? [path] : leafPaths(value as object, path);
  });
}

describe('i18n', () => {
  it('translates a nested key', () => {
    expect(createI18n('en').t('nav.profile')).toBe('Profile');
    expect(createI18n('es').t('nav.profile')).toBe('Perfil');
  });

  it('interpolates named params', () => {
    expect(createI18n('en').t('home.title', { appName: 'Acme' })).toBe('Welcome to Acme');
  });

  it('resolves the {s} plural marker against count', () => {
    const i18n = createI18n('en');
    expect(i18n.t('home.itemCount', { count: 1 })).toBe('1 item');
    expect(i18n.t('home.itemCount', { count: 3 })).toBe('3 items');
  });

  it('falls back to the key when the path is missing', () => {
    // Cast: the point of the test is the runtime path that types forbid.
    expect(createI18n('en').t('nope.missing' as never)).toBe('nope.missing');
  });

  it('switches language on an existing instance', () => {
    const i18n = createI18n('en');
    i18n.setLanguage('es');
    expect(i18n.t('common.cancel')).toBe('Cancelar');
  });

  it('keeps every locale at exactly the same set of keys', () => {
    expect(leafPaths(es).sort()).toEqual(leafPaths(en).sort());
  });
});
