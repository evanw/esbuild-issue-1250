module.exports = {
  entry: './pkg-a/hello.ts',
  mode: 'production',
  devtool: 'hidden-source-map',
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
    filename: 'main.js',
    path: __dirname + '/dist',
  },
};
