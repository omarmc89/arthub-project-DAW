<template>
    <section class="flex flex-row">
        <article class="image-container">
            <img v-if="artwork.image_url !== ''" :src="artwork.image_url" :alt="artwork.title"/>
            <USkeleton v-if="artwork.image_url===''" class="h-[600px] w-[500px] mr-32" :ui="{ rounded: 'rounded-xl' }" />
        </article>
        <article class="form-container flex items-center justify-center">
            <form class="artwork-form space-y-4 text-slate-900" @submit.prevent="updateArtwork">
                    <div>
                        <div class="form-label">
                            <label for="title">Title</label>
                            <input v-model="artwork.title" id="title" name="title" type="text" class="form-control rounded-full bg-white">
                        </div>
                        <div class="form-label">
                            <label for="description">Description</label>
                            <input v-model="artwork.description" id="description" name="description" type="text" class="form-control rounded-full bg-white">
                        </div>
                        <div class="form-label">
                            <label for="image_url">Image URL</label>
                            <input v-model="artwork.image_url" id="image_url" name="image_url" type="text" class="form-control rounded-full bg-white">
                        </div>
                        <div class="form-label">
                            <label for="price">Price</label>
                            <input v-model="artwork.price" id="price" name="price" type="text" class="form-control rounded-full bg-white">
                        </div>

                        <div v-if="isPhoto && artworkDetails" class="form-label">
                            <label for="style">Style</label>
                            <input v-model="artwork.style" id="style" name="style" type="text" class="form-control rounded-full bg-white">
                        </div>
                        <div v-if="!isPhoto && artworkDetails" class="form-label">
                            <label for="width">Width</label>
                            <input v-model="artwork.width" id="width" name="width" type="text" class="form-control rounded-full bg-white">
                        </div>
                        <div v-if="!isPhoto && artworkDetails" class="form-label">
                            <label for="height">Height</label>
                            <input v-model="artwork.height" id="height" name="height" type="text" class="form-control rounded-full bg-white">
                        </div>
                    </div>
                <button type="submit" :disabled="pendingFetch" class="btn btn-primary">
                    <span v-if="pendingFetch">Submitting...</span>
                    <span v-else>Submit</span>
                </button>
            </form>
        </article>
    </section>
    
</template>

<script setup>
    import { useUserLoggedData } from '@/composables/useUserLoggedData'
    import { useUpdateArtwork } from '@/composables/useUpdateArtwork';
    
    const toast = useToast();
    const route = useRoute()
    const router = useRouter()
    const params = route.params
    const id = ref(params.id)
    const isPhoto = ref(true)
    const pendingFetch = ref(false)
    const dataFetch = ref('')
    const errorFetch = ref('')
    const imageFetched = ref(false)


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

    let artistData = await useUserLoggedData();

onMounted(() => {
    fetchArtwork(id.value)
})
    async function fetchArtwork(artworkId) {
    const { data, error } = await useFetch(`https://arthub-api-polished-breeze-902.fly.dev/api/v1/artworkDetails/?id=${artworkId}`, {
        // watch: [artworkCreated],
    })
    if (data) {
        imageFetched.value = true
        artwork.value = data.value.artwork
        artworkDetails.value = data.value.photo ? data.value.photo : data.value.painting
        isPhoto.value = data.value.photo !== undefined ? true : false
        artwork.value.style = artworkDetails.value.style
        artwork.value.width = artworkDetails.value.width
        artwork.value.height = artworkDetails.value.height
    }
    if (error) {
        console.log(error)
    }
}

const updateArtwork = async () => {  
    const fetchingData = {
        ...artwork.value,
        type: isPhoto.value ? 'photo' : 'painting',
        artworkId: id.value
        }

        pendingFetch.value = true
        const { data, error } = await useUpdateArtwork(fetchingData)

        if (error) {
            errorFetch.value = error
            pendingFetch.value = false

        } else {
            errorFetch.value = ''
            dataFetch.value = data
            pendingFetch.value = false
            artoworkUpdateOk()
        }
}

function artoworkUpdateOk() {
    toast.add({ title: 'Congratulations! Artwork updated!',
            timeout: 1500,  callback: () => {
        setTimeout(() => {
            navigateTo('/dashboard');
        }, 250)}
    })             
    dataFetch.value = ''
    errorFetch.value = ''
    artworkCreated.value += 1
}

// watch(() => artwork.value.image_url, (newValue, oldValue) => {
//   // Verifica si la nueva URL de la imagen no es una cadena vacía y es diferente de la anterior
//   if (newValue !== '' && newValue !== oldValue && !imageFetched) {
//     artwork.value.image_url = 'https://cdn-icons-png.flaticon.com/512/3616/3616929.png'
//   }
// });

</script>

<style scooped>
.container {
    --uib-size: 45px;
    --uib-color: black;
    --uib-speed: 1.75s;
    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
    animation: rotate calc(var(--uib-speed) * 4) linear infinite;
}
.image-container {
    flex: 1; /* Toma todo el espacio disponible */
    margin-right: 20px; /* Espacio entre la imagen y el formulario */
}

.form-container {
    flex: 1; /* Toma todo el espacio disponible */
}

  .artwork-form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra horizontalmente los elementos del formulario */
  }

  .form-label {
    width: 100%;
    max-width: 1000px; /* Ancho máximo del formulario */
  }

  .form-control {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 20px; /* Cantos redondos */
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 20px; /* Cantos redondos */
    background-color: #232c33;
    color: #e1e9ec;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #e1e9ec;
    color: #232c33;
  }
</style>