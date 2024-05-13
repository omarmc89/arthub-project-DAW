<template> 
    <section v-if="!orderCompleted" v-for="(item, index) in items" :key="index" class="flex flex-row rounded-lg items-center justify-center">
      <div class="bg-white flex flex-row rounded-lg shadow-md items-center justify-center p-4 w-full">
        <div class="w-full flex items-center justify-center relative">
            <img :src="item.image" :alt="item.title" class="w-48 h-40 object-cover object-center rounded-xl">
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100">
                <button class="flex items-center justify-center" @click="cartStore.removeItem(item.title)">
                    <Icon class="icon w-32 h-32 text-pink-400" name="mage:trash"/>
                </button>
            </div>
        </div>
        <div class="p-4 flex flex-row gap-4 items-center justify-around w-full">
          <h2 class="text-xl font-semibold text-gray-800 text-center">{{ item.title }}</h2>
          <p class="text-gray-600">{{ item.price }}€</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
    import { useCartStore, useAuthStore } from '~/stores/auth';
    const cartStore = useCartStore();
    const authStore = useAuthStore();

    defineProps({
        items : Object,
    })
  </script>
  
  <style scoped>

    img:hover {
        opacity: 0.8;
    }

  </style>
  