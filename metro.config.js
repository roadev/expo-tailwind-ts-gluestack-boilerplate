const { getDefaultConfig } = require('expo/metro-config');
const { withNativewind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

// Import .svg files as React components instead of as image assets.
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

// inlineRem is what `rem`-based Tailwind utilities (text-lg, p-4, ...) resolve to
// on native, where there is no root font size to read.
module.exports = withNativewind(config, { inlineRem: 16 });
