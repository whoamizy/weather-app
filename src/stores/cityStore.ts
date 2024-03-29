import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { env } from '@/utils'
import type { City } from '@/types'

export const useCityStore = defineStore('city', () => {
  const router = useRouter()

  const city = ref<City | null>(null)
  const isLoading = ref(false)

  const getCity = async (cityName: string | string[]) => {
    try {
      isLoading.value = true
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${env.API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
      )

      city.value = data
    } catch (err) {
      console.log(err)
      router.push({ name: 'home' })
    } finally {
      isLoading.value = false
    }
  }

  return { city, isLoading, getCity }
})
