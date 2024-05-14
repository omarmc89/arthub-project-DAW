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
    <section class="text-xl uppercase font-bold flex flex-row items-center justify-center w-full gap-2 mb-8">
      <label for="search">
        <Icon class="w-10 h-10" name="twemoji:magnifying-glass-tilted-left"/>
      </label>
      <input v-model="searchInput" id="search" type="text" placeholder="Search by title, description or artist" class="form-control rounded-full font-normal bg-white">
    </section>
    <section class="container relative ">
    <article v-for="artwork in artworks" :key="artwork.id" class="card flex flex-col">
        <NuxtLink class="image-container" :href="'/artworks/' + artwork.id">
            <img :src="artwork.image_url" :alt="artwork.title" class="hover:brightness-110 hover:contrast-100	hover:outline outline-4 outline-yellow-300"/>
            <p class="artist"> {{ artwork.artist.user.username }}</p>
            <p class="price"> {{ artwork.price }}€</p>
        </NuxtLink>
        <div class="mobile-info flex flex-row relative hidden mt-2">
          <h5 class="text uppercase text-xl font-bold tracking-tight bg-purple-200 p-1 px-2 rounded-xl text-gray-900">{{ artwork.artist.user.username }}</h5>
          <h5 class="text text-xl font-bold tracking-tight text-gray-900 bg-green-200 p-1 px-2 rounded-xl flex gap-1 items-center justify-center">{{ artwork.price }} <Icon class="h-4 w-4" name="ic:baseline-euro"/></h5>
          <button class="cart-button-mobile" @click="addToCart(artwork.id, artwork.title, artwork.price, artwork.image_url)">
              <Icon class="icon w-8 h-8" name="fluent-emoji-flat:shopping-cart"/>
          </button>           
        </div>
        <div class="info flex flex-col relative">
          <div class="text-card p-1 text-center w-full">
              <h5 class="text text-xl font-bold tracking-tight text-gray-900">{{ artwork.title }}</h5>
              <p class="text2 font-normal text-gray-700">{{ artwork.description }}</p>      
          </div>
          <button class="cart-button" @click="addToCart(artwork.id, artwork.title, artwork.price, artwork.image_url)">
              <Icon class="icon" name="fluent-emoji-flat:shopping-cart"/>
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
  border: 1px solid #232124;
  border-radius:10px;
  padding: 0.5rem;
  transform: scale(1.2);
  box-shadow: 0 0 8px #262428;
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

  .artist,
  .price,
  .cart-button {
    display: none;
  }

  .image-container img {
    margin: 0;
    padding: 0;
  }

  .mobile-info {
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  .info{
    order:-1;
    margin-bottom: 1rem;
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
