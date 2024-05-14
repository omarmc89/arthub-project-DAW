<template>
    <OrdersSkeleton v-if="pendingFetch" />
    <section v-if="!pendingFetch" class="flex flex-col items-center w-full">
        <h2 class="text-2xl uppercase font-bold bg-gray-700 text-gray-100 text-center py-4 w-full rounded-t-xl">Orders</h2>
        <table class="min-w-full text-center">
            <thead class="w-full">
                <tr class="bg-gray-700 text-gray-100 w-full">
                    <th class="px-4 py-3 text-center text-lg font-bold uppercase tracking-wider">Num.</th>
                    <th class="px-4 py-3 text-center text-lg font-bold uppercase tracking-wider">Date</th>
                    <th class="px-4 py-3 text-center text-lg font-bold uppercase tracking-wider">Total</th>
                    <th class="px-4 py-3 text-center text-lg font-bold uppercase tracking-wider text-center">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-gray-700 text-gray-100 w-full">
                <tr v-for="(order, index) in orders" :key="index" class="table-rows">
                    <td class="row py-1 border-gray-200 whitespace-nowrap">{{ index + 1 }}</td>
                    <td class="row py-1 border-gray-200 whitespace-nowrap">{{ formatDate(order.created_at) }}</td>
                    <td class="row py-1 border-gray-200 whitespace-nowrap">{{ order.total }} €</td>
                    <td class="row py-1 border-gray-200 whitespace-nowrap">
                        <div class="buttons flex flex-row items-center justify-center gap-2">
                            <button class="text-indigo-300 hover:bg-indigo-300 hover:text-indigo-900 hover:rounded-xl flex items-center justify-center p-2" @click="setOrderLines(order.id)">
                                <Icon class="w-10 h-10" name="line-md:check-list-3-twotone"></Icon>
                            </button>
                            <button class="text-red-600 hover:text-red-900 flex items-center justify-center hover:bg-red-300 hover:rounded-xl p-2" @click="setDeleteOrder(order.id)">
                                <Icon class="w-10 h-10" name="line-md:remove"/>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <UModal v-model="deleteModal">
      <UCard class="flex flex-col w-full items-center justify-center" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-100'}">
        <template #header>
          <h3 class="h-8 text-xl font-bold drop-shadow-lg text-slate-900">Confirmation</h3>
        </template>
        <p class="h-32 text-slate-800 text-center">Are you sure to delete Order?</p>
        <button class="w-full bg-red-400 text-slate-200 text-center rounded-xl h-12 text-xl font-bold hover:text-slate-900 hover:bg-red-600" @click="deleteOrder(orderIdToDelete)">Borrar</button>
        <template #footer>
          <small class="h-8 text-xl text-red-400">Delete is not reversible</small>
        </template>
      </UCard>
    </UModal>

    <UModal v-model="orderLinesModal">
        <OrderLinesListByOrder :orderId="orderIdToDelete"/>
        <button class="bg-slate-800 text-slate-200 text-center rounded-xl text-lg font-bold hover:text-slate-900 hover:bg-slate-200 p-2 m-2" @click="toggleModalOrderlines()">Close</button>

    </UModal>
</template> 

<script setup>
defineProps({
  clientId : String,
})

import { useAuthStore } from '~/stores/auth';


const authStore = useAuthStore()
const toast = useToast();
const { clientId } = storeToRefs(useAuthStore());
const orders = ref([])
const noOrders = ref(true)
const deleteModal = ref(false)
const orderLinesModal = ref(false)
const runtimeConfig = useRuntimeConfig()
const pendingFetch = ref(true)
const orderIdToDelete = ref(null)
const orderErased = ref(0)


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' });
};

onMounted(() => {
    getOrders(authStore.clientId)
})

async function getOrders(clientId){
    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}clientOrders/?id=${clientId}`, {
        method: 'GET',
        lazy: false,
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
            pendingFetch.value = false
        }
}

async function deleteOrder(orderId) {
  try {
    await useFetch(`${runtimeConfig.public.baseUrl}orders/${orderId}/`, {
      method: 'DELETE'
    } )
    orderErased.value += 1
    deleteModal.value = false
    pendingFetch.value = true
    orderIdToDelete.value = null
    useScrollToTop()
    toast.add({ title: 'Order deleted', timeout: 1500, color:"red"})

  } catch (error) {
    console.error('Error deleting or creating order:', error);
  }
}

function setDeleteOrder(orderId) {
    orderIdToDelete.value = orderId;
    toggleModal(deleteModal);
}

function setOrderLines(orderId){
    orderIdToDelete.value = orderId;
    toggleModalOrderlines()
}

watch(orderErased, (newValue, oldValue) => {
  if (newValue > oldValue) {
    getOrders(authStore.clientId)
  }
})

function toggleModal(modal){
    modal.value = !modal.value
}

function toggleModalOrderlines(){
    orderLinesModal.value = !orderLinesModal.value
}

function parseId(id){
    return id.split('-')[4]
}

function parseDate(date){
    return date.split(' ')[0]
}

</script>

<style scoped>

.table-rows:last-child {

  .row:first-child {
      border-bottom-left-radius: 10px;
  }
  .row:last-child {
      border-bottom-right-radius: 10px;
  }
}


@media (width <= 650px) {
  .id{
    display: none;
  }

  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
  }

  .buttons {

    gap: 0.2rem;
    button {
      padding: 0.2rem;
    }
  }

}
</style>