module.exports = function (api) {
  api.cache(false);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
          jsxRuntime: 'automatic',
          lazyImports: true,
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
    ],
  };
};
