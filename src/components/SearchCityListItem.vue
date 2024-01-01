<template>
  <li class="item">{{ city.country }}, {{ city.name }}</li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { SearchCity } from '@/types'

defineProps({
  city: {
    required: true,
    type: Object as PropType<SearchCity>
  }
})
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  padding: 16px 20px;
  font-size: 16px;
  background-color: var(--city-list-item-bg-color);
  transition: 0.3s;
  &:not(:last-child) {
    border-bottom: 1px solid var(--city-list-item-border-color);
  }
  &:hover {
    background-color: var(--city-list-item-bg-color-light);
  }
}
</style>
