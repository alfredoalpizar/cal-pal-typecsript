const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    open: true,
  },
};
