const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var ENV = process.env.NODE_ENV,
    isProd = ENV === "production" ? true : false,
    BUILD_DIR = path.resolve(__dirname, 'public'),
    APP_DIR = path.resolve(__dirname, 'app'),
    NODE_MODULES = path.resolve(__dirname, 'node_modules'),
    plugins = [];
module.exports = {
    entry: APP_DIR + "/index.jsx",
    output: {
        path: __dirname + '/public/', //<- This path is use at build time
        filename: "bundle.js", //<- This file is created under path which we specified in output.path 
        // publicPath: "/static/" //<- This path is for dev server. you cant see this folder
    },
    plugins: plugins.concat([new HtmlWebpackPlugin({
        title: 'Reaact-webpack-hrm',
        template: 'index.ejs'
    }), new ExtractTextPlugin({
        // Extracting all css in one file, and file name is based on what you specified in filename
        filename: "style.css",
        allChunks: true
    })]),
    resolve: {
        modules: [
            APP_DIR,
            NODE_MODULES
        ],
        alias: {
            //models: path.join(__dirname, '../src/client/assets/javascripts/models')
        },
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            include: APP_DIR,
            // query: {
            //     presets: ["es2015", "react", "react-hmre"] <- either specify hear or in .babelrc
            // }
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("css-loader")
        }]
    }
}
