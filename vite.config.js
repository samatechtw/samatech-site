import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import ViteImages from 'vite-plugin-vue-images';

module.exports = {
  assetsInlineLimit: 1,
  css: {
    scopeBehavior: 'global',
    globalModulePaths: ['./src/assets/css'],
  },
  plugins: [
    Vue(),
    ViteComponents(),
    ViteImages(),
  ],
};
