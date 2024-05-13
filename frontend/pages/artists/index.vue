<template>
  <section class="container">
  <article v-for="artist in artists" :key="artist.id" class="card">
      <NuxtLink class="flex flex-col items-center justify-stretch" :href="'/artists/' + artist.id + '/'">
        <img :src="artist.user.avatar" :alt="artist.user.first_name" class="rounded-xl my-4 w-96 h-96 object-cover " />
        <p> {{ artist.user.username }}</p>
        <div class="text-card p-1 text-center">
            <h5 class="text-xl font-bold tracking-tight text-gray-900">
              <span>{{ artist.user.first_name }}</span>
              <span>&nbsp;</span>
              <span>{{ artist.user.last_name }}</span>
            </h5>
        </div>
      </NuxtLink>
  </article>
</section>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

const artists = ref({
  first_name: "",
  last_name: "",
  avatar: "",
  user: {
    username: "",
    fist_name:"",
    last_name:"",
  }
})
const fetching = ref(false)

const { data, error, loading } = await useListArtists()
  if (loading) {
    fetching.value = true
  }
  if (data) {
    artists.value = data.value
    fetching.value = false
}
</script>

<style scoped>

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