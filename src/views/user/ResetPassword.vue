<template>
  <div class="flex flex-col">
    <div class="background-container">
      <div class="mx-96 mt-20 flex items-start justify-between">
        <div class="text-2xl font-bold underline-container mr-96">
          <p>重置密码</p>
        </div>
        <div class="flex-grow mt-2">
          <el-form
            :model="pwdForm"
            :rules="rules"
            ref="formRef"
            label-width="100px"
            size="large"
            class="relative"
          >
            <el-form-item label="原密码" prop="old_pwd" class="font-bold">
              <el-input v-model="pwdForm.old_pwd" type="password"></el-input>
            </el-form-item>

            <el-form-item label="新密码" prop="new_pwd" class="font-bold">
              <el-input v-model="pwdForm.new_pwd" type="password"></el-input>
            </el-form-item>

            <el-form-item label="确认新密码" prop="re_pwd" class="font-bold">
              <el-input v-model="pwdForm.re_pwd" type="password"></el-input>
            </el-form-item>

            <el-form-item class="absolute right-0">
              <el-button @click="submitForm" type="primary" class="mr-12">修改密码</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="border-t border-gray-300 mt-24 mx-96"></div>
    </div>
  </div>
</template>

<script setup>
import { userUpdatePasswordService } from '@/api/user'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const formRef = ref()
const userStore = useUserStore()
const router = useRouter()
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const submitForm = async () => {
  await formRef.value.validate()
  await userUpdatePasswordService(pwdForm.value)
  ElMessage.success('密码修改成功')

  // 密码修改成功后，退出重新登录
  // 清空本地存储的token和个人信息
  userStore.setToken('')
  userStore.setUser({})

  // 拦截到首页
  router.push('/home/emotion-sense')
}

const resetForm = () => {
  formRef.value.resetFields()
}

const checkDifferent = (rule, value, cb) => {
  if (value === pwdForm.value.old_pwd) {
    cb(new Error('新密码和原密码不能一样!'))
  } else {
    cb()
  }
}

const checkSameAsNewPwd = (rule, value, cb) => {
  if (value !== pwdForm.value.new_pwd) {
    cb(new Error('新密码和确认再次输入的新密码不一样!'))
  } else {
    cb()
  }
}

const rules = {
  // 原密码
  old_pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    }
  ],
  // 新密码
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkDifferent, trigger: 'blur' }
  ],
  // 确认新密码
  re_pwd: [
    { required: true, message: '请再次确认新密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码长度必须是6-15位的非空字符串',
      trigger: 'blur'
    },
    { validator: checkSameAsNewPwd, trigger: 'blur' }
  ]
}
</script>
<style lang="scss" scoped>
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

.background-container {
  position: relative;
}

.background-container::before,
.background-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0px;
  width: 60%; // 距左侧位置
  background-image: url('/src/assets/imgs/1f2d1d842f54084d0f31003fd51b8b5a71bd450a0216286d9763170787ef58d7.png'); /* 替换为你的背景图片路径 */
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 600px 530px;
  background-position: center;
  z-index: -1;
}
</style>
