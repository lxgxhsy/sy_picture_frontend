import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCropper from 'vue-cropper'
import 'vue-cropper/dist/index.css'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '@/access.ts'

const app = createApp(App)
app.use(VueCropper)
app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
