const path = require('path')
module.exports = {
    title: '学习笔记',
    description: '好记性不如烂指头,有些知识确实需要记一下',
    themeConfig: {
        logo: '/logo.png',
        displayAllHeaders: false,
        dest: path.resolve(__dirname, '../dist'),
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ECMASCRIPT', link: '/ECMASCRIPT/' },
            { text: 'VuePress', link: '/VUEPRESS/' },
        ],
        sidebar: {
            '/usevuepress/': [
                ''
            ],
            '/ECMASCRIPT/': [
                '',
                'Object'
            ],
            '/VUEPRESS/': [
                ''
            ]
        }
    },
    /**
     * base选项说明
     */
    // base: "http://www.mirror.com",
    // base: "/",
    /**
     * markdown文档配置
     */
    markdown: {
        // 显示行号
        lineNumbers: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, '../assets'),
                '@imgs': path.resolve(__dirname, '../assets/imgs')
            }
        }
    }
}