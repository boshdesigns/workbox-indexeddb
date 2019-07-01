const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/js/main.js']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.svelte']
	},
	output: {
		path: __dirname + '/docs',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      },
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new CopyWebpackPlugin([{
      from: 'src/assets',
			to: 'assets'
    },
		{ from: 'src/js/uti/idb.js',
			to: 'js/uti'
		}]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
		new InjectManifest({
			swSrc: './src/js/sw.js',
			swDest: 'sw.js',
			importWorkboxFrom: 'cdn',
			// importsDirectory: 'workbox-manifest',
			globDirectory: './docs/',
			globPatterns: ['*.html'],
			exclude: [/\.DS_Store$/],
			// include: [/\.js$/, /\.css$/, /\.jpg$/, /\.png$/, /\.woff$/, /\.ttf$/, /version.json/],
		}),
	],
	devtool: prod ? false: 'source-map'
};
