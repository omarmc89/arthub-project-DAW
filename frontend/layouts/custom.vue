<template>
    <header>
        <AppHeaderWithoutNavbar />
    </header>
    <div class="background">
    </div>
    <UContainer>
      <slot />
    </UContainer>

    <UNotifications />
    <footer>
      <AppFooter />
    </footer>
</template>

<style scoped>

</style>

