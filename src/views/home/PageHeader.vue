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

        <!-- 当有 token 时显示头像，并添加下拉菜单 -->
        <el-dropdown @command="handleCommand" v-else>
          <span class="el-dropdown-link flex items-center" style="overflow: hidden">
            <el-avatar
              :size="55"
              :src="userStore.user.user_pic || circleUrl"
              class="object-cover"
            /><el-icon style="margin-left: 8px; font-size: 16px"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu class="w-32">
              <el-dropdown-item command="profile" :icon="User">个人中心</el-dropdown-item>
              <el-dropdown-item command="back" :icon="Position">返回主页</el-dropdown-item>
              <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dialog v-model="dialogVisible" width="500">
          <LoginPage @login-success="handleLoginSuccess" />
        </el-dialog>
      </div>
    </div>
  </header>
</template>

<script setup>
import LoginPage from '../login/LoginPage.vue'
import { SwitchButton, User, ArrowDown, Position } from '@element-plus/icons-vue'
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
const userStore = useUserStore()

const dialogVisible = ref(false)

const router = useRouter()

const handleLoginSuccess = () => {
  dialogVisible.value = false
}

const state = reactive({
  circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const { circleUrl } = toRefs(state)

const handleCommand = async (command) => {
  if (command === 'logout') {
    // 退出登录(清除token + user信息)
    await ElMessageBox.confirm('你确定要退出登录吗', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    })
    userStore.removeToken()
    userStore.setUser({})
    router.push('/home/emotion-sense')
  } else if (command === 'back') {
    // 跳转操作
    router.push('/home/emotion-sense')
  } else {
    router.push('/user/profile')
  }
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

.el-dropdown-link {
  outline: none;
}

.el-dropdown-link:hover,
.el-dropdown-link:focus {
  border: none;
  box-shadow: none;
}
</style>
