import { defineConfig } from 'umi';

export default defineConfig({
  base: '/aex/',
  publicPath: '/aex/',
  hash: true,
  // antd: {},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/Basic',
      routes: [
        { path: '/',title: '首页', component: '@/pages/home/index' },
        { title: '页面不存在', component: '@/pages/404/index'},
      ],
    },
    { component: '@/pages/404/index'},
  ],
  // manifest: {},
  // dva: {
  //   hmr: true,
  // },
  // locale: {},
  ignoreMomentLocale: true, // 过滤掉momnet的那些不使用的国际化文件
  // 拆包时慎重下，可能体积会更大些
  // chunks: ['vendors', 'umi', 'antd'],
  // chainWebpack: function (config, { webpack }) {
    // config.merge({
    //   optimization: {
    //     minimize: true,
    //     splitChunks: {
    //       chunks: 'all',
    //       minSize: 1000,
    //       minChunks: 1,
    //       automaticNameDelimiter: '.',
    //       cacheGroups: {
    //         vendor: {
    //           name: 'vendors',
    //           test: /^.*node_modules[\\/](?!lodash|antd|moment).*$/,
    //           priority: 10,
    //           chunks: 'all',
    //         },
    //         antd: {
    //           name: 'antd',
    //           test: /[\\/]node_modules[\\/]antd[\\/]/,
    //           priority: 10,
    //           chunks: 'all',
    //         },
    //       },
    //     },
    //   }
    // });
  // },

  request: false, // plugin-request 中有用antd, 禁用request防止加载antd
});
