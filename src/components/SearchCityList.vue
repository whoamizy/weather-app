<template>
  <ul class="list">
    <SearchCityListItem v-for="city in cities" :key="city.id" :city="city" />
  </ul>
</template>

<script setup lang="ts">
import type { SearchCity } from '@/types'
import SearchCityListItem from '@/components/SearchCityListItem.vue'

interface Props {
  cities: SearchCity[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.list {
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
