/*eslint-disable*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', //模式 默认两种 production development
  entry: {
    main: './src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'pipe',
      template: './src/index.html', //模板位置
      filename: 'index.html', //打包出来后的文件名
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
             presets: [["@babel/preset-env", { "targets": "defaults" }]]
          },
        },
      },
    ],
  },
};
