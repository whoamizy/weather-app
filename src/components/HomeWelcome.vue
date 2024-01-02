<template>
  <div class="welcome">
    <h1 class="welcome__title">Welcome to <span class="welcome__accent">TypeWeather</span></h1>
    <p class="welcome__description">Choose a location to see the weather forecast</p>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  text-align: center;
  margin-bottom: 56px;
  &__title {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
  }
  &__description {
    font-size: 20px;
    color: var(--text-secondary-light);
  }
  &__accent {
    color: var(--text-accent);
  }
}

@media (max-width: 480px) {
  .welcome {
    margin-bottom: 36px;
    &__title {
      font-size: 22px;
      margin-bottom: 6px;
    }
    &__description {
      font-size: 14px;
    }
  }
}
</style>
