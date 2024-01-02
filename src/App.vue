<template>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition>
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>
