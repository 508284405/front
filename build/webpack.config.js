//编译js文件,让其可被浏览器识别
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');

const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/js/index.js'),
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true //自动清理dist目录(资源目录,相当于Java的class资源目录)
  },
  //其他配置
  optimization: {
    nodeEnv: false
  },
  // 新增 plugins 属性
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'), //指定要打包的html文件
      filename: 'index.html',
      title: '首页'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ // webpack自带该插件，无需单独安装
      'process.env': {
        NODE_ENV: process.env.NODE_ENV // 将属性转化为全局变量，让代码中可以正常访问
      }
    }),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    static: '../dist', // 如果出错，请将 contentBase 替换为 static
    open: true, //打包完成自动打开浏览器
    compress: false, //启用压缩
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://xxx/',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //规定请求地址以什么作为开头
        }
      },
    }
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader'
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    // 1.不需要node polyfilss
    alias: {
      crypto: false
    },
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  }
}