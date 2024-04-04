<template>
    <section class="artworks-deck flex justify-center items-center" :userArtworks="userArtworks">
      <article v-for="userArtwork in userArtworks" :key="userArtwork.id" class="user-artwork-card" >
        <div class="user-artwork-card-title">
          <h5>{{ userArtwork.title }}</h5>
        </div>
        <div class="user-artwork-card-image-container">
          <img :src="userArtwork.image_url" :alt="userArtwork.title" />
        </div>
        <div class="user-artwork-card-buttons">
          <NuxtLink :to="'artworks/' + userArtwork.id" class="button" as="button">✏️</NuxtLink>
          <NuxtLink :to="'/artworks/' + userArtwork.id" method="DELETE" as="button" class="button">❌</NuxtLink>
        </div>
      </article>
    </section>
</template>

<script setup>

defineProps({
  userArtworks : Object,
})

</script>

<style>

.artworks-title {
  font-size: 30px;
  font-weight: bold;
  color: #151515af;
}

.artworks-deck {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  align-items: center;
  place-content: center;
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
  padding: 10px;
  

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
    width: 100%;
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
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .button {
      text-align: center;
      width: 20%;
      border: 2px solid  #b9bbbe;
      background-color: #dfe1e5;
      border-radius:10px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 2px 2px 10px 0 #15151533;
    }

    button:hover {
      background-color: #b9bbbe;
      color: white;
      box-shadow:none;
    }
  }

}

</style>