module.exports = {
    entry: "./app/main.js",
    output: {
        path: './dist',
        filename: "webpack_bundle.js",
        publicPath: "./dist/"   // where html file will load the script from
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};