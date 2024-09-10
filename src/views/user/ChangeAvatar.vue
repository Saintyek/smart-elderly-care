<template>
  <div class="flex flex-col" id="change-avatar">
    <div class="background-container">
      <div class="mx-96 mt-28 flex items-start justify-between">
        <div class="text-2xl font-bold underline-container">
          <p>更换头像</p>
        </div>
        <div>
          <el-upload
            ref="uploadRef"
            class="avatar-uploader"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="onSelectFile"
            drag
          >
            <div>
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <div v-else class="flex flex-col items-center">
                <p class="text-gray-500 text-2xl font-bold pt-4">将您的头像拖拽至此处</p>
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
              </div>
            </div>
          </el-upload>

          <br />
          <div class="flex justify-between">
            <el-button
              @click="uploadRef.$el.querySelector('input').click()"
              type="primary"
              :icon="Plus"
              size="large"
              >选择图片</el-button
            >
            <el-button @click="onUpdateAvatar" type="success" :icon="Upload" size="large"
              >上传头像</el-button
            >
          </div>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="border-t border-gray-300 mt-16 mx-96"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Upload } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { userUpdateAvatarService } from '@/api/user'

const userStore = useUserStore()
const imageUrl = ref(userStore.user.user_pic)
const uploadRef = ref()

const onSelectFile = (uploadFile) => {
  // 基于FileReader读取图片做预览
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imageUrl.value = reader.result
  }
}

const onUpdateAvatar = async () => {
  // 发送请求更新头像
  await userUpdateAvatarService(imageUrl.value)
  // userStore重新渲染
  await userStore.getUser()
  // 提示用户
  ElMessage.success('头像更新成功')
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

.avatar-uploader {
  :deep() {
    .avatar {
      width: 578px;
      height: 278px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 600px;
      height: 170px;
      text-align: center;
    }
  }
}

.background-container {
  position: relative;
  overflow: hidden;
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
