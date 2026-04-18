const { getDefaultConfig } = require('@react-native/metro-config');
const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer'
);
config.resolver.assetExts = 
  config.resolver.assetExts.filter(e => e !== 'svg');
config.resolver.sourceExts.push('svg');

module.exports = config;