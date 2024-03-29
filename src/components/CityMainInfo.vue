<template>
  <BaseCard>
    <div class="main-info">
      <CityHeader />
      <div
        class="main-info__plate"
        :style="{ backgroundImage: `url('/daytime/${daytimeBackground}')` }"
      >
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
            <img title="whoami" class="main-info__icon" :src="`/daytime/${daytimeIcon}`" alt="" />
          </a>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import CityHeader from '@/components/CityHeader.vue'

interface Props {
  name: string
  country: string
  localtime: string
  temp: number
  isDay: number
}

const { isDay } = defineProps<Props>()

const daytimeBackground = isDay ? 'day.png' : 'night.png'
const daytimeIcon = isDay ? 'day-icon.svg' : 'night-icon.svg'
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

@media (max-width: 767px) {
  .main-info {
    &__city {
      font-size: 28px;
      margin-bottom: 6px;
    }
    &__date {
      font-size: 16px;
    }
    &__time {
      font-size: 28px;
    }
    &__temp {
      font-size: 62px;
    }
    &__icon {
      width: 150px;
      height: 150px;
    }
  }
}

@media (max-width: 480px) {
  .main-info {
    &__plate {
      padding: 20px;
    }
    &__city {
      font-size: 16px;
      margin-bottom: 2px;
    }
    &__date {
      font-size: 14px;
    }
    &__time {
      font-size: 16px;
    }
    &__temp {
      font-size: 48px;
    }
    &__icon {
      width: 90px;
      height: 90px;
    }
  }
}
</style>
