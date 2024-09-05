<template>
  <div id="nav-title" ref="navTitleRef">
    <h1 class="text-center text-3xl font-normal pt-20 pb-8 tracking-wider text-gray-600">
      智悦康养·家园卫士提供多种功能，助您健康生活
    </h1>
  </div>
  <div class="nav-with-lines">
    <nav class="grid grid-cols-4 mx-80 mt-6 text-center">
      <router-link
        to="/home/emotion-sense"
        id="nav-item-1"
        class="nav-item"
        :class="{ active: activeNavItem === 'nav-item-1' }"
        @click.prevent="selectNavItem('nav-item-1')"
        ><img src="/src/assets/icons/happy.svg" class="w-8 h-8 mr-2" />情绪识别</router-link
      >
      <router-link
        to="/home/fire-dedication"
        id="nav-item-2"
        class="nav-item"
        :class="{ active: activeNavItem === 'nav-item-2' }"
        @click.prevent="selectNavItem('nav-item-2')"
        ><img src="/src/assets/icons/fire.svg" class="w-8 h-8 mr-2" />火灾监测</router-link
      >
      <router-link
        to="/home/chess-game"
        id="nav-item-3"
        class="nav-item"
        :class="{ active: activeNavItem === 'nav-item-3' }"
        @click.prevent="selectNavItem('nav-item-3')"
        ><img src="/src/assets/icons/chess.svg" class="w-8 h-8 mr-2" />象棋游戏</router-link
      >
      <router-link
        to="/home/house-monitoring"
        id="nav-item-4"
        class="nav-item"
        :class="{ active: activeNavItem === 'nav-item-4' }"
        @click.prevent="selectNavItem('nav-item-4')"
        ><img src="/src/assets/icons/monitor.svg" class="w-8 h-8 mr-2" />全屋监控</router-link
      >
    </nav>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { ref, provide } from 'vue'

const activeNavItem = ref('nav-item-1')

function selectNavItem(navItemId) {
  activeNavItem.value = navItemId
}

provide('activeNavItem', activeNavItem)
provide('selectNavItem', selectNavItem)
</script>
<style scoped>
nav a {
  border: solid 2px #d1d5db;
  padding: 14px 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  transition: 300ms;
}

.nav-with-lines {
  position: relative;
  padding-bottom: 0px;
}

.nav-with-lines::before,
.nav-with-lines::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 320px;
  height: 2px;
  background-color: #e5e7eb; /* 你可以修改颜色 */
}

.nav-with-lines::before {
  left: 0;
}

.nav-with-lines::after {
  right: 0;
}

nav a:hover {
  background: #dddddd;
}

nav a.active {
  border-top: 4px solid #07a4ea;
  border-bottom: none;
  font-weight: bold;
}

#content-1,
#content-2,
#content-3,
#content-4 {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
</style>
