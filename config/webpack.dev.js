const { merge } = require('webpack-merge');
const common = require('./webpack.common');

//通用配置並新增更多選項
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        open: true,
        hot: true
    }
})