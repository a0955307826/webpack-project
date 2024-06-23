// 該檔案將包含所有基本配置，例如入口點、輸出檔案和 webpack 將運行的插件。
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require ( 'vue-loader' ); 

// 為了幫助我們了解目錄和資料夾路徑
const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
    // 初始化我們的應用程式的主文件
    entry: path.resolve(__src, 'main.js'),

    // webpack運行後bundle的結果
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__base, 'dist'),
        clean: true
    },

    // 用於幫助 webpack 並包含附加功能的插件
    plugins: [
        new  VueLoaderPlugin (),
        new HtmlWebpackPlugin({
            title: 'Minimal Vue Webpack',
            template: path.resolve(__src, 'templates', 'index.html'),
        })
    ],

    module: {
        rules: [
            // Vue 載入器。告訴 webpack 副檔名為 .vue 的檔案需要由 vue-loader 外掛程式處理
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
            // CSS 載入器。可以將 css 檔案匯入為 js 模組
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    }
}