import 'dotenv/config';

export default {
  expo: {
    name: 'expo-tailwind-ts-gluestack-boilerplate',
    slug: 'expo-tailwind-ts-gluestack-boilerplate',
    scheme: 'expo-tailwind-ts-gluestack',
    version: '1.0.0',
    web: {
      favicon: './assets/favicon.png',
    },
    experiments: {
      tsconfigPaths: true,
    },
    plugins: ['expo-router'],
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.anonymous.expotailwindtsgluestackboilerplate',
    },
  },
};
