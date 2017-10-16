var path = require('path');

module.exports = {
    devtool: 'sourcemaps',
    entry: './browser/main.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    }
};