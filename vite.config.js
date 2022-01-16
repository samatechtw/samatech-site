import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite'
import ViteImages from 'vite-plugin-vue-images';

module.exports = {
  assetsInlineLimit: 1,
  css: {
    scopeBehavior: 'global',
    globalModulePaths: ['./src/assets/css'],
  },
  plugins: [
    Vue(),
    Components(),
    ViteImages(),
  ],
};
