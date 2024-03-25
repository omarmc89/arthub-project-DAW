<template>
    <nav class="sticky flex flex-col items-center justify-between flex-wrap p-6 w-full z-10">
        <div class="flex items-center flex-no-shrink mb-4">
            <a class="no-underline" href="#">
                <span class="title text-2xl pl-2">ArtHUB</span>
            </a>
        </div>
    
        <div class="block lg:hidden">
            <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
    
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
            <ul class="flex flex-row gap-x-6 lg:flex justify-end flex-1 items-center">
                <li v-if="!authenticated" class="app-link homeBtn p-2" style="float: right">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li v-if="!authenticated" class="app-link registerBtn" style="float: right">
                    <NuxtLink to="/register">Register</NuxtLink>
                </li>
                <li v-if="!authenticated" class="app-link loginBtn" style="float: right">
                    <NuxtLink to="/login">Login</NuxtLink>
                </li>
                <li v-if="authenticated" class="app-link loginBtn" style="float: right">
                    <nuxt-link @click="logout">Logout</nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import { ref } from 'vue';

const router = useRouter();


const { logout } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs


const isNavOpen = ref(false);

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value;
};
const userLogout = () => {
  logout();
  router.push('/login');
};
</script>

<style scoped>
@font-face {
    font-family: 'Afacad';
    src: url('~/assets/fonts/Afacad.ttf') format('truetype-variations');
}

.title{
    font-family: 'Afacad';
    font-weight: 900;
    font-size: 4.5rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
}

.router-link-active {
  @apply border-b-4 bg-slate-400 p-2 rounded-lg;
}

</style>