module.exports = {
    entry: "./app/main.js",
    output: {
        path: './dist',
        filename: "webpack_bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};