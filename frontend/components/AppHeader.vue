<template>
    <img src="~/public/logo.svg" alt="hero" class="top-logo absolute w-32 h-32 object-cover object-center rounded-xl top-4 left-4" />
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10 mt-2">
        <section class="flex flex-col w-full h-auto items-center">
            <article class="top-nav flex justify-end w-full px-8" >
                <ul class="top-nav flex flex-row gap-x-4 items-center justify-end">
                    <li v-if="!authenticated" class="app-link-top  p-1 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                    <li v-if="!authenticated" class="app-link-top p-1 hover:bg-green-300 hover:rounded-lg">
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg">
                        <NuxtLink to="/profile">Profile</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg hover:cursor-pointer">
                        <NuxtLink type="button" @click="userLogout">Logout</NuxtLink>
                    </li>
                    <li v-if="authStore.userType === 'client'" class="app-link-top p-1 hover:bg-sky-300 hover:rounded-lg hover:cursor-pointer">
                        <div class="flex gap-3 items-center justify-center">
                            <UChip :text="cartStore.totalCounts === 0 ? '' : cartStore.totalCounts" :show="cartStore.totalCounts === 0 ? false : true" color="cyan" size="xl">
                                    <button class="flex items-center justify-center" @click="toggleModal">
                                        <Icon class="icon h-8 w-8" name="emojione:shopping-cart"/>
                                     </button>
                            </UChip>
                        </div>
                    </li>
                </ul>
            </article>
            <article class="flex text-slate-900 items-center justify-center w-full h-auto py-8">
                <a class="no-underline" href="#">
                    <p class="title flex flex-row gap-0 items-center text-center justify-center text-2xl py-2">
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-purple-400 hover:lowercase">A</span>
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-pink-400 hover:lowercase">r</span>
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-green-400 hover:lowercase">t</span>
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-shark-400 hover:lowercase">H</span>
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-cyan-400 hover:lowercase">U</span>
                        <span class="letter text-center hover:-translate-y-2 hover:scale-125 hover:text-orange-400 hover:lowercase">B</span>
                    </p>
                </a>
            </article>
            <div class="md:hidden">
                <UDropdown :items="items" :popper="{ arrow: true }">
                    <UButton color="black" label="MENU" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </div>
            <article class="w-full flex-grow items-center justify-center hidden md:block" id="nav-content">
                <section class="nav-links flex w-full flex-row gap-x-6 items-center justify-around">
                    <NuxtLink id="app-link" class="app-link text-center w-full p-1" to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-1" to="/artworks">
                        Artworks
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-1" to="/artists">
                        Artists
                    </NuxtLink>
                    <NuxtLink v-if="userLogged" class="app-link text-center w-full p-1" to="/dashboard">
                        Dashboard
                    </NuxtLink>
                </section>
            </article>
        </section>
    </nav>

    <UModal v-model="checkoutModal">
      <UCard class="flex flex-col w-full items-center justify-center" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-100'}">
        <template #header>
            <div class="flex items-center justify-between">
            <h3 class="h-8 text-xl font-bold drop-shadow-lg text-slate-900">Cart</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="checkoutModal=false" />
          </div>
        </template>
        <CheckoutModal v-if="cartStore.totalCounts > 0" :items="cartStore.groupedItems" :addresses="addresses"/>
            <div class="flex flex-col items-center gap-4">
                <p v-if="cartStore.totalCounts == 0" class="text-slate-900 text-xl text-center uppercase">Cart is empty</p>
                <Icon v-if="cartStore.totalCounts == 0" class="text-center w-24 h-24" name="streamline-emojis:cactus-2"/>
            </div>
        <div class="relative">
            <h2 class="text-center text-xl font-bold mt-10">Order Address:</h2>
            <Icon v-if="pendingAdresses" class="icon text-center w-full" name="svg-spinners:bars-scale"/>
            <button v-if="!pendingAdresses" @click="toggleDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                {{ selectedOption ? selectedOption : 'Select an address' }}
                <svg v-if="dropdownOpen" class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 12l-6-6H4l6 6 6-6h2l-6 6 6 6h-2l-6-6z" clip-rule="evenodd" />
                </svg>
            </button>
            <div>
                <div v-if="dropdownOpen" class="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md">
                    <div v-for="(address, index) in addresses" :key="index" @click="selectOption(address.id, address.city)" class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">{{ address.street }}</div>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="flex flex-col items-center justify-around gap-4">
                <div class="flex flex-row items-center justify-around gap-10">
                        <p v-if="cartStore.totalPrice" class="bg-pink-400 rounded-xl px-2 text-lg text-slate-800 flex font-bold flex items-center hover:bg-purple-400">TOTAL:
                            <span class="font-normal text-xl p-2">
                                {{ cartStore.totalPrice }}€
                            </span>
                        </p>                
                </div>
                <div clas="flex flex-row gap-10">
                    <button class="bg-slate-800 text-slate-200 text-center rounded-xl h-min-14 text-lg font-bold hover:text-slate-900 hover:bg-green-400 px-4 mr-8" @click="createCheckoutSession()">Checkout</button>
                    <button class="bg-slate-800 text-slate-200 text-center rounded-xl text-lg font-bold hover:text-slate-900 hover:bg-green-400 px-4" @click="cartStore.clearCart()">Empty Cart</button>
                </div>
            </div>
        </template>
      </UCard>
    </UModal>
</template>


<script setup>

import { storeToRefs } from 'pinia'; 
import { useAuthStore, useCartStore } from '~/stores/auth';
import { ref } from 'vue';

const runtimeConfig = useRuntimeConfig()
const router = useRouter();

const cartStore = useCartStore();
const authStore = useAuthStore()
const { logout } = useAuthStore();
const { authenticated, userLogged, clientId  } = storeToRefs(useAuthStore()); 
const checkoutModal = ref(false);
const addresses = ref([]);
const address_selected_id = ref('')
const orderCompleted = ref(false)
const toast = useToast();

const dropdownOpen = ref(false);
const selectedOption = ref(null);
const pendingAdresses = ref(true);

const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

const selectOption = (optionId, optionValue) => {
    address_selected_id.value = optionId
    selectedOption.value = optionValue
    dropdownOpen.value = false;
};


const items = [
[{
    label: 'Home',
    icon: 'i-heroicons-home',
    click: () => {
      navigateTo('/')
    }
  }, {
    label: 'Artworks',
    icon: 'i-heroicons-photo',
    click: () => {
        navigateTo('/artworks')
    }
  }], [{
    label: 'Artists',
    icon: 'i-heroicons-user-group',
    click: () => {
        navigateTo('artists')

    }
  }, {
    label: 'Dashboard',
    icon: 'i-heroicons-table-cells',
    click: () => {
        navigateTo('/dashboard')

    }
  }]
]

onBeforeMount(() => {
    getAddressees();
});

onMounted(() => {
    getAddressees();
});

const toggleModal = () => {
    pendingAdresses.value = true
    checkoutModal.value = !checkoutModal.value;
    getAddressees();
    pendingAdresses.value = false
};
const userLogout = () => {
  logout();
  toast.add({ title: 'Logout successful. Redirecting to Home', timeout: 1500, color:"red", callback:() => navigateTo('/') })
};

function getAddressees(){
      const { data, error } = useFetch(`${runtimeConfig.public.baseUrl}addresses/?id=${authStore.clientId}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
          if (error.value) {
              toast.add('Error fetching orders')
          }
          if(data.value){
              addresses.value = data.value
              pendingAdresses.value = false
          }
    }

async function createOrderAndOrderLines(){
    const artworks = cartStore.groupedItems
    const client_id = authStore.clientId
    const address_id = address_selected_id.value

    const { data, error } = await useFetch(`${runtimeConfig.public.baseUrl}createOrderAndOrderLines/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
        'artworks': artworks,
        'client_id': client_id,
        'address_id': address_id,
        'total': cartStore.totalPrice
        }
    })
        if (error.value) {
            toast.add('Error processing order')
        }
        if(data.value){
            orderCompleted.value = true
            cartStore.clearCart()
            toast.add('Order Complete!')
        }
}

function createCheckoutSession(){
    const artworks = cartStore.groupedItems

    const { data, error } = useFetch(`${runtimeConfig.public.baseUrl}stripeCheckout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
        'artworks': artworks,
        'total': cartStore.totalPrice,
        'email': authStore.userEmailLogged
        }
    })
        if (error.value) {
            toast.add('Error processing payment')
        }
        if(data.value){
            createOrderAndOrderLines()
            navigateTo(data.value, { external: true })
        }
}
    
</script>

<style scoped>
@font-face {
    font-family: 'Afacad';
    src: url('~/assets/fonts/Afacad.ttf') format('truetype-variations');
}

.title{
    font-family: 'Afacad';
    font-weight: 900;
    font-size: 5.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
}

.app-link,
.app-link-top {
    font-weight: 700;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.5s;
}

.app-link-top{
    transition: all ease-in-out 0.2s;
    font-size: 1.2rem;
}

.app-link:hover{
    font-family: 'Afacad';
    letter-spacing: 1rem;
    font-weight: 500;
    font-stretch: expanded;
}

.nav-links .app-link:first-child:hover{
  background-color: #a78bfa !important;
  border-radius: 10px;
}
.nav-links .app-link:nth-child(2):hover{
  background-color: #f472b6 !important;
  border-radius: 10px;

}
.nav-links .app-link:nth-child(3):hover{
  background-color: #2dd4bf !important;
  border-radius: 10px;

}
.nav-links .app-link:nth-child(4):hover{
  background-color: #facc15 !important;
  border-radius: 10px;

}

@media (width <= 650px) {
  .top-nav{
    justify-content: center
  }

  .top-logo {
    display: none;
  }

  .title{
    margin-left: 1rem;
    font-size: 5rem;
  }
}


.router-link-active {
  @apply border-b-4 border-slate-900;
  @apply pointer-events-none;
}

</style>