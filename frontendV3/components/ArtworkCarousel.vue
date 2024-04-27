
<template>
  <UCarousel v-if="!fetching" v-slot="{ item }" :items="imageUrls" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3 snap-start' }" class="rounded-lg overflow-hidden" indicators arrows>
        <img :src="item" class="object-cover" draggable="false">
  </UCarousel>

  <CarouselSkeleton v-if="fetching" />
</template>

<script setup>
const fetching = ref(true)
const imageUrls = ref([])

onBeforeMount(() => {
  useListArtworks()
})

onMounted(() => {
  useListArtworks()
})

async function useListArtworks () {
    const { data, error, pending } = await useFetch('https://arthub-api-polished-breeze-902.fly.dev/api/v1/randomArtworks/', {
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
