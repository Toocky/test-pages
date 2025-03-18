<script setup lang="ts">
const mainSiteUrl = 'https://apipie.ai'
</script>

<template>
  <div
    class="w-full px-5 md:px-[30px] pt-4 pb-2 flex justify-between shadow border-b border-gray-800"
  >
    <u-link
      :to="mainSiteUrl"
      class="flex gap-2 font-bold font-primary text-2xl md:text-[30px]"
      external
    >
      <img class="h-8" src="~/assets/img/logo-drk.png" alt="logo" />
      APIpie.ai
    </u-link>
    <div class="flex gap-[30px] pb-2">
      <div class="flex gap-2 font-500 items-center">
        <u-link class="py-[6px] px-3" to="/">Dashboard</u-link>
        <u-link class="py-[6px] px-3" :to="`${mainSiteUrl}/docs`" external>
          Documentation
        </u-link>
        <u-link
          class="py-[6px] px-3"
          :to="`${mainSiteUrl}/profile/subscribe`"
          external
          >Subscribe</u-link
        >
        <u-link
          class="py-[6px] px-3"
          :to="`${mainSiteUrl}/profile/auth/login`"
          external
          >Login</u-link
        >
        <u-button :to="`${mainSiteUrl}/profile/auth/register`" external
          >Sign Up</u-button
        >
      </div>
    </div>
  </div>
</template>
