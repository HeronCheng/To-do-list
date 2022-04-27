const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const webpack = require( "webpack" );

module.exports={
	devtool: "source-map",
	mode: "development",
	entry: {
		index: path.resolve( __dirname,"./src/index.js" ),
	},
	output:{
		filename:"main.js",
		path:path.resolve( __dirname,"dist" ),
	},
	plugins: [
		new HtmlWebpackPlugin( {
			template:"./public/index.html"
		} ),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	optimization: {
		moduleIds: "named"
	},
	devServer: {
		host:"localhost",
		port: 9000,
		compress: false,
		open: true,
		liveReload: true,
	},
	module:{
		rules:[
			{
				test:/\.css$/i,
				use:[ "style-loader","css-loader","postcss-loader" ]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [ "@babel/preset-env" ]
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/,
				type: "asset/resource",
			}
		]
	}
};