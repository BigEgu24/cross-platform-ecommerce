const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require("@babel/polyfill");

module.exports = {
  watch: true,
  mode: 'production',
  entry: [
    '@babel/polyfill', 
    './src/index.js'
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {}
      }
    }),
    // new WebpackObfuscator ({
    //   rotateStringArray: false
    // }, ['app_bundle.js']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        },
        {
          from: "public/manifest.json",
          to: "",
        }
      ],
    })
  ],
  module: {
    rules: [
      
      {
        test: /\.(png|svg|jpg|jpe?g|gif|ico|ttf)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, "../../node_modules/react-native-vector-icons"),
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
          esModule: false
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                '@babel/preset-react',
                { plugins: 
                  ['@babel/plugin-proposal-class-properties', 
                  ["module:react-native-dotenv", {
                    "moduleName": "@env",
                    "path": path.resolve(__dirname, "../shared/.env"),
                    "blacklist": null,
                    "whitelist": null,
                    "safe": false,
                    "allowUndefined": true
                  }],
                  'react-native-reanimated/plugin'
                ] }
              ],
            },
          },
          
        ],
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'post',
      //   use: [
      //     {
      //       loader: WebpackObfuscator.loader,
      //       options: {
      //         rotateStringArray: false,
      //       }
      //     }
      //   ],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      }
    ],
  },
  resolve: {
    alias: { 'react-native$': 'react-native-web', },
    extensions: ['.web.js', '.js'],
  },
};