/**
 * 手动引入 (需要什么引入什么)
 * 下载插件 --> npm i unplugin-element-plus -D
 */

const ElementPlus = require("unplugin-element-plus/webpack");

module.exports = {
  configureWebpack: {
    plugin: [ElementPlus()],
  },
};