var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
module.exports = {
    frontend: {
        entry: [
            'webpack-hot-middleware/client',
            './src/frontend/index.js'
        ],
        output: {
            path: path.join(path.resolve(path.dirname('./')), 'build/static'),
            filename: 'frontend.js',
            publicPath: '/build/static/'
        },
        module: {
            loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }]
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    },


    backend: {
        entry: './src/backend/app.js',
        target: 'node',
        output: {
            path: path.join(__dirname, 'build/server'),
            filename: 'backend.js'
        },
        node: {
            __dirname: true,
            __filename: true
        },
        externals: nodeModules,
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }],
        plugins: [
            new webpack.IgnorePlugin(/\.(css|less)$/),
            new webpack.BannerPlugin('require("source-map-support").install();', {
                raw: true,
                entryOnly: false
            }),

        ]
    }

};