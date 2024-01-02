<template>
  <ViewLoader v-if="cityStore.isLoading" />
  <div class="wrapper" v-else>
    <CityMainInfo
      v-if="cityStore.city"
      :name="cityStore.city.location.name"
      :country="cityStore.city.location.country"
      :localtime="cityStore.city.location.localtime"
      :temp="cityStore.city.current.temp_c"
      :is-day="cityStore.city.current.is_day"
    />
    <div class="details">
      <CityDetails
        v-if="cityStore.city"
        :condition="cityStore.city.current.condition"
        :feelslike="cityStore.city.current.feelslike_c"
        :windspeed="cityStore.city.current.wind_kph"
        :humidity="cityStore.city.current.humidity"
        :uv="cityStore.city.current.uv"
      />
      <CityDays v-if="cityStore.city" :days="cityStore.city.forecast.forecastday" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCityStore } from '@/stores/cityStore'
import ViewLoader from '@/components/ViewLoader.vue'
import CityMainInfo from '@/components/CityMainInfo.vue'
import CityDetails from '@/components/CityDetails.vue'
import CityDays from '@/components/CityDays.vue'

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
.details {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 4fr 3fr;
  gap: 16px;
}
</style>
