<template>
        <ArtworkShowSkeleton v-if="pendingFetch" />
        <div class="flex flex-col h-100" v-if="!pendingFetch">
            <section class="flex flex-row gap-8 text-center items-center justify-center h-2/6">
                <h1 class="title drop-shadow-xl">{{ user.username }}</h1>              
            </section>
            <section class="flex flex-row gap-8 h-4/6">
                <article class="w-1/2">     
                    <div class="image-container h-full flex items-center justify-center">
                        <img :src="user.avatar" :alt="user.username" class="max-w-full max-h-full"> 
                    </div>
                </article>
                <article class="w-1/2">
                        <div class="details-container flex flex-col items-center justify-around h-full space-y-4 text-slate-900">
                            <h1 class="title drop-shadow-xl">{{ user.first_name }}</h1>
                            <p class="title drop-shadow-xl">{{ user.last_name }}</p>
                            <p class="info uppercase">{{ user.email }}</p>
                        </div>
                </article>
            </section>
        </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
import { useUserLoggedData } from '@/composables/useUserLoggedData'
import { set } from 'zod';
const route = useRoute()
const params = route.params
const id = ref(params.id)
const pendingFetch = ref(true)
const fetchData = ref({})

const artist = ref({
    first_name: "",
    last_name: "",
    avatar: "",
})

const user = ref({
    username: "",
    fist_name:"",
    last_name:"",
})

onMounted( async () => {
    fetchArtist(id.value)
    setTimeout(() => {
        pendingFetch.value = false
    }, 1000)
})
    async function fetchArtist(artistId) {
    
    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}artists/${artistId}/`, {
    })
    if (data) {
        fetchData.value = data.value
        artist.value.nickname = fetchData.value.nickname
        user.value = data.value.user
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