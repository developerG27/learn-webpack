const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname,'src/js/index.js')],
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
      },
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
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 100000,
          }
        }
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env','@babel/react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            "css-loader", 
            {
              loader: 'stylus-loader',
              options:{
                use:[
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/lib/nib/index.styl',
                ]
              }
            }
          ]
        }),
      },
    ]
  },
  plugins:[
    new ExtractTextPlugin("css/[name].css")
  ]
}