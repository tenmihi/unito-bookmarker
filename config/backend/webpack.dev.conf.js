const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "./src/backend/handler.ts"),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
    ]
  }
}