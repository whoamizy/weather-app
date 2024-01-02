<template>
  <li class="item" @click="navigateToCity(city.name)">{{ city.country }}, {{ city.name }}</li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { SearchCity } from '@/types'
import { useSearchCityStore } from '@/stores/searchCityStore'

interface Props {
  city: SearchCity
}

defineProps<Props>()

const router = useRouter()
const searchCityStore = useSearchCityStore()

const navigateToCity = (cityName: string) => {
  searchCityStore.clearCities()
  router.push({ name: 'city', params: { name: cityName } })
}
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  padding: 16px 20px;
  font-size: 16px;
  background-color: var(--city-list-item-bg-color);
  transition: 0.3s;
  &:not(:last-child) {
    border-bottom: 1px solid var(--city-list-item-border-color);
  }
  &:hover {
    background-color: var(--city-list-item-bg-color-light);
  }
}

@media (max-width: 480px) {
  .item {
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>
