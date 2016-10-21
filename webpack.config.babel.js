import path from 'path';
import webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const rootPath = './app';
const absRootPath = path.resolve(rootPath);

const plugins = [
  new ExtractTextPlugin('style.css'),
];

export default {
  entry: {
    bundle: `${absRootPath}/main.js`,
  },
  output: {
    path: `${absRootPath}/public`,
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(`${rootPath}/js`)
        ],
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader?outputStyle=nested'])
      },
    ]
  },
  plugins: plugins
};
