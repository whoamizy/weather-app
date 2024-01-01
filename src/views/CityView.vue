<template>
  <ViewLoader v-if="cityStore.isLoading" />
  <div class="wrapper" v-else>
    <CityMainInfo />
    <div>City {{ cityName }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '@/stores/cityStore'
import ViewLoader from '@/components/ViewLoader.vue'
import CityMainInfo from '@/components/CityMainInfo.vue'

const route = useRoute()
const { name: cityName } = route.params
const cityStore = useCityStore()

onMounted(() => {
  cityStore.getCity(cityName)
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
}
</style>
