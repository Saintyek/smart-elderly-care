<template>
  <div id="content-2" class="mx-80 mt-10">
    <div class="flex">
      <div>
        <h1 class="text-2xl font-bold tracking-wider">火灾监测功能</h1>
        <p class="text-gray-600 text-xl mt-4">
          本产品装备有高敏感度的火灾监测技术,能在火灾初期阶段检测到火焰,
        </p>
        <p class="text-gray-600 text-xl">迅速通过多渠道警报用户并采取预设的应急措施</p>
        <h1 class="text-2xl font-bold tracking-wider mt-8">工作原理</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-1 text-xl">
          <li>基于yolov5的火焰检测</li>
          <li>用户反馈机制</li>
          <li>动态调节警报阈值</li>
        </ul>
        <h1 class="text-2xl font-bold tracking-wider mt-8">我们的优势</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-3 text-xl">
          <li>通过高灵敏度传感器，实时检测烟雾和温度变化</li>
          <li>提供全天候火灾监测和报警服务，全面提升家庭的安全水平</li>
          <li>在火灾初期发现火情，及时报警和处理，最大限度地减少财产损失</li>
          <li>通过智能联动设备，实现快速响应和应急处理，避免火势蔓延</li>
        </ul>
        <div class="flex ml-2">
          <button
            class="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-10 rounded mt-10 text-xl open-btn"
            data-modal="modal-2"
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
            to="/home/chess-game"
            class="text-blue-400 nav-item tracking-wider hover:underline"
            :class="{ active: activeNavItem === 'nav-item-3' }"
            @click.prevent="handleNextFeatureClick"
          >
            了解下一功能
          </router-link>
        </div>
      </div>
      <div class="relative ml-44">
        <img
          src="/src/assets/imgs/undraw_surveillance_re_8tkl.svg"
          alt=""
          style="width: 450px; height: 400px"
        />
        <img
          src="/src/assets/imgs/undraw_dark_alley_hl-3-o.svg"
          alt=""
          class="ml-12 absolute bottom-0"
          style="width: 470px; height: 280px"
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
  selectNavItem('nav-item-3')
}
</script>
<style scoped></style>
