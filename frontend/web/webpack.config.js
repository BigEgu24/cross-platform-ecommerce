const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require("@babel/polyfill");

module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill', 
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  devServer: {
      historyApiFallback:{
        index: 'build/index.html'
      },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.DefinePlugin({ process: { env: {} } }),
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
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images'
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              '@babel/preset-react',
              { plugins: ['@babel/plugin-proposal-class-properties', 'react-native-reanimated/plugin'] }
            ],
          },
        },
      },
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