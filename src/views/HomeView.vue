<template>
  <HomeHeader />
  <div class="content">
    <HomeWelcome />
    <BaseInput v-model:value.trim="searchVal" placeholder="Search location" :is-loading="true" />
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import HomeHeader from '@/components/HomeHeader.vue'
import HomeWelcome from '@/components/HomeWelcome.vue'
import { ref } from 'vue'

const searchVal = ref('')
</script>

<style lang="scss" scoped>
.content {
  max-width: 544px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
