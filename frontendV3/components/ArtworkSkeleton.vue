<template>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <article v-for="item in items" :key="item.id" class="flex flex-col items-center justify-center">
        <USkeleton class="h-4 w-[350px] m-4" />
        <USkeleton class="h-[350px] w-[350px] m-4" :ui="{ rounded: 'rounded-xl' }" />
        <div class="flex flex-row justify-around gap-8">
          <USkeleton class="h-4 w-4" />
          <USkeleton class="h-4 w-4" />
        </div>
      </article>
    </section>
  </template>

<script setup>
const items = 6
</script>