import debug from 'debug'
const log = debug('worker:requestAniFix')

function requestAnimFrameFix() {
  log('requestAnimFrameFix')
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function _requestAnimFrame(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
  window.cancelAnimFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCacelAnimationFrame ||
      window.mozCacelAnimationFrame ||
      window.oCacelAnimationFrame ||
      window.msCacelAnimationFrame ||
      function _cacelAnimFrame(id) {
        window.clearTimeout(id)
      }
    )
  })()
}
export default requestAnimFrameFix
