module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    }],
  },

  resolveLoader: {
    moduleExtensions: ['-loader'],
  },

  devServer: {
    contentBase: './',
    port: 8080,
  },
};
