const path = require('path');

module.exports = {
  entry: {
    "app": path.resolve(__dirname, '../src/entries/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 9000,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          }
        },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']

      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            fallback: "file-loader",
            name: "content/fonts/[name].[ext]"
          }
        }
      }
    ]
  }
}