<script setup lang="ts">
const isDropdownOpen = ref(false);

const fonts = [
  { name: 'Sans serif', value: 'font-inter' },
  { name: 'Serif', value: 'font-lora' },
  { name: 'Mono', value: 'font-inconsolata' },
];

const selectedFont = useState('selectedFont', () => fonts[0]);
</script>

<template>
  <div class="relative inline-block font-bold text-sm sm:text-lg !leading-6">
    <button
      class="inline-flex items-center gap-4"
      :class="selectedFont.value"
      @click="isDropdownOpen = !isDropdownOpen"
    >
      {{ selectedFont.name }}
      <IconArrowDown class="w-3 text-purple" />
    </button>
    <div
      v-if="isDropdownOpen"
      class="fixed inset-0"
      @click="isDropdownOpen = false"
    />
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isDropdownOpen"
        id="dropdown"
        class="absolute right-0 translate-y-[18px] z-10"
      >
        <ul
          class="bg-white shadow-base dark:shadow-purple dark:bg-gray-900 w-[183px] p-6 rounded-2xl space-y-4"
        >
          <li v-for="font in fonts">
            <button
              class="w-full text-left hover:text-purple focus-visible:text-purple transition-colors"
              :class="font.value"
              @click="
                () => {
                  selectedFont = font;
                  isDropdownOpen = false;
                }
              "
            >
              {{ font.name }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
