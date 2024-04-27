const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.sourceExts.push("mjs");

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRequires: true,
  },
})

module.exports = withNativeWind(config, {
  input: "./global.css",
});
