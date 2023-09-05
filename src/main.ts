import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      'micro-atlas': [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            code = code.replace(/(from|import)(\s*['"])(\/micro-atlas\/)/g, all => {
              return all.replace('/micro-atlas/', 'http://localhost:5174/micro-atlas/')
            })
          } else {
            code = code.replace(/(from|import)(\s*['"])(\/micro-atlas\/)/g, all => {
              return all.replace('/micro-atlas/', 'http://182.92.118.193:5174/micro-atlas/')
            })
          }
          return code
        }
      }]
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
