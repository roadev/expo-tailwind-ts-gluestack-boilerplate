module.exports = function (api) {
  api.cache(true);

  return {
    // NativeWind v5 handles className through its Metro transformer, so no
    // jsxImportSource override is needed here (that was the v4 setup).
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
          },
        },
      ],
      // Zustand and other ESM-only packages ship import.meta; Hermes cannot parse it.
      'babel-plugin-transform-import-meta',
      // Must stay last: react-native-worklets rewrites the functions Reanimated runs
      // on the UI thread, and it needs to see the output of every other plugin.
      'react-native-worklets/plugin',
    ],
  };
};
