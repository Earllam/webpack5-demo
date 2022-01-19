class DemoWebpackPlugin {
    constructor() {
        console.log('demo webpack plugin init')
    }
    // plugin 核心在于，apply 方法执行时，可操作webpack本次打包的各个节点（也就是hooks），详见 [https://webpack.docschina.org/api/compiler-hooks/]
    apply(compiler) {
        // 一个新的编译(compilation)创建之后（同步）
        // compilation代表每一次执行打包，独立的编译
        compiler.hooks.compile.tap('DemoWebpackPlugin', compilation => {
            console.log(compilation)
        })
        // 生成资源到 output 目录之前（异步）
        compiler.hooks.emit.tapAsync('DemoWebpackPlugin', (compilation, callback) => {
            console.log('这里表示了资源的单次构建的 `compilation` 对象：', compilation)
            callback()
        })

    }
}

module.exports = DemoWebpackPlugin