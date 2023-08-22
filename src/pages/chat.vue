<script setup lang="ts">
import chat from '@logic/chat'

const { list, message, onSendMessage } = chat()
</script>

<template>
  <van-nav-bar fixed left-arrow title="聊天广场" />
  <van-list>
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
  <van-tabbar>
    <van-form @submit="onSendMessage">
      <van-cell-group inset>
        <van-field v-model="message" clearable>
          <template #button>
            <van-button size="small" type="primary" native-type="submit">发送</van-button>
          </template>
        </van-field>
      </van-cell-group>
    </van-form>
  </van-tabbar>
</template>

<style scoped>
.van-list {
  margin: var(--van-nav-bar-height) 0;
}

.van-form {
  width: 100%;
}

.van-cell-group {
  margin: 0;
}
</style>
