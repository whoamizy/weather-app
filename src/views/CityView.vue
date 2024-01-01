<template>
  <div>City {{ cityName }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const cityName = route.params.name
</script>

<style lang="scss" scoped></style>
