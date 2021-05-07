const path = require('path')
const { getDefaultConfig } = require('metro-config');

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