<template>
  <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
    <h1 class="text-center text-4xl font-bold py-6">注册</h1>
    <div class="py-4 px-6">
      <el-form-item>
        <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :prefix-icon="Lock" type="password" placeholder="请再次输入密码"></el-input>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button class="w-full mx-6" type="primary" auto-insert-space> 注册 </el-button>
    </el-form-item>
    <el-form-item class="flex flex-col items-center">
      <p>已有账号？</p>
      <el-link type="info" :underline="false" @click="isRegister = false">立即登录！</el-link>
    </el-form-item>
  </el-form>

  <el-form ref="form" size="large" autocomplete="off" v-else>
    <h1 class="text-center text-4xl font-bold py-6">登录</h1>
    <div class="pt-4 px-6">
      <el-form-item>
        <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
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
      <el-button class="w-full mx-6" type="primary" auto-insert-space>登录</el-button>
    </el-form-item>
    <el-form-item class="flex flex-col items-center">
      <p>没有账号？</p>
      <el-link type="info" :underline="false" @click="isRegister = true">立即注册！</el-link>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isRegister = ref(true)
</script>
<style scoped></style>
