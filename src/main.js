import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const win = window

if (process.env.NODE_ENV === 'development') {

    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {

        win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app

    }

}
  createApp(App).use(store).use(router).mount('#app');
