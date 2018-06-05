const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./src/App.js",
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets : ['es2015', 'react', 'stage-3'],
                    plugins:  ["transform-object-rest-spread"]
                    
                }
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
            
        ]
    },
    plugins:  [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true,
          }),      
        new webpack.DefinePlugin({
             'process.env': {
                'NODE_ENV': JSON.stringify('development')
             },
         }),
        new HtmlWebPackPlugin({
			template: './src/index.html',
            filename: './index.html'
		}),
    ],
    devServer: {
        hot:true,
        contentBase: __dirname +"/dist/",
        port: 9000,
        host: 'localhost',
        publicPath: '/',
        proxy: {
            '/': {
                target: 'http://localhost:3003',
                secure: false
            }
        }
}
};