<template>
  <header class="flex h-24 bg-white" style="border-bottom: 2px solid #d1d5db">
    <div class="mx-80 flex justify-between items-center w-full">
      <div class="logo w-16 h-16">
        <img src="/src/assets/imgs/logo.png" alt="" />
      </div>
      <div class="text-black text-xl font-semibold">
        <button class="btnLogin-popup px-4 py-2">请登录</button>
      </div>
    </div>
  </header>
</template>

<script setup></script>
<style scoped>
.btnLogin-popup {
  border: rgba(0, 0, 0, 0.5) 2px solid;
  border-radius: 99px;
  transition: 300ms;
}
.btnLogin-popup:hover {
  background: #333;
  color: #fff;
}
</style>
