<template>
  <div id="content-4" class="mx-80 mt-10">
    <div class="flex">
      <div>
        <h1 class="text-2xl font-bold tracking-wider">全屋监控功能</h1>
        <p class="text-gray-600 text-xl mt-4">
          本产品可以联通室内外多个高清摄像头进行实时监控，确保
        </p>
        <p class="text-gray-600 text-xl">家庭成员的安全和房屋的安全防护</p>
        <h1 class="text-2xl font-bold tracking-wider mt-8">所用技术</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-1 text-xl">
          <li>Raspberry Pi OS技术</li>
          <li>IP Networking技术</li>
          <li>Video4Linux (V4L2)技术</li>
          <li>Linux Command Line Interface (CLI)技术</li>
          <li>Streaming Protocol技术</li>
        </ul>
        <h1 class="text-2xl font-bold tracking-wider mt-8">我们的优势</h1>
        <ul class="ml-8 mt-4 text-gray-600 list-disc space-y-3 text-xl">
          <li>采用高清摄像头，覆盖全屋各个角落，实时监控老年人的活动情况</li>
          <li>利用智能算法，检测异常行为（如跌倒、长时间静止等），及时发出警报</li>
          <li>监控设备支持双向语音通话，家人可以随时与老年人进行沟通，提供帮助和关怀</li>
          <li>老年人知道自己在监控范围内，遇到紧急情况可以迅速得到帮助，增加心理安全感</li>
        </ul>
        <div class="flex ml-2">
          <button
            class="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-10 rounded mt-10 text-xl"
            plain
            @click="dialogVisible = true"
          >
            观看演示视频
          </button>
          <el-dialog
            v-model="dialogVisible"
            title="火灾监测功能演示"
            width="1200"
            :style="{ height: '700px' }"
            :before-close="handleClose"
          >
            <div class="flex justify-center items-center px-4 py-2">
              <video
                ref="videoPlayer"
                src="/src/assets/videos/全屋监控.mp4"
                style="width: 2000px; height: 550px; object-fit: cover"
                controls
              ></video>
            </div>
            <template #footer>
              <div class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">完成</el-button>
              </div>
            </template>
          </el-dialog>
          <button
            class="hover:bg-gray-300 text-black border-2 font-medium py-2 px-6 rounded mt-10 text-xl ml-4"
          >
            打开摄像头
          </button>
        </div>
        <div class="flex mt-4">
          <img src="/src/assets/icons/next.svg" class="w-5 h-5 mr-1 mt-0.5" />
          <router-link
            to="/home/emotion-sense"
            class="text-blue-400 nav-item tracking-wider hover:underline"
            :class="{ active: activeNavItem === 'nav-item-1' }"
            @click.prevent="handleNextFeatureClick"
            >了解下一功能</router-link
          >
        </div>
      </div>
      <div class="relative ml-8">
        <img
          src="/src/assets/imgs/undraw_house_searching_re_stk8.svg"
          alt=""
          style="width: 550px; height: 380px"
        />
        <img
          src="/src/assets/imgs/undraw_location_search_re_ttoj.svg"
          alt=""
          class="ml-20 absolute bottom-10"
          style="width: 470px; height: 320px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { ref } from 'vue'

const videoPlayer = ref(null)
const dialogVisible = ref(false)

const handleClose = (done) => {
  if (videoPlayer.value) {
    videoPlayer.value.pause() // 暂停视频
    videoPlayer.value.currentTime = 0 // 将视频重置到开头
  }
  done() // 关闭模态框
}

const activeNavItem = inject('activeNavItem')
const selectNavItem = inject('selectNavItem')

function handleNextFeatureClick() {
  selectNavItem('nav-item-1')
}
</script>
<style scoped></style>
