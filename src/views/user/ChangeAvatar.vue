<template>
  <div class="flex flex-col">
    <div class="mx-96 mt-20 flex items-start justify-between">
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
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
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
    <div class="border-t border-gray-300 mt-10 mx-96"></div>
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
      width: 478px;
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
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>
