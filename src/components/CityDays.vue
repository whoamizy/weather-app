<template>
  <BaseCard>
    <div class="days">
      <h2 class="days__title">Forecast for 5 days</h2>
      <ul class="days__list">
        <CityDaysItem v-for="day in days" :key="day.date" :day="day" />
      </ul>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import BaseCard from './BaseCard.vue'
import CityDaysItem from './CityDaysItem.vue'
import type { ForecastDay } from '@/types'

defineProps({
  days: {
    type: Array as PropType<ForecastDay[]>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.days {
  padding: 16px;
  &__title {
    font-weight: 400;
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 20px;
  }
  &__list {
    display: flex;
  }
}

@media (max-width: 980px) {
  .days {
    &__list {
      flex-wrap: wrap;
    }
  }
}
@media (max-width: 767px) {
  .days {
    &__title {
      display: none;
    }
    &__list {
      flex-direction: column;
    }
  }
}
</style>
