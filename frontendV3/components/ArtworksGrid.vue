<template>
    <section class="container">
            <div class="" v-for="artist in artists" :key="artist.id">
                <div class="artworks-grid">
                    <div class="artwork" v-for="artwork in artist.artworks" :key="artwork.id">
                        <NuxtLink class="image-container" :to="'/artworks/' + artwork.id">
                            <img :src="artwork.image_url" :alt="artwork.title" />
                            <p> {{ artist.user.name }}</p>
                        </NuxtLink>
                        <div class="">
                            <h5 class="">{{ artwork.title }}</h5>
                            <p class="">{{ artwork.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<style>

.artworks-grid {
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
  

<script setup>

const artists = ref({})

const { data, error, loading } = await useListArtworks()

if (data) {
    artists.value = data.value
}

</script>

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