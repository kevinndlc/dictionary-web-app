<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | null;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const model = computed({
  get() {
    return props.modelValue ?? '';
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const inputRef = ref<HTMLInputElement | null>(null);
</script>

<template>
  <div
    class="flex px-6 h-12 sm:h-16 bg-gray-100 dark:bg-gray-900 transition-colors rounded-2xl cursor-text border border-transparent focus-within:border-purple"
    @click="inputRef?.focus()"
  >
    <input
      type="text"
      class="w-full bg-transparent focus:outline-none font-bold sm:text-xl"
      v-model="model"
      ref="inputRef"
    />
    <IconSearch class="w-4 text-purple" />
  </div>
</template>
