<template>
  <div class="mx-96 mt-20 flex items-start justify-between">
    <div class="text-2xl font-bold underline-container">
      <p>基本资料</p>
    </div>
    <div class="">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="100px" class="demo-ruleForm">
        <!-- 登录名称 -->
        <el-form-item label="登录名称">
          <el-input v-model="form.loginName" disabled></el-input>
        </el-form-item>

        <!-- 用户昵称 -->
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="form.nickname" placeholder="请输入用户昵称"></el-input>
        </el-form-item>

        <!-- 用户邮箱 -->
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入用户邮箱"></el-input>
        </el-form-item>

        <!-- 提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref(null)

const form = reactive({
  loginName: '已登录用户', // 登录名称不可修改
  nickname: '',
  email: ''
})

// 校验规则
const rules = {
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    { min: 2, max: 10, message: '昵称长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ]
}

// 提交表单
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success('提交成功')
      // 这里可以加入提交逻辑
    } else {
      ElMessage.error('表单校验失败')
      return false
    }
  })
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
