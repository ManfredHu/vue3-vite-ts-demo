// 视图基础，页面需要继承base

const baseView = {
  data() {
    return {
      _baseName: 'base_view'
    }
  },
  created() {
    console.log('base view created')
  }
}

export default baseView
