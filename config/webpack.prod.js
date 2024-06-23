const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// 使用通用配置並新增更多選項來配置產品環境
module.exports = merge(common, {
    mode: 'production',
    devtool: false
    // 我們可以新增許多最佳化配置，如縮小、壓縮等，但作為一個最小的專案範例，因此它只需要最少的配置
})