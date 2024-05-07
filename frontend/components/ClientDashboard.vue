<template>
    <section class="overflow-x-auto w-full">
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr class="bg-gray-100">
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">ID</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Total</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(order, index) in orders" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.created_at }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ order.total }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button class="text-indigo-600 hover:text-indigo-900 w-full flex items-center justify-center" @click="toggleModal">
                            <Icon name="heroicons:eye"></Icon>
                        </button>
                        <!-- <button class="text-red-600 hover:text-red-900 ml-2">Delete</button> -->
                    </td>
                </tr>
                <!-- Agrega más filas aquí con datos -->
            </tbody>
        </table>
    </section>

    <UModal v-model="showModal">
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
import { useAuthStore } from '~/stores/auth';

defineProps({
  clientId : String,
})
const route = useRoute()
const toast = useToast();
const { clientId } = storeToRefs(useAuthStore());
const orders = ref([])
const noOrders = ref(true)
const showModal = ref(false)
console.log(clientId.value)

onMounted(() => {
    getOrders(clientId.value)
})

onBeforeMount(()=> {
    getOrders(clientId.value)
})

function getOrders(clientId){
    const { data, error } = useFetch(`http://localhost:8000/api/v1/clientOrders/?id=${clientId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        if (error.value) {
            toast.add('Error fetching orders')
        }
        if(data.value){
            noOrders.value = false
            orders.value = data.value
        }
}

function toggleModal(){
    showModal.value = !showModal.value
}
</script>~/stores/auth