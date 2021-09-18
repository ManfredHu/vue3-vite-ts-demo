import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import basePlugin from './plugins'

createApp(App)
.use(router) // 写法变了
.use(basePlugin)
.mount('#app')
