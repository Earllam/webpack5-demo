const path = require('path')
const DemoWebpackPlugin = require('./custom/plugins/demo-webpack-plugin')
const VconsoleWebpackPlugin = require('./custom/plugins/vconsole-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = (env, argv) => {
    const config = {
        entry: {
            main: './src/index.js'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].bundle.js',
            clean: true// 无需使用 CleanWebpackPlugin
        },
        resolveLoader: {
            // loader路径查找顺序从左往右
            modules: ['node_modules', './custom/loaders']
        },
        module: {
            rules: [{
                test: /\.js$/,
                // 配置了 resolveLoader, 可直接使用 loader 文件名
                use: ['simpleLoader', 'syncLoader']
            }]
        },
        plugins: [
            new DemoWebpackPlugin(),
            new VconsoleWebpackPlugin({
                enable: argv.mode === 'development'
            }),
            new HTMLWebpackPlugin({
                template: path.join(__dirname, './src/index.template.html'),
                filename: 'index.html'
            })
        ]
    }
    return config
}