import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'
import { ConfigProvider, showFailToast } from 'vant';
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


window.onload = function () {
  socketDemo()
};

function socketDemo(){
  let conn;
  if (window["WebSocket"]) {
      conn = new WebSocket("ws://localhost:8889/client/public/ws");
      conn.onerror = function (event) {
        console.log('Connection error.',event)
      };
      conn.onclose = function (event) {
        console.log('Connection closed.',event)
      };
      conn.onopen = function (event) {
        console.log('Connection opened.',event)
      };
      conn.onmessage = function (evt) {
        let messages = evt.data.split('\n');
        for (let i = 0; i < messages.length; i++) {
          console.log(messages[i])
        }
      };
  } else {
    showFailToast('Your browser does not support WebSockets.')
  }
}