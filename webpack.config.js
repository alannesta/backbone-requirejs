var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./app/main.js",
        //vendor: ["./node_modules/jquery/dist/jquery.js", "./node_modules/backbone/backbone.js", "./node_modules/underscore/underscore.js"]
        vendor: ["jquery", "backbone", "underscore"]
    },
    output: {
        path: './dist',
        filename: "[name].js",
        chunkFilename: 'chunk[id].js',
        publicPath: "./dist/"   // where html file will load the script from
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor"
            })
        ]
    }
};