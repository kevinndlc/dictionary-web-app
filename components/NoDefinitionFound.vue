<script setup lang="ts">
defineProps<{
  title: string;
  message: string;
  resolution: string;
}>();
</script>

<template>
  <section class="text-center">
    <div class="text-[64px] mb-6 sm:mb-[44px]">😕</div>
    <h2 class="mb-6 text-lg sm:text-xl font-bold">{{ title }}</h2>
    <p class="text-gray-500">{{ message }}{{ resolution }}</p>
  </section>
</template>
