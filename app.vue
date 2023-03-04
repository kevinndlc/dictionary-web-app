<script setup lang="ts">
const selectedFont: any = useState('selectedFont');

const searchText = ref('');
const debouncedSearchText = useDebounce(searchText, 500);
</script>

<template>
  <Head>
    <title>Frontend Mentor | Dictionary web app</title>
    <meta name="description" content="Frontend Mentor | Dictionary web app" />
    <meta name="keywords" content="dictionary" />
    <meta name="author" content="kevinndlc" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  </Head>

  <Body
    class="bg-white dark:bg-gray-1000 text-gray-800 dark:text-white transition-colors"
    :class="selectedFont?.value ?? 'font-inter'"
  />

  <div class="app-container">
    <TheHeader class="mb-6 sm:mb-[52px]" />
    <SearchBar v-model="searchText" />
    {{ debouncedSearchText }}
  </div>
</template>

<style>
.app-container {
  --margin-inline: 1.5rem;
  --margin-block: 1.5rem;

  width: min(100% - 2 * var(--margin-inline), 46rem);
  margin-inline: auto;
  padding-block: var(--margin-block);

  @media screen and (min-width: 640px) {
    --margin-inline: 2.5rem;
    --margin-block: 58px;
  }
}
</style>
