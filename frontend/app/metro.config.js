const path = require('path')

const getConfig = async () => ({
  resolver: {
    useWatchman: true
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname), 
    path.resolve(__dirname, "../../node_modules"),
    path.resolve(__dirname, "../../node_modules/metro"),
    path.resolve(__dirname, "../../node_modules/@wow/shared")
  ]
});
module.exports = getConfig();