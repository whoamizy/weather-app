import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { env } from '@/utils'
import type { SearchCity } from '@/types'

export const useSearchCityStore = defineStore('search-city', () => {
  const cities = ref<SearchCity[]>([])
  const isLoading = ref(false)

  const getCities = async (searchVal: string) => {
    try {
      if (!searchVal.length) {
        cities.value = []
        return
      }
      isLoading.value = true
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/search.json?key=${env.API_KEY}&q=${searchVal}`
      )

      cities.value = data
    } catch (err) {
      console.log(err)
      cities.value = []
    } finally {
      isLoading.value = false
    }
  }

  return { cities, isLoading, getCities }
})
