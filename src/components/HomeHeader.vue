<template>
  <header class="header">
    <img src="/logo.svg" alt="logo" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

@media (max-width: 480px) {
  .header {
    padding: 20px 0;
  }
}
</style>
