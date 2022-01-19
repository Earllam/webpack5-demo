// 异步loader demo
module.exports = function (source) {
    const cb = this.async()
    setTimeout(() => {
        const sourceCode = `${source.replace(/webpack/g, 'webpack5')}`
        // async 生成的 callback 第一个参数是 error, 第二个是处理后的源码
        cb(null, sourceCode)
    }, 1000)
}