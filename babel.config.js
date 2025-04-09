module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        'nativewind/babel', // Este es el plugin para NativeWind
      ],
    };
  };
  