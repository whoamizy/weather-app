<template>
  <li class="day">
    <h3 class="day__date">{{ new Date(day.date).toLocaleDateString() }}</h3>
    <img class="day__icon" :src="day.day.condition.icon" alt="weather" />
    <div class="day__weather">{{ day.day.condition.text }}</div>
    <div class="day__temps">
      <div class="day__maxt">{{ Math.trunc(day.day.maxtemp_c) }}ºc</div>
      <div class="day__mint">{{ Math.trunc(day.day.mintemp_c) }}ºc</div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ForecastDay } from '@/types'

defineProps({
  day: {
    type: Object as PropType<ForecastDay>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.day {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background-color: var(--day-list-item-bg-color-light);
  }
  &__date {
    font-weight: 700;
    color: var(--text-secondary-light);
  }
  &__icon {
    width: 67px;
    height: 67px;
    margin: 12px 0;
  }
  &__weather {
    text-align: center;
    font-size: 16px;
    color: var(--text-secondary-light);
    margin-bottom: 2px;
  }
  &__temps {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
  }
  &__mint {
    color: var(--text-secondary);
  }
}
</style>
