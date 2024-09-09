<template>
  <!-- 注册表单 -->
  <el-form
    :model="formModel"
    :rules="rules"
    ref="form"
    size="large"
    autocomplete="off"
    v-if="isRegister"
  >
    <h1 class="text-center text-4xl font-bold py-6">注册</h1>
    <div class="py-4 px-6">
      <el-form-item prop="username">
        <el-input
          v-model="formModel.username"
          :prefix-icon="User"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formModel.password"
          :prefix-icon="Lock"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="repassword">
        <el-input
          v-model="formModel.repassword"
          :prefix-icon="Lock"
          type="password"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button @click="register" class="w-full mx-6" type="primary" auto-insert-space>
        注册
      </el-button>
    </el-form-item>
    <el-form-item class="flex flex-col items-center">
      <p>已有账号？</p>
      <el-link type="info" :underline="false" @click="isRegister = false">立即登录！</el-link>
    </el-form-item>
  </el-form>

  <!-- 登录表单 -->
  <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-else>
    <h1 class="text-center text-4xl font-bold py-6">登录</h1>
    <div class="pt-4 px-6">
      <el-form-item prop="username">
        <el-input
          v-model="formModel.username"
          :prefix-icon="User"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formModel.password"
          name="password"
          :prefix-icon="Lock"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </div>

    <el-form-item class="flex px-6">
      <div class="flex justify-between w-full items-center">
        <el-checkbox>记住我</el-checkbox>
        <el-link type="primary" :underline="false">忘记密码？</el-link>
      </div>
    </el-form-item>

    <el-form-item>
      <el-button @click="login" class="w-full mx-6" type="primary" auto-insert-space
        >登录</el-button
      >
    </el-form-item>
    <el-form-item class="flex flex-col items-center">
      <p>没有账号？</p>
      <el-link type="info" :underline="false" @click="isRegister = true">立即注册！</el-link>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user'
import { useUserStore } from '@/stores'
import router from '@/router'
const isRegister = ref(false)
const form = ref()

// 用于提交的form数据对象
const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})

// 整个表单的校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 10, message: '用户名必须是 5-10 位的字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是 6-15 位的非空字符', trigger: 'blur' }
  ],
  repassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '密码必须是 6-15 位的非空字符', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback() // 就算校验成功也需要callback
        }
      },
      trigger: 'blur'
    }
  ]
}

const register = async () => {
  // 注册成功之前先进行校验，校验成功则发送请求，校验失败则自动提示
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('注册成功')
  isRegister.value = false
}

const userStore = useUserStore()
const emit = defineEmits(['login-success'])

const login = async () => {
  try {
    await form.value.validate()
    const res = await userLoginService(formModel.value)
    userStore.setToken(res.data.token)
    ElMessage.success('登录成功')
    emit('login-success')
    router.push('/')
  } catch (error) {
    ElMessage.error('登录失败')
  }
}

// 切换时重置表单内容
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})
</script>
<style scoped></style>
