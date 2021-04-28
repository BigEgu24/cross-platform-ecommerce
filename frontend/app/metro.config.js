const path = require('path')

module.exports = {
  resolver: {
    useWatchman: true
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      },
    }),
  },
  projectRoot: path.resolve(__dirname, "../../"),
  resetCache: false,
  watchFolders: [
    path.resolve(__dirname, "../../"), 
    path.resolve(__dirname, "../../node_modules"),
    path.resolve(__dirname, "../../node_modules/@wow/shared")
  ]
};