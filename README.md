# Expo Tailwind TypeScript GlueStack Boilerplate

A modern, feature-rich Expo React Native boilerplate with TypeScript, TailwindCSS, GlueStack UI, and Expo Router for file-based routing.

## Features

- 🚀 **[Expo SDK 54](https://github.com/expo/expo)** - Latest Expo platform with React Native 0.81.5
- 📱 **[React Native 0.81.5](https://github.com/facebook/react-native)** with TypeScript 5.9.2
- 🎨 **[NativeWind 4.2.1](https://github.com/nativewind/nativewind)** - TailwindCSS for React Native with custom font support
- 🧩 **[GlueStack UI 3.0.10](https://github.com/gluestack/gluestack-ui)** - Modern component library with accessibility
- 🧭 **[Expo Router 6.0.14](https://github.com/expo/expo/tree/main/packages/expo-router)** - File-based routing with nested navigation
- ⚡ **[React Native Reanimated 4.1.5](https://github.com/software-mansion/react-native-reanimated)** - High-performance animations
- 🎨 **[Tailwind Variants](https://github.com/ivan-cespedes/tailwind-variants)** - Type-safe styling utilities
- 🔧 **[ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)** - Code linting and formatting

## Project Structure

```bash
├── app/                          # Expo Router screens and layouts
│   ├── _layout.tsx               # Root layout with navigation
│   ├── (drawer)/                 # Drawer navigation group
│   └── global.css               # Global styles
├── src/                          # Main source code
│   └── services/                 # Business logic and API services
│       └── api/                 # API client and services
├── shared/                       # Shared/reusable code
│   ├── components/               # Reusable UI components
│   │   ├── Container.tsx         # Generic container component
│   │   └── ui/                   # UI component library
│   │       ├── button/           # Button components
│   │       ├── drawer/           # Drawer components
│   │       ├── gluestack-ui-provider/ # GlueStack provider configs
│   │       ├── select/           # Select components
│   │       └── toast/            # Toast components
│   ├── constants/                # App constants and configuration
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Third-party integrations and utilities
│   ├── types/                    # TypeScript type definitions
│   └── utils/                    # Utility functions
├── assets/                       # Static assets (icons, images, etc.)
├── app.config.js                 # Expo configuration
├── babel.config.js               # Babel configuration
├── tailwind.config.js            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
```

## Key Dependencies

### Core Framework
- **[React](https://github.com/facebook/react)**: 19.1.0
- **[React Native](https://github.com/facebook/react-native)**: 0.81.5
- **[Expo](https://github.com/expo/expo)**: ~54.0.23
- **[TypeScript](https://github.com/microsoft/TypeScript)**: ~5.9.2

### Navigation & Routing
- **[Expo Router](https://github.com/expo/expo/tree/main/packages/expo-router)**: ~6.0.14

### Styling & UI
- **[NativeWind](https://github.com/nativewind/nativewind)**: ^4.2.1
- **[GlueStack UI](https://github.com/gluestack/gluestack-ui)**: ^3.0.10
- **[Tailwind Variants](https://github.com/ivan-cespedes/tailwind-variants)**: ^0.1.20
- **[React Native Reanimated](https://github.com/software-mansion/react-native-reanimated)**: ~4.1.5

### Development Tools
- **[ESLint](https://github.com/eslint/eslint)**: ^9.36.0 with multiple plugins
- **[Prettier](https://github.com/prettier/prettier)**: ^3.6.2 with Tailwind plugin
- **[TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)**: ^8.44.1

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm start
   ```

3. **Run on specific platforms:**
   ```bash
   pnpm android  # Android
   pnpm ios      # iOS
   pnpm web      # Web
   ```

## Configuration

### Expo Configuration (`app.config.js`)
- App name, version, and bundle identifiers
- Platform-specific settings for iOS and Android
- Asset bundle patterns and splash screen configuration
- Plugin configuration for Expo Router

### TailwindCSS Configuration (`tailwind.config.js`)
- NativeWind preset for React Native compatibility
- Custom font families (Roboto Condensed variants)
- Content paths for purging unused styles

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- Path aliases: `@/*` maps to `./src/*`
- Expo TypeScript base configuration

### ESLint & Prettier
- Modern ESLint 9.x with multiple plugins
- Airbnb extended rules, Expo config, and Prettier integration
- TypeScript and React-specific linting rules
- Automatic code formatting with Prettier and Tailwind plugin

## Development Guidelines

- Use the `Container` component for consistent layout
- Follow the established folder structure
- Add new screens in the `app/` directory
- Keep components generic and reusable
- Use TypeScript for type safety
- Place API services in `src/services/api/`
- Place shared components in `shared/components/`
- Place custom hooks in `shared/hooks/`
- Use the path aliases defined in `tsconfig.json` for clean imports

## Available Scripts

- `pnpm start` - Start the Expo development server
- `pnpm android` - Run on Android emulator/device
- `pnpm ios` - Run on iOS simulator/device
- `pnpm web` - Run in web browser
- `pnpm prebuild` - Prebuild the app for native platforms
- `pnpm lint` - Lint code with ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier (via ESLint plugin)
