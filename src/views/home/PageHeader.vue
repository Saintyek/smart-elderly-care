<template>
  <header class="flex h-24 bg-white" style="border-bottom: 2px solid #d1d5db">
    <div class="mx-80 flex justify-between items-center w-full">
      <div class="logo w-16 h-16">
        <img src="/src/assets/imgs/logo.png" alt="" />
      </div>
      <div class="text-black text-xl font-semibold">
        <!-- 当没有token时显示登录按钮 -->
        <button
          v-if="!userStore.token"
          plain
          @click="dialogVisible = true"
          class="btnLogin-popup px-4 py-2"
        >
          请登录
        </button>

        <!-- 当有 token 时显示头像 -->
        <el-avatar v-else :icon="UserFilled" />

        <el-dialog v-model="dialogVisible" width="500">
          <LoginPage @login-success="handleLoginSuccess" />
        </el-dialog>
      </div>
    </div>
  </header>
</template>

<script setup>
import LoginPage from '../login/LoginPage.vue'
import { useUserStore } from '@/stores'
import { ref } from 'vue'

const dialogVisible = ref(false)
const userStore = useUserStore()

const handleLoginSuccess = () => {
  dialogVisible.value = false
}
</script>
<style scoped>
.btnLogin-popup {
  border: rgba(0, 0, 0, 0.5) 2px solid;
  border-radius: 99px;
  transition: 300ms;
}
.btnLogin-popup:hover {
  background: #333;
  color: #fff;
}
</style>
