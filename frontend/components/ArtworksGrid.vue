<script setup>

import { useCartStore} from '~/stores/auth'
import { debounce } from 'lodash';

const cartStore = useCartStore();
const toast = useToast()
const runtimeConfig = useRuntimeConfig()
const artworks = ref({})
const fetching = ref(false)
const searchInput = ref('')
const debounceTimeout = ref(null);

const { data, error, loading } = await useListArtworks()
if (loading) {
    fetching.value = true
}

if (data) {
    artworks.value = data.value
    fetching.value = false
}

function addToCart(id, title, price, image_url){
  toast.add({title: 'Artwork added to cart', color:'violet', icon: 'i-heroicons-currency-euro-20-solid', timeout:1000, type: 'success'})
  cartStore.addArtwork(id, title, price, image_url)
}

watch(searchInput, (newValue) => {
  if (debounceTimeout.value) clearTimeout(debounceTimeout.value);
  debounceTimeout.value = setTimeout(() => {
    artworksFiltered();
  }, 400);
})


async function artworksFiltered () {
    const runtimeConfig = useRuntimeConfig()
    const { data, error, pending } = await useFetch(`${runtimeConfig.public.baseUrl}search/artworkskbyfilter/?input=${searchInput.value}`, {
        lazy: false
    })

    if(data){
      artworks.value = data.value
    }
}
</script>

<template>
    <section class="text-xl uppercase font-bold flex flex-col items-center w-full gap-2 mb-8">
      <label for="search">
        <Icon name="i-heroicons-magnifying-glass"/>
        Search
      </label>
      <input v-model="searchInput" id="search" type="text" placeholder="Search by title, description or artist" class="form-control rounded-full font-normal bg-white">
    </section>
    <section class="container relative ">
    <article v-for="artwork in artworks" :key="artwork.id" class="card">
        <NuxtLink class="image-container" :href="'/artworks/' + artwork.id">
            <img :src="artwork.image_url" :alt="artwork.title" class="hover:brightness-110 hover:contrast-100	hover:outline outline-4 outline-yellow-300"/>
            <p class="artist"> {{ artwork.artist.user.username }}</p>
            <p class="price"> {{ artwork.price }}€</p>
        </NuxtLink>
        <div class="info flex flex-col relative">
          <div class="text-card p-1 text-center w-full">
              <h5 class="text text-xl font-bold tracking-tight text-gray-900">{{ artwork.title }}</h5>
              <p class="text2 font-normal text-gray-700">{{ artwork.description }}</p>      
          </div>
          <button class="cart-button" @click="addToCart(artwork.id, artwork.title, artwork.price, artwork.image_url)">
              <Icon class="icon" name="carbon:shopping-cart-arrow-down"/>
          </button>
        </div>
    </article>
  </section>
</template>

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
  width: 100%;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: fill;
  object-position: center;
  border-radius: 10px;
}

.artist {
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

.price {
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin:auto;
  font-size: 20px;
  font-weight: bold;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 10px;
  border-radius: 10px;
}

.cart-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 10%;
  bottom: 10px;
  right: 10px;
  margin:auto;
  font-size: 1.8rem;
  padding: 0.6rem;
  border-radius: 10px;
}

.cart-button svg {
  color: #9334E9;
}

.cart-button:hover {
  color: #9334E9;
  background-color: #f473b5;
  border-radius:10px;
  padding: 0.5rem;
}


.text-card {
  border-bottom: 1px solid #00000055;
}

@media (width <= 650px) {
  .container{
    display: flex;
    flex-direction: column;
  }

  .text{
    font-size: 1rem !important;
  }

  .text2{
    font-size: 0.7rem !important;
  }
  .cart-button{
    width:auto;
  }
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px; /* Cantos redondos */
  margin-bottom: 10px;
  box-sizing: border-box;
  }

</style>