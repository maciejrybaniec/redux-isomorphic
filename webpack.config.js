const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: 'app.js',
        vendor: ['react', 'react-dom', 'react-redux']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.[name].js',
        publicPath: '/'
    },
    devtool: 'eval',
    debug: true,
    cache: true,
    context: path.resolve(__dirname, 'src'),
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }]
    },
    node: {
        __filename: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.join(__dirname, 'src'),
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]
};
