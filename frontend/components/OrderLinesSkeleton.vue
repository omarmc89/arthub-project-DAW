<template>
    <section class="flex flex-col w-full gap-4">
      <h2 class="text-lg font-bold text-gray-800 text-center">Loading...</h2>
      <article v-for="item in items" :key="item.id" class="flex flex-row items-center justify-center">
        <USkeleton class="h-4 w-[100px] m-4" :ui="{ rounded: 'rounded-xl' }" />
      </article>
    </section>
  </template>

<script setup>
const items = 4
</script>