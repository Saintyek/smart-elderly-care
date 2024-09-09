<template>
  <PageHeader />
  <PageTitle />
  <UserProfile />
  <ChangeAvatar />
</template>

<script setup>
import PageHeader from '../home/PageHeader.vue'
import PageTitle from './PageTitle.vue'
import UserProfile from './UserProfile.vue'
import ChangeAvatar from './ChangeAvatar.vue'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'

const userStore = useUserStore()
onMounted(() => {
  userStore.getUser()
})
</script>
<style scoped></style>
