<script setup lang="ts">
// Default layout with nav bar and footer
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar></nav-bar>
    <main class="flex-grow">
      <u-container class="flex justify-center mt-10 mb-16">
        <slot />
      </u-container>
    </main>
    <ui-footer></ui-footer>
  </div>
</template>
