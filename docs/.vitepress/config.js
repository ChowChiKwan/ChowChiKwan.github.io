import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZPY-JOOOOOO",
  description: "i love zpy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Diary', link: '/diary' }
    ],

    sidebar: [
      {
        text: 'Diary',
        items: [
          { text: '初见', link: '/diary/heart-beat' },
          { text: '过程', link: '/diary/fall-in-love' },
          { text: '结局', link: '/diary/happy-endding' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/ChowChiKwan' }
      { icon: 'github', link: 'tencent://message/?uin=953748496&Site=&Menu=yes' }
    ]
  }
})
