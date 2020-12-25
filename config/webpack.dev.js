const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        //hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    }


    // plugins: [

    //     new webpack.HotModuleReplacementPlugin(),
    // ]
})