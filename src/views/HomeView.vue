<template>
  <HomeHeader />
  <div class="content">
    <HomeWelcome />
    <BaseInput
      v-model:value.trim="searchValue"
      placeholder="Search location"
      :is-loading="searchCityStore.isLoading"
    />
    <Transition name="list">
      <SearchCityList v-if="searchCityStore.cities.length" :cities="searchCityStore.cities" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounce } from '@vueuse/core'
import BaseInput from '@/components/BaseInput.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import HomeWelcome from '@/components/HomeWelcome.vue'
import SearchCityList from '@/components/SearchCityList.vue'
import { useSearchCityStore } from '@/stores/searchCityStore'

const searchCityStore = useSearchCityStore()

const searchValue = ref('')
const debouncedSearchValue = useDebounce(searchValue, 500)

watch(debouncedSearchValue, () => {
  searchCityStore.getCities(debouncedSearchValue.value)
})
</script>

<style lang="scss" scoped>
.content {
  max-width: 544px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
