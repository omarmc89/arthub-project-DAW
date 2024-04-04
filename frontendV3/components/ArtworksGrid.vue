<script setup>

const artworks = ref({})
const fetching = ref(false)

const { data, error, loading } = await useListArtworks()
if (loading) {
    fetching.value = true
}

if (data) {
    artworks.value = data.value
    fetching.value = false

}
</script>

<template>
    <section class="container">
    <article v-for="artwork in artworks" :key="artwork.id" class="card">
        <NuxtLink class="image-container" :href="'/artworks/' + artwork.id">
          <img :src="artwork.image_url" :alt="artwork.title" />
          <p> {{ artwork.artist.user.username }}</p>
        </NuxtLink>
      <div class="text-card p-1 text-center">
          <h5 class="text-xl font-bold tracking-tight text-gray-900">{{ artwork.title }}</h5>
          <p class="font-normal text-gray-700">{{ artwork.description }}</p>
      </div>
    </article>
  </section>
</template>

<style>

.container {
  columns:2;
  padding: 16px 32px;
  column-gap: 32px; 
}

.container .card{
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  border-radius: 10px;
  break-inside: avoid;
}

.image-container {
  position:relative;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: fill;
  object-position: center;
  border-radius: 10px;
}

.image-container p {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  font-weight: bold;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 10px;
  border-radius: 10px;
}

.text-card {
  border-bottom: 1px solid #00000055;

}
</style>