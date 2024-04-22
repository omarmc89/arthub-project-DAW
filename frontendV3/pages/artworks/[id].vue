<template>
        <ArtworkShowSkeleton v-if="pendingFetch" />
        <div class="flex flex-col h-100" v-if="!pendingFetch">
            <section class="flex flex-row gap-8 text-center items-center justify-center h-2/6">
                <h1 class="title drop-shadow-xl">{{ artwork.title }}</h1>              
            </section>
            <section class="flex flex-row gap-8 h-4/6">
                <article class="w-1/2">     
                    <div class="image-container h-full flex items-center justify-center">
                        <img :src="artwork.image_url" :alt="artwork.title" class="max-w-full max-h-full"> 
                    </div>
                </article>
                <article class="w-1/2">
                        <div class="details-container flex flex-col items-center justify-around h-full space-y-4 text-slate-900">
                            <h1 class="title drop-shadow-xl"> 🧑🏽‍💻 {{ user.username }}</h1>
                            <p class="info border-2 bg-slate-800 bg-opacity-30 rounded-xl">{{ artwork.description }}</p>
                            <p class="info uppercase">{{ artworkDetails.style }}</p>
                            <p class="info">{{ artwork.price }} € </p>
                            <div v-if="!isPhoto">
                                <p class="info">Width: {{ artworkDetails.width }}</p>
                                <p class="info">Height: {{ artworkDetails.height }}</p>
                            </div>
                        </div>
                </article>
            </section>
        </div>
</template>

<script setup>
import { useUserLoggedData } from '@/composables/useUserLoggedData'
import { set } from 'zod';
const route = useRoute()
const params = route.params
const id = ref(params.id)

const isPhoto = ref(true)
const pendingFetch = ref(true)
const fetchData = ref({})

const artworkDetails = ref({
    style: '',
    width: '',
    height:'',
})

const artwork = ref({
    title: '', 
    description: '',
    image_url: '',
    price: '',
    style: '',
    width: '',
    height: '',
})
const user = ref({
    username: ''
})


const artist = ref({})

onMounted( async () => {
    fetchArtwork(id.value)
    setTimeout(() => {
        pendingFetch.value = false
    }, 1000)
})
    async function fetchArtwork(artworkId) {
    const { data, error } = await useFetch(`http://localhost:8000/api/v1/artworkDetails/?id=${artworkId}`, {
    })
    if (data) {
        fetchData.value = data.value
        artwork.value = fetchData.value.artwork
        artist.value = artwork.value.artist
        artworkDetails.value = data.value.photo ? data.value.photo : data.value.painting
        isPhoto.value = data.value.photo !== undefined ? true : false
        artwork.value.style = artworkDetails.value.style
        artwork.value.width = artworkDetails.value.width
        artwork.value.height = artworkDetails.value.height
        user.value = artist.value.user
    }
    if (error) {
        console.log(error)
    }
}

</script>

<style scoped>
    .title {
    font-family: 'Garute';
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 1rem;
    text-align: center;
}

.info {
    font-family: 'Afacad';
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
}
/* 
.image-container {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
} */
</style>