const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module : {
    rules: [
      {
        loader: 'babel-loader',
        test : /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]      
          },
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
  watch: true,
};


// const path = require ('path');

// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, './client/src/index.jsx'),
//   output: {
//     path: path.resolve(__dirname, './client/dist/'),
//     filename: 'bundle.js',
//   },
//   devtool: 'inline-source-map',
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       }
//     ],
//   },
//   watch: true
// };