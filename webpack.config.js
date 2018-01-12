var webpack = require('webpack');
var path = require('path');

var dist = path.resolve(__dirname, 'assets/script-tags');
var source_dir = path.resolve(__dirname, 'src');

var config = {
    entry: source_dir + '/timer.js',
    output: {
        path: dist,
        filename: 'timer.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: source_dir,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
}

module.exports = config;
