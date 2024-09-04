<template>
  <div id="content-1" class="mx-80 mt-10">
    <div class="flex">
      <div>
        <h1 class="text-2xl font-bold tracking-wider">情绪识别功能</h1>
        <p class="text-gray-600 text-xl mt-4">
          本产品通过先进的面部识别技术，实时分析用户的情绪状态,
        </p>
        <p class="text-gray-600 text-xl">自动调整家庭环境以提升用户的情绪</p>
        <h1 class="text-2xl font-bold tracking-wider mt-8">工作原理</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-1 text-xl">
          <li>基于VGG19/Resnet18的人脸检测</li>
          <li>情绪分析</li>
          <li>图片丢失信息恢复</li>
          <li>人脸形变调整</li>
        </ul>
        <h1 class="text-2xl font-bold tracking-wider mt-8">我们的优势</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-3 text-xl">
          <li>减轻家人对老人情绪和健康的担忧，提供额外的照护支持</li>
          <li>当感到孤独、焦虑或抑郁时，机器人可以提供心理安慰和互动娱乐，帮助改善情绪</li>
          <li>更好地理解情绪变化，增强沟通的有效性和质量</li>
          <li>根据情绪状态和喜好，提供个性化的服务和活动建议</li>
        </ul>
        <div class="flex ml-2">
          <button
            type="button"
            class="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-10 rounded mt-10 text-xl open-btn"
            data-modal="modal-1"
          >
            观看演示视频
          </button>
          <button
            class="hover:bg-gray-300 text-black border-2 font-medium py-2 px-6 rounded mt-10 text-xl ml-4"
          >
            打开摄像头
          </button>
        </div>
        <div class="flex mt-4">
          <img src="/src/assets/icons/next.svg" class="w-5 h-5 mr-1 mt-0.5" />
          <router-link
            to="/home/fire-dedication"
            class="text-blue-400 nav-item tracking-wider hover:underline"
            :class="{ active: activeNavItem === 'nav-item-2' }"
            @click.prevent="handleNextFeatureClick"
          >
            了解下一功能
          </router-link>
        </div>
      </div>
      <div class="relative ml-32">
        <img
          src="/src/assets/imgs/undraw_joyride_re_968t.svg"
          alt=""
          style="width: 450px; height: 400px"
        />
        <img
          src="/src/assets/imgs/undraw_feeling_of_joy_re_cqko.svg"
          alt=""
          class="absolute bottom-4 right-0"
          style="width: 470px; height: 270px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const activeNavItem = inject('activeNavItem')
const selectNavItem = inject('selectNavItem')

function handleNextFeatureClick() {
  selectNavItem('nav-item-2')
}
</script>
<style scoped></style>
