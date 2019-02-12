const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname,'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      //Qui andranno i loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader"
        }),
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("css/[name].css")
  ]
}