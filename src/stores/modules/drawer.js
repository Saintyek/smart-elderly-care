import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const drawerVisible = ref(false)

  const openDrawer = () => {
    drawerVisible.value = true
  }

  const closeDrawer = () => {
    drawerVisible.value = false
  }

  return { drawerVisible, openDrawer, closeDrawer }
})
