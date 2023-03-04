<script setup lang="ts">
defineProps<{
  partOfSpeech: string;
  definitions: string[];
  synonyms: string[];
}>();

const emit = defineEmits<{
  (e: 'newSearch', value: string): void;
}>();
</script>

<template>
  <section>
    <header class="flex items-center gap-4 sm:gap-8 mb-8">
      <h2
        class="font-bold text-lg !leading-[22px] sm:text-2xl sm:!leading-[25px]"
      >
        {{ partOfSpeech }}
      </h2>
      <hr class="flex-1 border-gray-300 dark:border-gray-700" />
    </header>

    <h3 class="sm:text-xl !leading-5 text-gray-500 mb-4">Meaning</h3>
    <ul class="space-y-3 list-disc marker:text-purple">
      <li
        v-for="definition in definitions"
        :key="definition"
        class="ml-10 pl-2"
      >
        <p>{{ definition }}</p>
      </li>
    </ul>

    <div v-if="synonyms.length" class="flex items-baseline gap-6 mt-6">
      <h3 class="sm:text-xl !leading-5 text-gray-500">Synonyms</h3>
      <ul class="flex items-center gap-x-6 gap-y-2 flex-wrap">
        <li v-for="synonym in synonyms" :key="synonym">
          <button
            class="text-purple text-xl font-bold !leading-[26px]"
            @click="emit('newSearch', synonym)"
          >
            {{ synonym }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
