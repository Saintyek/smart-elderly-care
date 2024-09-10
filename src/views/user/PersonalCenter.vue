<template>
  <PageHeader />
  <PageTitle />
  <ChangeAvatar />
  <UserProfile />
  <ResetPassword />
  <GiveAdvice />
  <PageFooter />
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
<style scoped></style>
