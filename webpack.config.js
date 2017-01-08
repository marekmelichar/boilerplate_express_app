const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
    // rules: [
    //   {
    //     use: 'babel-loader',
    //     test: /\.js$/
    //   }, {
    //     use: ['style-loader', 'css-loader'],
    //     test: /\.css$/
    //   }
    // ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
      // new ExtractTextPlugin("./style/style.css")
        // //for production
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),

        new webpack.optimize.UglifyJsPlugin()
    ]
};
