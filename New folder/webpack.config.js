var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    	{
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: 
	      	{
	        	presets: ['react', 'es2015', 'stage-1']
	      	}
	    },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
	    {
	    	test:/\.(jpe?g|png|gif|svg)$/,
	    	loaders: ['url-loader','image-webpack-loader']
	    },
	]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
