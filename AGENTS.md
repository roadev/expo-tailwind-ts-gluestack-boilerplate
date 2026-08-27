# AGENTS.md

Guidance for AI agents and contributors working in this repository.

## What this is

An Expo SDK 57 boilerplate: Expo Router, Tailwind v4 via NativeWind v5, gluestack-ui v5
components vendored into `src/components/ui/`, typed i18n, Zustand stores, an axios layer
that normalizes every failure into `AppError`.

## Commands

```bash
pnpm install       # install
pnpm start         # dev server
pnpm typecheck     # tsc --noEmit
pnpm lint          # eslint
pnpm test          # jest
pnpm doctor        # expo-doctor
```

Run `pnpm typecheck && pnpm lint && pnpm test` before opening a PR — CI runs all three.

## Rules

- **i18n always.** No hardcoded user-facing strings. Add keys to
  `src/shared/i18n/locales/en.ts` **and** `es.ts` — a test fails if the key sets diverge.
- **No barrel files.** Enforced by `eslint-plugin-no-barrel-files`. Import from the defining
  module.
- **Do not edit `src/components/ui/`.** It is vendored from gluestack-ui and excluded from
  lint, format, and typecheck roots. Add components with
  `npx gluestack-ui@latest add <name> --path src/components/ui`. App-owned UI belongs in
  `src/shared/components/`.
- **gluestack v5 props are shadcn-shaped.** `<Button variant="secondary" size="lg">`, not v4's
  `action`/`variant="solid"`. `Card` takes `size` only; `Avatar` has no `size` — use classes.
- **No `tailwind.config.js`.** Tailwind v4 is CSS-first — design tokens live in `@theme`
  inside `app/global.css`. Class detection across `app/` and `src/` is automatic; do **not**
  add `@source` rules, lightningcss 1.30.1 cannot parse them and the build fails.
- **`Pressable`, never `TouchableOpacity`.** Style pressed state with a functional style:
  `style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}`.
- **Module-scope helpers.** Pure formatters that do not read hook state go outside the
  component.
- **Path alias `@/*` → `./src/*`.** Declared in `tsconfig.json`, `babel.config.js` and
  `jest.config.js` — changing it means changing all three.
- **`react-native-worklets/plugin` stays last** in `babel.config.js`.
- **Do not bump `lightningcss` off 1.30.1.** See the note in the README — newer versions
  break NativeWind v5's CSS compilation.
- **Secrets never go in `EXPO_PUBLIC_*`.** Those are embedded in the JS bundle.

## Adding things

- **Screen** — file under `app/`, drawer entry in `ROUTES` in `app/(drawer)/_layout.tsx`,
  labels in both locale files.
- **API service** — file in `src/services/api/`, built on `client.ts`; types in
  `src/shared/types/`; validate responses with Zod.
- **Store** — file in `src/store/`, `persist` + `createJSONStorage(() => AsyncStorage)`;
  `partialize` out anything session-scoped.

## PRs

Conventional Commits with a scope: `feat(app): add tutorial drawer`. Include user impact,
the commands you ran, platforms tested, and screenshots for UI changes. Flag any change to
`app.config.js`, permissions, or the dependency set.
