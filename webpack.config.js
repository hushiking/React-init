var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './index.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre', // 在babel-loader对源码进行编译前进行lint的检查
				include: /src/, // src文件夹下的文件需要被lint
				use: [{
					loader: 'eslint-loader',
					options: {
						formatter: require('eslint-friendly-formatter')
					}
				}]
				// exclude: /node_modules/ 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader',
					'eslint-loader'
				]
			},
			
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 3000
						}
					}
				]
			},
			{
				test: /\.(eot|woff|ttf|woff2|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000
						}
					}
				]
			}
		]
	},
	resolve:{
	  extensions:['.js', '.jsx']
	},
	plugins: [
		// html模板插件
		new HtmlWebpackPlugin({
		  template: __dirname + '/src/index.html'
		}),
		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),
		// 打开浏览器
		new OpenBrowserPlugin({
		  url: 'http://localhost:8080'
		}),
		// 可在业务js代码中使用__DEV__判断是否是dev模式（dev模式下可以提示错误、测试报告等，production模式不提示）
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),  // 测试全局变量
		  __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))  // package.json中set NODE_ENV=dev&&...，dev后面不能留空格，否则set命令会把空格带进环境变量中去
		})
	],
	devServer: {
	  historyApiFallback: true,  //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	  inline: true,  // 实时刷新
	  hot: true  //是否使用热加载插件
	}
}