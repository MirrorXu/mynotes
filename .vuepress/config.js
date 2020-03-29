const path = require('path')
module.exports = {
    title: '学习笔记',
    description: '好记性不如烂指头,有些知识确实需要记一下',
    themeConfig: {
        logo: '/logo.png',
        displayAllHeaders: false,
        dest: path.resolve(__dirname, '../dist'),
        // 导航栏配置
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'JS设计模式', link: '/JsDesignPattern/' },
            { text: 'ECMASCRIPT', link: '/ECMASCRIPT/' },
            { text: 'Vue', link: '/Vue/' },
            { text: 'VuePress', link: '/VUEPRESS/' },
        ],
        // 侧边栏配置
        sidebar: {
            '/JsDesignPattern/': [
                '创建型-原型模式',
                '结构型-装饰器模式'
            ],
            '/usevuepress/': [
                ''
            ],
            '/ECMASCRIPT/': [
                '',
                'isNaN',
                'js_type',
                'Object',
                'ergodicAPIs',
                'call_apply_bind'
            ],
            '/VUEPRESS/': [
                ''
            ],
            '/Vue/': [
                '',
                'vue',
                'vuerouter'
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

