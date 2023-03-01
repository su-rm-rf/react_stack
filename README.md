# 技术栈
Webpack5 + TypeScript4 + React18 + React-Router6 + Redux4 + Sass + AntDesign

# 依赖包
webpack webpack-cli webpack-dev-server webpack-merge
html-webpack-plugin
react react-dom react-router react-router-dom redux
typescript
@babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime @babel/preset-react @babel/preset-typescript
style-loader css-loader less less-loader sass sass-loader postcss postcss-loader postcss-preset-env

# 目录结构
build
coverage
dist
public
src
  assets
  components
  router
  store
  css
  utils
  App.tsx
  index.tsx
  react-app-env.d.ts
  reportWebVitals.ts
test

# Babel
处理JS兼容：把最新的标准语法转换为低版本语法，把非标转为标准语法，才能让浏览器识别解析
babel-loader：使用babel加载JS代码并将其转换为ES5代码
@babel/core：babel编译的核心包
@babel/babel-preset-env：babel编译的预设，可以转换目前最新的JS标准语法
@babel/plugin-transform-runtime：提取公共依赖
@babel/plugin-proposal-decorators：装饰器语法
core-js：使用低版本JS语法模拟高版本的库，也就是垫片
.browserslistrc：设置兼容模板浏览器版本，postcss和babel-preset-env共用
处理js非标准语法：在tsconfig.json中开启ts装饰器的支持，安装相关插件

# Webpack
mode：模式（开发、生产）
devtool：源代码映射方式，方便调试
  eval-cheap-module-source-map：eval缓存，cheap定位到行，module源代码的错误
entry：入口
output：出口
  path：打包结果输出路径
  filename：每个输出的js名称
  publicPath：打包后文件的公共前缀路径
module
  rules
    loader：从右向左执行
      babel 
        先将tsx转为jsx，再将jsx转为js语法，再转为低版本js语法
        用@babel/plugin-transform-runtime提取公共库
      scss 抽离到style、解析css、postcss前缀兼容、预处理器编译为css
      asset 资源解析
      thread 多线程loader解析js，其它loader在一个独立的worker池中运行。不支持抽离css插件
    include/exclude 缩小loader作用范围
    精确使用loader 在webpack构建时，倒序遍历rules数组，所以要精确设置rule
  noParse：不去解析某个独立库内部的依赖关系，比如jQuery
resolve
  extensions：高频出现的文件后缀
  alias：配置别名。同时要在tsconfig.json中配置baseUrl和paths
  moduels：查找第三方module的范围。减少耗时、避免部署机器未安装某些module
plugins
  html-webpack-plugin 自动引入webpack构件好的静态资源文件
  copy-webpack-plugin 复制静态资源，将public文件夹复制到dist目录
  webpack.DefinePlugin 为业务代码注入环境变量
  webpack.IgnorePlugin 不去解析依赖库内部引用的某些内容，比如多语言包把某种语言过滤掉
  ModuleFederal 模块联邦
devServer：开发环境配置
  用webpack-dev-server启动服务器辅助开发，用webpack-merge合并公共配置
  port：端口
  historyApiFallback：解决history路由404问题
cache：持久化缓存，缓存生成的webpack模块和chunk，提速打包速度
  存储在node_modules/.cache/webpack里，区分development和production缓存
externals：从输出的bundle中排除某些依赖，而是在运行时再从外部获取这些依赖，比如jQuery

## package.json
scripts
  环境变量 cross-env
    NODE_ENV 开发/打包模式
    BASE_ENV 业务环境

## 优化
优化构建速度：
  构建耗时分析：speed-measure-webpack-plugin 分析各个loader和plugin的耗时
  打包文件结果分析：webpack-bundle-analyzer 配合speed-measure插件一起使用
  抽取css样式文件：mini-css-extract-plugin 在loader和plugin中分别配置
  压缩css样式文件：css-minimizer-webpack-plugin 在production环境中配置
  压缩js文件：terser-webpack-plugin 在production环境中重新配置
  合理配置打包文件hash，分为三种：
    hash：项目有文件更改，共用同一个
    contenthash：每个文件单独的hash，适用于css和图片
    chunkhash：入口文件或依赖文件修改，生成hash，提取公共库，适用于js
  代码分割第三方包和公共模块：splitChunks 利用浏览器缓存
  tree-shaking清理未引用js：摇树、晃下来 production默认开启
  tree-shaking清理未引用css：用purgecss-webpack-plugin移除，glob-all检测范围
  资源懒加载：首屏加载，只需公共资源+当前页面资源 loadable异步组件或Suspense+lazy
  资源预加载：延迟卡顿 <link rel="prefetch/preload" /> 提前加载js
  打包时生成gzip文件：打包时压缩比nginx请求时压缩更好 compression-webpack-plugin
  提前编译好模块：webpack.dllPlugin，生成一个json文件，用的时候查找并使用
  接入CDN缓存：entry.publicPath设置为cdn地址

## 原理
loader
plugin
tree-shaking

# Vite

# TypeScript
tsconfig.json
webpack中配置loader来解析ts和jsx

# React
createRoot(root).render(<App />)

# Redux

# React-Router

# AntDesign

# 源码

# SSR

# Test
好处：出bug概率更小、健壮性、可维护性、文档解释、减少回测中的bug
场景：UI组件库、函数库、utils包函数、接口自动化测试

流程：输入-预期输出-验证结果
ts-jest

## 自动化测试

# 持续集成与部署

# 项目规范
开发环境配置，多人协作、迭代、维护
目录结构规范、代码格式规范、git提交规范

# 代码规范
## 代码格式规范和语法检测
vscode
editorconfig 统一编辑器配置 .editorconfig
prettier 自动格式化代码 .prettierrc.js .根目录vscode/settings.json
eslint
lint-staged

## 代码git提交规范
husky 监听githooks
pre-commit
commit-msg
commitlint
commitizen

# npm仓库
verdaccio 本地npm仓库

# nginx
动静分离
配置https
开启http2

# Nodejs
pm2 进程管理工具
  +git 自动化部署远程项目

# flutter
使用fastlane自动打包ios上传TestFlight
打包App Store上线流程
实现在iOS和Android唤起第三方钉钉授权登录功能

# React
class组件context的两种传值方式：createContext和getChildContext

# Vue
兼容IE9
