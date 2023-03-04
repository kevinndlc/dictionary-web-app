<script setup lang="ts">
const selectedFont: any = useState('selectedFont');

const searchText = ref(useLocalStorage('searchText', 'keyboard'));
const debouncedSearchText = useDebounce(searchText, 800);

interface Word {
  word: string;
  meanings: Meaning[];
  phonetic?: string;
  phonetics: Phonetic[];
  sourceUrls: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

interface Definition {
  definition: string;
  synonyms: string[];
}

interface Phonetic {
  text: string;
  audio: string;
}

const { data, error } = useLazyFetch<Word[]>(debouncedSearchText, {
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  onResponse: ({ response }) => console.log(response._data),
});

const wordPronounciationAudio = computed(() => {
  if (data.value && Array.isArray(data.value)) {
    return data.value[0].phonetics.find((phonetic) => phonetic.audio !== '')
      ?.audio;
  }
});
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
    <SearchBar v-model="searchText" class="mb-6 sm:mb-[50px]" />
    <template v-if="data">
      <WordSummary
        :word="data[0].word"
        :phonetic="data[0]?.phonetic"
        :audio="wordPronounciationAudio"
        class="mb-8 sm:mb-[42px]"
      />

      <ul class="space-y-8 sm:space-y-10 mb-8 sm:mb-10">
        <li v-for="meaning in data[0].meanings" :key="meaning.partOfSpeech">
          <WordMeaning
            :part-of-speech="meaning.partOfSpeech"
            :definitions="meaning.definitions.map((def) => def.definition)"
            :synonyms="meaning.synonyms"
            @newSearch="searchText = $event"
          />
        </li>
      </ul>

      <hr class="border-gray-300 dark:border-gray-700" />
      <div class="flex flex-col sm:flex-row gap-2 sm:gap-[25px] mt-6">
        <span class="text-sm underline text-gray-500">Source</span>
        <a :href="data[0].sourceUrls[0]" target="_blank">{{
          data[0].sourceUrls[0]
        }}</a>
      </div>
    </template>
    <NoDefinitionFound
      v-else-if="error?.data?.title"
      :title="error.data.title"
      :message="error.data.message"
      :resolution="error.data.resolution"
    />
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
