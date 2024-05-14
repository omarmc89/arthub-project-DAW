<template>
    <OrderLinesSkeleton v-if="pendingFetch" />
    <section v-if="!pendingFetch" class="flex flex-col w-full p-4 items-center">
        <h2 class="text-2xl uppercase font-bold text-slate-800 text-center mb-8 flex flex-col items-center">
            Order ID: 
            <span class="text-lg">{{ orderId }}</span>
        </h2>
        <table class="table w-full whitespace-nowrap">
            <thead>
                <tr class="bg-transparent">
                    <th class="column px-6 py-3 text-center text-md font-medium text-gray-500 uppercase tracking-wider w-1/2 "></th>
                    <th class="column px-6 py-3 text-center text-md font-medium text-gray-500 uppercase tracking-wider w-1/4 "></th>
                    <th class="column px-6 py-3 text-center text-md font-medium text-gray-500 uppercase tracking-wider w-1/4"></th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(orderLine, index) in orderLines" :key="index">
                    <td class="py-4 whitespace-nowrap text-center flex items-center justify-center">
                        <img class="image rounded-xl object-cover object-center w-32 h-32" :src="orderLine.artwork.image_url" alt="Artwork orderline image"/>
                    </td>
                    <td class="py-4 whitespace-nowrap text-center">{{ orderLine.artwork.title }}</td>
                    <td class="py-4 whitespace-nowrap text-center">{{ orderLine.artwork.price }} €</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup>
const props = defineProps({
  orderId: String,
});

const { orderId } = toRefs(props);
const runtimeConfig = useRuntimeConfig()
const pendingFetch = ref(true)
const orderLines = ref([])

onMounted(() => {
    getOrdersLines(orderId.value)
})

async function getOrdersLines(orderId){
    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}orderLinesByOrder/?order_id=${orderId}`, {
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
            pendingFetch.value = false
            orderLines.value = data.value
        }
}

</script>

<style scoped>

@media (width <= 650px) {
  .table{
    width: 80%;
  }

  .image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
  }

  .column {
    padding: 0.2rem;
  }

}
</style>