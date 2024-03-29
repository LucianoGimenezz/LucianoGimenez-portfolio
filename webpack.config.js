const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinizimerPlugin = require('html-minimizer-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const shouldAnalyze = process.argv.includes('--analyze');

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: './index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name][hash].css'
  })
];

if (shouldAnalyze) plugins.push(new BundleAnalyzerPlugin());

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: []
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: './src/assets[hash][ext]'
        }
      }
    ]
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new HtmlMinizimerPlugin()]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
};
