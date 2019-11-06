const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

const plugins = [
    new MiniCssExtractPlugin({
        filename: "styles.css",
    }),
];

const clientConfig = {
	mode: 'development',
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index.js',
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				{ loader: MiniCssExtractPlugin.loader },
				"css-loader",
			],
		}, {
			test: /\.(png|jpeg|jpg|gif|svg)?$/,
			loader: 'url-loader',
			options: {
				limit: 8000,
				publicPath: '/'
			}
		}]
	},
	plugins,
};

module.exports = merge(config, clientConfig);