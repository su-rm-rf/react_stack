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
babel-preset-env 通过目标浏览器或运行环境，自动确认所需babel或polyfills，将ES2015+转为ES5

# Webpack
mode：模式（开发、生产）
entry：入口
output：出口
  path：打包结果输出路径
  filename：每个输出的js名称
  publicPath：打包后文件的公共前缀路径
module
  rules
    loader：
      用@babel/plugin-transform-runtime提取公共库
resolve
  extensions：高频出现的文件后缀
plugins
  html-webpack-plugin 自动引入webpack构件好的静态资源文件
devServer：开发环境配置
  用webpack-dev-server启动服务器辅助开发，用webpack-merge合并公共配置
  port：端口
  historyApiFallback：解决history路由404问题

## 优化
tree sharking
minimize

# Vite

# TypeScript
tsconfig.json
webpack中配置loader来解析ts个jsx
  先用@babel/preset-typescript将ts转为js，再用@babel/preset-react识别jsx语法

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

