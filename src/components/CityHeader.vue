<template>
  <div class="city-header">
    <div class="city-header__button" @click="navigateToBack">Back</div>
    <img src="/logo.svg" alt="logo" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToBack = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.city-header {
  display: flex;
  align-items: center;
  gap: 12px;
  &__button {
    cursor: pointer;
    padding: 17px 20px;
    border-radius: 8px;
    background-color: var(--button-bg-color);
    font-size: 16px;
    transition: 0.3s;
    &:hover {
      background-color: var(--button-bg-color-light);
    }
  }
}
</style>
