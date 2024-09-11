<template>
  <div class="flex flex-col mb-14" id="give-advice">
    <div class="mx-96 mt-20 flex items-start justify-between">
      <div class="text-2xl font-bold underline-container mr-80">
        <p>反馈建议</p>
      </div>
      <div class="flex-grow mt-2 mb-24">
        <el-form size="large" label-width="100px" class="relative">
          <el-form-item label="建议类型" class="font-bold" :prop="typeProp">
            <el-select v-model="selectedOption" placeholder="请选择">
              <el-option label="产品建议" value="产品建议"></el-option>
              <el-option label="网页建议" value="网页建议"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="描述" prop="content" class="font-bold">
            <div class="editor">
              <quill-editor
                theme="snow"
                v-model:content="content"
                content-type="html"
              ></quill-editor>
            </div>
          </el-form-item>

          <el-form-item class="absolute right-0">
            <el-button type="primary" @click="onPublish">提交</el-button>
            <el-button @click="drawerStore.openDrawer">查看历史反馈</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <el-drawer title="历史反馈" v-model="drawerStore.drawerVisible" size="30%" direction="rtl">
      <div class="flex flex-col justify-center items-center">
        <img src="/src/assets/imgs/undraw_page_not_found_re_e9o6.svg" alt="" class="w-96 pt-40" />
        <button
          @click="drawerStore.closeDrawer"
          class="bg-blue-800 text-white mt-8 py-2 px-6 rounded-full hover:bg-blue-600 transition"
        >
          该功能暂未开放
        </button>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import { useDrawerStore } from '@/stores/modules/drawer'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// Pinia store
const drawerStore = useDrawerStore()

// 反馈类型和内容
const selectedOption = ref('')
const content = ref('')
const typeProp = ref('selectedOption')

// 反馈列表
const feedbackList = ref([])

// 提交反馈
const onPublish = () => {
  // 非空校验
  if (!selectedOption.value) {
    ElMessage.error('请选择类型')
    return
  }
  if (!content.value || content.value.trim() === '') {
    ElMessage.error('请输入文本')
    return
  }

  // 将反馈添加到反馈列表
  feedbackList.value.push({
    type: selectedOption.value,
    content: content.value
  })

  // 清空表单
  selectedOption.value = ''
  content.value = ''

  ElMessage.success('提交成功')
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

.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 180px;
  }
}
</style>
