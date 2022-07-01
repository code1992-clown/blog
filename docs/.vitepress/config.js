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
                    { text: 'typeScript', link: '/views/tech/typeScript/index' },
                    { text: 'js使用技巧', link: '/views/tech/js/index' },
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
            ],
            '/views/tech/typeScript':[
                {
                  text: '基础',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: '基础', link: '/views/tech/typeScript/basic' },
                    { text: '进阶', link: '/views/tech/typeScript/advance' },
                    // { text: '面试', link: '/views/tech/typeScript/face' },
                  ]
                },
            ],
            '/views/tech/js':[
              {
                text: 'js使用技巧',
                collapsible: true,
                collapsed: true,
                items: [
                  { text: '解构赋值', link: '/views/tech/js/destructur' },
                  { text: '其他', link: '/views/tech/js/advance' },
                  // { text: '面试', link: '/views/tech/typeScript/face' },
                ]
              },
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
