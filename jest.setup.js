/* eslint-disable no-undef */
// expo-constants reads the native manifest, which does not exist under jsdom.
jest.mock('expo-constants', () => ({
  __esModule: true,
  default: {
    expoConfig: {
      extra: {
        env: 'test',
        apiUrl: 'https://api.example.test',
      },
    },
  },
}));

/* eslint-disable no-underscore-dangle */
global.__DEV__ = false;
