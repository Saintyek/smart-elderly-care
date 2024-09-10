<template>
  <div class="flex flex-col">
    <div class="background-container">
      <div class="mx-96 mt-20 flex items-start justify-between">
        <div class="text-2xl font-bold underline-container mr-96">
          <p>反馈建议</p>
        </div>
        <div class="flex-grow mt-2 mb-24">
          <el-form size="large" label-width="100px" class="relative">
            <el-form-item label="建议类型" class="font-bold">
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
              <el-button @click="onCheck">查看历史反馈</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const selectedOption = ref('')
const content = ref('')

const onPublish = () => {
  console.log('Feedback published:', {
    type: selectedOption.value,
    content: content.value
  }),
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
    min-height: 150px;
  }
}
</style>
