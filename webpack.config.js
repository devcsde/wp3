// dev-server, can be loaded with node_modules/.bin/webpack-dev-server
// start in main directory with node_modules/.bin/webpack-dev-server

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");



module.exports = {
    //entry: './app.js',   // for one file
    entry: {            // multiple files entry
        home: "./src/home.js",
        about: "./src/about.js",
        contact: "./src/contact.js"

    },
    output: {
        filename: '[name].js', // or only 1 file: filename: "build.js"
        //path: path.resolve(__dirname)
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [

            // {   // jshint
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'jshint-loader',
            //     //this is similar to defining a preloader
            //     enforce: 'pre'
            // },
            {   // for css, needs npm i css-loader style-loader --save-dev
                // for sass, also needs npm i sass-loader node-sass --save-dev
                test: /\.css$/, // OR test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader?sourceMap",
                    use: "css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap"
                })
            },
            {   // babel
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules$/,
                query: {
                    presets: ["env"]
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"), // or ("css/style.css")
        new webpack.optimize.CommonsChunkPlugin("vendor")
    ],
    devtool: "source-map",
    watch: true
};
