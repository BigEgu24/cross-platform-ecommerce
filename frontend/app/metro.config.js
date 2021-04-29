const path = require('path')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      },
    }),
  },
  projectRoot: path.resolve(__dirname, "../../"),
  
};