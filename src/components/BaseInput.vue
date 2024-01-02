<template>
  <div class="wrapper">
    <input
      :class="['input', { 'input-loading': isLoading }]"
      type="text"
      :value="value"
      @input="updateValue"
      :placeholder="placeholder"
    />
    <div class="loader" v-if="isLoading">
      <BaseLoader />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseLoader from '@/components/BaseLoader.vue'

defineProps({
  value: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:value'])

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement

  emit('update:value', target.value)
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
}
.input {
  width: 100%;
  padding: 17px 20px;
  border-radius: 8px;
  background-color: var(--input-bg-color);
  font-size: 16px;
  &-loading {
    padding-right: 72px;
  }
  &::placeholder {
    color: var(--input-placeholder);
  }
}
.loader {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

@media (max-width: 480px) {
  .input {
    padding: 12px 16px;
    font-size: 14px;
  }
  .loader {
    width: 24px;
    height: 24px;
  }
}
</style>
