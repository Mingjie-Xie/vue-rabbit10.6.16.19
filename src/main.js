
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

import {lazyPlugin } from '@/directives'


import { getCategory } from '@/apis/testAPI'
getCategory().then(res=>{
    console.log(res)
})



const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
