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
          <UButton @click="navigateTo('artworks/' + userArtwork.id)" variant="ghost" size="xl" icon="i-carbon-pending" color="violet" class="button"></UButton>
          <!-- <NuxtLink :to="'artworks/' + userArtwork.id" class="button" as="button"></NuxtLink> -->
          <UButton @click="setDeleteArtworkId(userArtwork.id)" variant="outline" size="xl" icon="i-carbon-trash-can" color="red" class="button"></UButton>
        </div>
      </article>

      <!-- <UModal v-model="deleteModal">
      <div class="p-4">
        <section class="h-48 flex flex-col">
          Are you sure?
          <UButton @click="deleteArtwork(deleteArtworkId)">Borrar</UButton>
        </section>
      </div>
    </UModal> -->
    <UModal v-model="deleteModal">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-100'}">
        <template #header>
          <h3 class="h-8 text-white">Confirmation</h3>
        </template>

        <p class="h-32 text-white">Are you sure to delete Artwork?</p>
        <UButton @click="deleteArtwork(deleteArtworkId)">Borrar</UButton>
        <template #footer>
          <small class="h-8 text-white">Delete is not reversible</small>
        </template>
      </UCard>
    </UModal>
    </section>
</template>

<script setup>

defineProps({
  userArtworks : Object,
})

const deleteModal = ref(false);
const deleteArtworkId = ref('');

function setDeleteArtworkId(artworkId) {
  deleteArtworkId.value = artworkId;
  deleteModal.value = true;
}

async function deleteArtwork(artworkId) {
  try {
    await useFetch(`http://localhost:8000/api/v1/artworks/${artworkId}/`, {
      method: 'DELETE'
    } )
  } catch (error) {
    console.error('Error deleting or creating artwork:', error);
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
    /* width: 100%; */
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* .button {
      text-align: center;
      border: 2px solid  #b9bbbe;
      background-color: #dfe1e5;
      border-radius:10px;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 2px 2px 10px 0 #15151533;
    } */

    /* button:hover {
      background-color: #b9bbbe;
      color: white;
      box-shadow:none;
    } */
  }

}

</style>