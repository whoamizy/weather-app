<template>
  <ul class="list">
    <SearchCityListItem v-for="city in cities" :key="city.id" :city="city" />
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SearchCity } from '@/types'
import SearchCityListItem from '@/components/SearchCityListItem.vue'

defineProps({
  cities: {
    required: true,
    type: Array as PropType<SearchCity[]>
  }
})
</script>

<style lang="scss" scoped>
.list {
  margin-top: 8px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
