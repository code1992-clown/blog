export default {
    description: '陈振方的博客',
    base: '/blog/', // 部署的根路径
    themeConfig: {
        siteTitle: '| BLOG',
        logo: '/ava.jpeg',
        nav: [ // 导航栏
            { text: '摘要', link: '/' },
            {
                text: '技术栈',
                items: [
                    { text: 'markDown', link: '/views/tech/markDown/index' },
                    { text: 'webpack', link: '/views/tech/webpack/index' },
                    { text: 'node', link: '/views/tech/node/index' },
                ]
            },
        ],
        sidebar: {
            '/views/tech/webpack':[
                {
                  text: '基础',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Loader', link: '/views/tech/webpack/loader' },
                    { text: 'Plugin', link: '/views/tech/webpack/plugin' },
                  ]
                },
                {
                  text: '进阶',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Item C', link: '/item-c' },
                    { text: 'Item D', link: '/item-d' },
                  ]
                }
              ],
              '/views/tech/node':[
                {
                  text: '基础',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Loader', link: '/views/tech/node/loader' },
                    { text: 'Plugin', link: '/views/tech/node/plugin' },
                  ]
                },
                {
                  text: '进阶',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Item C', link: '/item-c' },
                    { text: 'Item D', link: '/item-d' },
                  ]
                }
              ]
        },
        socialLinks: [ // 往外跳转
            // { icon: 'github', link: 'https://github.com/code1992-clown' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        }
    }
}
