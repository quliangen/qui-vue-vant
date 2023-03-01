export default {
  name: '@infra/qui-vue-vant',
  build: {
    packageManager: 'pnpm',
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/qui-vue-vant/',
    },
  },
  site: {
    title: '@infra/qui-vue-vant',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'qui-button',
            title: 'QuiButton 按钮',
          },
        ],
      },
    ],
  },
};
