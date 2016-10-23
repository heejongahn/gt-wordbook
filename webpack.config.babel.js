import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const rootPath = './';
const absRootPath = path.resolve(rootPath);

const rootAppPath = './app';
const absRootAppPath = path.resolve(rootAppPath);

const plugins = [
  new ExtractTextPlugin('style.css'),
];

export default {
  entry: {
    bundle: `${absRootAppPath}/main.js`,
  },
  output: {
    path: `${absRootPath}/public`,
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          absRootPath
        ],
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader?outputStyle=nested'])
      },
    ]
  },
  plugins: plugins
};
