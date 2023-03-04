<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-end gap-4 sm:gap-[26px]">
    <NuxtLink to="/" class="mr-auto">
      <img src="~/assets/images/logo.svg" alt="Logo" class="w-[28px] sm:w-8" />
    </NuxtLink>
    <FontPicker />
    <div class="w-px h-8 bg-gray-300" />
    <ThemeToggle />
  </header>
</template>
