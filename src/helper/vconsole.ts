export default () => {
  /**
   * local file method, using dynamic imports, see https://webpack.docschina.org/guides/code-splitting
   */
  if (
    !/debug=vconsole/.test(window.location.href) &&
    !/vconsole=true/.test(window.location.href) &&
    !/vconsole=1/.test(window.location.href)
  )
    return
  // using webapck split chunk and rename async.vconsole.[hashName].js
  import(/* webpackChunkName: "vconsole" */ 'vconsole').then((VConsole) => {
    if (typeof VConsole.default === 'function') {
      new VConsole.default()
    }
  })
}
