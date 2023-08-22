import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
import { ConfigProvider } from 'vant';
import 'vant/lib/index.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(): any {
    // 页面切换后滚到顶部
    return { x: 0, y: 0 }
  },
})

createApp(App).use(ConfigProvider).use(router).mount('#app')
