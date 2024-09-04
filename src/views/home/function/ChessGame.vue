<template>
  <div id="content-3" class="mx-80 mt-10">
    <div class="flex">
      <div>
        <h1 class="text-2xl font-bold tracking-wider">象棋游戏娱乐</h1>
        <p class="text-gray-600 text-xl mt-4">
          本产品不仅提供人机对弈，还支持人人对弈模式,适合所有象棋游戏爱好者
        </p>
        <h1 class="text-2xl font-bold tracking-wider mt-8">工作原理</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-1 text-xl">
          <li>数据集增强</li>
          <li>透视变化矫正</li>
          <li>基于yolov5的棋子识别</li>
          <li>基于Alpha-Beta剪枝算法的象棋博弈算法</li>
        </ul>
        <h1 class="text-2xl font-bold tracking-wider mt-8">我们的优势</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-3 text-xl">
          <li>采用先进的AI算法，模拟真实对战，提升用户的游戏体验</li>
          <li>通过下象棋，可以锻炼老年人的思维能力和记忆力，延缓认知衰退</li>
          <li>象棋游戏为老年人提供了一种有趣的娱乐方式，丰富了他们的日常生活</li>
          <li>家人可以与老年人一起下象棋，增进亲情交流，创造美好回忆</li>
        </ul>
        <div class="flex ml-2">
          <button
            class="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-10 rounded mt-10 text-xl open-btn"
            data-modal="modal-3"
          >
            观看演示视频
          </button>
          <button
            class="hover:bg-gray-300 text-black border-2 font-medium py-2 px-6 rounded mt-10 text-xl ml-4"
          >
            <a href="#">开始游戏</a>
          </button>
        </div>
        <div class="flex mt-4">
          <img src="/src/assets/icons/next.svg" class="w-5 h-5 mr-1 mt-0.5" />
          <router-link
            to="/home/house-monitoring"
            class="text-blue-400 nav-item tracking-wider hover:underline"
            :class="{ active: activeNavItem === 'nav-item-4' }"
            @click.prevent="handleNextFeatureClick"
            >了解下一功能</router-link
          >
        </div>
      </div>
      <div class="relative ml-32">
        <img
          src="/src/assets/imgs/undraw_press_play_re_85bj.svg"
          alt=""
          style="width: 450px; height: 480px"
        />
        <img
          src="/src/assets/imgs/undraw_relaxing_at_home_re_mror.svg"
          alt=""
          class="ml-12 absolute bottom-2 left-7"
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
  selectNavItem('nav-item-4')
}
</script>
<style scoped></style>
