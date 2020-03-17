const path = require('path')
module.exports = {
    title: '学习笔记',
    description: '好记性不如烂指头,有些知识确实需要记一下',
    /**
     * base选项说明
     */
    // base: "http://www.mirror.com",
    // base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../'),
                '@imgs': path.resolve(__dirname, '../assets/imgs')
            }
        }
    }
}