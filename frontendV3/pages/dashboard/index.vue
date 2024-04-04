<template>
    <UContainer class="w-6/12 my-8">
        <UButton @click="handleFormVisibility" label="Click if you want upload an artowork!" icon="i-heroicons-pencil-square" color="purple" block></UButton>
        <div class="form-label my-4 ">
            <!-- <label to="type" class="">
                Select type of artwork
            </label> -->
        </div>
        <form v-if="!hiddenForm" class="artwork-form space-y-4 text-slate-900" @submit.prevent="createArtwork">
            <USelect v-model="type" placeholder="Select if you want to upload a photo or painting" :options="options" />
            <div class="form-label my-4">
            </div>

            <div class="form-label">
                <label for="title">Title</label>
                <input v-model="artwork.title" id="title" name="title" type="text" class="form-control">
            </div>

            <div class="form-label">
                <label for="description">Description</label>
                <input v-model="artwork.description" id="description" name="description" type="text" class="form-control">
            </div>

            <div class="form-label">
                <label for="image_url">Image URL</label>
                <input v-model="artwork.image_url" id="image_url" name="image_url" type="text" class="form-control">
            </div>

            <div class="form-label">
                <label for="price">Price</label>
                <input v-model="artwork.price" id="price" name="price" type="text" class="form-control">
            </div>

            <div v-if="type !== ''" class="form-label">
                <label for="style">Style</label>
                <input v-model="artwork.style" id="style" name="style" type="text" class="form-control">
            </div>

            <div v-if="type === 'painting'" class="form-label">
                <label for="width">Width</label>
                <input v-model="artwork.width" id="width" name="width" type="text" class="form-control">
            </div>

            <div v-if="type === 'painting'" class="form-label">
                <label for="height">Height</label>
                <input v-model="artwork.height" id="height" name="height" type="text" class="form-control">
            </div>

            <button type="submit" :disabled="pendingFetch" class="btn btn-primary">
                <span v-if="pendingFetch">Submitting...</span>
                <span v-else>Submit</span>
            </button>
        </form>
        <p v-if="dataFetch">Artwork created</p>
        <p v-if="errorFetch">Error creating artwork</p>
    </UContainer>
    <div v-if="userArtworksLoading" class="flex flex-col justify-center items-center space-x-4">
        <h1 class="artworks-title text-bold text-xl mb-10">Loading your artworks...</h1>
        <div class="container">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>
    </div>

    <UserArtworksList :userArtworks="userArtworks" />

</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
import { useUserLoggedData } from '@/composables/useUserLoggedData'
import { useCreateArtwork } from '@/composables/useCreateArtwork';
import useListUserArtworks from '@/composables/useListUserArtworks';
import { useAuthStore } from '~/store/auth';
import UserArtworksList from '~/components/UserArtworksList.vue';


const authStore = useAuthStore();

const type = ref('')
const dataFetch = ref('')
const errorFetch = ref('')
const pendingFetch = ref(false)
const artistDataLoaded = ref(false)
const userArtworks = ref({})
const userArtworksLoading = ref(false)
const hiddenForm = ref(true)
const artworkCreated = ref(false)
let artistData = {}

const options = [{
    name: 'Painting',
    value: 'painting'
    },
    {
    name: 'Photo',
    value: 'photo'
    }
]

const artwork = ref({
    title: '',
    description: '',
    image_url: '',
    price: '',
    style: '',
    width: '',
    height: '',
})

onMounted(async () => {
  try {
    userArtworksLoading.value = true
    artistData = await useUserLoggedData();
    if (artistData) {
        fetchArtworks(artistData.id)
    }
  } catch (error) {
    console.error('Error fetching user artworks:', error);
  }
});

const createArtwork = async () => {
    const fetchingData = {
        ...artwork.value,
        type: type.value,
        artistId: artistData.id
    }
        pendingFetch.value = true
        const { data, error } = await useCreateArtwork(fetchingData)

        if (error) {
            errorFetch.value = error
            pendingFetch.value = false

        } else {
            errorFetch.value = ''
            dataFetch.value = data
            pendingFetch.value = false
            toast.add({ title: 'Congratulations! Artwork created!',
            timeout: 2000, callback:() =>  })
        }
}

async function fetchArtworks(artistId) {
    const { data, error, loading } = await useListUserArtworks(artistId)
    if (loading) {
        userArtworksLoading.value = true
    }
    if (data) {
        userArtworksLoading.value = false
        userArtworks.value = data.value
    }
}

function handleFormVisibility(){
    hiddenForm.value = !hiddenForm.value
}

function artoworkCreatedOk() {
    artworkCreated = !artworkCreated
}

</script>

<style scoped>
  .container {
    --uib-size: 45px;
    --uib-color: black;
    --uib-speed: 1.75s;
    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
    animation: rotate calc(var(--uib-speed) * 4) linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .particle {
    position: absolute;
    top: 0%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    &:nth-child(1) {
      --uib-delay: 0;
      transform: rotate(8deg);
    }
    &:nth-child(2) {
      --uib-delay: -0.4;
      transform: rotate(36deg);
    }

    &:nth-child(3) {
      --uib-delay: -0.9;
      transform: rotate(72deg);
    }
    &:nth-child(4) {
      --uib-delay: -0.5;
      transform: rotate(90deg);
    }
    &:nth-child(5) {
      --uib-delay: -0.3;
      transform: rotate(144deg);
    }
    &:nth-child(6) {
      --uib-delay: -0.2;
      transform: rotate(180deg);
    }
    &:nth-child(7) {
      --uib-delay: -0.6;
      transform: rotate(216deg);
    }
    &:nth-child(8) {
      --uib-delay: -0.7;
      transform: rotate(252deg);
    }
    &:nth-child(9) {
      --uib-delay: -0.1;
      transform: rotate(300deg);
    }
    &:nth-child(10) {
      --uib-delay: -0.8;
      transform: rotate(324deg);
    }
    &:nth-child(11) {
      --uib-delay: -1.2;
      transform: rotate(335deg);
    }
    &:nth-child(12) {
      --uib-delay: -0.5;
      transform: rotate(290deg);
    }
    &:nth-child(13) {
      --uib-delay: -0.2;
      transform: rotate(240deg);
    }
  }

  .particle::before {
    content: '';
    position: absolute;
    height: 17.5%;
    width: 17.5%;
    border-radius: 50%;
    background-color: var(--uib-color);
    flex-shrink: 0;
    transition: background-color 0.3s ease;
    --uib-d: calc(var(--uib-delay) * var(--uib-speed));
    animation: orbit var(--uib-speed) linear var(--uib-d) infinite;
  }

  @keyframes orbit {
    0% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
    5% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.684208);
      opacity: 0.58;
    }
    10% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.631576);
      opacity: 0.51;
    }
    15% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.578944);
      opacity: 0.44;
    }
    20% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.526312);
      opacity: 0.37;
    }
    25% {
      transform: translate(0%) scale(0.47368);
      opacity: 0.3;
    }
    30% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.526312);
      opacity: 0.37;
    }
    35% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.578944);
      opacity: 0.44;
    }
    40% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.631576);
      opacity: 0.51;
    }
    45% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.684208);
      opacity: 0.58;
    }
    50% {
      transform: translate(calc(var(--uib-size) * -0.5)) scale(0.73684);
      opacity: 0.65;
    }
    55% {
      transform: translate(calc(var(--uib-size) * -0.4)) scale(0.789472);
      opacity: 0.72;
    }
    60% {
      transform: translate(calc(var(--uib-size) * -0.3)) scale(0.842104);
      opacity: 0.79;
    }
    65% {
      transform: translate(calc(var(--uib-size) * -0.2)) scale(0.894736);
      opacity: 0.86;
    }
    70% {
      transform: translate(calc(var(--uib-size) * -0.1)) scale(0.947368);
      opacity: 0.93;
    }
    75% {
      transform: translate(0%) scale(1);
      opacity: 1;
    }
    80% {
      transform: translate(calc(var(--uib-size) * 0.1)) scale(0.947368);
      opacity: 0.93;
    }
    85% {
      transform: translate(calc(var(--uib-size) * 0.2)) scale(0.894736);
      opacity: 0.86;
    }
    90% {
      transform: translate(calc(var(--uib-size) * 0.3)) scale(0.842104);
      opacity: 0.79;
    }
    95% {
      transform: translate(calc(var(--uib-size) * 0.4)) scale(0.789472);
      opacity: 0.72;
    }
    100% {
      transform: translate(calc(var(--uib-size) * 0.5)) scale(0.73684);
      opacity: 0.65;
    }
  }
</style>