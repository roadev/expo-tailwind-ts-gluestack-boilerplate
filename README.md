# MyApp - Expo Boilerplate

A clean, generic Expo React Native boilerplate with Expo Router, ready for development.

## Features

- 🚀 **Expo Router** for file-based routing
- 📱 **React Native** with TypeScript
- 🎨 **TailwindCSS** for styling
- 🧩 **GlueStack UI** components
- 📦 **Modular architecture** ready for state management, API integration, and more

## Project Structure

```
├── app/                    # Expo Router screens
│   ├── _layout.tsx        # Root layout with navigation
│   ├── index.tsx          # Home screen
│   ├── settings.tsx       # Settings screen
│   └── profile.tsx        # Profile screen
├── src/                   # Main source code
│   └── services/          # API services
│       └── api/          # Axios services and API clients
├── shared/                # Shared/reusable code
│   ├── components/       # Reusable UI components
│   │   ├── Container.tsx # Generic container component
│   │   └── ui/          # UI component library
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── constants/       # App constants and configuration
│   ├── types/           # TypeScript type definitions
│   └── lib/             # Third-party integrations (zustand, zod)
├── assets/              # Static assets
├── android/             # Android native code
└── ios/                 # iOS native code
```

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

## Ready for Integration

This boilerplate is ready for the following integrations:

- **State Management**: Add Zustand stores in `shared/lib/stores/`
- **API Client**: Add axios configuration in `shared/lib/axios.ts`
- **Validation**: Add Zod schemas in `shared/lib/schemas/`
- **Custom Hooks**: Add React hooks in `shared/hooks/`
- **Services**: Add API services in `src/services/api/`

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

## Scripts

- `pnpm start` - Start development server
- `pnpm android` - Run on Android
- `pnpm ios` - Run on iOS
- `pnpm web` - Run on Web
- `pnpm lint` - Lint code
- `pnpm format` - Format code
