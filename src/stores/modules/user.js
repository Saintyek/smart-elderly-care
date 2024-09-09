import { userGetInfoService } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('') // 定义 token
    // 设置 token
    const setToken = (newToken) => {
      token.value = newToken
    }
    // 移除token
    const removeToken = () => {
      token.value = ''
    }

    const user = ref({})

    const getUser = async () => {
      const res = await userGetInfoService() // 请求获取数据
      user.value = res.data.data
    }

    const setUser = (obj) => {
      user.value = obj
    }

    return { token, setToken, removeToken, user, getUser, setUser }
  },
  {
    persist: true // 持久化
  }
)
