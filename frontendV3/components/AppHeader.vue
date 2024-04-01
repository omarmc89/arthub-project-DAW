<template>
    <nav class="flex flex-col items-center justify-between w-full px-4 z-10">
        <section class="flex flex-col w-full h-auto">
            <article class="flex justify-end w-full" >
                <ul class="flex flex-row gap-x-4 items-center justify-end">
                    <li v-if="!authenticated" class="app-link registerBtn hover:underline" style="float: right">
                        <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                    <li v-if="!authenticated" class="app-link loginBtn hover:underline" style="float: right">
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li v-if="authenticated" class="app-link loginBtn hover:underline" style="float: right">
                        <nuxt-link @click="logout">Logout</nuxt-link>
                    </li>
                </ul>
            </article>
            <article class="flex text-slate-900 items-center justify-center w-full h-auto py-8">
                <a class="no-underline" href="#">
                    <span class="title text-center text-2xl pl-2 ">ArtHUB</span>
                </a>
            </article>

            <article class="w-full flex-grow items-center justify-center" id="nav-content">
                <section class="flex w-full flex-row gap-x-6 items-center justify-around">
                    <NuxtLink class="app-link text-center w-full p-2" style="float: right" to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-2" style="float: right" to="/artworks">
                        Artworks
                    </NuxtLink>
                    <NuxtLink class="app-link text-center w-full p-2" style="float: right" to="/artists">
                        Artists
                    </NuxtLink>
                    <NuxtLink v-if="userLogged" class="app-link text-center w-full p-2" style="float: right" to="/dashboard">
                        Dashboard
                    </NuxtLink>
                </section>
            </article>
        </section>
    </nav>
</template>


<script setup>

import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import { ref } from 'vue';

const router = useRouter();


const { logout } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const { userLogged } = storeToRefs(useAuthStore()); // make userLogged state reactive with storeToRefs
const route = useRoute();
const path = ref(route.path);

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

.app-link {
    font-family: 'system-ui';
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: #000;
}

.router-link-active {
  @apply border-b-4 border-slate-900;
}

</style>