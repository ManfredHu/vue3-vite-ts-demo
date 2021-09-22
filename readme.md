# vite2+vue3+less+ts
- 适配移动端

## 开始
```
npm i
npm run dev
```

浏览器打开 [http://localhost:3000/#/?debug=true&vconsole=true](http://localhost:3000/#/?debug=true&vconsole=true)

## vue3全家桶
1. Vue CLI > v4.5.0
2. Vue Router > 4.0
3. Vuex > 4.0

### ref/toRef/toRefs/reactive

- setup 
  - setup的执行时机在beforeCreated前执行
  - setup参数为props和context
- [Vue3中ref、toRef、toRefs的区别](https://juejin.cn/post/6954789258607460359)
  - ref和reactive区别，普通类型和引用类型要使用哪个
  - toRef 是对定义的响应对象的某个属性进行引用，如`toRef(person, 'name')`
  - toRefs 把reactive的对象解构同时保留响应式
### 插件如何挂载？

api换了，但是差不多原理
```js
install: (app: App) => {
  // 全局挂载，可以这么用 this.$axios……
  const global = app.config.globalProperties
  global.$et = et
}
```

### 指令
api换了
bind -> mounted
unbind -> unmounted

### 
## 构建
### alias
别名，已在`tsconfig.json`和`vite.config.js`分别设置alias`@`为`src`目录
## 常用npm模块
以下模块作为公共模块，会在日常开发或多或少用到，多熟悉

- [debug](https://www.npmjs.com/package/debug) 可以按命名空间输出日志的兼容Node和浏览器
  - 开发模式默认打开，生产模式可以链接加`debug=1`参数打开log
- [hu-tool](https://www.npmjs.com/package/hu-tool) 集成类型检测，URL，手机号，User-agent等的工具模块
- [axios](https://www.npmjs.com/package/axios) API请求模块
- [dayjs](https://www.npmjs.com/package/dayjs) 很好用的时间处理模块
- [js-cookie](https://www.npmjs.com/package/js-cookie) cookie处理模块
- [localForage](https://github.com/localForage/localForage) 一个localStroage模块，可以兼容浏览器IndexedDB或WebSQL存储
- [events](https://www.npmjs.com/package/events) 跨平台的事件总线模块
- [vconsole](https://github.com/Tencent/vConsole)
  - 开发模式默认打开，生产模式可以链接加`vconsole=1`参数打开vConsole，会异步加载文件

## 样式
为了适配移动端网页，引入REM方案，`postcss-pxtorem`会在编译时候把px转化为rem单位。
默认标准移动端网页设计稿宽度为750px，标准iphone宽度`document.documentElement.clientWidth`为375

固代码里写750px，postcss应转为`xrem`，这里通过`helper/rem.ts`求比值

`postcss-pxtorem`会默认16px为1rem，所以`rootValue: 16`，这里需要修改为`rootValue: 37.5`，即**一屏幕750px宽度默认为20rem**，以此求1rem值。与[阿里的flexible](https://github.com/amfe/lib-flexible)不一样，flexible默认375宽，且切割为10份。但是一般sketch稿子规定750宽


