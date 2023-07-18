import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// window.onload = function () {
//     let conn;
//     if (window["WebSocket"]) {
//         conn = new WebSocket("ws://localhost:8888/");
//         conn.onclose = function () {
//             let item = document.createElement("div");
//             item.innerHTML = "<b>Connection closed.</b>";
//         };
//         conn.onmessage = function (evt) {
//             let messages = evt.data.split('\n');
//             for (let i = 0; i < messages.length; i++) {
//                 let item = document.createElement("div");
//                 item.innerText = messages[i];
//             }
//         };
//     } else {
//         let item = document.createElement("div");
//         item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
//     }
// };