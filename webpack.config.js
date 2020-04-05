const path = require("path");

module.exports = {

	entry: {
		app: [  "babel-polyfill",
				"./src/js/app.js"]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		rules:[{
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				presets: ['env', 'stage-0']
			}
		},{
			test: /\.css?$/,
			loader: "style-loader!css-loader"
		}]
	}
};
