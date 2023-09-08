import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截

  inline: false, // 默认值false
  destroy: false, // 默认值false
  shadowDOM: false, // 默认值false
  ssr: false, // 默认值false
  'disable-scopecss': false, // 默认值false
  'disable-sandbox': false, // 默认值false
  'keep-alive': true, // 默认值false
  'keep-router-state': true, // 默认值false
  lifeCycles: {
    created() {
      console.log('created 全局监听');
    },
    beforemount() {
      console.log('beforemount 全局监听');
    },
    mounted() {
      console.log('mounted 全局监听');
    },
    unmount() {
      console.log('unmount 全局监听');
    },
    error() {
      console.log('error 全局监听');
    },
    aftershow() {
      console.log('aftershow');
    },
    afterhidden() {
      console.log('afterhidden');
    },
    beforeshow() {
      console.log('beforeshow');
    }
  },
  plugins: {
    modules: {
      // appName即应用的name值
      chat: [{
        loader(code) {
          if (process.env.NODE_ENV === 'development') {
            code = code.replace(/(from|import)(\s*['"])(\/base\/chat\/)/g, all => {
              return all.replace('/base/chat/', 'http://182.92.118.193:8081/base/chat/')
            })
          } else {
            code = code.replace(/(from|import)(\s*['"])(\/base\/chat\/)/g, all => {
              return all.replace('/base/chat/', 'http://182.92.118.193:8081/base/chat/')
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
