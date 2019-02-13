const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
  mode: 'development',
  entry: {
    home: path.resolve(__dirname, 'index.js'),
    precios: path.resolve(__dirname, 'index.js'),
    contacto: path.resolve(__dirname, 'contacto.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      //Qui andranno i loader
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