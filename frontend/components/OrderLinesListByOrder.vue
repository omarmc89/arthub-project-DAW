<template>
    <OrderLinesSkeleton v-if="pendingFetch" />
    <section v-if="!pendingFetch" class="flex flex-col w-full p-4">
        <h2 class="text-2xl uppercase font-bold text-slate-800 text-center mb-8 flex flex-col items-center">
            Order ID: 
            <span class="text-lg">{{ orderId }}</span>
        </h2>
        <table class="w-full whitespace-nowrap">
            <thead>
                <tr class="bg-gray-100">
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Image</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Title</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Price</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(orderLine, index) in orderLines" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <img class="rounded-xl object-cover object-center w-32 h-32" :src="orderLine.artwork.image_url" alt="Artwork orderline image"/>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ orderLine.artwork.title }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ orderLine.artwork.price }} €</td>
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