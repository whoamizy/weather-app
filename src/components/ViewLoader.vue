<template>
  <div class="loader__wrapper">
    <BaseLoader />
  </div>
</template>

<script setup lang="ts">
import BaseLoader from '@/components/BaseLoader.vue'
</script>

<style lang="scss" scoped>
.loader__wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
