const HtmlWebPackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const path = require('path');

module.exports = {
  entry: {
    common: './src/common.js',
    app: './src/app/app.js',
    detail: './src/app/detail/detail.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/templates'),
        loader: 'html-loader',
        options: {
          interpolate: true
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'responsive-loader',
          options: {
            sizes: [1000],
            placeholder: true,
            placeholderSize: 50,
            name: 'imgs/[name]-[width].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ['common', 'app']
    }),
    new HtmlWebPackPlugin({
      template: "./src/app/detail/detail.html",
      filename: "./detail.html",
      chunks: ['common', 'detail']
    }),
    new ImageminPlugin({test: /\.(png|jpg|gif)$/})
  ]
};
