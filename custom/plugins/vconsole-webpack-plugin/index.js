const path = require('path')
class VconsoleWebpackPlugin {
    constructor(options = {}) {
        console.log('vconsole webpack plugin init')
        // 可配置是否引入，比如你可配置在 prod 模式下不引入
        this.enable = options.enable || false
    }
    apply(compiler) {
        /**
         * 案例也只是作为演示作用，并不考虑兼容问题，故下方只是 webpack5 情况
         * 也不去检查资源是否多次引入
         */
        if (this.enable) {
            compiler.hooks.entryOption.tap('DemoWebpackPlugin', (context, entry) => {
                for (let key in entry) {
                    entry[key].import.unshift(path.join(__dirname, './vconsole.js'))
                    console.log('import vconsole')
                }
            })
        }
    }
}

module.exports = VconsoleWebpackPlugin