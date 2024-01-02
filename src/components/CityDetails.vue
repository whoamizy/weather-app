<template>
  <BaseCard>
    <div class="details">
      <h2 class="details__title">Today's weather details</h2>
      <div class="details__list">
        <div class="details__line">
          <div class="details__info">
            <img class="details__icon details__icon_main" :src="condition.icon" alt="weather" />
            <h3 class="details__key details__key_status">{{ condition.text }}</h3>
          </div>
        </div>
        <div class="details__line">
          <div class="details__info">
            <img class="details__icon" src="/details/feels-like.svg" alt="feels-like" />
            <h3 class="details__key">Feels like</h3>
          </div>
          <div class="details__value">{{ Math.trunc(feelslike) }}ºc</div>
        </div>
        <div class="details__line">
          <div class="details__info">
            <img class="details__icon" src="/details/wind-speed.svg" alt="wind-speed" />
            <h3 class="details__key">Wind speed</h3>
          </div>
          <div class="details__value">{{ Math.trunc(windspeed) }} km/h</div>
        </div>
        <div class="details__line">
          <div class="details__info">
            <img class="details__icon" src="/details/humidity.svg" alt="humidity" />
            <h3 class="details__key">Humidity</h3>
          </div>
          <div class="details__value">{{ humidity }}%</div>
        </div>
        <div class="details__line">
          <div class="details__info">
            <img class="details__icon" src="/details/uv-index.svg" alt="uv-index" />
            <h3 class="details__key">UV index</h3>
          </div>
          <div class="details__value">{{ uv }}</div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import type { Condition } from '@/types'

interface Props {
  condition: Condition
  feelslike: number
  windspeed: number
  humidity: number
  uv: number
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.details {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  &__title {
    font-weight: 400;
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 20px;
  }
  &__list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  &__line {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    &:not(:last-child) {
      border-bottom: 1px solid var(--details-list-item-border-color);
    }
    &:hover {
      background-color: var(--details-list-item-bg-color-light);
    }
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &__icon {
    width: 40px;
    height: 40px;
    &_main {
      width: 70px;
      height: 70px;
    }
  }
  &__key {
    font-weight: 700;
    color: var(--text-secondary-light);
    &_status {
      font-size: 20px;
    }
  }
  &__value {
    font-weight: 700;
    font-size: 24px;
  }
}
@media (max-width: 767px) {
  .details {
    &__title {
      display: none;
    }
    &__line {
      padding: 16px 0;
    }
  }
}

@media (max-width: 480px) {
  .details {
    padding: 0;
    &__icon {
      width: 30px;
      height: 30px;
    }
    &__icon_main {
      width: 50px;
      height: 50px;
    }
    &__key {
      &_status {
        font-size: 16px;
      }
    }
    &__value {
      font-size: 18px;
    }
  }
}
</style>
