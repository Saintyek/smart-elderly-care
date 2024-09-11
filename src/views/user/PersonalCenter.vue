<template>
  <div class="background-container-1">
    <PageHeader />
    <PageTitle />
    <ChangeAvatar />
    <UserProfile />
  </div>

  <div class="background-container-2">
    <ResetPassword />
    <GiveAdvice />
    <PageFooter />
  </div>
</template>

<script setup>
import PageHeader from '../home/PageHeader.vue'
import PageTitle from './PageTitle.vue'
import UserProfile from './UserProfile.vue'
import ChangeAvatar from './ChangeAvatar.vue'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import ResetPassword from './ResetPassword.vue'
import PageFooter from '../home/PageFooter.vue'
import GiveAdvice from './GiveAdvice.vue'

const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})
</script>
<style lang="scss" scoped>
.background-container-1 {
  position: relative;
  overflow: hidden;
}

.background-container-1::before,
.background-container-1::after {
  content: '';
  position: absolute;
  top: 700px;
  bottom: 0px;
  width: 60%; // 距左侧位置
  background-image: url('/src/assets/imgs/6c8fed08d2677dcccde2eb4b79b2ec16e0c2d4a3b6b43422677eeaf69a5cc5ab.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 600px 900px;
  background-position: center;
  z-index: -1;
}

.background-container-2 {
  position: relative;
  overflow: hidden;
}

.background-container-2::before,
.background-container-2::after {
  content: '';
  position: absolute;
  top: 0px;
  bottom: 100px;
  width: 135%; // 距左侧位置
  background-image: url('/src/assets/imgs/6fa8b9760873bf8a18e827d1ff4fff0c580bf9154a2fd9eff2ddbf3deda71a5e.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 700px 730px;
  background-position: center;
  z-index: -1;
}
</style>
