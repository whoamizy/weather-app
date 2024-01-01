<template>
  <BaseCard>
    <div class="main-info">
      <CityHeader />
      <div class="main-info__plate" :style="{ backgroundImage: `url('/daytime/${bgImage}')` }">
        <div class="main-info__top">
          <div>
            <h2 class="main-info__city">{{ country }}, {{ name }}</h2>
            <p class="main-info__date">
              {{
                new Date(localtime).toLocaleString('en', {
                  day: '2-digit',
                  weekday: 'long',
                  month: 'long',
                  year: 'numeric'
                })
              }}
            </p>
          </div>
          <div class="main-info__time">
            {{
              new Date(localtime).toLocaleTimeString('en-US', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric'
              })
            }}
          </div>
        </div>
        <div class="main-info__bottom">
          <div class="main-info__temp">{{ Math.trunc(temp) }}ºc</div>
          <a class="main-info__link" href="https://github.com/whoamizy" target="_blank">
            <img title="whoami" class="main-info__icon" src="/whoami.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import CityHeader from './CityHeader.vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  localtime: {
    type: String,
    default: ''
  },
  temp: {
    type: Number,
    default: 0
  },
  isDay: {
    type: Number,
    default: 0
  }
})

const bgImage = props.isDay ? 'day.png' : 'night.png'
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  &__plate {
    flex-grow: 1;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    padding: 32px;
  }
  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__city {
    font-weight: 700;
    font-size: 42px;
    margin-bottom: 8px;
  }
  &__date {
    font-size: 24px;
  }
  &__time {
    font-weight: 700;
    font-size: 42px;
  }
  &__bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__temp {
    font-weight: 800;
    font-size: 132px;
  }
  &__link {
    display: block;
    border-radius: 50%;
    overflow: hidden;
  }
  &__icon {
    object-fit: cover;
    border-radius: 50%;
    width: 248px;
    height: 248px;
  }
}
</style>
