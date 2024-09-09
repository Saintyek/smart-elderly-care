<template>
  <div class="flex flex-col">
    <div class="mx-96 mt-20 flex items-start justify-between">
      <div class="text-2xl font-bold underline-container mr-96">
        <p>基本资料</p>
      </div>
      <div class="flex-grow mt-2">
        <el-form :model="form" :rules="rules" ref="formRef" label-width="100px" class="relative">
          <!-- 登录名称 -->
          <el-form-item label="登录名称" class="font-bold">
            <el-input v-model="form.username" disabled class="h-10"></el-input>
          </el-form-item>

          <!-- 用户昵称 -->
          <el-form-item label="用户昵称" prop="nickname" class="font-bold">
            <el-input v-model="form.nickname" placeholder="请输入用户昵称" class="h-10"></el-input>
          </el-form-item>

          <!-- 用户邮箱 -->
          <el-form-item label="用户邮箱" prop="email" class="font-bold">
            <el-input v-model="form.email" placeholder="请输入用户邮箱" class="h-10"></el-input>
          </el-form-item>

          <!-- 提交按钮 -->
          <el-form-item class="absolute right-0">
            <el-button type="primary" @click="onSubmit">提交修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 分隔线 -->
    <div class="border-t border-gray-300 mt-24 mx-96"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'
import { ElMessage } from 'element-plus'

const formRef = ref()

// 使用仓库中数据的初始值
const {
  user: { email, id, nickname, username },
  getUser
} = useUserStore()

const form = ref({
  id,
  username,
  nickname,
  email
})

// 校验规则
const rules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    { pattern: /^\S{2,10}/, message: '昵称长度在 2 到 10 个非空字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ]
}

// 提交表单
const onSubmit = async () => {
  // 等待校验结果
  await formRef.value.validate()
  // 提交修改
  await userUpdateInfoService(form.value)
  // 通知user模块进行数据更新
  getUser()
  // 提示用户
  ElMessage.success('修改成功')
}
</script>

<style scoped>
.underline-container {
  display: inline-block; /* 确保下划线长度与文字一致 */
  position: relative;
}

.underline-container::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30%;
  height: 4px;
  background-color: rgb(51, 112, 255);
}
</style>
