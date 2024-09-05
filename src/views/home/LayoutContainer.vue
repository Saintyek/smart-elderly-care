<template>
  <div>
    <PageHeader />
    <PageTitle />
    <NavBar />
    <LifeQuality />
    <PageFooter />
  </div>
</template>

<script setup>
import LifeQuality from './LifeQuality.vue'
import NavBar from './NavBar.vue'
import PageFooter from './PageFooter.vue'
import PageHeader from './PageHeader.vue'
import PageTitle from './PageTitle.vue'
// import { useUserStore } from '@/stores'
// import { onMounted } from 'vue'

// const userStore = useUserStore()
// onMounted(() => {
//   userStore.getUser()
// })
</script>
<style scoped></style>
