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

// AsyncStorage is a native module; the persisted Zustand stores touch it as
// soon as they are imported.
jest.mock('@react-native-async-storage/async-storage', () => {
  const store = new Map();
  return {
    __esModule: true,
    default: {
      getItem: jest.fn((key) => Promise.resolve(store.get(key) ?? null)),
      setItem: jest.fn((key, value) => {
        store.set(key, value);
        return Promise.resolve();
      }),
      removeItem: jest.fn((key) => {
        store.delete(key);
        return Promise.resolve();
      }),
    },
  };
});

/* eslint-disable no-underscore-dangle */
global.__DEV__ = false;
