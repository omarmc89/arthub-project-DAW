<template>
    <section class="artworks-deck flex justify-center items-center" :userArtworks="userArtworks">
      <article v-for="userArtwork in userArtworks" :key="userArtwork.id" class="user-artwork-card" >
        <div class="user-artwork-card-title capitalize">
          <h5>{{ userArtwork.title }}</h5>
        </div>
        <div class="user-artwork-card-image-container">
          <img :src="userArtwork.image_url" :alt="userArtwork.title"/>
        </div>
        <div class="user-artwork-card-buttons">
          <UButton @click="artworkRedirect(userArtwork.id)" variant="ghost" size="xl" icon="i-carbon-pending" color="violet" class="button"></UButton>
          <UButton @click="$emit('artworkId', userArtwork.id)" variant="outline" size="xl" icon="i-carbon-trash-can" color="red" class="button"></UButton>
        </div>
      </article>
    </section>
</template>

<script setup>

defineProps({
  userArtworks : Object,
})
const route = useRoute()
const params = route.params

const toast = useToast();


function artworkRedirect(artworkId) {

  if (route.path === '/dashboard') {
    navigateTo('dashboard/' + artworkId)
  } else {
    navigateTo('/artworks' + artworkId)
  }

}


</script>

<style>

.artworks-title {
  font-size: 30px;
  font-weight: bold;
  color: #151515af;
}

.artworks-deck {
  display: grid;
  /* width: 100%;
  height: 100%; */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Cambiado auto-fill por auto-fit */
  grid-auto-rows: 1fr;
  align-items: center;
  justify-content: center; /* Modificado de place-content a justify-content */
  gap: 10px;
  padding: 20px;
}

.alert {
  width:100%;
  background-color: rgba(249, 95, 95, 0.621);
  font-size: 15px;
  font-weight: bold;
  display:flex;
  justify-content: space-between;
  padding: 5px 15px;
  color: #151515af;
}

.user-artwork-card {
  height: 100%;
  border-bottom: 1px solid #b9bbbe;

  .user-artwork-card-title {
    width: 100%;
    text-align: center;
    height: 10%;
    display:flex;
    align-items: center;
    justify-content:center;
    font-weight: bold;
    letter-spacing: 2px;
    color: #151515af
  }

  .user-artwork-card-image-container {
    height: 75%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgb(93, 93, 93);
      border: 1px solid #5556589d;
    }
  }

  .user-artwork-card-buttons {
    /* width: 100%; */
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

</style>