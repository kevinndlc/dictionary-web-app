<script setup lang="ts">
const props = defineProps<{
  word: string;
  phonetic?: string;
  audio?: string;
}>();

function pronounceWord() {
  const audio = new Audio(props.audio);
  audio.play();
}
</script>

<template>
  <section class="flex items-center justify-between">
    <div class="space-y-[7px]">
      <h1
        class="font-bold text-[32px] sm:text-[64px] leading-10 sm:leading-[67px]"
      >
        {{ word }}
      </h1>
      <div
        v-if="phonetic"
        class="text-purple text-lg !leading-6 sm:text-2xl sm:!leading-[29px]"
      >
        {{ phonetic }}
      </div>
    </div>
    <button v-if="audio" class="rounded-full" @click="pronounceWord">
      <IconPlay class="w-12 sm:w-[75px] text-purple" />
    </button>
  </section>
</template>
