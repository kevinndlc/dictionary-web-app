<script setup lang="ts">
const isDark = useDark();
</script>

<template>
  <label class="inline-flex items-center gap-5 cursor-pointer">
    <input
      type="checkbox"
      name="app-theme"
      id="app-theme"
      class="sr-only peer"
      v-model="isDark"
    />
    <div
      class="relative w-10 h-5 rounded-full transition-colors peer-focus-visible:ring-1 after:content=[''] after:absolute after:w-3.5 after:aspect-square after:bg-white after:rounded-full after:top-[3px] after:left-[3px] after:transition-transform after:translate-x-0 peer-checked:after:translate-x-5"
      :class="isDark ? 'bg-purple ring-white' : 'bg-gray-500 ring-gray-1000'"
    />
    <IconMoon :class="isDark ? 'text-purple' : 'text-gray-500'" />
  </label>
</template>
