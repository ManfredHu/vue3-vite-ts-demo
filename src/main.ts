import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import basePlugin from './plugins'
import GlobalDialog from './plugins/Dialog'
const app = createApp(App)

// 写法变了
app
.use(router) // vue-router 
.use(store) // vuex
.use(basePlugin)
.use(GlobalDialog)
.mount('#app')
