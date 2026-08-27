import 'dotenv/config';

const APP_NAME = 'expo-tailwind-ts-gluestack-boilerplate';
const BUNDLE_ID = 'com.anonymous.expotailwindtsgluestackboilerplate';

export default {
  expo: {
    name: APP_NAME,
    slug: APP_NAME,
    scheme: 'expo-tailwind-ts-gluestack',
    version: '2.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    // 'automatic' lets the OS drive light/dark; GluestackUIProvider mirrors it.
    userInterfaceStyle: 'automatic',
    assetBundlePatterns: ['**/*'],
    experiments: {
      tsconfigPaths: true,
      typedRoutes: true,
    },
    plugins: [
      'expo-router',
      'expo-font',
      [
        'expo-splash-screen',
        {
          image: './assets/splash.png',
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          dark: {
            backgroundColor: '#0a0a0a',
          },
        },
      ],
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: BUNDLE_ID,
    },
    android: {
      package: BUNDLE_ID,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      env: process.env.EXPO_PUBLIC_ENV ?? 'development',
    },
  },
};
