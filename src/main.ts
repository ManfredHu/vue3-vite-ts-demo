import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import basePlugin from './plugins'
import GlobalDialog from './plugins/Dialog'
const app = createApp(App)

app.use(router) // 写法变了
.use(basePlugin)
.use(GlobalDialog)
.mount('#app')
