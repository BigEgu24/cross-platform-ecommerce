module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.web.js',
          '.js',
          '.json',
        ],
        alias: {
          'react': '../../node_modules/react',
          'react-native': '../../node_modules/react-native',
          'react-native-gesture-handler': '../../node_modules/react-native-gesture-handler',
          'react-native-reanimated': '../../node_modules/react-native-reanimated'
        }
      }
    ]
  ]
};
