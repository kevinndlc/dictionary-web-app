<script setup lang="ts"></script>

<template>
  <header class="flex items-center justify-end gap-6">
    <NuxtLink to="/" class="mr-auto">
      <img src="~/assets/images/logo.svg" alt="Logo" class="w-8" />
    </NuxtLink>
    <FontPicker />
    <div class="w-px h-8 bg-gray-300" />
    <ThemeToggle />
  </header>
</template>
