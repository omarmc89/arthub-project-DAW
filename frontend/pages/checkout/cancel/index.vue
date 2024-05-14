<template>
  <div class="flex-col justify-center items-start">
        <h1 class="text-center uppercase text-4xl font-bold mb-4 text-white bg-orange-400 rounded-xl px-4 py-2">Ups!</h1>
        <h1 class="text-center uppercase text-3xl font-bold mb-4 text-white bg-green-400 rounded-xl px-4 py-2">Something went wrong!</h1>
        <div class="flex items-center justify-center w-full my-10">
          <Icon class="h-64 w-64 text-slate-500" name="line-md:emoji-frown"/>
        </div>
        <div class="flex w-full items-center justify-center">
          <button @click="navigateTo('/')" class="flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-slate-900 rounded-lg hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
            <span class="mr-2">Go back Home</span>
            <Icon class="h-6 w-6" name="line-md:home"/>
          </button>
        </div>
  </div>
</template>

<script setup>

</script>