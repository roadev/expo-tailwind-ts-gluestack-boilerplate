# Expo · TypeScript · Tailwind v4 · gluestack-ui Boilerplate

A production-shaped Expo starter: file-based routing, Tailwind v4 through NativeWind, the
gluestack-ui v5 component set vendored into the repo, typed i18n, a normalized API layer,
persisted Zustand stores, and a lint/typecheck/test pipeline that runs in CI.

## Stack

| Area | Choice | Version |
| --- | --- | --- |
| Platform | [Expo SDK](https://github.com/expo/expo) | 57 |
| Runtime | [React Native](https://github.com/facebook/react-native) / [React](https://github.com/facebook/react) | 0.86 / 19.2 |
| Language | [TypeScript](https://github.com/microsoft/TypeScript) (strict) | 6.0 |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction/) (drawer, typed routes) | 57 |
| Styling | [Tailwind CSS](https://tailwindcss.com) via [NativeWind](https://www.nativewind.dev) | 4.3 / 5.0 preview |
| Components | [gluestack-ui](https://gluestack.io/ui/docs) | 5.0 |
| State | [Zustand](https://github.com/pmndrs/zustand) + AsyncStorage | 5.0 |
| HTTP | [Axios](https://github.com/axios/axios) | 1.20 |
| Schemas | [Zod](https://github.com/colinhacks/zod) | 4.4 |
| Animation | [Reanimated](https://docs.swmansion.com/react-native-reanimated/) + Worklets | 4.5 |
| Quality | ESLint 9 (airbnb-extended) · Prettier 3 · Jest 29 | — |

> **NativeWind is on `5.0.0-preview`.** That is deliberate: gluestack-ui v5 ships
> Tailwind v4 components, and NativeWind v5 is the Tailwind v4 engine. If you need
> a fully stable styling engine today, the alternatives are NativeWind 4 with
> gluestack-ui 4-alpha components, or [Uniwind](https://uniwind.dev) with these same
> gluestack v5 components.

## Getting started

```bash
pnpm install
cp .env.example .env
pnpm start
```

Then `pnpm ios`, `pnpm android` or `pnpm web`. Native folders are generated — run
`pnpm prebuild` before touching `ios/` or `android/`.

## Project structure

```
app/                          # Expo Router — routes mirror this tree
  _layout.tsx                 # GestureHandler + SafeArea + GluestackUIProvider
  (drawer)/                   # Drawer group: _layout, index, profile, settings
  global.css                  # Tailwind v4 entry: theme tokens for light/dark
src/
  components/ui/              # gluestack-ui components (vendored, see below)
  services/api/               # axios client, config, interceptors
  shared/
    components/               # Container, SectionCard — app-owned UI
    constants/env.ts          # typed access to app.config.js `extra`
    hooks/                    # useTranslation, useColorMode
    i18n/                     # typed translator + locale files
    lib/logger.ts             # level-gated logger
    types/                    # shared TypeScript types
    utils/errors.ts           # AppError + status→kind mapping
  store/                      # authStore, uiStore (persisted)
tests/                        # Jest specs
```

Path alias `@/*` → `./src/*`, declared in both `tsconfig.json` and `babel.config.js`.

## Styling: Tailwind v4

There is **no `tailwind.config.js`**. Tailwind v4 is CSS-first: design tokens live in
`@theme` inside `app/global.css`. The gluestack palette (`bg-background`, `text-muted-foreground`, `bg-primary`, …)
is defined there against CSS variables that flip with the color scheme.

To add a color, add the variable in all three theme blocks (`:root`, the dark media query,
`:root.dark`/`:root.light`) and expose it under `@theme inline`.

Source detection is automatic across `app/` and `src/` — do **not** add `@source` rules:
lightningcss 1.30.1 cannot parse that at-rule and the build fails.

## Components

`src/components/ui/` is **vendored** — copied in from gluestack-ui, not imported from a
package. That is the gluestack model: you own the source. Consequences:

- ESLint and Prettier skip that folder (`eslint.config.mjs`, `.prettierignore`), so it stays
  close to upstream and re-running the CLI produces almost no diff.
- `tsconfig.json` excludes it as a *root*, not from checking: components you actually import
  are still typechecked through your own code. Including all ~55 as roots pulls in the full
  `react-aria` type graph and takes `tsc` from ~2 s to over 15 minutes.
- Add more components with:
  ```bash
  npx gluestack-ui@latest add <component> --path src/components/ui
  ```
- Not vendored here (each pulls extra native dependencies): `bottomsheet`, `chat-ai`,
  `date-time-picker`, `liquid-glass`.
- One deviation from upstream: `avatar/index.tsx` uses `@ts-ignore` where upstream has
  `@ts-expect-error`, because React Native 0.86 types do declare `Image.resizeMode`.

The v5 component API is shadcn-shaped, not v4-shaped: `<Button variant="secondary" size="lg">`,
not `<Button action="secondary" variant="solid">`.

App-owned components go in `src/shared/components/` and are linted normally.

## i18n

Never hardcode user-facing text. `TranslationKey` is derived from the English locale, so a
typo in a key is a compile error:

```tsx
const { t } = useTranslation();
<Text>{t('home.title', { appName: 'Acme' })}</Text>
```

`{name}` interpolates params; `{s}` becomes a plural `s` when `params.count !== 1`. A test
asserts every locale carries exactly the same key set.

## Conventions

- **No barrel files** — enforced by `eslint-plugin-no-barrel-files`. Import from the module
  that defines the symbol.
- **`Pressable`, not `TouchableOpacity`.**
- Pure formatters and helpers live at module scope, outside the component.
- Components stay generic; business logic belongs in hooks, stores or services.
- Naming: components `PascalCase`, hooks/stores `camelCase`, folders `kebab-case`.

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm start` | Expo dev server |
| `pnpm ios` / `pnpm android` / `pnpm web` | Run on a platform |
| `pnpm prebuild` / `pnpm prebuild:clean` | Generate native projects |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` / `pnpm lint:fix` | ESLint |
| `pnpm test` / `pnpm test:watch` | Jest |
| `pnpm doctor` | `expo-doctor` dependency and config check |

CI runs typecheck, lint and test on every PR to `main`.

## Environment

Runtime values come from `.env` via `EXPO_PUBLIC_*`, are surfaced through
`app.config.js` → `extra`, and are read in one typed place (`src/shared/constants/env.ts`).
They are embedded in the JS bundle — **never put a secret in them**.

## Notes

- `lightningcss` is pinned to `1.30.1` (`overrides` / `resolutions` /
  `pnpm-workspace.yaml`). `react-native-css`, the engine under NativeWind v5, is built
  against that version; from 1.31 the native binding's serde shape changed and compiling
  `global.css` fails with `failed to deserialize; expected an object-like struct named
  Specifier`.
- `babel-plugin-transform-import-meta` is required because Zustand and other ESM-only
  packages ship `import.meta`, which Hermes cannot parse.
- `react-native-worklets/plugin` must stay last in the Babel plugin list.

## License

MIT — see [LICENSE](./LICENSE).
