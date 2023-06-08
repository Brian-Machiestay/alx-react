const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
	main: path.resolve(__dirname, './js/dashboard_main.js'),
    },
    output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname, 'public')
    },
    module: {
	rules: [
	    {
		test: /\.css$/,
		use: ["style-loader", "css-loader"]
	    },
	    {
		test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
		type: 'asset/resource'
	    }
	]
    },
    optimization: {
	minimizer: [
	    "...",
	    new ImageMinimizerPlugin({
		minimizer: {
		    implementation: ImageMinimizerPlugin.imageminMinify,
		    options: {
			plugins: [
			    ["gifsicle", { interlaced: true }],
			    ["jpegtran", { progressive: true }],
			    ["optipng", { optimizationLevel: 5 }],
			]
		    }
		}
	    })
	]
    },
    performance: {
	maxAssetSize: 500000
    }
}
