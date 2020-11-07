module.exports = {
    preset: 'react-native',
    transform: {
      '\\.(js|ts|tsx)$': require.resolve('react-native/jest/preprocessor.js'),
    },
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
      ],
      transformIgnorePatterns: [
           "/node_modules/(?!native-base)/"
      ]
  };