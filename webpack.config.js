const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
       {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
      },
     ],
   },
};