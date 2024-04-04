<template>
    <header>
        <AppHeader />
    </header>
    <div class="background"/>
    <NuxtLoadingIndicator />
    <UContainer>
      <slot />
    </UContainer>

    <UNotifications />
    <footer>
      <AppFooter />
    </footer>
</template>

