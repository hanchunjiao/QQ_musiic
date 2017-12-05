var webpack = require('webpack');
var path = require('path');
module.exports = {
	//入口文件	
	entry: './index.js',
	//出口文件
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.(png|jpg|gif)$/,
			use: 'url-loader'
		},{
			test: /\.css$/,
			use: ['style-loader','css-loader']
		},{
			test: /\.vue$/,
			use: 'vue-loader'
		}]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
};