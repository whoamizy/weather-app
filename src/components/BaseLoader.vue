<template>
  <span class="base-loader"></span>
</template>

<style lang="scss" scoped>
.base-loader {
  width: 32px;
  height: 32px;
  border: 5px solid var(--text-accent);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 480px) {
  .base-loader {
    width: 24px;
    height: 24px;
  }
}
</style>
