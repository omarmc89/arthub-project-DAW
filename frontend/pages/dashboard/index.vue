<template>
  <ClientDashboard v-if="userType=='client'" :clientId="clientId"/>
  <UContainer v-if="userType=='client'" class="w-6/12 my-8">
    <UButton @click="handleFormVisibility" label="Click if you want create and address!" icon="i-heroicons-pencil-square" color="black" block></UButton>
    <section class="form-wrapper mt-8" v-if="!hiddenForm">
      <form class="artwork-form space-y-4 text-slate-900" @submit.prevent="createAddress">
        <section class="form-label my-4 flex flex-row gap-8">
          <div>
            <div class="flex flex-col items-center justify-center">
              <label for="street">Street</label>
              <input v-model="address.street" id="street" name="street" type="text" class="form-control rounded-full bg-white">
            </div>
  
            <div class="flex flex-col items-center justify-center">
              <label for="city">City</label>
              <input v-model="address.city" id="city" name="city" type="text" class="form-control rounded-full bg-white">
            </div>
  
            <div class="flex flex-col items-center justify-center">
              <label for="postal_code">Postal Code</label>
              <input v-model="address.postal_code" id="postal_code" name="postal_code" type="text" class="form-control rounded-full bg-white">
            </div>
  
            <div class="flex flex-col items-center justify-center">
              <label for="country">Country</label>
              <input v-model="address.country" id="country" name="country" type="text" class="form-control rounded-full bg-white">
            </div>
          </div>
        </section>
        <button type="submit" :disabled="pendingFetch" class="btn">
          <span v-if="pendingFetch">Submitting...</span>
          <span v-else>Submit</span>
        </button>
      </form>
    </section>
        <p v-if="dataFetchAddress" class="text-lg text-center text-lime-500">Address created!</p>
        <p v-if="errorFetchAddress" class="text-lg text-center text-red-600">Error creating address</p>
  </UContainer>
  <UContainer v-if="userType=='artist'" class="w-6/12 my-8">
    <UButton @click="handleFormVisibility" label="Click if you want upload an artowork!" icon="i-heroicons-pencil-square" color="black" block></UButton>
    <section class="form-wrapper mt-8" v-if="!hiddenForm">
      <form class="artwork-form space-y-4 text-slate-900" @submit.prevent="createArtwork">
        <USelect class="text-red-400" color="violet" variant="outline" size="xl" icon="i-carbon-fetch-upload-cloud" v-model="type" placeholder="Select if you want to upload a photo or painting" :padded="true" :options="options" />
        <section class="form-label my-4 flex flex-row gap-8">
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
          </div>
          <div v-if="type !== ''">
            <div v-if="type !== ''" class="form-label">
              <label for="style">Style</label>
              <input v-model="artwork.style" id="style" name="style" type="text" class="form-control rounded-full bg-white">
            </div>
  
            <div v-if="type === 'Painting'" class="form-label">
              <label for="width">Width</label>
              <input v-model="artwork.width" id="width" name="width" type="text" class="form-control rounded-full bg-white">
            </div>
  
            <div v-if="type === 'Painting'" class="form-label">
              <label for="height">Height</label>
              <input v-model="artwork.height" id="height" name="height" type="text" class="form-control rounded-full bg-white">
            </div>
          </div>
        </section>
        <button type="submit" :disabled="pendingFetch" class="btn">
          <span v-if="pendingFetch">Submitting...</span>
          <span v-else>Submit</span>
        </button>
      </form>
    </section>
        <p v-if="dataFetch" class="text-lg text-center text-lime-500">Artwork created!</p>
        <p v-if="errorFetch" class="text-lg text-center text-red-600">Error creating artwork</p>
  </UContainer>
    <section class="flex flex-row items-center justify-around">
      <ArtworkSkeleton v-if ="userArtworksLoading"  />
      <UserArtworksList v-if="!userArtworksLoading" :userArtworks="userArtworks" @artworkId="setDeleteArtworkId" />
    </section>
    <UModal v-model="deleteModal">
      <UCard class="flex flex-col w-full items-center justify-center" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-100'}">
        <template #header>
          <h3 class="h-8 text-xl font-bold drop-shadow-lg text-slate-900">Confirmation</h3>
        </template>

        <p class="h-32 text-slate-800 text-center">Are you sure to delete Artwork?</p>
        <button class="w-full bg-red-400 text-slate-200 text-center rounded-xl h-12 text-xl font-bold hover:text-slate-900 hover:bg-red-600" @click="deleteArtwork(deleteArtworkId)">Borrar</button>
        <template #footer>
          <small class="h-8 text-xl text-red-400">Delete is not reversible</small>
        </template>
      </UCard>
    </UModal>

</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
import { useUserLoggedData } from '@/composables/useUserLoggedData'
import { useCreateArtwork } from '@/composables/useCreateArtwork';
import { useAuthStore } from '~/stores/auth';
import UserArtworksList from '~/components/UserArtworksList.vue';

const authStore = useAuthStore();
const toast = useToast();
const { userLogged, userType, artistId, clientId } = storeToRefs(useAuthStore());
const type = ref('Painting')
const dataFetch = ref('')
const errorFetch = ref('')
const dataFetchAddress = ref('')
const errorFetchAddress = ref('')
const pendingFetch = ref(false)
const artistDataLoaded = ref(false)
const userArtworks = ref({})
const userArtworksLoading = ref(false)
const hiddenForm = ref(true)
const artworkCreated = ref(1)
const loadingArtistData = ref(true)
const deleteModal = ref(false);
const deleteArtworkId = ref('');
let artistData = {}
const allFetched = ref(false)
const test = ref(true)
const id = artistId.value
const runtimeConfig = useRuntimeConfig()


const route = useRoute()
console.log(route.path)

const options = [{
    name: 'Painting',
    value: 'Painting'
    },
    {
    name: 'Photo',
    value: 'Photo'
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
const address = ref({
    street: '',
    city: '',
    postal_code: '',
    country: '',
})

onBeforeMount(async() => {
    chargeAllData()
});

onMounted(async () => {
    chargeAllData()
});

function handleFormVisibility(){
    hiddenForm.value = !hiddenForm.value
}

async function chargeAllData() {
  try {

    loadingArtistData.value = true
    if (userType.value === 'artist') {

      userArtworksLoading.value = true
        fetchArtworks(id)
      loadingArtistData.value = false
    }
  } catch (error) {
    console.error('Error fetching user artworks:', error);
  }
}

const createArtwork = async () => {
    const fetchingData = {
        ...artwork.value,
        type: type.value.toLowerCase(),
        artistId: artistId.value
    }
        pendingFetch.value = true
        const { data, error } = await useCreateArtwork(fetchingData)

        if (error.value) {
            errorFetch.value = error
            pendingFetch.value = false
        }
        if(data.value){
            errorFetch.value = ''
            dataFetch.value = data
            pendingFetch.value = false
            artoworkCreatedOk()
        }
}

const createAddress = async () => {
   const fetchingData = {
        ...address.value,
        client_id: authStore.clientId
    }
        pendingFetch.value = true
        const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}addresses/`, {
            method: 'POST',
            body: JSON.stringify(fetchingData)
        })

        if (error.value) {
          errorFetchAddress.value = error
            pendingFetch.value = false
        } 
        if(data.value) {
            errorFetchAddress.value = ''
            dataFetchAddress.value = data
            pendingFetch.value = false
            addressCreatedOk()
        }
}

function artoworkCreatedOk() {
    toast.add({ title: 'Congratulations! Artwork created!',
            timeout: 1500})
    resetForm()
    dataFetch.value = false
    errorFetch.value = false
    hiddenForm.value = true
    artworkCreated.value += 1
    useScrollToTop() 
}
function addressCreatedOk() {
    toast.add({ title: 'Congratulations! Address created!',
            timeout: 1500})
    resetAddressForm()
    dataFetchAddress.value = false
    errorFetchAddress.value = false
    hiddenForm.value = true
    useScrollToTop() 
}

watch(artworkCreated, (newValue, oldValue) => {
  if (newValue > oldValue) {
    fetchArtworks(id)
  }
})

async function fetchArtworks(idArtist) {
    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}search/artworkbyuser/?id=${idArtist}`, {
        watch: [artworkCreated],
    })
    if (data) {
        userArtworksLoading.value = false
        userArtworks.value = data.value
    }
}

async function deleteArtwork(artworkId) {
  try {
    await useFetch(`${runtimeConfig.public.baseUrl}artworks/${artworkId}/`, {
      method: 'DELETE'
    } )
    artworkCreated.value += 1
    deleteModal.value = false
    userArtworksLoading.value = true
    useScrollToTop()
    toast.add({ title: 'Artwork deleted', timeout: 1500, color:"red"})

  } catch (error) {
    console.error('Error deleting or creating artwork:', error);
  }
}

function setDeleteArtworkId(artworkId) {
  console.log('Artwork ID:', artworkId);
  deleteArtworkId.value = artworkId;
  deleteModal.value = true;
}

function resetForm() {
  artwork.value.title= ''
  artwork.value.description= ''
  artwork.value.image_url= ''
  artwork.value.price= ''
  artwork.value.style= ''
  artwork.value.width= ''
  artwork.value.height= ''
}

function resetAddressForm() {
  address.value.street= ''
  address.value.city= ''
  address.value.postal_code= ''
  address.value.country= ''
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

  .artwork-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-label {
    width: 100%;
    max-width: 1000px;
  }
  .form-label label{
    font-size: 1.5rem;
    font-family: 'Garute';
}

.form-label input{
    font-size: 1.2rem;
    font-family: 'Afacad';
    font-weight: 500;
    color: #818cf8;
    text-transform: uppercase;
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

</style>~/stores/auth