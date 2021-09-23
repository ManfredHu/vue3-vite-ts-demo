module.exports = {
  plugins: {
    autoprefixer: {
      // overrideBrowserslist: [
      //     "Android 4.1",
      //     "iOS 7.1",
      //     "Chrome > 31",
      //     "ff > 31",
      //     "ie >= 8",
      //     "last 10 versions", // 所有主流浏览器最近10版本用
      // ],
      // grid: true,
    },
    // 1rem = 37.5px
    // 逻辑上固定 750px = 20rem = 一屏幕宽度
    // 实际屏幕 clientWidth 不固定为375，需要伸缩
    // 1rem = clientWidth 414 / 37.5 = 20.7
    // 逻辑750 = xrem = 414屏幕
    // 前提：逻辑750 = 20rem，则414屏幕/20rem=37.5*414/750
    'postcss-pxtorem': {
      rootValue: 37.5, // 按照1rem = 37.5px转化，则750宽度为20rem
      propList: ['*'],
      unitPrecision: 5
    },
    tailwindcss: {}
  }
}