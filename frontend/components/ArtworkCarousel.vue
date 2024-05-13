
<template>
  <UCarousel v-if="!fetching" v-slot="{ item }" :items="imageUrls" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3 snap-start' }" class="carousel rounded-lg overflow-hidden" indicators arrows>
        <img :src="item" class="object-cover" draggable="false">
  </UCarousel>

  <CarouselSkeleton v-if="fetching" />
</template>

<script setup>
const fetching = ref(true)
const imageUrls = ref([])
const runtimeConfig = useRuntimeConfig()


onBeforeMount(() => {
  useListArtworks()
})

onMounted(() => {
  useListArtworks()
})

async function useListArtworks () {
    const { data, error, pending } = await useFetch(runtimeConfig.public.baseUrl +'randomArtworks/', {
      method: 'GET'
    
    })
    if (error.value) {
      console.error('Error fetching artworks:', error.value)
    }
    if (data.value) {
        imageUrls.value = Object.values(data.value).map(artwork => artwork.image_url);
        fetching.value = false
    }
}

</script>


<style scoped>

@media (width <= 650px) {
  
  .carousel {
    width: 65%;
  }

}
</style>
