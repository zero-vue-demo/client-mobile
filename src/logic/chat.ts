import { Ref, ref } from 'vue'
import { showSuccessToast, showFailToast } from 'vant'

export default function () {
  const list: Ref<string[]> = ref([])
  const message: Ref<string> = ref('')
  const onSendMessage = () => {
    conn.send(message.value)
    message.value = ''
  }

  let conn: WebSocket
  let url = 'ws://localhost:8889/client/public/ws'
  if (window['WebSocket']) {
    conn = new WebSocket(url)
    conn.onerror = function (event) {
      console.log('Connection error.', event)
    }
    conn.onclose = function (event) {
      console.log('Connection closed.', event)
    }
    conn.onopen = function () {
      showSuccessToast('Connection opened.')
    }
    conn.onmessage = function (evt) {
      let messages: string[] = evt.data.split('\n')
      list.value.push(...messages)
    }
  } else {
    showFailToast('Your browser does not support WebSockets.')
  }


  return {
    list,
    message,
    onSendMessage
  }
}
