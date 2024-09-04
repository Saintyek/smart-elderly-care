<template>
  <div class="bg-gray-100 mt-20 pb-12">
    <h1 class="text-4xl font-light tracking-wider text-center pt-16">
      我们是如何提升您的生活质量的
    </h1>
    <div class="mt-14">
      <div class="flex mx-80 justify-around">
        <!-- 语音交互 -->
        <div class="flex flex-col items-center">
          <div class="w-52 h-52 rounded-full border-2 overflow-hidden boxshadow">
            <img
              src="/src/assets/imgs/undraw_voice_control_ofo1.svg"
              alt=""
              class="w-full h-full object-fill"
            />
          </div>
          <h1 class="text-2xl font-bold tracking-wider mt-8">语音交互</h1>
          <div class="w-80 h-40 flex justify-center items-center">
            <p class="text-center">
              本产品使用户能够无需触碰任何设备,仅通过语音命令与机器人进行互动。不论是需要日常信息(如天气预报、新闻摘要)、设定提醒,还是简单寻求社交互动,机器人都能提供即时反馈,解决问题,满足需求。
            </p>
          </div>
        </div>

        <!-- 远程交互 -->
        <div class="flex flex-col items-center">
          <div class="w-52 h-52 rounded-full border-2 overflow-hidden boxshadow">
            <img
              src="/src/assets/imgs/undraw_voice_interface_re_206s.svg"
              alt=""
              class="w-full h-full object-fill"
            />
          </div>
          <h1 class="text-2xl font-bold tracking-wider mt-8">远程交互</h1>
          <div class="w-80 h-40 flex justify-center items-center">
            <p class="text-center">
              用户可以通过互联网远程登录，实时查看与管理绑定的智能机器人状态和历史活动记录。此外，该本产品的软件下棋系统还支持远程棋局复盘和实时对弈，为用户提供丰富的互动和娱乐选项。
            </p>
          </div>
        </div>

        <!-- 药品抓取 -->
        <div class="flex flex-col items-center">
          <div class="w-52 h-52 rounded-full border-2 overflow-hidden boxshadow">
            <img
              src="/src/assets/imgs/undraw_medical_care_movn.svg"
              alt=""
              class="w-full h-full object-fill"
            />
          </div>
          <h1 class="text-2xl font-bold tracking-wider mt-8">药品抓取</h1>
          <div class="w-72 h-40 flex justify-center items-center">
            <p class="text-center">
              本产品能精确地在用户设定的时间提醒服药，并确保老人或需要特别照顾的家庭成员按时接收正确的药物。摄像头监测到用户到达指定位置后，自动分发药品，确保用药安全。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.boxshadow {
  box-shadow: 0 0 20px 5px rgba(192, 192, 192, 0.8);
}
</style>
