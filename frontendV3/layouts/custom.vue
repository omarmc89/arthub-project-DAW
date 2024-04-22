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

footer{
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
}
</style>

