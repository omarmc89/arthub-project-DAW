<template>
    <header>
        <AppHeader />
    </header>
    <div class="background"/>
    <NuxtLoadingIndicator />
    <UContainer class="min-h-screen mt-12 py-0">
      <slot />
    </UContainer>

    <UNotifications />
    <footer>
      <AppFooter />
    </footer>
</template>

<script setup>

</script>

<style scoped>
body {
  min-height: 100vh;
}
</style>

