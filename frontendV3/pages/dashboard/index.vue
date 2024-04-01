<template>
    <UContainer class="w-6/12 my-8">
        <div class="form-label my-4 ">
            <label to="type" class="">
                Select type of artwork
            </label>
            <USelect v-model="type" placeholder="Painting or Photo" :options="options" />
        </div>
        <UForm :state="artwork" class="artwork-form space-y-4 text-slate-900" @submit="createArtwork">

            <UFormGroup label="Title" name="title" class="form-label">
            <UInput v-model="artwork.title" />
            </UFormGroup>

            <UFormGroup label="Description" name="description" class="text-slate-900">
            <UInput v-model="artwork.description" type="description" />
            </UFormGroup>

            <UFormGroup label="Image url" name="image_url" class="text-slate-900">
            <UInput v-model="artwork.image_url" type="image_url" />
            </UFormGroup>

            <UFormGroup  label="Price" name="price" class="text-slate-900">
            <UInput v-model="artwork.price" type="price" />
            </UFormGroup>

            <UFormGroup v-if="type !== ''" label="Style" name="style" class="text-slate-900">
            <UInput v-model="artwork.style" type="style" />
            </UFormGroup>

            <UFormGroup v-if="type === 'painting'" label="Width" name="width" class="text-slate-900">
            <UInput v-model="artwork.width" type="width" />
            </UFormGroup>

            <UFormGroup v-if="type === 'painting'" label="Height" name="height" class="text-slate-900">
            <UInput v-model="artwork.height" type="height" />
            </UFormGroup>

            <UButton type="submit" :loading="pendingFetch">
                Submit
            </UButton>
        </UForm>
        <p v-if="dataFetch">Artwork created</p>
        <p v-if="errorFetch">Error creating artwork</p>
    </UContainer>
</template>

<script setup>
import { useUserLoggedData } from '@/composables/useUserLoggedData'
import { useCreateArtwork } from '@/composables/useCreateArtwork';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const options = [{
    name: 'Painting',
    value: 'painting'
    },
    {
    name: 'Photo',
    value: 'photo'
    }
]

const type = ref('')
const dataFetch = ref('')
const errorFetch = ref('')
const pendingFetch = ref(false)
let artistData = {}

const artwork = ref({
    title: '',
    description: '',
    image_url: '',
    price: '',
    style: '',
    width: '',
    height: '',
})

onMounted( async () => {
    artistData = await useUserLoggedData()
})



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
            dataFetch.value = data
            pendingFetch.value = false
        }

}
</script>

<style scoped>
    label {
        color: var(--text-color);
    }
</style>