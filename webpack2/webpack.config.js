const path = require('path');//详见Node.js的Path对象
const webpack = require("webpack");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器
const ExtractTextPlugin = require('extract-text-webpack-plugin');//分开打包css
//https://github.com/webpack-contrib/extract-text-webpack-plugin

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // publicPath: './dist/'//本地
    publicPath: '/dist/'//服务器
  },
  module:{
    rules:[
      {
        test:/\.scss$/,//处理sass
        //正则选择匹配文件
        use:[
          //使用需要的loader，以数组形式加入，单独需要配置的loader以对象形式配置
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: ["css-loader","sass-loader"]
        // })

      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//打包文件和图片，file-loader的封装升级版
        use:[
          {
            loader:'url-loader',
            options:'limit=8192'
            //webpack loader的配置方式，作为一种类似字符串的形式被追加到每一个loader的命名后面，
            //类似于url中的查询字符串，但在实际应用中有更多功能。
            //相当于loader:'url-loader?limit=8192'
          }
        ]
      },
      {
        test:/\.js$/,//使用es6
        exclude: /node_modules/,//排除node模块编译
        use:[
          {
              loader:'babel-loader',
              options: {
                presets: ["es2015"]//简写.babelrc配置
              }
          }
        ]
      },
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),//自动打开浏览器,默认8080，需要同步修改webpack端口号
    new ExtractTextPlugin({//分开打包css
     filename: 'style.css'
    }),
    new webpack.ProvidePlugin({//定义插件
        $: 'jquery',
    }),
  ]
};
