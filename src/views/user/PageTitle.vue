<template>
  <div class="flex flex-col">
    <h1
      class="text-white text-3xl font-bold bg-cover bg-center w-full h-64"
      :style="backgroundStyle"
    >
      个人中心
    </h1>
    <div
      class="mx-auto flex rounded border"
      style="width: 1000px; height: 400px; margin-top: -70px"
    >
      <!-- 左侧 -->
      <div class="w-7/12 h-full" style="background-color: rgb(238, 245, 255)">
        <h1 class="text-blue-800 text-2xl font-bold pl-10 mt-8">
          {{ userStore.user.nickname || '用户' }}您好！
        </h1>
        <p class="text-sky-600 text-sm px-10 pt-6">
          感谢您访问我们的网站，您可以在这里修改您的个人信息，同时如果您对我们有任何意见或者建议也可在下方提出！我们将重视您所反馈的事项，认真优化我们的产品，为您提供更好的使用体验。
        </p>
        <img src="/src/assets/imgs/undraw_feedback_re_urmj .svg" alt="" class="w-56 mt-6 mx-auto" />
      </div>

      <!-- 右侧 -->
      <div class="w-5/12 h-full bg-white">
        <!-- 修改信息 -->
        <div
          class="border rounded mt-10 w-96 h-28 mx-auto flex items-center group hover:shadow-xl transition-shadow"
        >
          <button class="flex" @click="scrollToUpdate">
            <img src="/src/assets/imgs/数据表单.svg" alt="" class="w-24 h-24 ml-4" />
            <div class="flex flex-col">
              <h2 class="text-xl font-bold mt-4 ml-6 group-hover:text-blue-500 self-start">
                修改信息
              </h2>
              <p class="text-sm ml-6 mt-4">在这里修改您的账号信息</p>
            </div>
          </button>
        </div>
        <!-- 反馈建议 -->
        <div
          class="border rounded mt-8 w-96 h-28 mx-auto flex items-center group hover:shadow-xl transition-shadow"
        >
          <button class="flex" @click="scrollToAdvise">
            <img src="/src/assets/imgs/办公文档.svg" alt="" class="w-24 h-24 ml-4" />
            <div class="flex flex-col">
              <h2 class="text-xl font-bold mt-4 ml-6 group-hover:text-blue-500 self-start">
                反馈建议
              </h2>
              <p class="text-sm ml-6 mt-4">在这里提出您的建议或意见</p>
            </div>
          </button>
        </div>
        <button class="mt-10 flex group mx-auto" @click="drawerStore.openDrawer">
          <p class="flex group-hover:underline group-hover:text-blue-500">
            查看历史反馈
            <ArrowRight class="w-4 h-4 mt-1 ml-2" />
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { useDrawerStore } from '@/stores/modules/drawer'
import backgroundImage from '/src/assets/imgs/background.png'
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  paddingLeft: '510px',
  paddingTop: '70px'
}

const userStore = useUserStore()
const drawerStore = useDrawerStore()

const scrollToUpdate = () => {
  const element = document.getElementById('change-avatar') // 获取目标元素
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }) // 执行平滑滚动
  }
}

const scrollToAdvise = () => {
  const element = document.getElementById('give-advice') // 获取目标元素
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }) // 执行平滑滚动
  }
}
</script>
<style scoped></style>
