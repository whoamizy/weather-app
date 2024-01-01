<template>
  <ViewLoader v-if="cityStore.isLoading" />
  <div class="wrapper" v-else>
    <CityMainInfo
      :name="cityStore.city?.location.name"
      :country="cityStore.city?.location.country"
      :localtime="cityStore.city?.location.localtime"
      :temp="cityStore.city?.current.temp_c"
      :is-day="cityStore.city?.current.is_day"
    />
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
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;
}
</style>
